import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Cusmstyle } from './style';
import { TableProps } from './props';
import EnhancedTableBody from './tableRow';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import { NoDataFound } from '../noDataFound';
import * as excelJS from 'exceljs';
import { saveAs } from 'file-saver';
import moment from 'moment';
import { TableHeader } from './tableHeader';
import VariantHeaderComponent from './variantHeaderComponent';
import { AlertBox } from '../alertBox';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import boxShadow from '../../assets/boxShadow.svg';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog   from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
export default function EnhancedTable({
  Header,
  dataList,
  tableData,
  setSelectedCheckbox,
  selectedCheckbox,
  checkboxHandleChange,
  handleSwitch,
  switchList,
  SelectAll,
  tableMinWidth,
  tableMinHeight,
  tableMaxHeight,
  tableMaxWidth,
  tableName,
  paddingAll,
  padding,
  marginAll,
  margin,
  HeaderComponent,
  isSelectedAll,
  dense,
  headerOptions,
  cellOptions,
  rowOptions,
  tableBorderRadius,
  tableBackground,
  noDataFound,
  paginationOption,
  stickyOptions,
  alertOptions,
}: TableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    paginationOption?.rowPerPage ?? 5
  );
  const [order, setOrder] = React.useState<'asc' | 'desc' | undefined>('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selectedPdfFields, setSelectedPdfFields] = React.useState<
    Array<string>
  >([]);
  //temp alert data
  const [tempAlertData, setTempAlertData] = React.useState<any>();
  const [currentDownloadOption, setCurrentDownloadOption] = React.useState<string>('downloadOptions');
  const [downloadModal, setDownloadModal] = React.useState(false);

  //Download Modal Open
  const handleCloseDownloadModal = (key: string) => {
    switch (key) {
      case 'downloadExcel':
        setDownloadModal(false);
        setCurrentDownloadOption('downloadOptions');
        generateExcel();
        break;
      case 'pdfOptions':
        setCurrentDownloadOption('pdfOptions');
        break;
      case 'pdfLandscape':
        setCurrentDownloadOption('filedListLandscape');
        break;
      case 'pdfPortrait':
        setCurrentDownloadOption('filedListPortrait');
        break;
      case 'downloadPDF':
        generatePDF(
          currentDownloadOption === 'filedListLandscape'
            ? 'landscape'
            : 'portrait'
        );
        setDownloadModal(false);
        setCurrentDownloadOption('downloadOptions');
        break;
      default:
        setDownloadModal(false);
        setCurrentDownloadOption('downloadOptions');
        break;
    }
  };

  //static data for download modal open
  const downloadOptionList: any = {
    downloadOptions: [
      {
        icon: '',
        text: 'PDF',
        nextOption: () => handleCloseDownloadModal('pdfOptions'),
      },
      {
        icon: '',
        text: 'Excel',
        nextOption: () => handleCloseDownloadModal('downloadExcel'),
      },
    ],
    pdfOptions: [
      {
        icon: '',
        text: 'Download PDF (Landscape)',
        nextOption: () => handleCloseDownloadModal('pdfLandscape'),
      },
      {
        icon: '',
        text: 'Download PDF (Portrait)',
        nextOption: () => handleCloseDownloadModal('pdfPortrait'),
      },
    ],
    filedListLandscape: [
      {
        icon: '',
        text: 'Select Fields',
        nextOption: () => handleCloseDownloadModal('pdfPortrait'),
      },
    ],
    filedListPortrait: [
      {
        icon: '',
        text: 'Select Fields',
        nextOption: () => handleCloseDownloadModal('pdfPortrait'),
      },
    ],
  };
  //switch box set all selected state
  const selectAllCheckbox = (data: any, e: any) => {
    alertOptions?.setAlertOpen(true);
    setTempAlertData({ data, state: !e.target.checked });
  };

  //Autocomplete onChange method
  const handlePdfFliedChange = (data: Array<any>, event: any) => {
    setSelectedPdfFields(data);
  };

  //get Table data string formate
  const getTableData = (filter = false): any => {
    if (filter) {
      return dataList?.map((Celldata: any, rows: number) => {
        return tableData
          ?.filter((val: any) => selectedPdfFields?.includes(val?.name))
          .map((val: any, i: number) => {
            switch (val?.type?.[0]) {
              case 'INCREMENT':
                return Celldata?.id;
              case 'CHECKBOX':
                return selectedCheckbox?.includes(Celldata?.id);
              case 'TEXT':
                return Celldata?.[val.name];
              case 'SWITCH':
                return switchList?.includes(Celldata?.id)
                  ? val?.switchText?.[0]?.label_2
                  : val?.switchText?.[0]?.label_1;
              case 'LABEL':
                return Celldata[val.name]?.label;
              case 'ICON_WITH_LABEL':
                return Celldata[val.name]?.label;
              case 'ICON_WITH_TEXT':
                return Celldata[val.name]?.label;
              case 'PROGRESS':
                return Celldata[val.name];
              case 'IMAGE_WITH_LABEL':
                return Celldata[val.name]?.label;
              case 'IMAGE_WITH_PROFILES':
                return Celldata[val.name]
                  ?.map(({ label }: any) => label)
                  .toString();
              case 'PERFORMANCE':
                return Celldata[val.name];
              case 'AVATAR_NAME':
                return Celldata[val.name]
                  ?.map(({ name, label }: any) => name + ' - ' + label)
                  .toString();
              case 'STAR_RATING':
                return Celldata[val.name];
              case 'GROWTH':
                return Celldata[val.name]?.value;
              case 'DATE':
                return moment(Celldata[val.name]).format(val.format);
              case 'ACTION':
                return '';
              case 'LINK':
                return val?.label;
              case 'CUSTOM':
                return '';
              default:
                return Celldata[val.name];
            }
          });
      });
    } else {
      return dataList?.map((Celldata: any, rows: number) => {
        return tableData?.map((val: any, i: number) => {
          switch (val?.type?.[0]) {
            case 'INCREMENT':
              return Celldata?.id;
            case 'CHECKBOX':
              return selectedCheckbox?.includes(Celldata?.id);
            case 'TEXT':
              return Celldata?.[val.name];
            case 'SWITCH':
              return switchList?.includes(Celldata?.id)
                ? val?.switchText?.[0]?.label_2
                : val?.switchText?.[0]?.label_1;
            case 'LABEL':
              return Celldata[val.name]?.label;
            case 'ICON_WITH_LABEL':
              return Celldata[val.name]?.label;
            case 'ICON_WITH_TEXT':
              return Celldata[val.name]?.label;
            case 'PROGRESS':
              return Celldata[val.name];
            case 'IMAGE_WITH_LABEL':
              return Celldata[val.name]?.label;
            case 'IMAGE_WITH_PROFILES':
              return Celldata[val.name]
                ?.map(({ label }: any) => label)
                .toString();
            case 'PERFORMANCE':
              return Celldata[val.name];
            case 'AVATAR_NAME':
              return Celldata[val.name]
                ?.map(({ name, label }: any) => name + ' - ' + label)
                .toString();
            case 'STAR_RATING':
              return Celldata[val.name];
            case 'GROWTH':
              return Celldata[val.name]?.value;
            case 'DATE':
              return moment(Celldata[val.name]).format(val.format);
            case 'ACTION':
              return '';
            case 'LINK':
              return val?.label;
            case 'CUSTOM':
              return '';
            default:
              return Celldata[val.name];
          }
        });
      });
    }
  };

   //get Table Header data string formate
  const getHeader = (filter = false) => {
    if (filter) {
      return Header?.filter((val: any) =>
        selectedPdfFields?.includes(val?.id)
      ).map((val: any) => val.id);
    } else {
      return Header?.map((val: any) => val.id);
    }
  };

  // const tableDataClone2 = dataList?.map((Celldata: any, rows: number) => {
  //   return tableData?.map((val: any, i: number) => {
  //     switch (val?.type?.[0]) {
  //       case 'INCREMENT':
  //         return {[val.name]:Celldata?.id};
  //       case 'CHECKBOX':
  //         return {[val.name]: selectedCheckbox?.includes(Celldata?.id)};
  //       case 'TEXT':
  //         return Celldata?.[val.name];
  //       case 'SWITCH':
  //         return switchList?.includes(Celldata?.id)
  //           ? val?.switchText?.[0]?.label_2
  //           : val?.switchText?.[0]?.label_1;
  //       case 'LABEL':
  //         return Celldata[val.name]?.label;
  //       case 'ICON_WITH_LABEL':
  //         return Celldata[val.name]?.label;
  //       case 'ICON_WITH_TEXT':
  //         return Celldata[val.name]?.label;
  //       case 'PROGRESS':
  //         return Celldata[val.name];
  //       case 'IMAGE_WITH_LABEL':
  //         return Celldata[val.name]?.label;
  //       case 'IMAGE_WITH_PROFILES':
  //         return Celldata[val.name]?.map(({ label }: any) => label).toString();
  //       case 'PERFORMANCE':
  //         return Celldata[val.name];
  //       case 'AVATAR_NAME':
  //         return Celldata[val.name]?.map(
  //           ({ name, label }: any) => name + ' - ' + label
  //         );
  //       case 'STAR_RATING':
  //         return Celldata[val.name];
  //       case 'GROWTH':
  //         return Celldata[val.name]?.value;
  //       case 'DATE':
  //         return moment(Celldata[val.name]).format(val.format).toString();
  //       case 'ACTION':
  //         return '';
  //       case 'LINK':
  //         return val?.label;
  //       case 'CUSTOM':
  //         return '';
  //       default:
  //         return Celldata[val.name];
  //     }
  //   });
  // });

  //Excel Download Function --- START

  const generateExcel = () => {
    const workbook = new excelJS.Workbook();
    workbook.creator = 'test';
    workbook.lastModifiedBy = 'test';
    workbook.created = new Date();
    workbook.modified = new Date();

    let sheet: any = workbook.addWorksheet('TABLE');
    // const header = Header?.map((val: any) => val.id);
    sheet.getRow(1).values = getHeader();

    sheet.columns = Header?.map((val: any) => ({ key: val.id, width: 35 }));

    sheet.addRows(getTableData());

    const row = sheet.getRow(1);
    row.eachCell((cell: any, rowNumber: any) => {
      sheet.getColumn(rowNumber).alignment = {
        vertical: 'middle',
        horizontal: 'center',
      };
      sheet.getColumn(rowNumber).font = { size: 14, family: 2 };
    });

    workbook.xlsx.writeBuffer().then(function (buffer: any) {
      const blob = new Blob([buffer], { type: 'application/xlsx' });
      saveAs(blob, tableName + '.xlsx' ?? 'TableData' + '.xlsx');
    });
  };
  //PDF Functions
  const generatePDF = (
    orientation: 'landscape' | 'portrait' | 'p' | 'l' | undefined
  ) => {
    const doc = new jsPDF({
      orientation: orientation,
      format: 'a2',
    });
    autoTable(doc, {
      head: [getHeader(true)],
      body: getTableData(true),
      tableWidth: 'wrap',
      styles: { minCellWidth: 20, overflow: 'linebreak' },
    });
    doc.save(tableName + '.pdf' ?? 'TableData' + '.pdf');
  };
  //Download PDF and Excel
  const handelDownload = () => {
    setDownloadModal(true);
  };
  //Excel Download Function --- END

  //Columns Sorting Function --- START
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };
  //page row change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === 'desc';
    setOrder(isAsc ? 'asc' : 'desc');
    setOrderBy(property);
  };
  const descendingComparator = (a: any, b: any, orderBy: any) => {
    if (
      typeof a?.[orderBy] !== 'object' &&
      typeof b?.[orderBy] !== 'object' &&
      typeof a?.[orderBy] !== 'number' &&
      typeof b?.[orderBy] !== 'number'
    ) {
      if (b?.[orderBy]?.toLowerCase() < a?.[orderBy]?.toLowerCase()) {
        return -1;
      }
      if (b?.[orderBy]?.toLowerCase() > a?.[orderBy]?.toLowerCase()) {
        return 1;
      }
    }
    if (typeof a?.[orderBy] === 'number' && typeof b?.[orderBy] === 'number') {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
    }
    return 0;
  };
  const getComparator = (order: any, orderBy: any) => {
    return order === 'asc'
      ? (a: any, b: any) => descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -descendingComparator(a, b, orderBy);
  };
  const stableSort = (array: any, comparator: any) => {
    const removeFormValuesKey = array.map((it: any) => it);
    const stabilizedThis = removeFormValuesKey.map((el: any, index: any) => [
      el,
      index,
    ]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: any) => el[0]);
  };

  const createSortHandler = (property: any, event: any) => {
    handleRequestSort(event, property);
  };

  const rowsPer = [
    ...(paginationOption?.rowsPerPageOptions ?? []),
    { label: 'All', value: dataList?.length },
  ];
  //Columns Sorting Function --- END

  //Alert Box Function
  const handleAlertClose = (status: boolean) => {
    if (status) {
      console.log(
        '🚀 ~ file: table.tsx:226 ~ handleAlertClose ~ tempAlertData:',
        tempAlertData
      );

      if (tempAlertData?.id && handleSwitch) {
        handleSwitch(
          tempAlertData?.id,
          tempAlertData?.rowData,
          tempAlertData?.event
        );
        setTempAlertData({});
      }

      if (tempAlertData?.data) {
        let ids = dataList?.map(({ id }: any) => id);
        if (SelectAll) {
          SelectAll(ids, tempAlertData?.state);
        }
        setTempAlertData({});
      }
    }
    alertOptions?.setAlertOpen(false);
  };

  const handleSwitchAlert = (
    id: string | number,
    rowData: Array<any>,
    event: any
  ) => {
    if (alertOptions?.isEnable) {
      alertOptions?.setAlertOpen(true);
      setTempAlertData({ id, rowData, event });
    } else {
      if (handleSwitch) {
        handleSwitch(id, rowData, event);
      }
    }
  };

  //Sticky Border Styles
  console.log(
    '🚀 ~ file: table.tsx:257 ~ stickyOptions?.stickyLeft?.[stickyOptions?.stickyLeft?.length-1]:',
    stickyOptions?.stickyLeft?.[stickyOptions?.stickyLeft?.length - 1]
  );
  const stickyBorderStyle = {
    [`& .${
      stickyOptions?.stickyLeft?.[stickyOptions?.stickyLeft?.length - 1]
    }`]: {
      borderRight: '10px solid transparent !important',
      borderImage: `url(${boxShadow}) 30 !important`,
    },
    [`& .${
      stickyOptions?.stickyRight?.[stickyOptions?.stickyRight?.length - 1]
    }`]: {
      borderLeft: '10px solid transparent !important',
      borderImage:
        'linear-gradient(to left,  rgba(107, 102, 102, .5), transparent ) 30 !important',
    },
  };
  return (
    <Box
      sx={{
        margin: marginAll,
        marginTop: margin?.[0],
        marginRight: margin?.[1],
        marginBottom: margin?.[2],
        marginLeft: margin?.[3],
        padding: paddingAll,
        paddingTop: padding?.[0],
        paddingRight: padding?.[1],
        paddingBottom: padding?.[2],
        paddingLeft: padding?.[3],
        backgroundColor: tableBackground,
        maxWidth: tableMaxWidth,
      }}
    >
      <Paper
        sx={{
          ...Cusmstyle.tablePaper,
          backgroundColor: tableBackground,
          padding: HeaderComponent?.styles?.padding,
          margin: HeaderComponent?.styles?.margin,
        }}
        className={'TABLE_PAPER'}
      >
        <Box sx={Cusmstyle.titleContainer} className={'TABLE_BOX'}>
          <Box>
            <Typography className={'TABLE_TITLE'} sx={Cusmstyle.tableTitle}>
              {tableName}
            </Typography>
          </Box>
          <Box flexGrow={1}>
            <VariantHeaderComponent
              selectedCheckbox={selectedCheckbox}
              SelectAll={SelectAll}
              HeaderComponent={HeaderComponent}
              handelDownload={handelDownload}
              openDownloadModal={downloadModal}
            />
          </Box>
        </Box>
        <TableContainer
          className={'TABLE_CONTAINER'}
          sx={{
            minHeight: tableMinHeight,
            maxHeight: tableMaxHeight,
            borderRadius: tableBorderRadius,
            position: 'relative',
          }}
        >
          {dataList?.length > 0 ? (
            <Table
              stickyHeader={stickyOptions?.stickyHeader}
              sx={{
                ...Cusmstyle.tableContainer,
                minWidth: tableMinWidth,
                ...stickyBorderStyle,
              }}
              aria-labelledby="tableTitle"
              size={dense}
              className={'TABLE'}
            >
              <TableHeader
                Header={Header}
                selectAllCheckbox={selectAllCheckbox}
                isSelectedAll={isSelectedAll}
                headerOptions={headerOptions}
                createSortHandler={createSortHandler}
                order={order}
                orderBy={orderBy}
                stickyOptions={stickyOptions}
              />
              <EnhancedTableBody
                Body={stableSort(dataList, getComparator(order, orderBy)).slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )}
                TableData={tableData}
                handleSwitch={handleSwitchAlert}
                switchList={switchList}
                checkboxHandleChange={checkboxHandleChange}
                setSelectedCheckbox={setSelectedCheckbox}
                selectedCheckbox={selectedCheckbox}
                cellOptions={cellOptions}
                rowOptions={rowOptions}
                stickyOptions={stickyOptions}
              />
            </Table>
          ) : (
            <NoDataFound
              fontSize={noDataFound?.fontSize}
              fontWeight={noDataFound?.fontWeight}
              color={noDataFound?.color}
              bgColor={noDataFound?.bgColor}
              text={noDataFound?.text}
              component={noDataFound?.component}
            />
          )}
        </TableContainer>
        {dataList?.length > 0 && (
          <>
            {paginationOption?.isEnable && (
              <TablePagination
                className={'TABLE_PAGINATION'}
                sx={{ alignSelf: 'flex-end' }}
                rowsPerPageOptions={rowsPer}
                component="div"
                count={dataList?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </>
        )}
      </Paper>
      <AlertBox
        title={alertOptions?.title}
        description={alertOptions?.description}
        primaryText={alertOptions?.primaryText}
        secondaryText={alertOptions?.secondaryText}
        icon={alertOptions?.icon}
        alertOpen={alertOptions?.alertOpen}
        handleAlertClose={handleAlertClose}
      />
      <Dialog
        // id="basic-menu"
        // anchorEl={anchorEl}
        open={downloadModal}
        onClose={() => handleCloseDownloadModal('')}
        //       aria-labelledby="parent-modal-title"
        // aria-describedby="parent-modal-description"
      >
        <Box sx={{ minWidth: '300px', padding: '12px 16px' }}>
          {downloadOptionList?.[currentDownloadOption]?.length > 0 &&
            downloadOptionList?.[currentDownloadOption]?.map(
              ({ icon, text, nextOption }: any, index: number) => (
                <Box key={index + 'menuList'}>
                  <MenuItem onClick={nextOption}>
                    <Stack direction={'row'} gap={'10px'}>
                      {icon && <Box>{icon}</Box>}
                      <Box>
                        <Typography>{text}</Typography>
                      </Box>
                    </Stack>
                  </MenuItem>
                  {downloadOptionList?.[currentDownloadOption]?.[0]?.text ===
                    'Select Fields' && (
                    <>
                      <Typography
                        onClick={() => setSelectedPdfFields(getHeader())}
                        sx={{
                          backgroundColor: 'rgba(0, 0, 0, 0.26)',
                          color: '#fff',
                          padding: '3px 8px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          margin: '0 5px',
                          borderRadius: '8px',
                          marginBottom: '22px',
                        }}
                      >
                        Select All
                      </Typography>
                      <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={getHeader()}
                        value={selectedPdfFields}
                        filterSelectedOptions
                        onChange={(event: any, newValue: any) =>
                          handlePdfFliedChange(newValue, event)
                        }
                        sx={{textTransform:"capitalize"}}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Selected Fields"
                            placeholder="Search..."
                          />
                        )}
                      />
                      <Typography
                        onClick={() => handleCloseDownloadModal('downloadPDF')}
                        sx={{
                          backgroundColor: '#4CAF50',
                          color: '#fff',
                          padding: '6px 8px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          borderRadius: '8px',
                          margin: '16px 0',
                        }}
                      >
                        Download PDF
                      </Typography>
                    </>
                  )}
                </Box>
              )
            )}
        </Box>
      </Dialog>
    </Box>
  );
}

EnhancedTable.defaultProps = {
  Header: [],
  dataList: [],
  tableData: [],
  setSelectedCheckbox: () => {},
  selectedCheckbox: [],
  checkboxHandleChange: () => {},
  handleSwitch: () => {},
  switchList: [],
  SelectAll: () => {},
  tableMinWidth: '100%',
  tableMinHeight: '100%',
  tableName: '',
  paddingAll: 0,
  padding: [],
  marginAll: 0,
  margin: [],
  HeaderComponent: {},
  isSelectedAll: false,
  dense: 'small',
  headerOptions: {},
  rowOptions: {},
  cellOptions: {},
  tableBackground: '',
  paginationOption: {
    isEnable: true,
    rowPerPage: 5,
    rowsPerPageOptions: [5, 10, 25],
  },
  noDataFound: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#353448',
    bgColor: '#F7F7F7',
    text: 'No Data Found!',
    // component:<>Hii</>
  },
};

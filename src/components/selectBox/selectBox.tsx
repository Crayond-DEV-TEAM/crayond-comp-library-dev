import { Avatar, Box, Grid, Icon, Typography, CheckboxProps, Checkbox } from '@mui/material';
import { SelectBoxProps } from './props';
import { styles } from './style';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import useAutocomplete from '@mui/material/useAutocomplete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BpCheckedIcon, BpIcon } from './checkboxComp';


const Root = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
  font-size: 14px;
`,
);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);


function Tag(props: any) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span style={{
        color: '#929292',
      }}>{label}</span>
      {/* <CloseIcon onClick={onDelete} /> */}
    </div>
  );
}

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#E9E9E9'
    };
  border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const CheckableBox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;
    cursor: pointer;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);

const DefaultBox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;
    cursor: pointer;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);

export default function SelectBox(props: SelectBoxProps) {
  const {
    data,
    CheckableData,
    rootStyleSx,
    checkboxIcon,
    uncheckedIcon,
    handleCheckedItem,
    checkboxWidth,
    checkboxHeight,
    defaultData,
    handleDefaultSelectChange,
    checkboxBorderRadius,
    handleChange,
  } = props;

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,

    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    // defaultValue: [data[1]],
    multiple: true,
    options: CheckableData,
    getOptionLabel: (option) => option?.title,
  });

  function BpCheckbox(props: CheckboxProps) {
    return (
      <Checkbox
        sx={{
          '&:hover': { bgcolor: 'transparent' },
          '& svg': {
            width: checkboxWidth ?? '1rem',
            height: checkboxHeight ?? '1rem',
            borderRadius: checkboxBorderRadius ?? '3px'
          }
        }}
        disableRipple
        color="default"
        checkedIcon={checkboxIcon ?? <BpCheckedIcon />}
        icon={uncheckedIcon ?? <BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
    );
  }

  const GroupItems = styled('ul')({
    padding: 0,
  });

  const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'red'
        : 'black',
  }));


  const renderDropdown = (key: string) => {
    switch (key) {
      case 'grouping':
        return (
          <Autocomplete
            id="grouped-demo"
            options={data}
            groupBy={(option) => option.year}
            getOptionLabel={(option) => option.title}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="With categories" />}
            renderGroup={(params) => (
              <li key={params.key}>
                <GroupHeader>{params.group}</GroupHeader>
                <GroupItems>{params.children}</GroupItems>
              </li>
            )}
          />
        )
      case 'checkbox':
        console.log(CheckableData, 'CheckableData');

        return (
          <>
            <div {...getRootProps()}>
              <InputWrapper ref={setAnchorEl} sx={{ display: 'flex', alignItems: 'center' }}
                className={focused ? 'focused' : ''}>
                {(value as typeof CheckableData)?.map((option: any, index: number) => (
                  <Typography sx={styles?.checkedValue} key={index}>{`${option.title} ,`}</Typography>
                ))}
                <input placeholder='Select checkbox' style={{ color: '#929292', fontWeight: '500' }} {...getInputProps()} />
                <KeyboardArrowDownIcon sx={{ color: '#000' }} />
              </InputWrapper>
            </div>
            {groupedOptions.length > 0 ? (
              <CheckableBox {...getListboxProps()}>
                {(groupedOptions as typeof CheckableData)?.map((option, index) => (
                  <Stack key={index} direction={'row'} alignItems={'center'}
                    onClick={() => handleCheckedItem(option, index)}>
                    <BpCheckbox
                      checked={option?.isChecked}
                      defaultChecked={false}
                      onChange={() => handleChange(option, index)}
                    />
                    <li key={index} {...getOptionProps({ option, index })}>
                      <span style={{
                        color: '#666666',
                      }}>{option?.title}</span>
                    </li>
                  </Stack>
                ))}
              </CheckableBox>
            ) : null}
          </>
        )
      case 'chip':
        return (
          <>
            {/* <div {...getRootProps()}>
             <InputWrapper ref={setAnchorEl} sx={{ display: 'flex', alignItems: 'center' }}
                className={focused ? 'focused' : ''}>
                {value as typeof def?.map((option: object, index: number) => (
                <Typography sx={styles?.checkedValue} key={index}>
                  {`${option.title} ,`}</Typography>
                ))}
                <input placeholder='Select chip' style={{ color: '#929292', fontWeight: '500' }} {...getInputProps()} />
                <KeyboardArrowDownIcon sx={{ color: '#000' }} />
              </InputWrapper>
            </div>
            {groupedOptions.length > 0 ? (
              <CheckableBox {...getListboxProps()}>
                {(groupedOptions as typeof data)?.map((option, index) => (
                  <li key={index} {...getOptionProps({ option, index })}
                    onClick={() => handleDefaultSelectChange(option, index)}>
                    <span style={{
                      color: '#666666',
                    }}>{option.title}</span>
                  </li>
                ))}
              </CheckableBox>
            ) : null} */}
          </>
        )

      default:
        console.log(data, 'value');

        return (
          // <>
          //   <div {...getRootProps()}>
          //     <InputWrapper ref={setAnchorEl} sx={{ display: 'flex', alignItems: 'center' }}
          //       className={focused ? 'focused' : ''}>
          //       {(value as typeof defaultData)?.map((option: any, index: number) => (
          //         <Typography sx={styles?.checkedValue} key={index}>{`${option.title} ,`}</Typography>
          //       ))}
          //       <input placeholder='Select Option' style={{ color: '#929292', fontWeight: '500' }} {...getInputProps()} />
          //       <KeyboardArrowDownIcon sx={{ color: '#000' }} />
          //     </InputWrapper>
          //   </div>
          //   {groupedOptions?.length > 0 ? (
          //     <DefaultBox {...getListboxProps()}>
          //       {(groupedOptions as typeof data)?.map((val: FilmOptionType, index: number) => (
          //         <li key={index} {...getOptionProps({ val, index })}
          //           onClick={() => handleDefaultSelectChange(val, index)}>
          //           <span style={{
          //             color: '#666666',
          //           }}>{val?.title}</span>
          //         </li>
          //       ))}
          //     </DefaultBox>
          //   ) : null}
          // </>\

          <Autocomplete
            id="free-solo-demo"
              multiple
            options={data}
            getOptionLabel={(option) => option.title}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="With categories" />}
          // )}
          />

          // <Autocomplete
          //   disablePortal
          //   id="combo-box-demo"
          //   multiple
          //   // value={defaultData}
          //   options={data}
          //   sx={{ width: 300 }}
          //   renderInput={(params) => <TextField {...params} label="Movie" />}
          // />
        )
        break;
    }

  }

  return (
    <Box sx={{ ...styles?.rootSx, ...rootStyleSx }}>
      {/* header */}
      <Label {...getInputLabelProps()}>Customized hook</Label>
      <Stack direction={'row'}>
        {renderDropdown('')}
        {renderDropdown('chip')}
        {renderDropdown('checkbox')}
        {renderDropdown('grouping')}
      </Stack>
    </Box >
  );
}

SelectBox.defaultProps = {

};

interface FilmOptionType {
  title: string;
  year: number;
}

interface filmsInterface {

}

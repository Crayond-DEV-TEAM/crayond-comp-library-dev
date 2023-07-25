import { Box, Button, Divider, Popover } from "@mui/material";
import { PopoverPopupProps } from "./props";
import { styles } from "./style";
import { MyCustomLayout } from "./helperComponents";
import dayjs from "dayjs";

export const PopoverPopupState = (props: PopoverPopupProps) => {
    const {
      isOpenCalendar,
      handleCloseCalendar,
      addMoreButtons,
      startDate,
      endDate,
      startDateHandleChange,
      endDateHandleChange,
      startViews,
      endViews,
      openTo,
      selectedDayStart,
      selectedDayEnd,
      StartDay,
      EndDay,
      endDefaultValue,
  
      maxDateStart,
      minDateStart,
      maxDateEnd,
      minDateEnd,
  
      startCalendarMaxHeight,
      startCalendarMinHeight,
      endCalendarMaxHeight,
      endCalendarMinHeight,
  
      startDefaultValue,
      endCalendarStyle,
      startCalendarStyle,
      onMonthChangeStart,
      onMonthChangeEnd,
      handleSubmitCalendar,
      onYearChangeStart,
      onYearChangeEnd,
  
      disablePast,
      disableFuture,
      calenderPopoverStyle,
      selectedDateColor,
      selectedRangeBgColor,
      selectedHoverBgColor,
      selectedHoverTextColor,
  
      bottomButtonStyle,
      buttonFontSize,
      buttonLabelColor,
      cancelButtonLabel,
      submitButtonLabel,
    } = props;
    const open = Boolean(isOpenCalendar);
    const id = open ? 'simple-popover' : undefined;
    return (
      <>
        <Popover
          id={id}
          open={open}
          anchorEl={isOpenCalendar}
          onClose={handleCloseCalendar}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          anchorPosition={{
            top: 12,
            left: 0,
          }}
          elevation={0}
          PaperProps={{
            sx: {
              ...calenderPopoverStyle,
              marginTop: '12px',
              borderRadius: ' 8px',
              '& .MuiPickersMonth-monthButton': {
                padding: '1px',
              },
              '& .MuiPickersYear-yearButton': {
                padding: '1px',
              },
              '& .MuiPickersDay-root': {
                '&.Mui-selected': {
                  backgroundColor: selectedRangeBgColor,
                  color: selectedDateColor,
                },
              },
            },
          }}
        >
          <Box sx={{ ...styles.calendarContainer }}>
            <Box sx={{ ...styles.calendarBox }}>
              <Box>
                <MyCustomLayout
                  views={startViews}
                  openTo={openTo}
                  Day={StartDay}
                  maxHeight={startCalendarMaxHeight}
                  minHeight={startCalendarMinHeight}
                  maxDate={dayjs(`${maxDateStart}`)}
                  minDate={dayjs(`${minDateStart}`)}
                  disableFuture={disableFuture}
                  disablePast={disablePast}
                  value={dayjs(`${startDefaultValue}`)}
                  selectedDay={selectedDayStart}
                  defaultValue={dayjs(`${startDefaultValue}`)}
                  onMonthChange={onMonthChangeStart}
                  onChange={startDateHandleChange}
                  onYearChange={onYearChangeStart}
                  calenderStyle={startCalendarStyle}
                  selectedRangeBgColor={selectedRangeBgColor}
                  selectedDateColor={selectedDateColor}
                  selectedHoverBgColor={selectedHoverBgColor}
                  selectedHoverTextColor={selectedHoverTextColor}
                />
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ color: '#929292' }}
              />
              <Box>
                <MyCustomLayout
                  views={endViews}
                  openTo={openTo}
                  Day={EndDay}
                  maxHeight={endCalendarMaxHeight}
                  minHeight={endCalendarMinHeight}
                  maxDate={dayjs(`${maxDateEnd}`)}
                  minDate={dayjs(`${minDateEnd}`)}
                  disableFuture={disableFuture}
                  disablePast={disablePast}
                  selectedDay={selectedDayEnd}
                  value={dayjs(`${endDefaultValue}`)}
                  defaultValue={dayjs(`${endDefaultValue}`)}
                  onMonthChange={onMonthChangeEnd}
                  onChange={endDateHandleChange}
                  onYearChange={onYearChangeEnd}
                  calenderStyle={endCalendarStyle}
                  selectedRangeBgColor={selectedRangeBgColor}
                  selectedDateColor={selectedDateColor}
                  selectedHoverBgColor={selectedHoverBgColor}
                  selectedHoverTextColor={selectedHoverTextColor}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '4px 20px',
              }}
            >
              {addMoreButtons?.map((val: any) => (
                <>
                  <Button
                    sx={{
                      mr: '4px',
                      ...bottomButtonStyle,
                      color: buttonLabelColor,
                      fontSize: buttonFontSize,
                    }}
                    onClick={() => val.handleFunction(val)}
                  >
                    {val?.label}
                  </Button>
                </>
              ))}
              <Button
                sx={{
                  mr: '4px',
                  ...bottomButtonStyle,
                  color: buttonLabelColor,
                  fontSize: buttonFontSize,
                }}
                onClick={() => handleCloseCalendar()}
              >
                {cancelButtonLabel}
              </Button>
              <Button
                sx={{
                  mr: '4px',
                  ...bottomButtonStyle,
                  color: buttonLabelColor,
                  fontSize: buttonFontSize,
                }}
                onClick={() => handleSubmitCalendar()}
              >
                {submitButtonLabel}
              </Button>
            </Box>
          </Box>
        </Popover>
      </>
    );
  };
import { ReactNode } from "react";

export interface CalenderProps {
    CommonLeaves: string[];
    nationalLeaves: NationalLeave[];
    eventsIcon: EventIcon[];
    calenderList: calenderLists[];
    eventsData: EventData[];
    select: number;
    selectedCategory: string | null;
    searchCalendarList: string;
    eventCategories: EventCategory[];
    remainderOption: DayOption[];
    isEventModal: boolean;
    CustomEventComponent: CustomEventComponentProps;
    calenderCellackgroundColor: string;
    calendercellBackgroundColor: string;
    SearchCalenderList: string;
    styleProps?: Partial<DefaultStyleProps>;
    CustomEvents: boolean;
    nationalLeaveBgColor: string;
    commonLeaveBgcolor: string;
    calenderActiveBgColor: string;
    calenderActiveColor: string;
    customHeadStyle: object;
    CalenderStyle: object;
    eventTitleHeadStyle: object;
    customCalenderListSx: object;
    SearchCalender: string;
    editEvent:EventData;
    addEventBtnSx: object;
    dialogEvent:object;
    eventDialogTitle:string | undefined;
    eventDialogDescription:string  | undefined,
    selectedCategoryDialog:string,
    startTimeDialog:string,
    endTimeDialog:string,
    eventRemainder:number,
    selectedDay:string,
    calenderIconSx:object,
    editListValue:string,
    calenderTitle:string,
    isCustomizeToolbar:boolean;
    closeEventDialog:()=>void;
    handleEventChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    onSaveCalenderList:(val: calenderLists, index: number)=>void;
    onSelectEventFunc:(data:EventData) => void;
    OnEventChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onCalenderListClick: (index: number) => void;
    OnEventAdd: (data: EventData) => void;
    onCalenderSearch: (e: onCalenderSearchs) => void;
    onEventsDelete: (data: EventData) => void;
    CustomizedToolbar:(data: CustomToolbarProps)=>void;
    addCalenderList: () => void;
    onDeleteCalenderList: (data: calenderLists, index: number) => void;
    onCalendarSearch: () => void;
    onEventsEdit: (data: EventData) => void;
    onCalenderListSearch: (e: CalendarListSearchProps) => void;
    onEditCalenderList: (data: calenderLists, index: number) => void;
    onCustomizeEvent: (data: CustomizeEventProps) => void;
    onEventDialogChange:(value:any | number ,key:string)=>void;
  }
  export interface CustomTImeFormat {
    hour: string, minute: string
  }
  export interface EditData {
    id: number;
  }
  
  export interface calenderLists {
    calenderTitle: string;
  }
  export interface CustomToolbarProps {
    label: string;
    onNavigate: (action: string) => void;
    onView: (view: string) => void;
    view: string;
  }
  export  interface EventIcon {
    icon: ReactNode;
    onClick: (val: any, index: any) => void;
  }
  
  export  interface EventCategory {
    name: string;
    color: string;
  }
  
  export interface DayOption {
    value: string;
    label: string;
  }
  
  export interface CustomEventComponentProps {
    children: React.ReactNode;
  }
  
  export interface LeaveEvent {
    id: string | number;
    title: string;
    allDay: boolean;
    start: Date | null;
    des:string;
    end: Date | null;
    startTime: string | null;
    endTime: string | null;
    deletable: boolean;
    eventRemaindTime: string | null;
    eventRemind: string | null;
    type: string;
    
  }
  
  export interface EventCategory {
    name: string;
    color: string;
  }
  
  export interface EventData {
    id: string | number;
    title: string;
    des: string;
    allDay: boolean;
    type: string;
    start: Date | null;
    end: Date | null;
    startTime: string ;
    endTime: string ;
    deletable: boolean;
    eventRemaindTime: number;
    eventRemind: string;
  }
  
  export interface DefaultStyleProps {
    layoutBorderStyle: {
      borderColor: string;
      [key: string]: any;
    };
    beforeMonthStyle: {
      backgroundColor: string;
      [key: string]: any;
    };
    todayDateStyle: {
      backgroundColor: string;
      [key: string]: any;
    };
    addEventStyle?: {
      color: string;
      [key: string]: any;
    };
    tabStyle: {
      backgroundColor: string;
      color: string;
      borderColor: string;
      fontSize: string;
      fontWeight: string;
      [key: string]: any;
    };
    headStyle: {
      color: string;
      fontSize: string;
      fontWeight: string;
      [key: string]: any;
    };
    fontFamily: {
      fontFamily: string;
      [key: string]: any;
    };
    dragAndSelectBg: {
      dragAndSelectBg: string;
      [key: string]: any;
    };
  }
  
  export interface CalendarListSearchProps {
    value: string;
  }
  
  export  interface onCalenderSearchs {
    value: string;
  }
  
  export interface NationalLeave {
    date: string;
    title: string;
  }
  
  export interface CustomizeEventProps {
    start: Date;
    end: Date;
  }
  
  export interface CommonLeaveDays {
    [key: string]: number;
  }
  
  // interface DateRange {
  //   start: Date;
  //   end: Date;
  // }
  
  export interface EventComponentInferface {
    event: EventData;
  }
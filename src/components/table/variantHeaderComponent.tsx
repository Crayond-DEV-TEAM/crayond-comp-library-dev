import { HeaderTwo } from '../HeaderTwo';
import { HeaderOne } from '../headerOne';
import { TableProps } from './props';

interface VariantHeaderComponentProps {
  HeaderComponent:{
    variant: string | number;
    component?:React.ReactNode;
    styles?: {
      padding?: string;
      margin?: string;
    };
    headerSelect?: string;
    setHederSelect?: Function;
    searchPlaceholder?: string;
    selectOption?: { label: string; value: string | undefined }[];
    setHederSearch?: Function;
    deleteIcon?: React.ReactNode;
    downloadIcon?: React.ReactNode;
    funnelIcon?: React.ReactNode;
    searchIcon?: React.ReactNode;
    fillerMethod?: Function;
    downloadMethod?: Function;
  }
  selectedCheckbox: Array<string | number>;
  SelectAll: Function;
  handelDownload: Function;
}
const VariantHeaderComponent = (props: VariantHeaderComponentProps) => {
  //Get variant component
  switch (props?.HeaderComponent?.variant) {
    case 1:
      return (
        <HeaderOne
          HeaderComponent={props?.HeaderComponent}
          selectedCheckbox={props?.selectedCheckbox}
          SelectAll={props?.SelectAll}
          handelDownload={props?.handelDownload}
        />
      );
    case 2:
      return <HeaderTwo HeaderComponent={props?.HeaderComponent} />;
    case 'CUSTOM':
      return <>{props?.HeaderComponent?.component}</>;
    default:
      return <></>;
  }
};

export default VariantHeaderComponent;
VariantHeaderComponent.defaultProps = {
  HeaderComponent: {},
  selectedCheckbox: [],
  SelectAll: () => {},
};

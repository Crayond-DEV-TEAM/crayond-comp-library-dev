import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { useState } from 'react';
import { SelectBoxComponent } from './components/selectBox';
import { CardPage } from './components/cardPage';
import sampleImage from './assets/sampleprof.png';

function App() {
  interface FilmOptionType {
    title: string;
    year: number;
  }

  interface CheckedOption {
    title: string;
    isChecked: boolean;
  }

  const top100Films = [
    { title: 'Option 1', year: 1994 },
    { title: 'Option 2', year: 1972 },
    { title: 'Option 3', year: 1974 },
    { title: 'Option 4', year: 2008 },
    { title: 'Option 5', year: 1957 },
    { title: 'Option 6', year: 1993 },
    { title: 'Option 7', year: 1994 },
  ];

  const CheckBoxData = [
    { title: 'The Shawshank Redemption', isChecked: false },
    { title: 'The Godfather', isChecked: false },
    { title: 'The Godfather: Part II', isChecked: false },
    { title: 'The Dark Knight', isChecked: false },
    { title: '12 Angry Men', isChecked: false },
    { title: "Schindler's List", isChecked: false },
    { title: 'Pulp Fiction', isChecked: false },
    {
      title: 'The Lord of the Rings: The Return of the King',
      isChecked: false,
    },
    { title: 'The Good, the Bad and the Ugly', isChecked: false },
    { title: 'Fight Club', isChecked: false },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      isChecked: false,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      isChecked: false,
    },
    { title: 'Forrest Gump', isChecked: false },
    { title: 'Inception', isChecked: false },
    { title: "One Flew Over the Cuckoo's Nest", isChecked: false },
    { title: 'Goodfellas', isChecked: false },
    { title: 'The Matrix', isChecked: false },
    { title: 'Seven Samurai', isChecked: false },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      isChecked: false,
    },
  ];

  const buttons = [
    {
      text: 'Button',
      onClick: () => {
        console.log('Button 1');
      },
      style: { width: '78px' },
    },
    {
      text: 'Button',
      onClick: () => {
        console.log('Button e');
      },
      style: { width: '78px' },
      disabled: true,
    },
  ];
  const [checked, setChecked] = useState([]);
  const [checkedArr] = useState([...CheckBoxData]);
  const [defaultData, setDefaultData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const [chipData, setChipData] = useState([]);

  const handleCheckedItem = (event: object, newValue: CheckedOption[]) => {
    const slicedData =
      newValue.length > 0
        ? newValue?.filter(
            (item: CheckedOption, index: number) =>
              newValue.findIndex(
                (obj: CheckedOption) =>
                  obj.title === item.title && obj.isChecked === item.isChecked,
              ) === index,
          )
        : newValue;
    const convertedValue = slicedData as never[];

    console.log(convertedValue, '00000');

    setChecked(convertedValue);
  };

  const handleDefaultChange = (val: any, newValue: FilmOptionType[]) => {
    const slicedData =
      newValue.length > 0
        ? newValue.filter(
            (item: FilmOptionType, index: number) =>
              newValue.findIndex(
                (obj: FilmOptionType) =>
                  obj.title === item.title && obj.year === item.year,
              ) === index,
          )
        : newValue;
    const convertedValue = slicedData as never[];
    setDefaultData(convertedValue);
  };
  const handleGroupChange = (event: any, newValue: FilmOptionType[]) => {
    const slicedData =
      newValue.length > 0
        ? newValue.filter(
            (item: FilmOptionType, index: number) =>
              newValue.findIndex(
                (obj: FilmOptionType) =>
                  obj.title === item.title && obj.year === item.year,
              ) === index,
          )
        : newValue;
    const convertedValue = slicedData as never[];
    setGroupedData(convertedValue);
  };

  const handleChipChange = (val: any, newValue: FilmOptionType[]) => {
    const slicedData =
      newValue.length > 0
        ? newValue.filter(
            (item: FilmOptionType, index: number) =>
              newValue.findIndex(
                (obj: FilmOptionType) =>
                  obj.title === item.title && obj.year === item.year,
              ) === index,
          )
        : newValue;
    const convertedValue = slicedData as never[];
    setChipData(convertedValue);
  };

  return (
    <div
      className="App"
      style={{ width: '100vw', background: '#fff', height: '100vh' }}
    >
      <SelectBoxComponent
        limitTags={2}
        groupingProps={{
          isCloseIcon: true,
          isSearch: true,
          handleGroupChange: handleGroupChange,
          groupedData: groupedData,
          arrData: top100Films,
          defaultValue: [],
          label: '',
          dropdown: {
            minHeight: '',
            maxHeight: '',
            maxWidth: '',
            minWidth: '',
            backgroundColor: '',
            color: '',
          },
          input: {
            minHeight: '',
            minWidth: '',
            backgroundColor: '',
            maxWidth: '',
            maxHeight: '',
            color: '',
            border: '',
            borderRadius: '',
          },
        }}
        defaultProps={{
          isCloseIcon: true,
          isSearch: true,
          handleDefaultChange: handleDefaultChange,
          defaultData: defaultData,
          arrData: top100Films,
          defaultValue: [],
          label: '',
          dropdown: {
            minHeight: '',
            maxHeight: '',
            maxWidth: '',
            minWidth: '',
            backgroundColor: '',
            color: '',
          },
          input: {
            minHeight: '',
            minWidth: '',
            backgroundColor: '',
            maxWidth: '',
            maxHeight: '',
            color: '',
            border: '',
            borderRadius: '',
          },
        }}
        chipProps={{
          isCloseIcon: true,
          isSearch: true,
          handleChipChange: handleChipChange,
          chipData: chipData,
          arrData: top100Films,
          defaultValue: [],
          label: '',
          dropdown: {
            minHeight: '',
            maxHeight: '',
            maxWidth: '',
            minWidth: '',
            backgroundColor: '',
            color: '',
          },
          input: {
            minHeight: '',
            minWidth: '',
            backgroundColor: '',
            maxWidth: '',
            maxHeight: '',
            color: '',
            border: '',
            borderRadius: '',
          },
        }}
        checkboxProps={{
          isCloseIcon: true,
          isSearch: true,
          defaultValue: [],
          handleCheckedItem: handleCheckedItem,
          CheckableData: checked,
          arrData: checkedArr,
          label: '',
          dropdown: {
            minHeight: '',
            maxHeight: '',
            maxWidth: '',
            minWidth: '',
            backgroundColor: '',
            color: '',
          },
          input: {
            minHeight: '',
            minWidth: '',
            backgroundColor: '',
            maxWidth: '',
            maxHeight: '',
            color: '',
            border: '',
            borderRadius: '',
          },
        }}
        selectType={'checkbox'}
        multiple={true}
      />
      <CardPage
        cardImage={sampleImage}
        buttons={buttons}
        title={'Jerry Foster'}
        mailId={'ethan.holmes@mail.com'}
        mobile={'(621)668-1434'}
        divider={true}
        desc={'Integer ac interdum lacus. Nunc porta semper lacus a varius.'}
        variant={'contentOriented'}
        cardStyle={{}}
        cardWrapperStyle={{}}
        cardMediastyle={{}}
        cardContentStyle={{}}
        titleStyle={{}}
        subTitleWrapStyle={{}}
        mailIdStyle={{}}
        dotStyle={{}}
        mobileNumberStyle={{}}
        dividerStyle={{}}
        descStyle={{}}
        buttonWrapStyle={{}}
      />
    </div>
  );
}

export default App;

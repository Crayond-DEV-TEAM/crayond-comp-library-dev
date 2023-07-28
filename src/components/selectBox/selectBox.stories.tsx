import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectBox from './selectBox';
import React, { useState } from 'react';
import { SelectBoxComponent } from '.';

export default {
  title: 'Components/selectBox',
  component: SelectBox,
  argTypes: {
    limitTags: {
      description: 'limited tags will be shown when it is multiple'
    },
    selectType: {
      description: 'default or chip or checkbox or grouping'
    },
    groupingProps: {
      description: 'It contains all props for dropdown and inputfield for grouped dropdown'
    },
    defaultProps: {
      description: 'It contains all props for dropdown and inputfield for default dropdown'
    },
    chipProps: {
      description: 'It contains all props for dropdown and inputfield for chip dropdown'
    },
    checkboxProps: {
      description: 'It contains all props for dropdown and inputfield for checkbox dropdown'
    },
    multi: {
      description: 'it delivers whether multiple or single select box'
    }
  }
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => {
  interface FilmOptionType {
    title: string | number;
    year: number | string;
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
    { title: "Option 6", year: 1993 },
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

  const [checked, setChecked] = useState([])
  const [defaultData, setDefaultData] = useState([])
  const [groupedData, setGroupedData] = useState([])
  const [chipData, setChipData] = useState([])

  const handleCheckedItem = (event: object, newValue: CheckedOption[]) => {
    const slicedData = newValue.filter((item: CheckedOption, index: number) =>
      newValue.findIndex((obj: CheckedOption) =>
        obj.title === item.title && obj.isChecked === item.isChecked) === index)
    const convertedValue = slicedData as never[];
    setChecked(convertedValue)
  }

  const handleDefaultChange = (val: any, newValue: FilmOptionType) => {
    const slicedData = newValue.filter((item: FilmOptionType, index: number) =>
      newValue.findIndex((obj: FilmOptionType) =>
        obj.title === item.title && obj.year === item.year) === index)
    const convertedValue = slicedData as never[];
    setDefaultData(convertedValue)
  }
  const handleGroupChange = (event: any, newValue: FilmOptionType[]) => {
    const slicedData = newValue.filter((item: FilmOptionType, index: number) =>
      newValue.findIndex((obj: FilmOptionType) =>
        obj.title === item.title && obj.year === item.year) === index)
    const convertedValue = slicedData as never[];
    setGroupedData(convertedValue)
  }

  const handleChipChange = (val: any, newValue: FilmOptionType[]) => {
    const slicedData = newValue.filter((item: FilmOptionType, index: number) =>
      newValue.findIndex((obj: FilmOptionType) =>
        obj.title === item.title && obj.year === item.year) === index)
    const convertedValue = slicedData as never[];
    setChipData(convertedValue)
  }
  return (
    <SelectBoxComponent
      limitTags={2}
      groupingProps={{
        isCloseIcon: true,
        isSearch: true,
        defaultValue: [],
        handleGroupChange: handleGroupChange,
        groupedData: groupedData,
        arrData: top100Films,
        islabel:false,
        label: '',
        dropdown: {
          minHeight: '',
          maxHeight: '',
          maxWidth: '',
          minWidth: '',
          backgroundColor: '',
          color: ''
        },
        input: {
          minHeight: '',
          minWidth: '',
          backgroundColor: '',
          maxWidth: '',
          maxHeight: '',
          color: '',
          border: '',
          borderRadius: ''
        }
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
          color: ''
        },
        input: {
          minHeight: '',
          minWidth: '',
          backgroundColor: '',
          maxWidth: '',
          maxHeight: '',
          color: '',
          border: '',
          borderRadius: ''
        }
      }}
      chipProps={{
        isCloseIcon: true,
        label: '',
        isSearch: true,
        handleChipChange: handleChipChange,
        chipData: chipData,
        arrData: top100Films,
        defaultValue: chipData?.[0],
        dropdown: {
          minHeight: '',
          maxHeight: '',
          maxWidth: '',
          minWidth: '',
          backgroundColor: '',
          color: ''
        },
        input: {
          minHeight: '',
          minWidth: '',
          backgroundColor: '',
          maxWidth: '',
          maxHeight: '',
          color: '',
          border: '',
          borderRadius: ''
        }
      }}
      checkboxProps={{
        isCloseIcon: true,
        isSearch: true,
        defaultValue: [],
        label: '',
        handleCheckedItem: handleCheckedItem,
        CheckableData: checked,
        arrData: CheckBoxData,
        dropdown: {
          minHeight: '',
          maxHeight: '',
          maxWidth: '',
          minWidth: '',
          backgroundColor: '',
          color: ''
        },
        input: {
          minHeight: '',
          minWidth: '',
          backgroundColor: '',
          maxWidth: '',
          maxHeight: '',
          color: '',
          border: '',
          borderRadius: ''
        }
      }}
      selectType={args.selectType} multiple={args?.multiple} rootStyle={undefined} />
  );

}
export const Primary = Template.bind({});

Primary.args = {
  limitTags: 2,
  selectType: 'chip',
  groupingProps: {
    isCloseIcon: true,
    isSearch: true,
    label: '',
    handleGroupChange:
      (e: any, val: object[]) => {
        console.log(val, 'groupDropDown')
      },
    groupedData: [],
    arrData: [
      { title: 'Option 1', year: 1994 },
      { title: 'Option 2', year: 1972 },
      { title: 'Option 3', year: 1974 },
      { title: 'Option 4', year: 2008 },
      { title: 'Option 5', year: 1957 },
      { title: "Option 6", year: 1993 },
      { title: 'Option 7', year: 1994 },

    ],
    defaultValue: [],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  defaultProps: {
    isCloseIcon: true,
    defaultValue: [],
    isSearch: true,
    label: '',
    handleDefaultChange: (e: any, val: object[]) => {
      console.log(val, 'defaultDropdown')
    },
    defaultData: [],
    arrData: [
      { title: 'Option 1', year: 1994 },
      { title: 'Option 2', year: 1972 },
      { title: 'Option 3', year: 1974 },
      { title: 'Option 4', year: 2008 },
      { title: 'Option 5', year: 1957 },
      { title: "Option 6", year: 1993 },
      { title: 'Option 7', year: 1994 },

    ],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  chipProps: {
    isCloseIcon: true,
    label: '',
    isSearch: true,
    handleChipChange: (e: any, val: object[]) => {
      console.log(val, 'chipDropDown')
    },
    chipData: [],
    defaultValue: [],
    arrData: [
      { title: 'Option 1', year: 1994 },
      { title: 'Option 2', year: 1972 },
      { title: 'Option 3', year: 1974 },
      { title: 'Option 4', year: 2008 },
      { title: 'Option 5', year: 1957 },
      { title: "Option 6", year: 1993 },
      { title: 'Option 7', year: 1994 },
    ],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  checkboxProps: {
    isCloseIcon: true,
    isSearch: true,
    handleCheckedItem: (e: any, val: object[]) => {
      console.log(val, 'checkboxDropDown')
    },
    defaultValue: [],
    label: '',
    CheckableData: [],
    arrData: [
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

    ],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }

  },
  multiple: true
};

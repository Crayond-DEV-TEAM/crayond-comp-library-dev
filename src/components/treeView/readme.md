   
   # Readme

   # Image of the tree view component =  ![Alt text](../../assets/tree_view.png)
   
   # Component 
    <TreeView
        handleChange={handleCheckBox}
        dataRow={rowArray}
        onSubmit={onSubmit}
        submitBtnText={'Submit'}
        submitBtnOptions={{
          variant: 'contained',
          bgColor: 'purple',
          textColor: '#ffff'
        }}
         checkboxBgColor={'red'}
        checkboxWidth={16}  
        checkboxHeight={16}
        heading='Basic View'
        leftSec={{
          breakpoints: {
            xs: 4,
            sm: 4,
            md: 6,
            lg: 8
          }
        }}
        rightSec={{
          breakpoints: {
            xs: 8,
            sm: 8,
            md: 6,
            lg: 4
          }
        }}
         checkboxIcon={undefined}
         uncheckedIcon={undefined}
        checkboxBorderRadius={''}
        checkboxBgColor={''}  
      />


this above component show all props that are extracted. Now let's see the props in detailed which are listed 
below: 


handleChange : change event for checkbox to be checked or unchecked

dataRow: It gives the JSON array data of the checkbox

onSubmit: submit function which gives the array data of the checkbox that are manipulated

submitBtnText: submit button text as props(submit text as shown in image above)

submitBtnOptions: submit button props which contains variant of the button, text color and background color

checkboxBgColor: checkbox background color as props

checkboxWidth: it gives checkbox width

checkboxHeight: it gives checkbox height

heading: heading tag for the whole box(BASIC VIEW text as shown in image above)

leftSec: grid item of the left section which gives breakpoints as props

rightSec: grid item of the right section which gives breakpoints as props

checkboxIcon: checkbox checked state as icon

uncheckedIcon: checkbox unchecked state as icon

checkboxBorderRadius: props for checkbox border radius 

checkboxBgColor: props for checkbox background color


























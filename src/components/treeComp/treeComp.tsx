import { Checkbox, Grid, FormControl } from '@mui/material';
import { Box, Typography } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import { SxProps, styled } from '@mui/material/styles';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { styles } from './style';
import SettingIcon from '../../assets/settingIcon';
import CollapseIcon from '../../assets/collapseIcon';
import ExpandIcon from '../../assets/expandIcon';
import InfoIcon from '../../assets/InfoIcon';
import { CheckBoxProps, CustomLabelProps, TreeComponentProps } from './props';
import { BpCheckedIcon, BpIcon } from './components';

interface TreeNode {
    id?: string;
    name?: string;
    child?: TreeNode[];
    allowed?: string[] | undefined;
    permissions?: string[] | undefined;
  }


export const CustomLabel = (props: CustomLabelProps): JSX.Element => {
    const {
        labelText = '',
        labelStyleSx,
        isCheckBox = false,
        test = '',
        onChange = () => null,
        nodes,
        state,
        formControlPropsSx,
        iconProp = {
            parent: '',
            parentChild: ''
        },
        checkBoxStyles = {
            checkboxBorderRadius: '',
            checkboxIcon: null,
            uncheckedIcon: null,
            checkboxWidth: '',
            disable: false,
            checkboxHeight: '',
        }
    } = props;
    

    const stylesProps = () => {
        switch (test) {
            case 'parent':
                return {
                    iconProp: iconProp?.parent ?? <SettingIcon />,
                };
            case 'parentchild':
                return {
                    iconProp: iconProp?.parentChild ?? <InfoIcon />,
                };
            default:
                return
        }
    };


    const filter = state?.[1]?.permissions?.map((v: string) => {
        if (nodes?.permissions?.includes(v)) {
            return {
                value: v
            }
        } else {
            return {}
        }
    })
    
    return (
        <Grid container
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap' }}
        >
            <Grid item xs={'auto'} sx={styles?.labelTextGridSx}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>{stylesProps()?.iconProp}</Box>
                    <Typography sx={{ ...styles?.child, ...labelStyleSx } as SxProps}>
                        {labelText}</Typography>
                </Box>
            </Grid>
            <Grid item sx={styles?.checkboxGridSx}
                style={{
                    justifyContent: "flex-end",
                    display: "flex"
                }}
            >
                {isCheckBox &&
                    filter?.map((
                        val?: { value?: string | undefined}, i?: number) => {
                        return (
                            <FormControl key={i}
                                sx={{ ...styles?.formControl, ...formControlPropsSx }}
                            >{val?.value ?
                                <BpCheckbox
                                    disable={checkBoxStyles?.disable}
                                    checkboxBorderRadius={checkBoxStyles?.checkboxBorderRadius}
                                    key={i}
                                    onChange={(e: any) => onChange(e?.target?.checked, val?.value as string, props?.nodes?.id as string, state as TreeNode[]) }
                                    checked={(nodes?.allowed as string[])?.includes(val?.value) ? true : false}
                                /> : ""}
                            </FormControl>
                        )
                    })
                }
            </Grid>
        </Grid>
    );
};
const StyledTreeItem = styled(TreeItem)<TreeComponentProps>((rootNode) => {
    return {
        position: 'relative',
        '&:before': {
            pointerEvents: 'none',
            content: '""',
            position: 'absolute',
            width: 20,
            left: -18,
            top: 18,
            borderBottom:
                // only display if the TreeItem is not root node
                !rootNode ? `2px solid #c1c1c1` : 'none',
        },
        [`& .${treeItemClasses.group}`]: {
            marginLeft: 16,
            paddingLeft: 18,
            borderLeft: `2px solid #c1c1c1`,
        },
        '& .MuiTreeItem-label': {
            color: '#29302B',
        },
        '& .MuiTreeItem-iconContainer': {
            // marginTop: '8px',
        },
        '& .MuiTreeItem-content': {
            // padding: '8px',
        },
    };
});
const renderTree = (
    nodes: TreeNode,
    test: string,
    isCheckBox: boolean,
    setEdit: boolean,
    onChange: (e: any, val: string, id: string, data: TreeNode[]) => void,
    index: number,
    state: TreeNode[],
    customLabel: CustomLabelProps | {
        labelStyleSx: SxProps; 
        iconProp: {
            parent: JSX.Element,
            parentChild: JSX.Element,
            
        };
        checkBoxStyles: CheckBoxProps | {
          checkboxBorderRadius: string,
          checkboxIcon: null,
          uncheckedIcon: null,
          checkboxWidth: string,
          checkboxHeight: string,
          disable: boolean
      }
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
   
) => {
    return (
        <StyledTreeItem
            rootNode={test === 'parent' ? true : false}
            key={nodes?.id}
            nodeId={`${nodes?.id}`}
            state={state}
            label={<CustomLabel
                labelText={nodes?.name}
                isCheckBox={isCheckBox}
                onChange={onChange}
                iconProp={customLabel?.iconProp}
                nodes={nodes}
                state={state}
                index={index}
                labelStyleSx={customLabel?.labelStyleSx}
                test={test}
                checkBoxStyles={customLabel?.checkBoxStyles} />}
            heading={''}
            permissionHeadingSx={undefined} disable={false}

        // You can add custom properties to each node as well
        // create={nodes?.create}
        // read={nodes?.read}
        // update={nodes?.update}
        // delete={nodes?.delete}
        >
            {Array.isArray(nodes?.child)
                ? nodes?.child?.map((node: TreeNode) =>
                    renderTree(node, test + 'child', isCheckBox, setEdit, onChange, index, state, customLabel),
                )
                : null}
        </StyledTreeItem>
    );
};
function BpCheckbox(props: CheckBoxProps) {
    const {
        checkboxWidth,
        checkboxHeight,
        checkboxBorderRadius,
        checkboxIcon,
        disable,
        uncheckedIcon,
    } = props;

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
            disabled={disable}
            color="default"
            checkedIcon={checkboxIcon ?? <BpCheckedIcon />}
            icon={uncheckedIcon ?? <BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}
export default function TreeComponent(props: TreeComponentProps) {
    const {
        customLabel = {
            labelStyleSx: {},
            iconProp: {
                parent: <></>,
                parentChild: <></>
            },
            checkBoxStyles : {
              checkboxBorderRadius: '',
              checkboxIcon: null,
              uncheckedIcon: null,
              checkboxWidth: '',
              disable: false,
              checkboxHeight: '',
          },
        },
        state,
        checkboxsection = false,
        setEdit = false,
        onChange = () => false,
        defaultExpandIcon,
        defaultCollapseIcon,
        leftSec,
        rightSec,
        heading = '',
        permissionHeadingSx,
        ...rest
    } = props;
    return (
        <Box    
            sx={styles?.widthItem}
            {...rest}
        >
            {
                < Grid container sx={styles?.entireContainerSx}>
                    <Grid item {...leftSec?.breakpoints}>
                        <Box>
                            <Typography sx={styles?.headTitle} noWrap pb={1}>{heading}</Typography>
                        </Box>
                    </Grid>
                    <Grid item {...rightSec?.breakpoints} style={{
                        justifyContent: "flex-end",
                        display: "flex",
                        alignItems: 'center'
                    }}>
                        {
                            checkboxsection &&
                            state?.[1]?.permissions?.map((val: string, i: number) => {
                                return (
                                    <Typography sx={{ ...styles?.headItems, ...permissionHeadingSx } as SxProps} key={i}>
                                        {val}</Typography>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            }
            {state && state.length > 0 && (
                <TreeView
                    defaultCollapseIcon={defaultCollapseIcon}
                    defaultExpandIcon={defaultExpandIcon}
                    sx={styles?.treeItem}
                >
                    {Array.isArray(state) &&
                        state?.map((val: any, index: number) => {
                            return renderTree(val, 'parent', checkboxsection, setEdit, onChange, index, state, customLabel);
                        })
                    }
                </TreeView>
            )}
        </Box>
    );
}
TreeComponent.defaultProps = {
    state: [],
    defaultExpandIcon: < ExpandIcon />,
    defaultCollapseIcon: < CollapseIcon />,
    checkboxsection: true,
    leftSec: {},
    heading: '',
    onChange: () => null,
    checkBoxStyles: {},
    permissionHeadingSx: {},
    setEdit: false,
    customLabel: {}
}
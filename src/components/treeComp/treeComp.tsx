import { Checkbox, Grid, Stack, FormControl } from '@mui/material';
import { Box, Typography } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import { styled } from '@mui/material/styles';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { styles } from './style';
import { InfoIcon, SettingIcon } from './icons';
import { CheckBoxProps, CustomLabelProps, TreeComponentProps } from './props';
import { BpCheckedIcon, BpIcon } from './components';

export const CustomLabel = (props: CustomLabelProps): JSX.Element => {
    const {
        labelText = '',
        fontsize = '',
        isCheckBox = false,
        disable = false,
        test = '',
        onChange = () => null,
        nodes = [],
        state = [],
        formControlPropsSx,
        iconProp = {
            parent: null,
            parentChild: null
        },
        checkBoxStyles = {
            checkboxBorderRadius: '',
            checkboxIcon: null,
            uncheckedIcon: null,
            checkboxWidth: '',
            checkboxHeight: ''
        }
    } = props;

    console.log(checkBoxStyles, 'checkBoxStyles');

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

    return (
        <>
            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Grid item xs={4} sm={4} md={6} lg={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>{stylesProps()?.iconProp}</Box>
                        <Typography sx={{ ...styles?.child, ...fontsize }}>
                            {labelText}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={8} sm={8} md={6} lg={4}>
                    {isCheckBox && (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {
                                nodes?.permissions?.map((val: any, i: number) => {
                                    return (
                                        <FormControl key={i}
                                            sx={{ ...styles?.formControl, ...formControlPropsSx }}>
                                            <BpCheckbox
                                                disable={disable}
                                                checkboxBorderRadius={checkBoxStyles?.checkboxBorderRadius}
                                                key={i}
                                                onClick={(e: any) => e.stopPropagation()}
                                                onChange={(e: any) => onChange(e?.target?.checked, val, props?.nodes?.id, state)}
                                                checked={nodes?.allowed?.includes(val) ? true : false}
                                            />
                                        </FormControl>
                                    )
                                })
                            }
                        </Box>
                    )}
                </Grid>
            </Grid>
        </>
    );
};
const StyledTreeItem = styled(TreeItem)<TreeComponentProps>(({ rootNode }) => {
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
    nodes: any,
    test: string,
    isCheckBox: any,
    setEdit: any,
    disable: boolean,
    onChange: (e: any, val: any, id: string, data: any) => void,
    index: any,
    state: any,
    customLabel: any,
    checkBoxStyles: any
) => {

    return (
        <StyledTreeItem
            rootNode={test === 'parent' ? true : false}
            key={nodes?.id}
            nodeId={`${nodes?.id}`}
            state={state}
            label={<CustomLabel
                labelText={nodes?.name}
                disable={setEdit}
                isCheckBox={isCheckBox}
                onChange={onChange}
                iconProp={customLabel?.iconProp}
                nodes={nodes}
                state={state}
                index={index}
                fontsize={customLabel?.fontsize}
                test={test}
                checkBoxStyles={checkBoxStyles} />} heading={''}
            permissionHeadingSx={undefined} disable={false}
            checkBoxStyles={undefined}

        // You can add custom properties to each node as well
        // create={nodes?.create}
        // read={nodes?.read}
        // update={nodes?.update}
        // delete={nodes?.delete}
        >
            {Array.isArray(nodes?.child)
                ? nodes?.child?.map((node: any) =>
                    renderTree(node, test + 'child', isCheckBox, setEdit, disable, onChange, index, state, customLabel, checkBoxStyles),
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

    console.log(checkboxBorderRadius, 'checkBoxStyles===');

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
            fontsize: '',
            iconProp: ''
        },
        state = [],
        checkboxsection = false,
        setEdit,
        onChange = () => false,
        defaultExpandIcon,
        defaultCollapseIcon,
        leftSec,
        rightSec,
        heading = '',
        permissionHeadingSx,
        checkBoxStyles = {},
        disable = false,
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
                    <Grid item {...rightSec?.breakpoints}>
                        {
                            checkboxsection && <Stack direction='row' pb={1} alignItems='center' justifyContent='space-between'>
                                {
                                    state?.[0]?.permissions?.map((val: string, i: number) => {
                                        return (
                                            <Typography sx={{ ...styles?.headItems, ...permissionHeadingSx }} key={i}>
                                                {val}</Typography>
                                        )
                                    })
                                }
                            </Stack>
                        }
                    </Grid>
                </Grid>
            }
            {state?.length > 0 && (
                <TreeView
                    defaultCollapseIcon={defaultCollapseIcon}
                    defaultExpandIcon={defaultExpandIcon}
                    sx={{ height: 220, flexGrow: 1, m: 2 }}
                >
                    {Array.isArray(state) &&
                        state?.map((val: any, index: number) => {
                            return renderTree(val, 'parent', checkboxsection, setEdit, disable, onChange, index, state, customLabel, checkBoxStyles);
                        })
                    }
                </TreeView>
            )}
        </Box>
    );
}

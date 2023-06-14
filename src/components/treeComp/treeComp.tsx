import { SxProps, Theme, Checkbox, CheckboxProps } from '@mui/material';
import { Box, Typography } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import { styled } from '@mui/material/styles';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { styles } from './style';
import { CollapseIcon, ExpandIcon, InfoIcon, SettingIcon } from './icons';
import { CustomLabelProps, TreeComponentProps } from './props';
// import { Checkbox } from '@material-ui/core';


export const CustomLabel = (props: CustomLabelProps): JSX.Element => {
    const {
        iconProp = '',
        labelText = '',
        fontsize = '',
        checkBox = false,
        disable = false,
        onChange = () => null,
        nodes = [],
        state = [],
        checkboxIcon,
        uncheckedIcon,
        checkboxWidth,
        checkboxHeight,
    } = props;
    // debugger
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>{iconProp}</Box>
                <Typography sx={{ ...styles?.child, ...fontsize }}>
                    {labelText}</Typography>
            </Box>
            {checkBox && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {
                        nodes?.permissions?.map((val: any, i: number) => {
                            return (
                                <BpCheckbox
                                    key={i}
                                    style={{ marginRight: '17px' }}
                                    disabled={false}
                                    onClick={(e: any) => e.stopPropagation()}
                                    onChange={(e: any) => onChange(e?.target?.checked, val, props?.nodes?.id, state)}
                                    checked={nodes?.allowed?.includes(val) ? true : false}
                                />
                            )
                        })
                    }
                </Box>
            )}
        </Box>
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
const stylesProps = (id: string, checks: boolean) => {
    switch (id) {
        case 'parent':
            return {
                iconProp: <SettingIcon />,
                fontsize: { fontSize: '14px', fontWeight: 600 },
                checkBox: checks === true ? true : false,

            };
        case 'parentchild':
            return {
                iconProp: <InfoIcon />,
                fontsize: { fontSize: '14px', fontWeight: 500 },
                checkBox: checks === true ? true : false,
            };
        default:
            return {
                fontsize: { fontSize: '14px', fontWeight: 500, color: '#818181', margin: '7px' },
                checkBox: checks === true ? true : false,
            };
            break;
    }
};
const renderTree = (
    nodes: any,
    test: string,
    checkBox: any,
    setEdit: any,
    onChange: (e: any, val: any, id: string, data: any) => void,
    index: any,
    state: any
) => {
    // debugger

    return (
        <StyledTreeItem
            rootNode={test === 'parent' ? true : false}
            key={nodes?.id}
            nodeId={`${nodes?.id}`}
            label={<CustomLabel
                labelText={nodes?.name}
                disable={false}
                onChange={onChange}
                nodes={nodes}
                index={index}
                {...stylesProps(test, checkBox)} />}
            state={state}
        // You can add custom properties to each node as well
        // create={nodes?.create}
        // read={nodes?.read}
        // update={nodes?.update}
        // delete={nodes?.delete}
        >
            {Array.isArray(nodes?.child)
                ? nodes?.child?.map((node: any) =>
                    renderTree(node, test + 'child', checkBox, setEdit, onChange, index, state),
                )
                : null}
        </StyledTreeItem>
    );
};
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
export default function TreeComponent(props: TreeComponentProps) {
    const {
        className = '',
        state = [],
        checkboxsection = false,
        setEdit,
        onChange = () => false,
        defaultExpandIcon,
        defaultCollapseIcon,
        ...rest
    } = props;
    return (
        <Box
            className={`${className}`}
            {...rest}
        >
            {state?.length > 0 && (
                <TreeView
                    defaultCollapseIcon={defaultCollapseIcon}
                    defaultExpandIcon={defaultExpandIcon}
                    defaultParentIcon={<SettingIcon />}
                    sx={{ height: 220, flexGrow: 1, m: 2 }}
                >
                    {Array.isArray(state) &&
                        state?.map((val: any, index: number) => {
                            return renderTree(val, 'parent', checkboxsection, setEdit, onChange, index, state);
                        })}
                </TreeView>
            )}
        </Box>
    );
}

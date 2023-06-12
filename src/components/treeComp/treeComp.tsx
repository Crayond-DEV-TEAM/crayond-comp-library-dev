import { SxProps, Theme, Checkbox } from '@mui/material';
import { Box, Typography } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import { styled } from '@mui/material/styles';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { styles } from './style';
import { CollapseIcon, ExpandIcon, InfoIcon, SettingIcon } from './icons';
// import { Checkbox } from '@material-ui/core';

export interface TreeComponentProps {
    className?: string;
    sx?: SxProps<Theme>;
    data?: any;
    checkboxsection?: boolean;
    setEdit?: any;
    onChange?: () => void;
}

export interface StyledTreeItemProps {
    rootNode?: boolean;
}
export interface CustomLabelProps {
    iconProp?: any;
    labelText?: string;
    fontsize?: any;
    checkBox?: boolean;
    disable?: boolean;
    onChange?: () => void | undefined;
    nodes?: any;
    index?: number;
}

export const CustomLabel = (props: CustomLabelProps): JSX.Element => {
    const {
        iconProp = null,
        labelText = '',
        checkBox = false,
        fontsize,
        disable,
        onChange = () => false,
        nodes,
        index,
    } = props;
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>{iconProp}</Box>
                <Typography sx={{ ...styles?.child, ...fontsize }}>{labelText}</Typography>
            </Box>
            {checkBox && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Checkbox
                        style={{ marginRight: '17px' }}
                        disabled={disable}
                        onChange={(e) => onChange(e, 'create', nodes, index)}
                        checked={nodes?.create ?? false}
                    />
                    <Checkbox
                        style={{ marginRight: '17px' }}
                        disabled={disable}
                        onChange={(e) => onChange(e, 'read', nodes, index)}
                        checked={nodes?.read ?? false}
                    />
                    <Checkbox
                        style={{ marginRight: '17px' }}
                        disabled={disable}
                        onChange={(e) => onChange(e, 'update', nodes, index)}
                        checked={nodes?.update ?? false}
                    />
                    <Checkbox
                        style={{ marginRight: '17px' }}
                        disabled={disable}
                        onChange={(e) => onChange(e, 'delete', nodes, index)}
                        checked={nodes?.delete ?? false}
                    />
                </Box>
            )}
        </Box>
    );
};
const StyledTreeItem = styled(TreeItem)<StyledTreeItemProps>(({ rootNode }) => {
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
            };
        case 'parentchild':
            return {
                iconProp: <InfoIcon />,
                fontsize: { fontSize: '14px', fontWeight: 500 },
            };
        default:
            return {
                fontsize: { fontSize: '14px', fontWeight: 500, color: '#818181', margin: '7px' },
                checkBox: checks === true ? true : false,
            };
            break;
    }
};
const renderTree = (nodes: any, test: string, checkBox: any, setEdit: any, onChange: () => void, index: any) => {
    debugger
    return (
        <StyledTreeItem
            rootNode={test === 'parent' ? true : false}
            key={nodes?.name}
            nodeId={`${nodes?.name}`}
            label={
                <CustomLabel
                    labelText={nodes?.name}
                    disable={false}
                    onChange={onChange}
                    nodes={nodes}
                    index={index}
                    // iconProp={<SettingIcon />}
                    // fontsize={{ fontSize: '14px', fontWeight: 600 }}
                    {...stylesProps(test, checkBox)}
                // checkBox={checkBox}
                />
            }

        // You can add custom properties to each node as well
        // create={nodes?.create}
        // read={nodes?.read}
        // update={nodes?.update}
        // delete={nodes?.delete}
        >
            {Array.isArray(nodes?.child)
                ? nodes?.child.map((node: any, indexchild: number) =>
                    renderTree(node, test + 'child', checkBox, setEdit, onChange, index + '-' + indexchild),
                )
                : null}
        </StyledTreeItem>
    );
};

export default function TreeComponent(props: TreeComponentProps) {
    const {
        className = '',
        sx = {},
        data = [],
        checkboxsection = false,
        setEdit,
        onChange = () => false,
        ...rest
    } = props;
    return (
        <Box
            className={`${className}`}
            {...rest}
        >
            {data.length > 0 ? (
                <TreeView
                    defaultCollapseIcon={<ExpandIcon />}
                    defaultExpandIcon={<CollapseIcon />}
                    defaultParentIcon={<SettingIcon />}
                    sx={{ height: 220, flexGrow: 1, m: 2 }}
                >
                    {Array.isArray(data) &&
                        data.map((val: any, index: number) => {
                            return renderTree(val, 'parent', checkboxsection && true, setEdit, onChange, index);
                        })}
                </TreeView>
            ) : (
                <Typography sx={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
                    No data found</Typography>
            )}
        </Box>
    );
};

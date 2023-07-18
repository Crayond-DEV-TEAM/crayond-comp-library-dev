import { Checkbox, Grid, FormControl } from '@mui/material';
import { Box, Typography } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import { styled } from '@mui/material/styles';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { styles } from './style';
import SettingIcon from '../../assets/settingIcon';
import CollapseIcon from '../../assets/collapseIcon';
import ExpandIcon from '../../assets/expandIcon';
import InfoIcon from '../../assets/InfoIcon';
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
            parent: '',
            parentChild: ''
        },
        checkBoxStyles = {
            checkboxBorderRadius: '',
            checkboxIcon: null,
            uncheckedIcon: null,
            checkboxWidth: '',
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
                    <Typography sx={{ ...styles?.child, ...fontsize }}>
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
                    filter?.map((val: {
                        value: string
                    }, i: number) => {
                        return (
                            <FormControl key={i}
                                sx={{ ...styles?.formControl, ...formControlPropsSx }}
                            >{val?.value ?
                                <BpCheckbox
                                    disable={disable}
                                    checkboxBorderRadius={checkBoxStyles?.checkboxBorderRadius}
                                    key={i}
                                    onChange={(e: any) => onChange(e?.target?.checked, val?.value, props?.nodes?.id, state)}
                                    checked={nodes?.allowed?.includes(val?.value) ? true : false}
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
    nodes: {
        child: [];
        id: string,
        name: string
    },
    test: string,
    isCheckBox: boolean,
    setEdit: boolean,
    disable: boolean,
    onChange: (e: any, val: string, id: string, data: []) => void,
    index: number,
    state: object[],
    customLabel: CustomLabelProps | {
        fontsize: string; iconProp: {
            parent: JSX.Element,
            parentChild: JSX.Element
        };
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    checkBoxStyles: CheckBoxProps | {
        checkboxBorderRadius: string,
        checkboxIcon: null,
        uncheckedIcon: null,
        checkboxWidth: string,
        checkboxHeight: string,
    }
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
                checkBoxStyles={checkBoxStyles} />}
            heading={''}
            permissionHeadingSx={undefined} disable={false}
            checkBoxStyles={undefined}

        // You can add custom properties to each node as well
        // create={nodes?.create}
        // read={nodes?.read}
        // update={nodes?.update}
        // delete={nodes?.delete}
        >
            {Array.isArray(nodes?.child)
                ? nodes?.child?.map((node: {
                    child: [];
                    id: string,
                    name: string
                }) =>
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
            iconProp: {
                parent: <></>,
                parentChild: <></>
            }
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
        checkBoxStyles = {
            checkboxBorderRadius: '',
            checkboxIcon: null,
            uncheckedIcon: null,
            checkboxWidth: '',
            checkboxHeight: '',
        },
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
                    <Grid item {...rightSec?.breakpoints} style={{
                        justifyContent: "flex-end",
                        display: "flex",
                        alignItems: 'center'
                    }}>
                        {
                            checkboxsection &&
                            state?.[1]?.permissions?.map((val: string, i: number) => {
                                return (
                                    <Typography sx={{ ...styles?.headItems, ...permissionHeadingSx }} key={i}>
                                        {val}</Typography>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            }
            {state?.length > 0 && (
                <TreeView
                    defaultCollapseIcon={defaultCollapseIcon}
                    defaultExpandIcon={defaultExpandIcon}
                    sx={styles?.treeItem}
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
TreeComponent.defaultProps = {
    state: [
        {
          "id": "22afc36b-4f7f-42ca-9fce-1a30cc05456d",
          "name": "Onboarding",
          "child": [
            {
              "id": "831728ec-55f1-4f56-9b94-dbd20a36a565",
              "name": "Sign up",
              "child": [
                {
                  "id": "47d1a9fc-10fb-4d6e-90dc-93bff8277d39",
                  "name": "basic info",
                  "allowed": [
                    "read",
                    "create",
                    "update"
                  ],
                  "permissions": [
                    "read",
                    // "create",
                    // "delete",
                    "update",
                    "edit",
                  ]
                },
                {
                  "id": "e14bf7f2-c7af-4fe7-ae96-a56890e2d72b",
                  "name": "Proffesional details",
                  "allowed": [
                    "read",
                    "create",
                    "update"
                  ],
                  "permissions": [
                    "read",
                    "create",
                    "delete",
                    "update",
                    "edit",
                  ]
                }
              ]
            },
            {
              "id": "2ac0afc4-0621-4f2a-befa-732d307bd480",
              "name": "Sign in",
              "child": [
                {
                  "id": "3b7d6e21-d08b-493b-9884-f1c3a000faa2",
                  "name": "Sign in with mobile number",
                  "child": [
                    {
                      "id": "6509fa5d-3b1d-4f62-897a-320d1c9db0db",
                      "name": "company",
                      "allowed": [
                        "read",
                        "create",
                        "update"
                      ],
                      "permissions": [
                        "read",
                        "create",
                        "delete",
                        "update",
                        "edit",
                      ]
                    }
                  ],
                  "allowed": [
                    "read",
                    "create",
                    "update"
                  ],
                  "permissions": [
                    "read",
                    "create",
                    "delete",
                    "update",
                    "edit",
                  ]
                },
                {
                  "id": "9a21dde5-222f-451c-a601-4d0c3ed63bcf",
                  "name": "Sign in with email id",
                  "allowed": [
                    "read",
                    "create",
                    "update"
                  ],
                  "permissions": [
                    "read",
                    "create",
                    "delete",
                    "update",
                    "edit",
                  ]
                }
              ]
            },
            {
              "id": "610cb708-9440-49ad-b46c-08cb0c5da8b9",
              "name": "Forgot Password"
            }
          ],
          "allowed": [
            "read",
            "create",
            "update"
          ],
          "permissions": [
            "read",
            "create",
            "delete",
            "update",
            "edit",
          ]
        },
        {
          "id": "3a18ad99-04bf-4461-b55f-18c9384deed9",
          "name": "Dashboard",
          "child": [
            {
              "id": "4cdfbee6-6012-4a5f-94b7-c37009500c52",
              "name": "To-do",
              "child": [
                {
                  "id": "8a95c3a7-9d15-4584-a3a6-7e136083709b",
                  "name": "basic information",
                  "allowed": [
                    "update",
                    "read",
                    "create"
                  ],
                  "permissions": [
                    "read",
                    "create",
                    "delete",
                    "update",
                    "edit",
                  ]
                },
                {
                  "id": "38ba5e2d-6595-4c6d-b561-f8654b4d9e01",
                  "name": "Proffesional"
                }
              ]
            },
            {
              "id": "8be9607e-9293-4ad4-b0d7-cb76f4840cbc",
              "name": "Rename",
              "child": [
                {
                  "id": "08a55c83-c44b-451f-a3db-1436fd6e6cac",
                  "name": "Changed successfull",
                  "allowed": [
                    "update"
                  ],
                  "permissions": [
                    "read",
                    "create",
                    "delete",
                    "update",
                    "edit",
                  ]
                },
                {
                  "id": "722710fe-460b-422b-a2c0-7f29dcd36745",
                  "name": "Forgot number",
                  "allowed": [
                    "read"
                  ],
                  "permissions": [
                    "read",
                    "create",
                    "delete",
                    "update",
                    "edit",
                  ]
                }
              ]
            }
          ],
          "allowed": [
            "read",
          ],
          "permissions": [
            "read",
            "create",
            "delete",
            "update",
            "edit",
          ]
        }
      ],
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
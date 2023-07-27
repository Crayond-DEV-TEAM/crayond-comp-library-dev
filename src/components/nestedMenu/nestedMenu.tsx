import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Menu, MenuItem, ListItemIcon, MenuProps } from '@mui/material';
import { NestedMenuConfiguration } from './nestedMenu.Types';
import { useNestedMenuContext } from './nestedMenuContext';

export interface NestedMenuProps extends MenuProps {
  configuration: NestedMenuConfiguration[];
  menuPaperStyle?: object;
  menuItemStyle?: object;
}

const NestedMenu: React.FunctionComponent<NestedMenuProps> = (props) => {
  const { configuration, onClose, open, menuPaperStyle, menuItemStyle, ...others } = props;

  const { openMenu, closeAllMenus, closeMenu, findOpenMenu } =
    useNestedMenuContext();
  const [activeItemIndex, setActiveItemIndex] = useState<number>();

  const handleSubMenuClick = (event: React.MouseEvent) => {
    const configKey = event.currentTarget.getAttribute('data-config-key');
    if (configKey) {
      openMenu(configKey, event.currentTarget);
    }
  };

  const handleKeyDown = (event: any) => {
    event.stopPropagation();

    const length = configuration.length;
    // If no item is selected, and any arrow button gets clicked, then we want to select the first item
    if (
      ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'].includes(event.key) &&
      typeof activeItemIndex === 'undefined'
    ) {
      setActiveItemIndex(0);
      return;
    }

    const config = configuration[activeItemIndex!];
    if (event.key === 'ArrowDown') {
      if (activeItemIndex! + 1 >= length) {
        setActiveItemIndex(0);
        return;
      }
      setActiveItemIndex(activeItemIndex! + 1);
    } else if (event.key === 'ArrowUp') {
      if (activeItemIndex! === 0) {
        setActiveItemIndex(length - 1);
        return;
      }
      setActiveItemIndex(activeItemIndex! - 1);
    } else if (event.key === 'ArrowRight' && Array.isArray(config.subMenu)) {
      const target = document.querySelector(
        `*[data-config-key="${config.key}"]`
      );
      openMenu(config.key, target!);
    } else if (event.key === 'ArrowLeft') {
      closeMenu(config.key, true);
    }
  };

  return (
    <Menu
      open={open}
      onClose={closeAllMenus}
      onKeyDown={handleKeyDown}
      elevation={3}
      sx={{...menuPaperStyle}}
      {...others}
    >
      {configuration.map((config, index) => {
        if (!Array.isArray(config.subMenu) || config.subMenu.length === 0) {
          return (
            <MenuItem
              key={config.key}
              selected={index === activeItemIndex}
              onClick={config.onClick}
              sx={{...menuItemStyle}}
            >
              {config.caption}
            </MenuItem>
          );
        }

        const openMenuConfig = findOpenMenu(config.key);
        const isOpen = typeof openMenuConfig === 'object';

        return [
          <MenuItem
            //button
            key={config.key}
            selected={openMenuConfig?.key === config.key}
            data-config-key={config.key}
            onClick={handleSubMenuClick} 
            sx={{ display: 'flex', ...menuItemStyle }}
          >
            <span style={{ flexGrow: 1 }}>{config.caption}</span>
            <ListItemIcon
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <KeyboardArrowRightIcon />
            </ListItemIcon>
          </MenuItem>,
          <NestedMenu
            sx={{ marginLeft: '8px', ...menuPaperStyle }}
            key={`${config.key}_menu`}
            configuration={config.subMenu}
            open={isOpen}
            anchorEl={isOpen ? openMenuConfig!.target : null}
            anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            //getContentAnchorEl={null}
            onClose={closeAllMenus}
          />,
        ];
      })}
    </Menu>
  );
};

export default NestedMenu;

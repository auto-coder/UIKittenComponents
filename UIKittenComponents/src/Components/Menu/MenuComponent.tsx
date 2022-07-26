import React from 'react';
import { Icon, Menu, MenuGroup, MenuItem } from '@ui-kitten/components';

const SmartphoneIcon = (props:any) => (
  <Icon {...props} name='smartphone-outline'/>
);

const BrowserIcon = (props:any) => (
  <Icon {...props} name='browser-outline'/>
);

const ColorPaletteIcon = (props:any) => (
  <Icon {...props} name='color-palette-outline'/>
);

const StarIcon = (props:any) => (
  <Icon {...props} name='star'/>
);

 const MenuComponent = () => {

  const [selectedIndex, setSelectedIndex] = React.useState();

  return (
    <React.Fragment>

      <Menu
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <MenuGroup title='Akveo React Native' accessoryLeft={SmartphoneIcon}>
          <MenuItem title='UI Kitten' accessoryLeft={StarIcon}/>
          <MenuItem title='Kitten Tricks' accessoryLeft={StarIcon}/>
        </MenuGroup>
        <MenuGroup title='Akveo Angular' accessoryLeft={BrowserIcon}>
          <MenuItem title='Nebular' accessoryLeft={StarIcon}/>
          <MenuItem title='ngx-admin' accessoryLeft={StarIcon}/>
          <MenuItem title='UI Bakery' accessoryLeft={StarIcon}/>
        </MenuGroup>
        <MenuGroup title='Akveo Design' accessoryLeft={ColorPaletteIcon}>
          <MenuItem title='Eva Design System' accessoryLeft={StarIcon}/>
          <MenuItem title='Eva Icons' accessoryLeft={StarIcon}/>
        </MenuGroup>
      </Menu>

    </React.Fragment>
  );
};

export default MenuComponent;
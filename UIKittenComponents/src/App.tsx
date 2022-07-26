import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text,IconRegistry } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Layouts from './Components/Layout/layout';
import TextComponent from './Components/Text/TextComponent';
import IconComponent from './Components/Icon/IconComponent';
import CardComponent from './Components/Card/CardComponent';
import ListComponent from './Components/List/ListComponent';
import ButtonComponent from './Components/Button/ButtonComponent';
import ButtonGroupComponent from './Components/ButtonGroup/ButtonGroupComponent';
import CheckBoxComponent from './Components/CheckBox/CheckBoxComponent';
import RadioComponent from './Components/Radio/RadioComponent';
import ToggleComponent from './Components/Toggle/ToggleComponent';
import InputComponent from './Components/Input/InputComponent';
import SelectComponent from './Components/Select/SelectComponent';
import AutocompleteComponent from './Components/Autocomplete/AutocompleteComponent';
import ModalComponent from './Components/Modal/ModalComponent';
import TopNavigationComponent from './Components/TopNavigation/TopNavigationComponent';
import OverflowMenuComponent from './Components/OverflowMenu/OverflowMenuComponent';


const App=() => (
<ApplicationProvider {...eva} theme={eva.light}>
<IconRegistry icons={EvaIconsPack} />
    <OverflowMenuComponent/>
</ApplicationProvider>
  
);

export default App;


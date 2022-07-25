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


const App=() => (
<ApplicationProvider {...eva} theme={eva.light}>
<IconRegistry icons={EvaIconsPack} />
    <ButtonComponent/>
</ApplicationProvider>
  
);

export default App;


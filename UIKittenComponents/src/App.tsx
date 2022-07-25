import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text,IconRegistry } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Layouts from './Layout/layout';
import TextComponent from './Text/TextComponent';
import IconComponent from './Icon/IconComponent';
import CardComponent from './Card/CardComponent';


const App=() => (
<ApplicationProvider {...eva} theme={eva.light}>
<IconRegistry icons={EvaIconsPack} />
    <CardComponent />
</ApplicationProvider>
  
);

export default App;


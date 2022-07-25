import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Layouts from './Layout/layout';
import TextComponent from './Text/TextComponent';



const App=() => (
<ApplicationProvider {...eva} theme={eva.light}>
    <TextComponent />
</ApplicationProvider>
  
);

export default App;


import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Layouts from './layout';



const App=() => (
<ApplicationProvider {...eva} theme={eva.light}>

    <Layouts />
</ApplicationProvider>
  
);

export default App;


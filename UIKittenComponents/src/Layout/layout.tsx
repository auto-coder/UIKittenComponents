import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const Layouts = () => (
    <Layout style={styles.container}>
    
    <Layout style={styles.layout} level='4'>
      <Text>4</Text>
    </Layout>
    
    <Layout style={styles.layout} level='3'>
      <Text>3</Text>
    </Layout>
    
    <Layout style={styles.layout} level='2'>
      <Text>2</Text>
    </Layout>
    
    <Layout style={styles.layout} level='1'>
      <Text>1</Text>
    </Layout>
    
    </Layout>
    );

    export default Layouts;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'row',
        },
        layout: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
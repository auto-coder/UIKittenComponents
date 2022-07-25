import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout,Icon,Spinner } from '@ui-kitten/components';
const StarIcon = (props:any) => (
    <Icon {...props} name='star'/>
  );
  
  const LoadingIndicator = (props:any) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size='small'/>
    </View>
  );
 const ButtonComponent = () => (
    <Layout style={styles.container} level='1'>

    <Button style={styles.button} status='primary' accessoryLeft={StarIcon}>
      PRIMARY
    </Button>

    <Button style={styles.button} status='success' accessoryRight={StarIcon}>
      SUCCESS
    </Button>

    <Button style={styles.button} status='danger' accessoryLeft={StarIcon}/>

    <Button style={styles.button} appearance='ghost' status='danger' accessoryLeft={StarIcon}/>

    <Button style={styles.button} appearance='outline' accessoryLeft={LoadingIndicator}>
      LOADING
    </Button>

  </Layout>
);

export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
       
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    button: {
      margin: 2,
    },
    indicator: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
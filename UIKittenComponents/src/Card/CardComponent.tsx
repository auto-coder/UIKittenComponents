import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Card, Layout, Text } from '@ui-kitten/components';

const Header = (props:any) => (
    <View {...props}>
      <Text category='h6'>Maldives</Text>
      <Text category='s1'>By Wikipedia</Text>
    </View>
  );
  
  const Footer = (props:any) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button
        style={styles.footerControl}
        size='small'
        status='basic'>
        CANCEL
      </Button>
      <Button
        style={styles.footerControl}
        size='small'>
        ACCEPT
      </Button>
    </View>
  );

 const CardComponent = () => (
    <React.Fragment>
    <Layout style={styles.topContainer} level='1'>

      <Card style={styles.card} header={Header} status={'danger'} >
        <Text>With Header</Text>
      </Card>

      <Card style={styles.card} footer={Footer} appearance={'filled'} status={'success'}>
        <Text>With Footer</Text>
      </Card>

    </Layout>

    <Card style={styles.card} header={Header} footer={Footer}>
      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
        of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
        continent
      </Text>
    </Card>

  </React.Fragment>
);

export default CardComponent;

const styles = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      flex: 1,
      margin: 2,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    footerControl: {
      marginHorizontal: 2,
    },
  });
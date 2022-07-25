import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text,Layout,Divider} from '@ui-kitten/components';

 const TextComponent= () => (
    
<React.Fragment>
{/* Category Usage */ }
<Layout>
    <View style={styles.row}>
      <Text style={styles.text} category='h1'>H1</Text>
      <Text style={styles.text} category='h2'>H2</Text>
      <Text style={styles.text} category='h3'>H3</Text>
      <Text style={styles.text} category='h4'>H4</Text>
      <Text style={styles.text} category='h5'>H5</Text>
      <Text style={styles.text} category='h6'>H6</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.text} category='s1'>S1</Text>
      <Text style={styles.text} category='s2'>S2</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.text} category='p1'>P1</Text>
      <Text style={styles.text} category='p2'>P2</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.text} category='c1'>C1</Text>
      <Text style={styles.text} category='c2'>C2</Text>
      <Text style={styles.text} category='label'>LABEL</Text>
    </View>
</Layout>

{/* Appearence Usage */ }
<Divider  style={styles.divider} />
<Layout>
    <Text style={styles.text}>
      Default Text.
    </Text>

    <Text style={styles.text} appearance='hint'>
      Hint Text.
    </Text>

    <View style={styles.alternativeContainer}>
      <Text style={styles.text} appearance='alternative'>
        Alternative Text.
      </Text>
    </View>
</Layout>

{/* Status Usage */ }
<Divider style={styles.divider} />
<Layout style={styles.container} level='1'>
        <Text style={styles.text} status='primary'>Primary</Text>
        <Text style={styles.text} status='success'>Success</Text>
        <Text style={styles.text} status='info'>Info</Text>
        <Text style={styles.text} status='warning'>Warning</Text>
        <Text style={styles.text} status='danger'>Danger</Text>
        <Text style={styles.text} status='basic'>Basic</Text>
    <View style={styles.controlContainer}>
        <Text style={styles.text} status='control'>Control</Text>
    </View>
</Layout>

</React.Fragment>
);

export default TextComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
},
    
    controlContainer: {
        borderRadius: 4,
        margin: 4,
        padding: 4,
        backgroundColor: '#3366FF',
},

    row: {
    flexDirection: 'row',
    alignItems: 'center',
},

    text: {
    margin: 2,
},

    alternativeContainer: {
    borderRadius: 4,
    marginVertical: 2,
    backgroundColor: '#3366FF',
},

    divider:{
        margin:10,
        backgroundColor:'#c4c4c4',
        height:3,
    },
});
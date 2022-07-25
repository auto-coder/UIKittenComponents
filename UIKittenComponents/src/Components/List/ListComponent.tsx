import React from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

 const ListComponent = () => {

  const renderItemAccessory = (props:any) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  const renderItemIcon = (props:any) => (
    <Icon {...props} name='person'/>
  );

  const renderItem = ({ item, index }:any) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    maxHeight: 333,
  },
});
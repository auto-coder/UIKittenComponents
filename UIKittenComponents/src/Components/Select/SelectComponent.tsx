import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components';

const data = [
  'Developer',
  'Designer',
  'Product Manager',
];

const groupedData:any = {
  'UI/UX': [
    'Frontend Developer',
    'Designer',
  ],
  'Management': [
    'Product Manager',
    'Business Analyst',
  ],
};

 const SelectComponent = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [multiSelectedIndex, setMultiSelectedIndex] = React.useState([
    new IndexPath(0, 0),
    new IndexPath(1, 1),
  ]);

  const displayValue = data[selectedIndex.row];
  const groupDisplayValues = multiSelectedIndex.map(index => {
    const groupTitle = Object.keys(groupedData)[index.section];
    return groupedData[groupTitle][index.row];
  });

  const renderOption = (title:any) => (
    <SelectItem title={title}/>
  );

  const renderGroup = (title:any) => (
    <SelectGroup title={title}>
      {groupedData[title].map(renderOption)}
    </SelectGroup>
  );

  return (
    <Layout style={styles.container} level='1'>

      <Select
        style={styles.select}
        placeholder='Default'
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        {data.map(renderOption)}
      </Select>

      <Select
        style={styles.select}
        multiSelect={true}
        placeholder='Multi'
        value={groupDisplayValues.join(', ')}
        selectedIndex={multiSelectedIndex}
        onSelect={index => setMultiSelectedIndex(index)}>
        {Object.keys(groupedData).map(renderGroup)}
      </Select>

    </Layout>
  );
};

export default SelectComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 192,
  },
  select: {
    flex: 1,
    margin: 2,
  },
});

import React from 'react';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';

const movies = [
  { title: 'Star Wars' },
  { title: 'Back to the Future' },
  { title: 'The Matrix' },
  { title: 'Inception' },
  { title: 'Interstellar' },
];

const filter = (item:any, query:any) => item.title.toLowerCase().includes(query.toLowerCase());

 const AutocompleteComponent = () => {

  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState(movies);

  const onSelect = (index) => {
    setValue(movies[index].title);
  };

  const onChangeText = (query:any) => {
    setValue(query);
    setData(movies.filter(item => filter(item, query)));
  };

  const renderOption = (item:any, index:any) => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  return (
    <Autocomplete
      placeholder='Place your Text'
      value={value}
      onSelect={onSelect}
      onChangeText={onChangeText}>
      {data.map(renderOption)}
    </Autocomplete>
  );
};

export default AutocompleteComponent;
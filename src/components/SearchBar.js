import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import SearchStyles from '../styles/SearchStyles';

// SEARCH BAR COMPONENT

const SearchBar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (text) => {
    setSearchTerm(text);
    onSearchChange(text);
  };

  return (
    <View style={SearchStyles.searchBarContainer}>
      <TextInput
        placeholder="Search City..."
        value={searchTerm}
        onChangeText={handleSearchChange}
        style={SearchStyles.searchBarInput}
      />
    </View>
  );
};

export default SearchBar;
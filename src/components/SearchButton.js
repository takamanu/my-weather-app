import React from 'react';
import { View, Button } from 'react-native';
import SearchStyles from '../styles/SearchStyles';

// SEARCH BUTTON COMPONENT

const SearchButton = ({ onPress }) => {
  return (
    <View style={SearchStyles.searchButton}>
      <Button title="Find" onPress={onPress} />
    </View>
  );
};

export default SearchButton;

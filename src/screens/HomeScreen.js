import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import WeatherContainer from '../components/WeatherContainer';
import HomeStyles from '../styles/HomeStyles';
import { getWeatherData } from '../utils/api';
import SearchButton from '../components/SearchButton';

// HOMESCREEN VIEW

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // Handle search change
  const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

  // Handle button click
  const handleSearchClick = async () => {
    try {
      const data = await getWeatherData(searchTerm);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle LinkedIn URL Linking
  const handleLinkedInPress = () => {
    const linkedInUrl = 'https://www.linkedin.com/in/fauzan-ali-vijsma-720704b2/';
    Linking.openURL(linkedInUrl).catch(err => console.error('Error opening LinkedIn:', err));
  };

  return (
    <>
      <View style={HomeStyles.header}>
        <Image source={require('../assets/weather-icon.png')} style={HomeStyles.logo} />
        <Text style={HomeStyles.appTitle}>MyWeatherApp</Text>
      </View>
      <View style={HomeStyles.container}>

        <View style={HomeStyles.searchContainer}>
          <SearchBar onSearchChange={handleSearchChange} />
          <SearchButton onPress={handleSearchClick} />
        </View>

        <FlatList
          data={weatherData ? [weatherData] : []}
          renderItem={({ item }) => <WeatherContainer item={item} />}
          keyExtractor={(item) => 'weatherData'}
        />

      </View>
      <View style={HomeStyles.footer}>
        <Image source={require('../assets/weather-icon.png')} style={HomeStyles.footerIcon} />
        <View style={HomeStyles.footerContent}>
          <Text style={HomeStyles.footerText}>Fauzan Ali Vijsma</Text>
          <Text style={HomeStyles.footerSubtext}>© 2023</Text>
        </View>

        <View style={HomeStyles.footerButton}>
          <TouchableOpacity onPress={handleLinkedInPress} style={HomeStyles.footerButtonTouchable}>
            <Text style={HomeStyles.footerButtonText}>About Me</Text>
          </TouchableOpacity>
        </View>
      </View>

    </>

  );
};

export default HomeScreen;
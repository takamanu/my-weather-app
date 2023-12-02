import React from 'react';
import { View, Text, FlatList } from 'react-native';
import WeatherStyles from '../styles/WeatherStyles';

// WEATHER COMPONENT

const WeatherContainer = ({ item }) => {
  if (item.location == "Location not found.") {
    return (
      <View style={WeatherStyles.weatherContainer}>
        <View style={WeatherStyles.infoBox}>
          <Text style={WeatherStyles.infoLabel}>Location</Text>
          <Text style={WeatherStyles.infoValue}>{item.location}</Text>
        </View>
      </View>
    );

  } else {
    return (
      <View style={WeatherStyles.weatherContainer}>
        <View style={WeatherStyles.infoBox}>
          <Text style={WeatherStyles.infoLabel}>Today's Date</Text>
          <Text style={WeatherStyles.infoValue}>{item.datetime}</Text>
        </View>
        <View style={WeatherStyles.infoBox}>
          <Text style={WeatherStyles.infoLabel}>Location</Text>
          <Text style={WeatherStyles.infoValue}>{item.location}</Text>
        </View>
        <View style={WeatherStyles.infoBox}>
          <Text style={WeatherStyles.infoLabel}>Temperature</Text>
          <Text style={WeatherStyles.infoValue}>{item.temperature}</Text>
        </View>
        <View style={WeatherStyles.infoBox}>
          <Text style={WeatherStyles.infoLabel}>3-Day Forecast</Text>
          <FlatList
            horizontal
            data={item.forecastDay ? item.forecastDay.slice(0, 3) : []}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item: forecastItem, index }) => (
              <View style={[WeatherStyles.forecastCard, { backgroundColor: index % 2 === 0 ? '#e6f7ff' : '#cce5ff' }]}>
                <View style={WeatherStyles.forecastBox}>
                  <Text style={WeatherStyles.forecastItem}>{item.forecastDay[index]}</Text>
                </View>
                <View style={WeatherStyles.forecastBox}>
                  <Text style={WeatherStyles.forecastItem}>{item.forecastWeather[index]}</Text>
                </View>
                <View style={WeatherStyles.forecastBox}>
                  <Text style={WeatherStyles.forecastItem}>{item.forecastTemp[index]}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );

  }
  
};

export default WeatherContainer;

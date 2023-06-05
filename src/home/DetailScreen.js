import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const DetailScreen = ({route}) => {
  const {weatherData} = route.params;
  const day = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  const {main, weather, dt_txt} = weatherData;
  const {temp, humidity, wind} = main;
  const {icon, main: suhu} = weather[0];
  const {temp_min, temp_max} = main;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Weather Details</Text>
      <Text style={styles.descriptionText}>{day}</Text>
      <Text style={styles.descriptionText}>{time}</Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={[styles.descriptionTemp, {marginRight: 100}]}>
          {temp}°C
        </Text>
        <Image
          source={{uri: `https://openweathermap.org/img/w/${icon}.png`}}
          style={styles.weatherIcon}
        />
      </View>
      <Text style={[styles.descriptionText, {fontWeight: 'bold'}]}>{suhu}</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{
            position: 'absolute',
            right: 50
        }}>
          <Text style={styles.descriptionText}>Temp (Min)</Text>
          <Text style={[styles.descriptionText, {fontWeight: 'bold'}]}>{temp_min}°C</Text>
        </View>

        <View style={{
            position: 'absolute',
            left: 50
        }}> 
          <Text style={styles.descriptionText}>Temp (Max)</Text>
          <Text style={[styles.descriptionText, {fontWeight: 'bold'}]}>{temp_max}°C</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  weatherIcon: {
    width: 94,
    height: 94,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 8,
  },

  descriptionTemp: {
    margin: 10,
    marginTop: 30,
    fontSize: 26,
    fontWeight: 'bold',
  },
  cardItem: {
    width: '100%',
    height: 100,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15
  },
});

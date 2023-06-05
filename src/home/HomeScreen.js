import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    // Panggil API OpenWeather untuk mendapatkan data cuaca menggunakan latitude dan longitude

    const API_KEY = '9805bf3a6c588db542feac264d9b964d';
    const latitude = -6.302287708604747;
    const longitude = 106.6541003450607;

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setWeatherData(data.list);
    } catch (error) {
      console.error(error);
    }
  };

  const renderWeatherItem = ({item}) => {
    const {main, weather} = item;
    const {temp} = main;
    const {icon, main: suhu} = weather[0];
    const day = new Date().toDateString()
    const time = new Date().toLocaleTimeString();

    const navigateToWeatherDetails = () => {
      navigation.navigate('Detail', {weatherData: item});
    };

    return (
      <TouchableOpacity onPress={navigateToWeatherDetails} style={styles.btnItem}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: `https://openweathermap.org/img/w/${icon}.png`}}
            style={styles.weatherIcon}
          />
          <View>
            <Text style={styles.temperatureText}>{day} {time}</Text>
            <Text style={styles.temperatureText}>{suhu}</Text>
            <Text style={styles.temperatureText}>Temp : {temp}°C</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={weatherData}
        renderItem={renderWeatherItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  weatherIcon: {
    width: 64,
    height: 64,
  },
  temperatureText: {
    fontSize: 16,
    marginTop: 8,
  },
  btnItem: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 15
  },
});

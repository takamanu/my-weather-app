import { StyleSheet } from 'react-native';

// WEATHER COMPONENT STYLES

export default StyleSheet.create({
    weatherContainer: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 15,
        padding: 15,
        backgroundColor: '#87C4FF',
        elevation: 5,
        
      },
      infoBox: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
      },
      infoLabel: {
        fontSize: 20,  
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333', 
      },
      infoValue: {
        fontSize: 20,
        color: '#000', 
      },
    
      forecastContainer: {
        flexDirection: 'row',
        marginTop: 10,
      },
      forecastCard: {
        backgroundColor: '#fff',
        padding: 8,
        marginHorizontal: 5,
        borderRadius: 8,
        elevation: 3,
        minWidth: 150,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
      },
      forecastBox: {
        marginBottom: 10,
      },
      forecastItem: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
})
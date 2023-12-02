import { StyleSheet } from 'react-native';

// HomeScreen static styles

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'lightblue',
  },
  header: {
    height: 80,
    // paddingTop:50,
    // paddingBottom:50,
    backgroundColor: '#87C4FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  viewLeft: {
    alignContent: 'flex-start',
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 18, 
  },
  logo: {
    width: 40,
    height: 40,
  },
  navButtons: {
    flexDirection: 'row',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  footer: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#87C4FF',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  footerContent: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  footerSubtext: {
    fontSize: 14,
    color: '#fff',
  },
  footerButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#87C4FF',
  },
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f7',
    justifyContent: 'space-evenly',
  },
  landingImg: {
    paddingTop: 80,
    paddingBottom: 30,
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingActions: {
    flex: 1,
    marginHorizontal: 20
  },
  banner: {
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 40
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#9871f5'
  },
  buttonSecondary: {
    backgroundColor: '#04d361'
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20
  },
  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#9c98a6',
    fontSize: 12,
    lineHeight: 20,
    //maxWidth: 140,
    marginTop: 40
  }
});

export default styles;
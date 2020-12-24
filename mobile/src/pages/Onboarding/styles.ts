import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'flex-start',
  },
  onboardingImgContainer: {
    paddingVertical: 50,
    backgroundColor: '#8257e5',
    alignItems: 'center',
  },
  introContainer: {
    flexDirection: 'column',
    marginLeft: 30,
    //marginTop: 40
  },
  introSection: {
    color: '#6a6180',
    fontFamily: 'Archivo_700Bold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 44,
    opacity: 0.16
  },
  introDescription: {
    color: '#6a6180',
    fontFamily: 'Poppins_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 34,
    marginTop: 20
  },
  stepOneContainer: {
    marginHorizontal: 30,

    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default styles;
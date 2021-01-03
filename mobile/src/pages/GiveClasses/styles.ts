import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180
  },
  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  okButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold'
  },
  headerTitle: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 260,
    marginVertical: 40,
  },
  headerSubtitle: {
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24,
    maxWidth: 260,

    color: '#d4c2ff'
  }
});

export default styles;
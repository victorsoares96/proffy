import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f7',
  },
  header: { 
    backgroundColor: '#8257e5', 
    paddingTop: 40,
    paddingHorizontal: 40,
    paddingBottom: 50, 
    alignItems: 'center' 
  },
  avatar: { 
    width: 150, 
    height: 150, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  changeProfileImageButton: { 
    backgroundColor: '#04d361', 
    borderRadius: 50, 
    padding: 10, 
    marginLeft: 100, 
    marginTop: 100 
  },
  backgroundImage: { 
    width: 276, 
    height: 237, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  userDescriptionContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  userName: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    color: '#FFF'
  },
  userSubject: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#D4C2FF'
  }
});

export default styles;
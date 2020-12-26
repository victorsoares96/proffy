import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    //height: '100%',
    backgroundColor: '#E5E5E5',
  },
  loginImgContainer: {
    paddingVertical: 20,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45%'
  },
  loginFormContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    //backgroundColor: 'red'
    //paddingVertical: 50,
  },
  loginTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  loginTitleText: {
    color: '#32264d',
    fontFamily: 'Poppins_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 34
  },
  loginTitleCaption: {
    color: '#8257e5',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'right'
  },
  loginFormFields: {

  },
  loginFormTextInput: {
    width: '100%',
    height: 64,
    borderColor: '#e6e6f0',
    borderWidth: 1,
    backgroundColor: '#fafafc',
    paddingHorizontal: 24
  },
  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  passwordShowToggleButton: { 
    right: 50, 
    position: 'relative' 
  },
  loginSubContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rememberMeText: {
    color: '#9c98a6',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 24,
  },
  forgotPasswordText: {
    color: '#9c98a6',
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 24,

    textAlign: 'right'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    marginRight: 10
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 20
  },
  buttonPrimary: {
    backgroundColor: '#04d361'
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Archivo_700Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,

    textAlign: 'center'
  }
});

export default styles;
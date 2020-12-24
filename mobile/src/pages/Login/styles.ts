import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    //justifyContent: 'flex-start',
  },
  loginImgContainer: {
    paddingVertical: 50,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45%'
  },
  loginFormContainer: { 
    flex: 1, 
    justifyContent: 'center',
    margin: 30,
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
  }
});

export default styles;
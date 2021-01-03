import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f7'
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginTop: 24,
    marginBottom: 24
  },
  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputBlock: {
    width: '48%'
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
  headerTitle: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
})

export default styles;
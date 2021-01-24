import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      paddingLeft: 20,
      paddingRight: 20,
    },

    nav: {     
      
      width : '100%',
      alignItems : 'flex-start',
      marginBottom : 20
     
      
    },

    backButton: {
      flexDirection: 'row',
      width : 100,
      alignItems: 'center',
      marginLeft : -10
      
      
    },

    backImage: {
      height: 35,
      width: 35,
    },

    backText: {

      fontSize : 20,
      fontFamily: 'Arial, Helvetica, sans-serif',
      marginLeft : -8

    },

    logo: {
      width: '100%',
      marginBottom : 20
     
      
    },
    image: {
      height: 130,
      width: 130,
      
    },
    textContainer: {
      width: '100%',
      marginBottom : 20
    },

    text1: {
      fontSize: 20,
      color: '#767676',
      fontFamily: 'Arial, sans-serif',
    },

    text2: {
      fontSize: 35,
      color: '#131313',
      fontWeight: 'bold',
      marginBottom: 30,
    },

    forms: {
      width: '100%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#c3c3c3',
      borderBottomWidth: 1,

      marginBottom: 20,
    },

    input: {
      flex: 1,

      fontSize: 20,
    },

    iconUser: {
      height: 25,
      width: 25,
    },

    iconPassword: {
      height: 25,
      width: 25,
    },

    formTitle: {
      fontSize: 16,
      color: '#131313',
    },

    buttonContainer: {
      width: '100%',
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#e20030',
      padding: 10,
    },

    buttonText: {
      fontSize: 20,
      color: '#fff',
    },

    helperText: {
      alignSelf: 'center',
      marginTop: 10,
    },
  });

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import loginStyles from './loginStyle';

const styles = loginStyles();

const Login = ({navigation}) => {
  const goBack = () => {
    navigation.navigate('logo');

    setTimeout(
      () => {
        navigation.navigate('login');
      },

      3000,
    );
  };

  return (
    <View style={styles.body}>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Image
            style={styles.backImage}
            source={require('./../resources/back.png')}
          />
          <Text style={styles.backText}> Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('./../resources/logo.jpg')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}> Proceed with your </Text>
        <Text style={styles.text2}> Login </Text>
      </View>

      <View style={styles.forms}>
        <View>
          <Text style={styles.formTitle}> User name </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} autoFocus={true}
 />
          <Image
            style={styles.iconUser}
            source={require('./../resources/user.png')}
          />
        </View>

        <View>
          <Text style={styles.formTitle}> Password </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} secureTextEntry={true} />
          <Image
            style={styles.iconPassword}
            source={require('./../resources/password.png')}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* <Button style = {styles.button} title = 'Login'  color = '#e20030' /> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.helperText}> Forget Password! </Text>
      </View>
    </View>
  );
};

export default Login;

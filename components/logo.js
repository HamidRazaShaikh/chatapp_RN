/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import logoStyles from './logoStyle';

const styles = logoStyles();

const Logo = ({navigation}) => {

  useEffect(() => {
    setTimeout(
      () => {
        navigation.navigate('login');
      },

      3000,
    );
  }, []);



  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <View style={styles.logo}>
              <Image
                style={styles.logoImage}
                source={require('./../resources/logo.jpg')}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.textdiv}>
        <Text style={styles.heading}> Durar HR </Text>
        <Text style={styles.text}> The Complete HR solutions </Text>
      </View>
    </View>
  );
};

export default Logo;

import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Splash from "./Splash.js";
import Client from "./Client.js";
import Admin from "./Admin.js";
import Skip from "./Skip.js";
import Login from "./Login.js";
import { StatusBar, SafeAreaView, Text, StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";

const StackNavigatorf4eed113 = createStackNavigator(
  {
    splash: {
      screen: Splash
    },
    client: {
      screen: Client
    },
    admin:
    {
      screen: Admin
    },
    skip:
    {
      screen: Skip
    },
    login:
    {
      screen: Login
    }
  },
  {
    navigationOptions: {
      header: null
    },
    //initialRouteName: "splash"
    initialRouteName: "login"
  }
);

class Navigator extends React.PureComponent {
  static navigationOptions = { title: "Navigator" };
  constructor(props) {
    super(props);

    this.state = {};

    if (this.awake) {
      this.awake();
    }
  }

  awake() {
    const { reset, navigate, goBack } = this.props.navigation || {};
  }

  render() {
    return (
      <Fragment>   
        <SafeAreaView backgroundColor={`rgba(202, 192, 241, 1)`}>
        <StatusBar barStyle="dark-content"/>
        </SafeAreaView>
        <StackNavigatorf4eed113 />
      </Fragment>
    );
  }
}

Navigator.defaultProps = {};

Navigator = withNavigationProp(Navigator);

export default Navigator;

export {};

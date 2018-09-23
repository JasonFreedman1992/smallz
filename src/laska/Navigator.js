import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Splash from "./Splash.js";
import Main from "./Main.js";
import Login from "./Login.js";
import { createStackNavigator } from "react-navigation";

const StackNavigatorf4eed113 = createStackNavigator(
  {
    splash: {
      screen: Splash
    },
    main: {
      screen: Main
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
    initialRouteName: "splash"
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
    const { navigate, goBack } = this.props.navigation || {};
  }

  render() {
    return (
      <Fragment>
        <StackNavigatorf4eed113 />
      </Fragment>
    );
  }
}

Navigator.defaultProps = {};

Navigator = withNavigationProp(Navigator);

export default Navigator;

export {};

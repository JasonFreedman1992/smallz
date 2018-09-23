import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Image, StyleSheet, View } from "react-native";
import img9978bce0 from "./LogoMakr_9r00Xk.png";

const styles = StyleSheet.create({
  s9978bce0: { height: 200, width: 330 },
  sd2492949: {
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, 1)`,
    flex: 1,
    justifyContent: `center`
  }
});
class Splash extends React.PureComponent {
  static navigationOptions = { title: "Splash" };
  constructor(props) {
    super(props);

    this.state = {};

    if (this.awake) {
      this.awake();
    }
  }

  componentDidMount() {
    const { navigate, goBack } = this.props.navigation || {};

    const lifeCycleMethod = () => {
      setTimeout(() => {
        navigate("login");
      }, 1000);
    };

    lifeCycleMethod();
  }

  render() {
    return (
      <Fragment>
        <View style={styles.sd2492949}>
          <Image
            resizeMode={`contain`}
            source={img9978bce0}
            style={styles.s9978bce0}
          />
        </View>
      </Fragment>
    );
  }
}

Splash.defaultProps = {};

Splash = withNavigationProp(Splash);

export default Splash;

export { img9978bce0, styles };

import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  sa7f27131: { color: `rgba(255, 255, 255, 1)`, fontSize: 30 },
  s50a58322: {
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, 1)`,
    flex: 1,
    justifyContent: `center`
  }
});
class ClientQuotes extends React.PureComponent {
  static navigationOptions = { title: "ClientQuotes" };
  constructor(props) {
    super(props);

    this.state = {};

    if (this.awake) {
      this.awake();
    }
  }

  render() {
    return (
      <Fragment>
        <View style={styles.s50a58322}>
          <Text style={styles.sa7f27131}>ClientQuotes!</Text>
        </View>
      </Fragment>
    );
  }
}

ClientQuotes.defaultProps = {};

ClientQuotes = withNavigationProp(ClientQuotes);

export default ClientQuotes;

export { styles };

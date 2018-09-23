import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: `center`
    }
});
class Statusresultsloadingview extends React.PureComponent {
  static navigationOptions = { title: "Statusresultsloadingview" };
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
        <View style={styles.container} >
            <ActivityIndicator color={`rgba(202, 192, 241, 1)`} size={`large`} />
        </View>
      </Fragment>
    );
  }
}

Statusresultsloadingview.defaultProps = {};

Statusresultsloadingview = withNavigationProp(Statusresultsloadingview);

export default Statusresultsloadingview;

export { styles };
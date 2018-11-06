import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { RefreshControl, ActivityIndicator, KeyboardAvoidingView, TextInput, Dimensions, ImageBackground, TouchableHighlight, ScrollView, Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  sa7f27131: { color: `rgba(192, 186, 255, 1)`, fontSize: 30 },
  sa7f27132: { color: `rgba(64, 253, 103, 1)`, fontSize: 24 },
  s50a58322: {
    width: '100%',
    //alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, .25)`,
    flex: 1,
    //justifyContent: `center`
  }
});
class Analytics extends React.PureComponent {
  static navigationOptions = { title: "Analytics" };
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };

    if (this.awake) {
      this.awake();
    }
  }

  _onRefresh = () => {

    this.setState({
      refreshing: true
    })

    setTimeout(() => {
      this.setState({
        refreshing: false
      })
    }, 2000)
    
  }

  render() {
    return (
      <Fragment>
        <View style={styles.s50a58322}>
          <View style={{flex: 1, width: '100%'}}>
          <ScrollView
            refreshControl={
                <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                />
              }
          >
            <View style={{margin: 10, alignItems: 'center'}}>
              <Text style={styles.sa7f27131}>Total Customers:</Text>
              <Text style={styles.sa7f27131}>Total Charges:</Text>
              <Text style={styles.sa7f27131}>Total $$:</Text>
              <Text style={styles.sa7f27131}>$$ / Charges:</Text>
              <Text style={styles.sa7f27131}>$$ / Customer:</Text>
              <Text style={styles.sa7f27131}>Total Quotes:</Text>
              <Text style={styles.sa7f27131}>Total Notes:</Text>
            </View>
          </ScrollView>
          </View>
        </View>
      </Fragment>
    );
  }
}

Analytics.defaultProps = {};

Analytics = withNavigationProp(Analytics);

export default Analytics;

export { styles };

import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Dimensions, ImageBackground, ScrollView, TouchableHighlight, Text, StyleSheet, View } from "react-native";
import img93176135 from "./jubavrli.png";
import imgcadd08cd from "./BG.png";
const moment = require('moment');

let height = Dimensions.get('window').height;



const styles = StyleSheet.create({
  sa7f27131: { color: `rgba(255, 255, 255, 1)`, fontSize: 30 },
  s50a58322: {
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, 1)`,
    flex: 1,
    justifyContent: `center`
  },
  s732b811e: {
    backgroundColor: `rgba(74, 74, 110, 1)`,
    flex: 1,
    justifyContent: `flex-end`,
    overflow: `hidden`,
    position: `absolute`
  },
  s93176135: {
    height: `100%`,
    justifyContent: `flex-end`,
    maxHeight: 199,
    width: `100%`
  },
  sd4c6b84e: { flex: 1 },
  s44622035: { height: (height-85)/7.85 },
  s7fe23c89: { backgroundColor: `rgba(255, 255, 255, 1)`, flex: 1 },
  scadd08cd: {
    backgroundColor: `rgba(0, 0, 0, 1)`,
    height: `100%`,
    opacity: 1,
    width: `100%`
  },
  s397ad170: {
    width: `100%`,
      backgroundColor: `rgba(0, 0, 0, .25)`,
      flex: 1,
    }
});
class AdminQuotes extends React.PureComponent {
  static navigationOptions = { title: "AdminQuotes" };
  constructor(props) {
    super(props);

    this.state = {};

    if (this.awake) {
      this.awake();
    }
  }

  render() {
    const { props, state } = this;
    const navigate = this.props.navigation;

    return (
      <Fragment>
        <View style={styles.s7fe23c89}>
        <ImageBackground source={imgcadd08cd} style={styles.scadd08cd}>
          <View style={styles.s397ad170}>
          <ScrollView>
            {globals.quote_data.map((repeatForItem, i) => (
              <TouchableHighlight
                style={styles.s44622035}
                underlayColor={`rgba(255, 255, 255, 1)`}
                key={`${i}-44622035-204b-428c-84fd-3560afae236d`}
                any={repeatForItem}
                onPress={() => {
                  navigate.navigate("login");
                }}
              >
                <View style={styles.sd4c6b84e}>
                  <ImageBackground
                    source={img93176135}
                    style={styles.s93176135}
                  >
                    <View style={styles.s732b811e}>
                      <Text>{repeatForItem.body}</Text>
                      <Text>{repeatForItem.phone}</Text>
                      <Text>{moment(repeatForItem.timeSent).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
          </View>
            </ImageBackground>
        </View>
      </Fragment>
    );
  }
}

AdminQuotes.defaultProps = {
  eventsData: [
    {
      place: "Seattle, WA",
      miles: 50
    },
    {
      place: "New York, New York",
      miles: 2600
    },
    {
      place: "Los Angeles, CA",
      miles: 900
    },
  ]
};

AdminQuotes = withNavigationProp(AdminQuotes);

export default AdminQuotes;

export { styles };

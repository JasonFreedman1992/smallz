import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Dimensions, ImageBackground, TouchableHighlight, ScrollView, Text, StyleSheet, View } from "react-native";
import img93176135 from "./jubavrli.png";
import imgcadd08cd from "./BG.png";

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
    s44622035: { height: (height-85)/7.85, backgroundColor: `rgba(74, 74, 110, 1)`,  borderColor: `rgba(198, 76, 243, 1)`,
    borderWidth: 1, },
    s7fe23c89: { flex: 1 },
    scadd08cd: {
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
class History extends React.PureComponent {
  static navigationOptions = { title: "History" };
  constructor(props) {
    super(props);

    this.state = {
      currentPhone: "",
      currentName: "",
      current_history: "",
      current: "list",
      refreshing: "",
    };

    if (this.awake) {
      this.awake();
    }
  }

  onRefresh = () => {

    this.setState({
      refreshing: true
    })

      fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/get_cust_history', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: currentPhone
      })
    })
    .then(response => response.json())

    .then(response => {
      console.log(response.reason);
      if(response.body === "Auth")
      {
        this.setState({
          current_history: response.reason,
          refreshing: false,
        })

        //state.current_client_history = response.reason;
          setState({
            article2_name: currentName,
            article2_phone: currentPhone,
          })
      }
      else //if response.body === "Denied"
      {
        console.log("wrong 1");
        this.setState({
          refreshing: false
        })

        this.setState({
          refreshing: false
        })
      }
    })
    .catch(error => {
      console.log("wrong 2");
      console.log(response);
      console.log("wrong 2");
      console.log(error);
      this.setState({
        refreshing: false
        //article_bot2_current: "wrong"
      })
    })
  }

  render() {

    const { props, state } = this;

    return (
      <Fragment>
      {state.current === "list" ? (
        <View style={styles.s7fe23c89}>
          <ImageBackground style={styles.scadd08cd}>
            <View style={styles.s397ad170}>
              <ScrollView>
                {props.eventsData.map((repeatForItem, i) => (
                  <TouchableHighlight
                    style={styles.s44622035}
                    underlayColor={`rgba(255, 255, 255, 1)`}
                    key={`${i}-44622035-204b-428c-84fd-3560afae236d`}
                    onPress={() => {
                        
                    }}
                  >
                    <View style={styles.sd4c6b84e}>
                        <View style={styles.s732b811e}>
                          <Text>City</Text>
                          <Text>Distance</Text>
                          <Text>Date</Text>
                        </View>
                    </View>
                  </TouchableHighlight>
                ))}
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      ): null}
      {state.current === "article" ? (
        <View>
          
        </View>
      ): null}
      </Fragment>
    );
  }
}

History.defaultProps = {
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
        {
          place: "San Francisco, CA",
          miles: 750
        },
      ]

};

History = withNavigationProp(History);

export default History;

export { styles };

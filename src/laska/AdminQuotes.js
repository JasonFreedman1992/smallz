import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { ActivityIndicator, KeyboardAvoidingView, RefreshControl, Dimensions, ImageBackground, ScrollView, TouchableHighlight, Text, StyleSheet, View } from "react-native";
import img93176135 from "./jubavrli.png";
import imgcadd08cd from "./BG.png";
import Icon from "./_laska_/Icon";
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
  sd4c6b84e: { flex: 1, backgroundColor:`rgba(74, 74, 110, 1)`,
  borderColor: `rgba(198, 76, 243, 1)`,
  borderWidth: 1,
},
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
    },
    item_body: {
      color: `rgba(64, 253, 103, 1)`
    },
    item_date: {
      color: `rgba(255, 255, 255, 1)`
    },
    item_phone: {
      color: `rgba(192, 186, 255, 1)`
    },
    sedd01e1e: { color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5 },
    sb6797fe4: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 20 },
    sdf566e0f: { color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5 },
    s59a65273: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 5 },
    sc1cfa38d: { color: `rgba(64, 253, 103, 1)`, fontSize: 18, margin: 5 },
    sa6ccf43c: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 5 },
    sbb37430a: { color: `rgba(255, 255, 255, 1)`, fontSize: 18, margin: 5 },
    sa0cf86e2: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 5 },
    s9be9753c: { flex: 1 },
    s1c4ded82: { height: `100%`, width: `100%` },
    s7181d70a: { alignItems: `center`, flex: 1, justifyContent: `center` },
    s3c247739: {
      alignItems: `center`,
      backgroundColor: `rgba(255, 83, 83, 0.45)`,
      flex: 1,
      justifyContent: `center`,
      margin: 10
    },
    sff493afb: { height: 100, width: '100%' },
    s3e2c715c: {
      backgroundColor: `rgba(0, 0, 0, 0.25)`,
      height: 210,
      margin: 20,
      marginTop: 0
    },
    sff493afc: { marginTop: 0, height: 100, width: '100%' },
    sc4aa036b: {
      alignItems: `center`,
      backgroundColor: `rgba(175, 163, 233, 0.69)`,
      flex: 1,
      justifyContent: `center`,
      margin: 10
    },
    s88b1bf09: {
      color: 'white',
      fontSize: 18
    },
    sa6743b22: {
      height: 210,
      margin: 20,
      marginBottom: 20,
      marginTop: 0,
      alignItems: `center`,
      backgroundColor: `rgba(0, 0, 0, 0.25)`,
      flex: 1,
      justifyContent: `center`
    },
    sa6743b23: {
      height: 210,
      margin: 20,
      marginBottom: 20,
      marginTop: 0,
      alignItems: `center`,
      backgroundColor: `rgba(0, 255, 46, 0.4)`,
      flex: 1,
      justifyContent: `center`
    },
    sa6743b24: {
      height: 210,
      margin: 20,
      marginBottom: 20,
      marginTop: 0,
      alignItems: `center`,
      backgroundColor: `rgba(255, 0, 0, 0.4)`,
      flex: 1,
      justifyContent: `center`
    },
    sb1470029: { color: `rgba(255, 255, 255, 1)`, fontSize: 65 },
    sd1b9a1c5: {
      color: `rgba(255, 255, 255, 1)`,
      fontSize: 18,
      fontWeight: `bold`
    },

});
class AdminQuotes extends React.PureComponent {
  static navigationOptions = { title: "AdminQuotes" };
  constructor(props) {
    super(props);

    this.state = {
      current: "list",
      refreshing: false,
      bot_current: "form",
      response_reason: "Marked as read!!",
    };

    if (this.awake) {
      this.awake();
    }
  }

  _onRefresh = () => {

    this.setState({
      refreshing: true
    })

    fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/quote_data_request', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: "chris",
      })
    })
    // reponse to json
    .then(response => response.json())
    .then(response => {
      if(response.body === "Auth")
      {
        console.log(response);
        //console.log(response.reason);
        globals.quote_data = response.reason;
        this.setState({
          refreshing: false
        })
      }
      else // response.body === "Denied"
      {
        console.log(response1);
        this.setState({
          refreshing: false
        })
      }
    })
    .catch(error1 => {
      console.log(error1);
      this.setState({
        refreshing: false
      })
    });
  }

  render() {
    const { props, state } = this;
    const setState = this.setState.bind(this);
    const navigate = this.props.navigation;

    return (
      <Fragment>
        { state.current === "list" ? (
        <View style={styles.s7fe23c89}>
        <ImageBackground source={imgcadd08cd} style={styles.scadd08cd}>
          <View style={styles.s397ad170}>
          <ScrollView
            refreshControl={
              <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
              />
            }
          >
            {globals.quote_data.map((repeatForItem, i) => (
              <TouchableHighlight
                style={styles.s44622035}
                underlayColor={`rgba(255, 255, 255, 1)`}
                key={`${i}-44622035-204b-428c-84fd-3560afae236d`}
                any={repeatForItem}
                onPress={() => {
                  this.setState({
                    current: "article"
                  })
                  //navigate.navigate("login");
                }}
              >
                <View style={styles.sd4c6b84e}>
                  <ImageBackground style={styles.s93176135}>
                    <View style={styles.s732b811e}>
                      <Text style={styles.item_phone}>Phone/Email: {repeatForItem.phone}</Text>
                      <Text style={styles.item_body}>Body: {repeatForItem.body.substring(0,40)}</Text>
                      <Text style={styles.item_date}>Date: {moment(repeatForItem.timeSent).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
          </View>
            </ImageBackground>
        </View>
        ) : null}
        { state.current === "article" ? (
          <View style={styles.s7181d70a}>
            <ImageBackground source={imgcadd08cd} style={styles.s1c4ded82}>
              <KeyboardAvoidingView style={styles.s9be9753c}>
                <ScrollView>
                  <View>
                    <View style={styles.sb6797fe4}>
                      <Text style={styles.sedd01e1e}>Phone/Email:</Text>
                      <Text style={styles.sdf566e0f}>Name:</Text>
                      <Text style={styles.sc1cfa38d}>
                        Body: what if this was so big thati t got so big that
                        itwas off to the side
                      </Text>
                      <Text style={styles.sbb37430a}>Date:</Text>
                    </View>
                  </View>
                  {state.bot_current === "form" ? (
                    <View style={styles.s3e2c715c}>
                      <View style={styles.sff493afb}>
                        <TouchableHighlight
                        shouldRasterizeIOS={true} renderToHardwareTextureAndroid={true}
                          style={styles.s3c247739}
                          onPress={() => {
                            //
                            // cancel
                            setState({
                              current: "list",
                            })
                          }}
                          underlayColor={`rgba(255, 255, 255, .6)`}
                        >
                          <Text style={styles.s88b1bf09}>Cancel</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.sff493afc}>
                        <TouchableHighlight
                          style={styles.sc4aa036b}
                          onPress={() => {
                            //
                            // submit
                            setState({
                              bot_current: "loading"
                            })

                            setTimeout(() => {
                              setState({
                                bot_current: "done"
                              })
                            },3000)

                            setTimeout(() => {
                              setState({
                                bot_current: "wrong"
                              })
                            }, 6000)

                            setTimeout(() => {
                              setState({
                                bot_current: "form"
                              })
                            }, 9000)
                          }}
                          underlayColor={`rgba(255, 255, 255, .6)`}
                        >
                          <Text style={styles.s88b1bf09}>Mark as Read</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                    ) : null}
                    {state.bot_current === "loading" ? (
                    <View style={styles.sa6743b22}>
                      <ActivityIndicator size='large'/>
                    </View>
                    ): null}
                    {state.bot_current === "done" ? (
                    <View style={styles.sa6743b23}>
                        <Icon iconIdentifier={`FontAwesome/check`} style={styles.sb1470029} />
                        <Text style={styles.sd1b9a1c5}>{this.state.response_reason}</Text>
                    </View>

                    ): null}
                    {state.bot_current === "wrong" ? (
                    <View style={styles.sa6743b24}>
                        <Icon iconIdentifier={`Entypo/cross`} style={styles.sb1470029} />
                    <Text style={styles.sd1b9a1c5}>Sorry! Something went wrong. =(</Text>
                    </View>
                    ): null}
                </ScrollView>
              </KeyboardAvoidingView>
            </ImageBackground>
          </View>
        ) : null}
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

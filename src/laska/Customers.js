import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { ActivityIndicator, KeyboardAvoidingView, TextInput, Dimensions, ImageBackground, TouchableHighlight, ScrollView, Text, StyleSheet, View } from "react-native";
import img93176135 from "./jubavrli.png";
import imgcadd08cd from "./BG.png";
import Icon from "./_laska_/Icon";

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
      alignItems: 'center',
      justifyContent: `center`,
      maxHeight: 199,
      width: `100%`
    },
    s93176136: {
      height: `100%`,
      justifyContent: `flex-end`,
      maxHeight: 199,
      width: `100%`
    },
    s7ba85f25: {
      color: `rgba(255, 255, 255, 1)`,
      height: 20,
      margin: 5,
      width: '100%'
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
      sa2282081: { flex: 1 },
    s2f214928: { fontSize: 45, margin: 5, color: 'white' },
    sf2f5c5b1: { flex: 1 },
    s270ef303: { flex: 1 },
    s8e82c08e: { backgroundColor: `rgba(0, 0, 0, 0.25)`, margin: 20 },
    s8aa63795: { color: `rgba(255, 255, 255, 1)`, fontSize: 18, margin: 5 },
    s3e2c715c: {
      backgroundColor: `rgba(0, 0, 0, 0.25)`,
      height: 210,
      margin: 20,
      marginTop: 0
    },
    sff493afb: { height: 100, width: '100%' },
    sff493afc: { marginTop: 0, height: 100, width: '100%' },
    s3c247739: {
      alignItems: `center`,
      backgroundColor: `rgba(255, 83, 83, 0.45)`,
      flex: 1,
      justifyContent: `center`,
      margin: 10
    },
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
    wrap: {
      flex: 1
    }
});
class Customers extends React.PureComponent {
  static navigationOptions = { title: "Customers" };
  constructor(props) {
    super(props);

    this.state = {
      current: "list",
      bot_current: "form",
      text_input_name: "",
      text_input_phone: "",
      text_input_email: "",
      text_input_level: "",
      text_input_pin: ""

    };

    if (this.awake) {
      this.awake();
    }
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
          <ScrollView>
            {props.eventsData.map((repeatForItem, i) => (
              <TouchableHighlight
                style={styles.s44622035}
                underlayColor={`rgba(255, 255, 255, 1)`}
                key={`${i}-44622035-204b-428c-84fd-3560afae236d`}
                onPress={() => {}}
              >
                <View style={styles.sd4c6b84e}>
                  <ImageBackground
                    style={styles.s93176136}
                  >
                    <View style={styles.s732b811e}>
                      <Text>City</Text>
                      <Text>Distance</Text>
                      <Text>Date</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableHighlight>
            ))} 
            <TouchableHighlight
            style={styles.s44622035}
            underlayColor={`rgba(255, 255, 255, .5)`}
            onPress={() => {
              setState({
                current: "status",
              })
            }}>
              <View style={styles.sd4c6b84}>
                <ImageBackground
                  
                  style={styles.s93176135}
                >

                  <Icon
                    iconIdentifier={`FontAwesome/plus`}
                    style={styles.s2f214928}
                  />
                </ImageBackground>
              </View>
            </TouchableHighlight>
          </ScrollView>
          </View>
          </ImageBackground>
        </View>
      ) : null}
      {state.current === "status" ? (
        <View style={styles.wrap}>
        <ImageBackground source={imgcadd08cd} style={styles.scadd08cd}>
          <KeyboardAvoidingView behavior={`padding`} style={styles.sf2f5c5b1}>
            <ScrollView style={styles.s270ef303}>
              <View style={styles.s8e82c08e}>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Name</Text>
                  <TextInput
                    placeholder={`Name`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_name: text
                      })
                    }}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Email</Text>
                  <TextInput
                    placeholder={`Email`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_email: text
                      })
                    }}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Phone Number</Text>
                  <TextInput
                    placeholder={`Phone #`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_phone: text
                      })
                    }}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Level</Text>
                  <TextInput
                    placeholder={`Level`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_level: text
                      })
                    }}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Temporary Pin</Text>
                  <TextInput
                    placeholder={`Temporary Pin #`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_pin: text
                      })
                    }}
                  />
                </View>
              </View>
              {state.bot_current === "form" ? (
              <View style={styles.s3e2c715c}>
                <View style={styles.sff493afb}>
                  <TouchableHighlight
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

                      fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/create_cust_request', {
                      
                      

                      })

                      setTimeout(() => {
                        setState({
                          bot_current: "done"
                        })
                      }, 3000)

                      setTimeout(() => {
                        setState({
                          bot_current: "wrong"
                        })
                      }, 6000)

                      setTimeout(() => {
                        setState({
                          bot_current: "form"
                        })
                      }, 10000)

                    }}
                    underlayColor={`rgba(255, 255, 255, .6)`}
                  >
                    <Text style={styles.s88b1bf09}>Submit</Text>
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
                  <Text style={styles.sd1b9a1c5}>Submitted</Text>
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
      ): null}
      </Fragment>
    );
  }
}

Customers.defaultProps = {
    eventsData: [
        {
          place: "Seattle, WA",
          miles: 50
        },
        {
          place: "New York, New York",
          miles: 2600
        },
      ]

};

Customers = withNavigationProp(Customers);

export default Customers;

export { styles };

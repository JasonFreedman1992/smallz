import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { TextInput, KeyboardAvoidingView, Dimensions, ImageBackground, TouchableHighlight, ScrollView, Text, StyleSheet, View } from "react-native";
import img93176135 from "./jubavrli.png";
import Icon from "./_laska_/Icon";
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
    s93176136: {
      height: `100%`,
      alignItems: 'center',
      justifyContent: `center`,
      maxHeight: 199,
      width: `100%`
    },
    sd4c6b84e: { flex: 1, backgroundColor:`rgba(74, 74, 110, 1)`,
  borderColor: `rgba(198, 76, 243, 1)`,
  borderWidth: 2,
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
    s2f214928: { fontSize: 45, margin: 5, color: 'white' },
    s44622037: { height: (height-85)/7.85 },
    sd4c6b84: { flex: 1 },
    s93176137: {
      height: `100%`,
      alignItems: 'center',
      justifyContent: `center`,
      maxHeight: 199,
      width: `100%`
    },
    s8aa63795: { color: `rgba(255, 255, 255, 1)`, fontSize: 18, margin: 5 },
    sa2282081: { flex: 1 },
    s8e82c08e: { backgroundColor: `rgba(0, 0, 0, 0.25)`, margin: 20 },
    s270ef303: { flex: 1 },
    sf2f5c5b1: { flex: 1 },
    wrap: { flex: 1 },
    s7ba85f25: {
      color: `rgba(255, 255, 255, 1)`,
      height: 20,
      margin: 5,
      width: '100%'
    },
});
class Current extends React.PureComponent {
  static navigationOptions = { title: "Current" };
  constructor(props) {
    super(props);

    this.state = {
      current: "list",
      bot_current: "form"
    };

    if (this.awake) {
      this.awake();
    }
  }

  render() {

    const { props, state } = this;

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
                onPress={() => {
                    
                }}
              >
                <View style={styles.sd4c6b84e}>
                  <ImageBackground
                    style={styles.s93176135}
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
              style={styles.s44622037}
              underlayColor={`rgba(255, 255, 255, 1)`}
              onPress={() => {
                this.setState({
                  current: "status",
                })
              }}>
              <View style={styles.sd4c6b84}>
                <ImageBackground
                  source={img93176135}
                  style={styles.s93176137}
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
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Email</Text>
                  <TextInput
                    placeholder={`Email`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Phone Number</Text>
                  <TextInput
                    placeholder={`Phone #`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Item</Text>
                  <TextInput
                    placeholder={`Level`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Temporary Pin</Text>
                  <TextInput
                    placeholder={`Temporary Pin #`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
        </View>
        ) : null}

      </Fragment>
    );
  }
}

Current.defaultProps = {
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

Current = withNavigationProp(Current);

export default Current;

export { styles };

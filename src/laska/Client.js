import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Aboutview from "./Aboutview.js";
import Contactview from "./Contactview.js";
import Statusview from "./Statusview.js";
import Servicesview from "./Servicesview.js";
import Services2view from "./Services2view.js";
import History from "./History.js";
import ClientQuotes from "./ClientQuotes.js";
import Icon from "./_laska_/Icon";
import imgcadd08cd from "./BG.png";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Permissions, Notifications } from "expo";

const styles = StyleSheet.create({
  sb5578ac3: { color: `rgba(0, 0, 0, 1)`, fontSize: 35, margin: 5 },
  s1fb2c3ba: { fontWeight: `bold`, marginTop: -4, textAlign: `center` },
  s396f5657: { alignItems: `center`, flex: 1 },
  s2f214928: { fontSize: 35, margin: 5 },
  s92157e6e: { fontWeight: `bold`, marginTop: -4, textAlign: `center` },
  sfad5c90a: { alignItems: `center`, flex: 1 },
  s220dec38: {
    alignItems: `center`,
    backgroundColor: `rgba(202, 192, 241, 1)`,
    flex: 1
  },
  s2938fdb0: { fontSize: 35, margin: 5 },
  s1ed362b5: { fontWeight: `bold`, marginTop: -4, textAlign: `center` },
  sa878652e: { alignItems: `center`, flex: 1 },
  seb349631: {
    alignItems: `center`,
    backgroundColor: `rgba(202, 192, 241, 1)`,
    flex: 1
  },
  se9cedb5b: { fontSize: 35, margin: 5 },
  sdb5e9373: { fontWeight: `bold`, marginTop: -4, textAlign: `center` },
  s16466d16: { alignItems: `center`, flex: 1 },
  s98df70cf: {
    alignItems: `center`,
    backgroundColor: `rgba(202, 192, 241, 1)`,
    flex: 1
  },
  navContainerColumns: {flex: 1, maxHeight: 65, flexDirection: `row`},
  container:{
    backgroundColor: `rgba(202, 192, 241, 1)`,
    flex: 1
  },
  backz:
  {
    flex: 1,
    backgroundColor: `rgba(0, 0, 0, 1)`
  }
});

registerForPushNotifications = async () => {
  // check for existing permissions
  const{ status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  console.log(status);
  let finalStatus = status;

  // if no existing permissions ask for user permission

  if(status !== 'granted')
  {
    const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if(finalStatus !== 'granted'){return;}

  let token = await Notifications.getExpoPushTokenAsync();

  console.log(token);
}

class Client extends React.PureComponent {
  static navigationOptions = { title: "Main" };
  constructor(props) {
    super(props);
    console.log("Mounting...");
    registerForPushNotifications();

    this.state = {
      current_tab: "status",
      color_status: `rgba(64, 253, 103, 1)`,
      color_history: `rgba(202, 192, 241, 1)`,
      color_quote: `rgba(202, 192, 241, 1)`,
      color_services: `rgba(202, 192, 241, 1)`,
      color_contact: `rgba(202, 192, 241, 1)`
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
          <ImageBackground source={imgcadd08cd} style={styles.backz}>
          {state.current_tab === "status" ? <Statusview /> : null}
          {state.current_tab === "history" ? <History navigation={navigate}/> : null}
          {state.current_tab === "quotes" ? <ClientQuotes navigation={navigate}/> : null}
          {state.current_tab === "services" ? <Services2view /> : null}
          {state.current_tab === "contact" ? <Contactview navigation={navigate}/> : null}
          <View style={styles.navContainerColumns}>
            <TouchableHighlight
              onPress={() => {
                globals.current_tab = "status";
                color_status = `rgba(64, 253, 103, 1)`;
                setState({
                  current_tab: "status",
                  color_status: `rgba(64, 253, 103, 1)`,
                  color_history: `rgba(202, 192, 241, 1)`,
                  color_quote: `rgba(202, 192, 241, 1)`,
                  color_services: `rgba(202, 192, 241, 1)`,
                  color_contact: `rgba(202, 192, 241, 1)`
                });
                
              }}
              
              style={{
                backgroundColor:this.state.color_status,
                alignItems: `center`,
                flex: 1,}}
              underlayColor={`rgba(64, 253, 103, 1)`}
            >
              <View style={styles.s396f5657}>
                <Icon
                  iconIdentifier={`FontAwesome/check-circle`}
                  style={styles.sb5578ac3}
                />
                <Text style={styles.s1fb2c3ba}>Status</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                globals.current_tab = "history";
                setState({
                  current_tab: "history",
                  color_status: `rgba(202, 192, 241, 1)`,
                  color_history: `rgba(64, 253, 103, 1)`,
                  color_quote: `rgba(202, 192, 241, 1)`,
                  color_services: `rgba(202, 192, 241, 1)`,
                  color_contact: `rgba(202, 192, 241, 1)`
                });
                
              }}
              style={{
                backgroundColor:this.state.color_history,
                alignItems: `center`,
                flex: 1,}}
              underlayColor={`rgba(64, 253, 103, 1)`}
            >
              <View style={styles.s16466d16}>
                <Icon
                  iconIdentifier={`FontAwesome/barcode`}
                  style={styles.s2938fdb0}
                />
                <Text style={styles.sdb5e9373}>History</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                globals.current_tab = "quotes";
                setState({
                  current_tab: "quotes",
                  color_status: `rgba(202, 192, 241, 1)`,
                  color_history: `rgba(202, 192, 241, 1)`,
                  color_quote: `rgba(64, 253, 103, 1)`,
                  color_services: `rgba(202, 192, 241, 1)`,
                  color_contact: `rgba(202, 192, 241, 1)`
                });
              }}
              style={{
                backgroundColor:this.state.color_quote,
                alignItems: `center`,
                flex: 1,}}
              underlayColor={`rgba(64, 253, 103, 1)`}
            >
              <View style={styles.s16466d16}>
                <Icon
                  iconIdentifier={`FontAwesome/money`}
                  style={styles.se9cedb5b}
                />
                <Text style={styles.sdb5e9373}>Quote</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                globals.current_tab = "services";
                setState({
                  current_tab: "services",
                  color_status: `rgba(202, 192, 241, 1)`,
                  color_history: `rgba(202, 192, 241, 1)`,
                  color_quote: `rgba(202, 192, 241, 1)`,
                  color_services: `rgba(64, 253, 103, 1)`,
                  color_contact: `rgba(202, 192, 241, 1)`
                });
              }}
              style={{
                backgroundColor:this.state.color_services,
                alignItems: `center`,
                flex: 1,}}
              underlayColor={`rgba(64, 253, 103, 1)`}
            >
              <View style={styles.sfad5c90a}>
                <Icon
                  iconIdentifier={`FontAwesome/align-left`}
                  style={styles.s2f214928}
                />
                <Text style={styles.s92157e6e}>Services</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                globals.current_tab = "contact";
                setState({
                  current_tab: "contact",
                  color_status: `rgba(202, 192, 241, 1)`,
                  color_history: `rgba(202, 192, 241, 1)`,
                  color_quote: `rgba(202, 192, 241, 1)`,
                  color_services: `rgba(202, 192, 241, 1)`,
                  color_contact: `rgba(64, 253, 103, 1)`
                });
              }}
              style={{
                backgroundColor:this.state.color_contact,
                alignItems: `center`,
                flex: 1,}}
              underlayColor={`rgba(64, 253, 103, 1)`}
            >
              <View style={styles.s16466d16}>
                <Icon
                  iconIdentifier={`FontAwesome/phone-square`}
                  style={styles.s2938fdb0}
                />
                <Text style={styles.sdb5e9373}>Contact</Text>
              </View>
            </TouchableHighlight>
          </View>
          </ImageBackground>
      </Fragment>
    );
  }
}

Client.defaultProps = {};

Client = withNavigationProp(Client);

export default Client;

export { styles };

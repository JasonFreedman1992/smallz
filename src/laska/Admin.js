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
import Icon from "./_laska_/Icon";
import Analytics from "./Analytics.js";
import Current from "./Current.js";
import Customers from "./Customers.js";
import AdminQuotes from "./AdminQuotes.js";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView
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
  touchableStyle:
  {
    backgroundColor: `rgba(202, 192, 241, 1)`,
    alignItems: `center`,
    flex: 1,
    alignItems:`center`
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

class Admin extends React.PureComponent {
  static navigationOptions = { title: "Main" };
  constructor(props) {
    super(props);
    console.log("Mounting...");
    registerForPushNotifications();

    this.state = {
      current_tab: "customers",
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
          {state.current_tab === "customers" ? <Customers navigation={navigate}/> : null}
          {state.current_tab === "current" ? <Current /> : null}
          {state.current_tab === "quotes" ? <AdminQuotes navigation={navigate}/> : null}
          {state.current_tab === "analytics" ? <Analytics /> : null}
          <View style={styles.navContainerColumns}>
            <TouchableHighlight
              onPress={() => {
                setState({
                  current_tab: "customers"
                });
              }}
              style={styles.touchableStyle}
              underlayColor={`rgba(222, 222, 222, 1)`}
            >
              <View style={styles.s396f5657}>
                <Icon
                  iconIdentifier={`FontAwesome/users`}
                  style={styles.sb5578ac3}
                />
                <Text style={styles.s1fb2c3ba}>Customers</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setState({
                  current_tab: "current"
                });
              }}
              style={styles.touchableStyle}
              underlayColor={`rgba(222, 222, 222, 1)`}
            >
              <View style={styles.s16466d16}>
                <Icon
                  iconIdentifier={`FontAwesome/wrench`}
                  style={styles.se9cedb5b}
                />
                <Text style={styles.sdb5e9373}>Current</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setState({
                  current_tab: "quotes"
                });
              }}
              style={styles.touchableStyle}
              underlayColor={`rgba(222, 222, 222, 1)`}
            >
              <View style={styles.sfad5c90a}>
                <Icon
                  iconIdentifier={`FontAwesome/money`}
                  style={styles.s2f214928}
                />
                <Text style={styles.s92157e6e}>Quotes</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setState({
                  current_tab: "analytics"
                });
              }}
              style={styles.touchableStyle}
              underlayColor={`rgba(222, 222, 222, 1)`}
            >
              <View style={styles.s16466d16}>
                <Icon
                  iconIdentifier={`FontAwesome/bar-chart`}
                  style={styles.s2938fdb0}
                />
                <Text style={styles.sdb5e9373}>Analytics</Text>
              </View>
            </TouchableHighlight>
          </View>
      </Fragment>
    );
  }
}

Admin.defaultProps = {};

Admin = withNavigationProp(Admin);

export default Admin;

export { styles };

import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Icon from "./_laska_/Icon";
import { Linking, StyleSheet, Text, View, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  s74860ae4: { color: `rgba(59, 89, 152, 1)`, fontSize: 40 },
  s9e4df402: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    fontWeight: `bold`
  },
  s93af10a8: { alignItems: `center`, flex: 0 },
  s147db180: { alignItems: `center`, flex: 0, marginRight: 5, minWidth: 40 },
  sa808bb40: { color: `rgba(230, 65, 126, 1)`, fontSize: 40 },
  s253b1053: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    fontWeight: `bold`
  },
  s58ba6bf7: { alignItems: `center`, flex: 0, marginLeft: 5 },
  s1e73dd22: { alignItems: `center`, minWidth: 40 },
  s833054c2: { color: `rgba(255, 48, 48, 1)`, fontSize: 40 },
  sa8ef7fca: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    fontWeight: `bold`
  },
  s75e14fe2: { alignItems: `center`, flex: 0, marginLeft: 10 },
  sb9be6d83: { alignItems: `center`, minWidth: 40 },
  s96368d72: {
    alignItems: `flex-start`,
    justifyContent: `center`,
    marginTop: 20,
    flexDirection: `row`
  },
  sb334c867: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    marginTop: 20,
    textAlign: `center`
  },
  s1da27553: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    marginTop: 20,
    textAlign: `center`
  },
  s9b5052e9: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    marginTop: 20,
    textAlign: `center`
  },
  sffcccc76: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s0ac6189a: {
    backgroundColor: `rgba(0, 0, 0, .5)`,
    flex: 1,
    justifyContent: `center`
  }
});
class Contactview extends React.PureComponent {
  static navigationOptions = { title: "contact_view" };
  constructor(props) {
    super(props);

    this.state = {};

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
        <View style={styles.s0ac6189a}>
          <View style={styles.s96368d72}>
            <TouchableHighlight style={styles.s147db180} onPress={() => {
              Linking.openURL('https://www.facebook.com/CEComputerRepair/');
            }}
            underlayColor={`rgba(255, 255, 255, .5)`}>
              <View style={styles.s93af10a8}>
                <Icon
                  iconIdentifier={`FontAwesome/facebook`}
                  style={styles.s74860ae4}
                />
                <Text style={styles.s9e4df402}>FB</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.s1e73dd22} onPress={() => {
              Linking.openURL('https://www.instagram.com/cecomputerrepairs/');
            }}
            underlayColor={`rgba(255, 255, 255, .5)`}>
              <View style={styles.s58ba6bf7}>
                <Icon
                  iconIdentifier={`FontAwesome/instagram`}
                  style={styles.sa808bb40}
                />
                <Text style={styles.s253b1053}>Insta</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sb9be6d83} onPress={() => {
              Linking.openURL('https://www.yelp.com/biz/ce-computer-repair-lynnwood');
            }}
            underlayColor={`rgba(255, 255, 255, .5)`}>
              <View style={styles.s75e14fe2}>
                <Icon
                  iconIdentifier={`FontAwesome/yelp`}
                  style={styles.s833054c2}
                />
                <Text style={styles.sa8ef7fca}>Yelp</Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.sb334c867}>WWW.CECOMPUTERREPAIRS.COM</Text>
          <Text style={styles.s1da27553}>(206) 687-6160</Text>
          <Text style={styles.s9b5052e9}>16825 48th Ave W Suite 254</Text>
          <Text style={styles.sffcccc76}>Lynnwood, WA 98037</Text>
        </View>
      </Fragment>
    );
  }
}

Contactview.defaultProps = {};

Contactview = withNavigationProp(Contactview);

export default Contactview;

export { styles };

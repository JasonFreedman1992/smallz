import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Button, Image, StyleSheet, Text, View, ScrollView } from "react-native";
import img22b990a6 from "./laptop_resize.jpg";
import img12d021bf from "./ChrisEsponda_1.png";
import img8c29cc4f from "./JasonFreedman.png";

const styles = StyleSheet.create({
  s22b990a6: {
    height: 200,
    marginBottom: 20,
    maxHeight: 260,
    maxWidth: 620,
    width: 330
  },
  sd05cf22a: {
    color: `rgba(202, 192, 241, 1)`,
    fontSize: 24,
    fontWeight: `900`,
    marginBottom: 20,
    textAlign: `center`
  },
  s7ac03361: {
    color: `rgba(255, 255, 255, 1)`,
    marginBottom: 20,
    textAlign: `center`
  },
  s12d021bf: {
    height: 200,
    marginBottom: 20,
    maxHeight: 260,
    maxWidth: 620,
    width: 330
  },
  s6e3f56c1: {
    color: `rgba(202, 192, 241, 1)`,
    fontSize: 24,
    fontWeight: `900`,
    marginBottom: 20,
    textAlign: `center`
  },
  seef7ba15: {
    color: `rgba(255, 255, 255, 1)`,
    marginBottom: 20,
    textAlign: `center`
  },
  s8c29cc4f: {
    height: 200,
    marginBottom: 20,
    maxHeight: 260,
    maxWidth: 620,
    width: 330
  },
  s1b964c1a: {
    color: `rgba(202, 192, 241, 1)`,
    fontSize: 24,
    fontWeight: `900`,
    marginBottom: 20,
    textAlign: `center`
  },
  s016e0076: {
    color: `rgba(255, 255, 255, 1)`,
    marginBottom: 20,
    textAlign: `center`
  },
  s621afb90: { alignItems: `center` },
  sa6e2f2a4: { backgroundColor: `rgba(0, 0, 0, 1)`, flex: 1 }
});
class Aboutview extends React.PureComponent {
  static navigationOptions = { title: "about_view" };
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
        <ScrollView style={styles.sa6e2f2a4}>
          <View style={styles.s621afb90}>
            <Image
              resizeMode={`contain`}
              source={img22b990a6}
              style={styles.s22b990a6}
            />
            <Text style={styles.sd05cf22a}>CE Computer Repair</Text>
            <Text selectable style={styles.s7ac03361}>
              Providing desktop, laptop, and cel-phone repairs, diagnostics, and
              consulting to the Lynnwood and Seattle areas for 5+ years. As of
              2018 we are proud to be offering mobile and web apps!
            </Text>
            <Image
              resizeMode={`contain`}
              source={img12d021bf}
              style={styles.s12d021bf}
            />
            <Text style={styles.s6e3f56c1}>Chris Esponda</Text>
            <Text style={styles.seef7ba15}>
              Chris Esponda is the owner of C.E. Computer Repairs &amp; Better
              Apps.&nbsp; Chris manages, fulfills orders, and is the staple
              friendly face for the Company.&nbsp; You can always find him with
              a smile and a couple of trusty companions.
            </Text>
            <Image
              resizeMode={`contain`}
              source={img8c29cc4f}
              style={styles.s8c29cc4f}
            />
            <Text style={styles.s1b964c1a}>Jason Freedman</Text>
            <Text style={styles.s016e0076}>
              Jason Freedman is very fit in the
              nerd-cave. Forever sworn to craft websites and mobile apps until
              his fingers fall off.
            </Text>
          </View>
        </ScrollView>
        
      </Fragment>
    );
  }
}

Aboutview.defaultProps = {};

Aboutview = withNavigationProp(Aboutview);

export default Aboutview;

export { img22b990a6, img12d021bf, img8c29cc4f, styles };

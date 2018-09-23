import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  ScrollView
} from "react-native";
import img5bd5c707 from "./phone_resized.png";

const styles = StyleSheet.create({
  sfadda75b: { color: `rgba(255, 255, 255, 1)`, fontSize: 30, opacity: 1 },
  s83fe980b: {
    backgroundColor: `rgba(0, 0, 0, 1)`,
    flex: 0,
    justifyContent: `center`,
    opacity: 1
  },
  s5bd5c707: {
    alignItems: `center`,
    height: `100%`,
    justifyContent: `center`,
    width: `100%`
  },
  s725dc4f0: { backgroundColor: `rgba(255, 255, 255, 1)`, flex: 1 },
  se78ac4d6: {
    borderColor: `rgba(255, 255, 255, 1)`,
    borderWidth: 0,
    height: 200
  },
  sfd5f3fe0: { backgroundColor: `rgba(255, 255, 255, 1)`, flex: 1 }
});
class Servicesview extends React.PureComponent {
  static navigationOptions = { title: "services_view" };
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
        <View style={styles.sfd5f3fe0}>
          <ScrollView>
            {[
              "Computer Repair",
              "Mobile Repair",
              "Website Dev",
              "Mobile App Dev",
              "TV Repair"
            ].map((repeatForItem, i) => (
              <TouchableHighlight
                style={styles.se78ac4d6}
                underlayColor={`rgba(255, 255, 255, 1)`}
                key={`${i}-e78ac4d6-5ad0-404b-a484-6b0b29ce3f00`}
                onPress={() => {}}
              >
                <View style={styles.s725dc4f0}>
                  <ImageBackground
                    source={img5bd5c707}
                    style={styles.s5bd5c707}
                  >
                    <View
                      style={[
                        styles.s83fe980b,
                        {
                          backgroundColor: `rgba(0, 0, 0, .25)`,
                          position: `absolute`
                        }
                      ]}
                    >
                      <Text style={styles.sfadda75b}>{repeatForItem}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}

Servicesview.defaultProps = {};

Servicesview = withNavigationProp(Servicesview);

export default Servicesview;

export { img5bd5c707, styles };

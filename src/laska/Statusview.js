import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import {
  TextInput,
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} from "react-native";
import Icon from "./_laska_/Icon";
import Statusresultsloadingview from "./Statusresultsloadingview.js";
import Statusresultsview from "./Statusresultsview.js";

const styles = StyleSheet.create({
  sfbd14e8e: {
    backgroundColor: `rgba(255, 255, 255, 1.0)`,
    borderColor: `rgba(115, 106, 193, 1)`,
    borderRadius: 5,
    borderWidth: 2,
    fontSize: 36,
    height: 45,
    textAlign: `center`,
    width: 250
  },
  sccaa6084: { color: `rgba(159, 138, 235, 1)`, fontSize: 36, margin: 6 },
  s61384902: { alignItems: `center`, justifyContent: `center` },
  s3e9e1bda: {
    alignItems: `center`,
    flex: 0.1,
    justifyContent: `flex-end`,
    maxHeight: 45,
    flexDirection: `row`
  },
  s2c06ba8c: { color: `rgba(255, 255, 255, 1)`, fontSize: 30 },
  sc7c80744: {
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, .25)`,
    flex: 1,
    justifyContent: `center`
  }
});
class Statusview extends React.PureComponent {
  static navigationOptions = { title: "status_view" };
  constructor(props) {
    super(props);

    this.state = {
      current_tab: "status",
      current_text: "",

      status_input: "",
      status_input_length: "",
      status_text: "",
      statusData: ""
      
    };

    if (this.awake) {
      this.awake();
    }
  }

  render() {
    const { props, state } = this;
    const setState = this.setState.bind(this);
    return (
      <Fragment>
        {state.current_tab === "status_results_loading" ? (
            <View style={styles.sc7c80744}>
              <Statusresultsloadingview/>
            </View>
        ) : null}

        {state.current_tab === "status_results" ? (
            <View style={styles.sc7c80744}>
              <Statusresultsview 
              currentDescription = {state.statusData.description}
              currentEmail = {state.statusData.email}
              currentId = {state.statusData.id}
              currentItem = {state.statusData.item}
              currentName = {state.statusData.name}
              currentNotes = {state.statusData.notes}
              currentPhone = {state.statusData.phone}
              currentTimeSent = {state.statusData.timeSent}
              currentTimeFinished = {state.statusData.timeFinished}
              currentCharges = {state.statusData.charges}
              
              />
            </View>
        ) : null}

        {state.current_tab === "status" ? (
        <View style={styles.sc7c80744}>
          <View style={styles.s3e9e1bda}>
            <TextInput 
            keyboardType={`default`}
            underlineColorAndroid="transparent"
            onChangeText={newText => {
              setState({
                status_input_length: newText.length,
                status_input: newText,
                status_text: newText.length
                //events_text: newText.text
              });
            }}
            placeholder={`Order #`} style={styles.sfbd14e8e} />
            <TouchableHighlight
              style={styles.s61384902}
              underlayColor={`rgba(222, 222, 222, 1)`}
              onPress={() => {
                setState({
                  current_tab: "status_results_loading"
                })

                fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/get_status', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id: state.status_input
                })
              })
              // reponse to json
              .then(response => response.json())
                      
              .then(response => {
                //console.log("Reason" + response.reason);
                globals.statusData = response.reason;
                setState({
                  statusData: response.reason
                })
                console.log("status" + state.statusData);
               
                console.log(globals.statusData);
                  setTimeout(() => {
                    setState({
                      current_tab: "status_results"
                    })
                }, 2000)
              })
              .catch(error => {
                
              })

              }}
            >
              <Icon
                iconIdentifier={`FontAwesome/search`}
                style={styles.sccaa6084}
              />
            </TouchableHighlight>
          </View>
          <Text style={styles.s2c06ba8c}>Check your status!!</Text>
        </View>
        ) : null}
      </Fragment>
    );
  }
}

Statusview.defaultProps = {};

Statusview = withNavigationProp(Statusview);

export default Statusview;

export { styles };

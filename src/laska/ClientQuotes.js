import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import imgea5f27a3 from "./BG.png";
import Icon from "./_laska_/Icon";

const styles = StyleSheet.create({
  se1a46547: { flex: 1 },
  s2ce229b2: {
    color: `rgba(166, 61, 255, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    marginRight: 10,
    textAlign: `center`
  },
  sdfd203a3: { flex: 1.15 },
  s7085f604: {
    color: `rgba(251, 181, 89, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s2e727a34: { flex: 1 },
  s0f2769c2: {
    flex: 1,
    justifyContent: `flex-end`,
    margin: 5,
    flexDirection: `row`
  },
  s6d23ea79: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  sb5313b49: { flex: 1 },
  s3e272311: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sfb8ccfbd: { flex: 1 },
  sb5b23656: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s1a837cfd: { flex: 1 },
  s623360ef: { flex: 1, margin: 5, flexDirection: `row` },
  s7a5f99f2: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  sed9edd1c: { flex: 1 },
  sd57fc507: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s2f447b2d: { flex: 1 },
  se422fbf7: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sa5689d5e: { flex: 1 },
  s2be5785f: { flex: 1, margin: 5, flexDirection: `row` },
  sa6eb314c: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  s967ab00e: { flex: 1 },
  scce9ae5f: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sff1a57da: { flex: 1 },
  s2181fab9: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sdd666bfe: { flex: 1 },
  s39085ffe: { flex: 1, margin: 5, flexDirection: `row` },
  s82f0655e: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  s77dc1e97: { flex: 1 },
  sf5353b6d: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sce645e73: { flex: 1 },
  s74a6c48a: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sfe3a120f: { flex: 1 },
  sb910b613: { flex: 1, margin: 5, flexDirection: `row` },
  sb4dced78: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  sebf735bf: { flex: 1 },
  s059920ac: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sf41fbe3a: { flex: 1 },
  s9920ab93: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s004ad3dd: { flex: 1 },
  sa58af8a7: { flex: 1, margin: 5, flexDirection: `row` },
  sd84017fc: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  s5bfaed3c: { flex: 1 },
  sdb079014: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s4fc72245: { flex: 1 },
  sf98f2715: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sc4e8eb24: { flex: 1 },
  s71925601: { flex: 1, margin: 5, flexDirection: `row` },
  s1ce5670e: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  sc52e9210: { flex: 1 },
  sa1aa13c4: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s89792ed2: { alignItems: `center`, flex: 1, justifyContent: `center` },
  sa4dab2c2: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sad91d641: { alignItems: `center`, flex: 1, justifyContent: `center` },
  sd6190285: { flex: 1, margin: 5, flexDirection: `row` },
  s82c1cdcd: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  s8290c611: { flex: 1 },
  s9b2318e9: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s439c07a3: { flex: 1 },
  s0841230d: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s607535f9: { flex: 1 },
  s3306baaf: { flex: 1, margin: 5, flexDirection: `row` },
  se1bab23e: { color: `rgba(255, 255, 255, 1)`, fontSize: 20 },
  s34022402: { flex: 1 },
  s1366af08: {
    color: `rgba(17, 255, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s63ee12d7: { flex: 1 },
  sa9ab0bed: {
    color: `rgba(255, 0, 0, 1)`,
    fontSize: 20,
    fontWeight: `bold`,
    textAlign: `center`
  },
  s4d009cfe: { flex: 1 },
  s87596392: { flex: 1, margin: 5, flexDirection: `row` },
  s2add6618: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 20 },
  s80c91560: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 24,
    fontWeight: `bold`,
    textAlign: `center`
  },
  sb892372f: {
    alignItems: `flex-start`,
    flex: 0.25,
    margin: 20,
    marginBottom: 0
  },
  sbac30959: { color: `rgba(255, 255, 255, 1)` },
  sa0fedb31: {
    backgroundColor: `rgba(0, 0, 0, .25)`,
    color: `rgba(192, 86, 255, 1)`,
    fontSize: 20,
    height: 20,
    width: `100%`
  },
  s28c3b6a1: {
    alignItems: `flex-start`,
    flex: 0,
    margin: 20,
    marginBottom: 10,
    marginTop: 0,
    minHeight: 34
  },
  s7b9ba8c4: { color: `rgba(255, 255, 255, 1)` },
  s287e1817: {
    backgroundColor: `rgba(0, 0, 0, .25)`,
    color: `rgba(64, 253, 103, 1)`,
    flex: 1,
    fontSize: 20,
    width: `100%`
  },
  s183141f2: { alignItems: `flex-start`, flex: 0.65, margin: 20, marginTop: 0 },
  s419c2aee: { color: `rgba(255, 255, 255, 1)`, fontSize: 30 },
  se891af2a: {
    alignItems: `center`,
    backgroundColor: `rgba(175, 163, 233, 0.69)`,
    flex: 1,
    justifyContent: `center`
  },
  s4545c6de: { flex: 0.15, margin: 20, marginTop: 0 },
  sae2d423f: {
    backgroundColor: `rgba(0, 0, 0, .25)`,
    height: 400,
    margin: 20,
    marginBottom: 20,
    marginTop: 0
  },
  sc600dfe5: { flex: 1 },
  s09604a47: { flex: 1 },
  sea5f27a3: {
    backgroundColor: `rgba(0, 0, 0, 1)`,
    height: `100%`,
    maxWidth: `100%`,
    flex: 1
  },
  sa6743b22: {
    height: 400,
    margin: 20,
    marginBottom: 20,
    marginTop: 0,
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, 0.25)`,
    flex: 1,
    justifyContent: `center`
  },
  sa6743b23: {
    height: 400,
    margin: 20,
    marginBottom: 20,
    marginTop: 0,
    alignItems: `center`,
    backgroundColor: `rgba(0, 255, 46, 0.4)`,
    flex: 1,
    justifyContent: `center`
  },
  sa6743b24: {
    height: 400,
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

class ClientQuotes extends React.PureComponent {
  static navigationOptions = { title: "ClientQuotes" };
  constructor(props) {
    super(props);

    this.state = {
      text_input_phone: "",
      text_input_body: "",
      current: "form",
      block_quote: false
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
        <ImageBackground source={imgea5f27a3} style={styles.sea5f27a3}>
          <KeyboardAvoidingView behavior={`padding`} style={styles.s09604a47}>
            <ScrollView style={styles.sc600dfe5}>
              <View>
                <View style={styles.s2add6618}>
                  <View style={styles.s0f2769c2}>
                    <View style={styles.se1a46547} />
                    <View style={styles.sdfd203a3}>
                      <Text style={styles.s2ce229b2}>C.E. Computers</Text>
                    </View>
                    <View style={styles.s2e727a34}>
                      <Text style={styles.s7085f604}>Geek Squad</Text>
                    </View>
                  </View>
                  <View style={styles.s623360ef}>
                    <View style={styles.sb5313b49}>
                      <Text style={styles.s6d23ea79}>Diagnosis</Text>
                    </View>
                    <View style={styles.sfb8ccfbd}>
                      <Text style={styles.s3e272311}>$40</Text>
                    </View>
                    <View style={styles.s1a837cfd}>
                      <Text style={styles.sb5b23656}>$99</Text>
                    </View>
                  </View>
                  <View style={styles.s2be5785f}>
                    <View style={styles.sed9edd1c}>
                      <Text style={styles.s7a5f99f2}>OS Install</Text>
                    </View>
                    <View style={styles.s2f447b2d}>
                      <Text style={styles.sd57fc507}>$79.99</Text>
                    </View>
                    <View style={styles.sa5689d5e}>
                      <Text style={styles.se422fbf7}>$99</Text>
                    </View>
                  </View>
                  <View style={styles.s39085ffe}>
                    <View style={styles.s967ab00e}>
                      <Text style={styles.sa6eb314c}>E-Recycling</Text>
                    </View>
                    <View style={styles.sff1a57da}>
                      <Text style={styles.scce9ae5f}>Free</Text>
                    </View>
                    <View style={styles.sdd666bfe}>
                      <Text style={styles.s2181fab9}>X</Text>
                    </View>
                  </View>
                  <View style={styles.sb910b613}>
                    <View style={styles.s77dc1e97}>
                      <Text style={styles.s82f0655e}>On-Site</Text>
                    </View>
                    <View style={styles.sce645e73}>
                      <Text style={styles.sf5353b6d}>79.99/hr</Text>
                    </View>
                    <View style={styles.sfe3a120f}>
                      <Text style={styles.s74a6c48a}>119.99/hr</Text>
                    </View>
                  </View>
                  <View style={styles.sa58af8a7}>
                    <View style={styles.sebf735bf}>
                      <Text style={styles.sb4dced78}>Remote IT</Text>
                    </View>
                    <View style={styles.sf41fbe3a}>
                      <Text style={styles.s059920ac}>39.99/hr</Text>
                    </View>
                    <View style={styles.s004ad3dd}>
                      <Text style={styles.s9920ab93}>X</Text>
                    </View>
                  </View>
                  <View style={styles.s71925601}>
                    <View style={styles.s5bfaed3c}>
                      <Text style={styles.sd84017fc}>Phone Diag</Text>
                    </View>
                    <View style={styles.s4fc72245}>
                      <Text style={styles.sdb079014}>$20</Text>
                    </View>
                    <View style={styles.sc4e8eb24}>
                      <Text style={styles.sf98f2715}>X</Text>
                    </View>
                  </View>
                  <View style={styles.sd6190285}>
                    <View style={styles.sc52e9210}>
                      <Text style={styles.s1ce5670e}>Phone Screen</Text>
                    </View>
                    <View style={styles.s89792ed2}>
                      <Text style={styles.sa1aa13c4}>$79.99+</Text>
                    </View>
                    <View style={styles.sad91d641}>
                      <Text style={styles.sa4dab2c2}>X</Text>
                    </View>
                  </View>
                  <View style={styles.s3306baaf}>
                    <View style={styles.s8290c611}>
                      <Text style={styles.s82c1cdcd}>Mobile App</Text>
                    </View>
                    <View style={styles.s439c07a3}>
                      <Text style={styles.s9b2318e9}>$2000+</Text>
                    </View>
                    <View style={styles.s607535f9}>
                      <Text style={styles.s0841230d}>X</Text>
                    </View>
                  </View>
                  <View style={styles.s87596392}>
                    <View style={styles.s34022402}>
                      <Text style={styles.se1bab23e}>Website</Text>
                    </View>
                    <View style={styles.s63ee12d7}>
                      <Text style={styles.s1366af08}>$750+</Text>
                    </View>
                    <View style={styles.s4d009cfe}>
                      <Text style={styles.sa9ab0bed}>X</Text>
                    </View>
                  </View>
                </View>
                {state.current === "form" ? (
                <View style={styles.sae2d423f}>
                  <View style={styles.sb892372f}>
                    <Text style={styles.s80c91560}>
                      Get in contact and receive a phone call or email{" "}
                      <Text style={{ textDecorationLine: "underline" }}>
                        today!
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.s28c3b6a1}>
                    <Text style={styles.sbac30959}>Email or Phone</Text>
                    <TextInput
                      placeholder={`Email or Phone`}
                      underlineColorAndroid="transparent"
                      placeholderTextColor={`rgba(192, 86, 255, 1)`}
                      onChangeText={(text) => {
                        setState({
                          text_input_phone: text
                        })
                      }}
                      style={styles.sa0fedb31}
                    />
                  </View>
                  <View style={styles.s183141f2}>
                    <Text style={styles.s7b9ba8c4}>
                      Description, Model #, Issue
                    </Text>
                    <TextInput
                      multiline={true}
                      blurOnSubmit={true}
                      onChangeText={(text) => {
                        setState({
                          text_input_body: text
                        })
                      }}
                      onKeyPress={onKeyPress = ({nativeEvent}) => {
                        if(nativeEvent.key === 'Enter')
                        {

                        }
                      }}
                      underlineColorAndroid="transparent"
                      placeholder={`Description, Model #, Issue, or just say hello!`}
                      placeholderTextColor={`rgba(64, 253, 103, 1)`}
                      style={styles.s287e1817}
                    />
                  </View>
                  <View style={styles.s4545c6de}>
                    <TouchableHighlight
                      style={styles.se891af2a}
                      underlayColor={`rgba(222, 222, 222, 1)`}
                      onPress={() => {
                        //
                        // on submit
                        //
                        if(this.state.block_quote !== true)
                        {
                          setState({
                            block_quote: true
                          })
                          
                          setTimeout(() =>{
                            setState({block_quote: false});
                          }, 60000)

                          setState({
                            current: "loading"
                          })

                          
                          {
                            fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/send_quote_request', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                phone: this.state.text_input_phone,
                                body: this.state.text_input_body
                              })
                            })
                            // reponse to json
                            .then(response => response.json())
                                    
                            .then(response => {
                              if(response.body === "Auth")
                              {
                                setState({
                                  current: "done"
                                })
                                setTimeout(() => {
                                  setState({
                                    current: "form"
                                  })
                                }, 2000)
                              }
                              else
                              {
                                setState({
                                  current: "wrong"
                                })
                              }
                            })
                            .catch(error => {
                              //
                              //
                              // if error
                              //
                              //
                            })
                          }
                      }
                  }}
                    >
                      <Text style={styles.s419c2aee}>Submit</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                ) : null}
                {state.current === "loading" ? (

                <View style={styles.sa6743b22}>
                  <ActivityIndicator size='large'/>
                </View>
                ) : null}
                {state.current === "done" ? (
                <View style={styles.sa6743b23}>
                    <Icon iconIdentifier={`FontAwesome/check`} style={styles.sb1470029} />
                    <Text style={styles.sd1b9a1c5}>Submitted</Text>
                </View>
                ) : null}
                {state.current === "wrong" ? (
                <View style={styles.sa6743b24}>
                    <Icon iconIdentifier={`Entypo/cross`} style={styles.sb1470029} />
                    <Text style={styles.sd1b9a1c5}>Sorry! Something went wrong. =(</Text>
                </View>
                ) : null}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Fragment>
    );
  }
}

ClientQuotes.defaultProps = {};

ClientQuotes = withNavigationProp(ClientQuotes);

export default ClientQuotes;

export { imgea5f27a3, styles };

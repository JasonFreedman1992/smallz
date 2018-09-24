import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  ImageBackground,
  ScrollView,
  Platform,
  TextInput,
} from "react-native";
import Icon from "./_laska_/Icon";
import img7c41f8ae from "./LogoMakr_24AXtg.png";
import imgcadd08cd from "./BG.png";

let width = Dimensions.get('screen').width;

let imgwidth = width * .85;

let sideMargins = (width - imgwidth) / 2;

var seen = [];

const styles = StyleSheet.create({
  inputWrapper:
  {
    flexDirection: 'row'

  },
  accnt:
  {
    margin: 5,
    marginLeft: sideMargins,
    marginRight: sideMargins,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: `rgba(0, 0, 0, .25)`,
    height: 36,
    width: imgwidth
  },
  pass:
  {
    margin: 5,
    marginLeft: sideMargins,
    marginRight: sideMargins,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: `rgba(0, 0, 0, .25)`,
    height: 36,
    width: imgwidth,
    marginBottom: 100
  },
  slide1:
  {
    flex: 1,
    width: width,
    alignItems: `center`,
    flexDirection: `column`
  },
  slide2:
  {
    flex: 1,
    width: width,
    alignItems: `flex-start`,
    flexDirection: `column`,
    justifyContent: `flex-end`
  },
	scrollWrap:
	{
    flex: 1,
    width: `100%`,
  },

  image: 
  {
    width: imgwidth,
    position: `relative`
  },

  s0478afd0: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 30,
    textAlign: `center`
  },
  s8690423d: {
    alignItems: `center`,
    backgroundColor: `rgba(170, 142, 255, .65)`,
    flex: 0,
    justifyContent: `center`,
    maxHeight: 90,
    minHeight: 90,
    width: `100%`
  },
  s31885bc2: { width: `100%` },
  saaca4eec: {
    color: `rgba(255, 255, 255, 1)`,
    fontSize: 30,
    textAlign: `center`
  },
  se2e2f9bf: {
    alignItems: `center`,
    backgroundColor: `rgba(43, 255, 126, .65)`,
    flex: 0,
    justifyContent: `center`,
    maxHeight: 90,
    minHeight: 90,
    width: `100%`
  },
  s241de7f6: { width: `100%` },
  sfbc6c123: { flex: 1, justifyContent: `flex-end`, width: `100%` },
  s10f9ed22: {
	width: `100%`,
    maxHeight: 180,
    minHeight: 180
  },
  s397ad170: {
	width: `100%`,
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, .25)`,
    flex: 1,
    justifyContent: `flex-end`
  },
  scadd08cd: {
    backgroundColor: `rgba(0, 0, 0, 1)`,
    height: `100%`,
    opacity: 1,
    width: `100%`
  }
});
class Login extends React.PureComponent {
  static navigationOptions = { title: "Login" };
  constructor(props) {
    super(props);

    this.state = {
      text_login: "Continue",
      text_forgot: "Continue without login",
      text_response: "",
      back_color: "rgba(0, 0, 0, 0.0)",
      current_tab: "login",
      text_input_phone: "",
      text_input_pass: "",
      color_response: "red"
    };
    
    if (this.awake) {
      this.awake();
    }
  }

  backButton()
  {
    if(this.state.text_login === "Login")
    {
      this.refs.scroll.scrollTo({ x: 0, y: 0, animated: true });
      this.setState({
        text_login: "Continue",
        text_forgot: "Continue without login",
        back_color: "rgba(0, 0, 0, 0.0)"
      })
    }
  }

  loginButton()
  {
    if(this.state.text_login === "Continue")
    {
      this.refs.scroll.scrollTo({ x: width, y: 0, animated: true });
      this.setState({
        text_login: "Login",
        text_forgot: "Forgot Password"
      })
    }
    else//(else if state.text_login === "Login")
    {
      const item = {
        data: ""
      }
      // handle login
      fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/requestish', {
        method: 'POST',
        headers: {
          'Accept': 'application/jason',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accnt: this.state.text_input_phone,
          pass: this.state.text_input_pass
        })
      })
      // reponse to json
      .then(response => response.json())
                
      .then(response => {
        // log response
        if(response.body === "Auth")
        {
          this.setState({
            color_response: "green",
            text_response: "Authenticated!"
          })

          setTimeout(() => {
            this.props.navigation.navigate("main");
          }, 1500);
          
        }
        else if(response.body === "Denied")
        {
          this.setState({
            color_response: "red",
            text_response: response.reason
          })
        }
        console.log(response.body);
        console.log("Reason: " + response.reason);
      })
      .catch(() => {
        // if error

      })

      this.setState({
        
      })
    }
  }

  forgotButton()
  {
    if(this.state.text_forgot === "Continue without login")
    {
      this.props.navigation.navigate("main");
    }
    else//(else if state.text_forgot === "Forgot Password")
    {
      // handle forgot password
    }
  
  }

  render() {
    const { props, state } = this;
    const setState = this.setState.bind(this);
    const navigate = this.props.navigation;
    return (
      <Fragment>
        <ImageBackground source={imgcadd08cd} style={styles.scadd08cd}>

          <View style={styles.s397ad170}>
          
        <ScrollView ref={'scroll'}style={styles.scrollWrap}
                horizontal={true} 
                pagingEnabled={true} 
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
        >
        <View style={styles.slide1}>
            <Image
              resizeMode={`contain`}
              source={img7c41f8ae}
              style={styles.image}
            />
        </View>
        <View style={styles.slide2}>

        <Text style={{paddingBottom: 50, textAlign: `center`, fontSize: 20, color: this.state.color_response, width: `100%`}}>
            {state.text_response}
          </Text>

          <Text style={{fontSize: 30, marginLeft: sideMargins, marginRight: sideMargins,textAlign: `left`, color: `rgba(170, 142, 255, .65)`}}>
            Email | Phone Number
          </Text>
          <View style={styles.accnt}>
          <View style={styles.inputWrapper}>
            <TextInput onChangeText={(text) => {
              setState({
                text_input_phone: text
              })
              }}
              underlineColorAndroid="transparent"
              style={{color: `rgba(170, 142, 255, .85)`, 
              width:'100%'}} 
              fontSize={36} 
              placefontSize={40} 
              keyboardType={`default`}>

            </TextInput>
          </View>
          </View>

          <Text style={{fontSize: 30, marginLeft: sideMargins, marginRight: sideMargins,textAlign: `left`, color: `rgba(43, 255, 126, .65)`}}>
            Password
          </Text>
          <View style={styles.pass}>
          <View style={styles.inputWrapper}>
            <TextInput onChangeText={(text) => {
              setState({
                text_input_pass: text
              })
              }}
              underlineColorAndroid="transparent"
              style={{color: `rgba(43, 255, 126, .85)`, 
              width:'100%'}} 
              fontSize={36} 
              keyboardType={`default`} 
              secureTextEntry={true}>
              
            </TextInput>
          </View>
          </View>

        </View>
        
	      </ScrollView>
            <View style={styles.s10f9ed22}>
              <View style={styles.sfbc6c123}>
                <TouchableHighlight style={styles.s31885bc2} onPress={() => {

                  setState({
                    back_color: `rgba(255, 255, 255, .65)`
                  })

                  this.loginButton();
                }}>
                  <View style={styles.s8690423d}>
                    <Text style={styles.s0478afd0}>{state.text_login}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.s241de7f6} onPress={() => {

                  this.forgotButton();

                }}>
                  <View style={styles.se2e2f9bf}>
                    <Text style={styles.saaca4eec}>{state.text_forgot}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            </View>
        </ImageBackground>

        {
          /*
          absolute positioning beyond this point. Renders AFTER 
          everything, like a layer on top of everything before this note
          */
        }
        <View style={
          {
            position: 'absolute',
            marginTop: sideMargins,
            marginLeft: sideMargins,
            width: 50,
            height: 50,
          }
        }>
        <TouchableHighlight 
        onLayout={() => {
          
        }}
        onPress={() => {
            console.log("front");
            setState({
              back_color: "rgba(0, 0, 0, 0.0)"

            })
            this.backButton();
          }}
        style={{
          width: 50,
          height: 50,
        }} underlayColor={"rgba(0, 0, 0, 0.0)"}>
        <View>
          <Icon
            style={
              {
                fontSize: 48,
                color: state.back_color,
              }
            }
            iconIdentifier={`FontAwesome/arrow-left`}
          />
          </View>
        </TouchableHighlight>
          
        </View>

      </Fragment>
    );
  }
}

Login.defaultProps = {};

Login = withNavigationProp(Login);

export default Login;

export { img7c41f8ae, imgcadd08cd, styles };

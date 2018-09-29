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
  SafeAreaView,
  TextInput,
  StatusBar
} from "react-native";
import Icon from "./_laska_/Icon";
import img7c41f8ae from "./LogoMakr_24AXtg.png";
import imgcadd08cd from "./BG.png";
import Constants from "expo"
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAFwTrktqscrpN_n3BJ7NxcUwLwBYMjCqQ",
  authDomain: "cecomputerrepair-6d460.firebaseapp.com",
  databaseURL: "https://cecomputerrepair-6d460.firebaseio.com",
  projectId: "cecomputerrepair-6d460",
  storageBucket: "cecomputerrepair-6d460.appspot.com",
  messagingSenderId: "968740266552"
};

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
  pass1:
  {
    margin: 5,
    marginLeft: sideMargins,
    marginRight: sideMargins,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: `rgba(0, 0, 0, .25)`,
    height: 36,
    width: imgwidth,
  },
  pass2:
  {
    margin: 5,
    marginLeft: sideMargins,
    marginRight: sideMargins,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: `rgba(0, 0, 0, .25)`,
    height: 36,
    width: imgwidth,
    marginBottom: 35
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
  slide3:
  {
    flex: 1,
    width: width,
    alignItems: `flex-start`,
    flexDirection: `column`,
    justifyContent: `flex-end`
  },
  slide4:
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
    maxHeight: 90,
    minHeight: 90,
    width: `100%`,
    justifyContent: `center`,
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
      current: "splash",
      text_login: "Continue",
      text_forgot: "Create Account",
      text_response: "",
      current_tab: "login",
      text_input_phone: "",
      text_input_pass: "",
      color_response: "red",
      text_input_pass_confirm1: "",
      text_input_pass_confirm2: "",
      text_input_phone_confirm: "",
      text_input_email_confirm: "",
      text_create_response: "",
      text_forgot_response: "",
    };
    
    if (this.awake) {
      this.awake();
    }
  }

  componentDidMount()
  {
    // with "import * as firebase from firebase"
    if(!firebase.apps.length)
    {
      var app = firebase.initializeApp(config)
      setTimeout(() => {
        console.log(app.name);
      }, 2500);
    }

    fetch(`https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/phoneVerification`)
    .then(response => response.json())
      
    .then(response => {
      console.log(response);

     })
    .catch(() => {
      setState({
        current_tab: "events"
      })
      // if error occured log here

    })
            

    // firebase.auth().signInAnonymously()
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    // firebase.auth().signInWithEmailAndPassword("vibekatcher@gmail.com", "jason231")
    // .then((response) => {
    //   console.log(response);
    //   console.log("success!");
    // }, (error) => {
    //   //catch error here
    //   console.log(error);
    // });

    // firebase.auth().signInWithPhoneNumber("16163750944", false)
    // .then(function (confirmationResult) {
    //   // SMS sent. prompt user to type the code form the messsage, then sign the
    //   // user in with confirmationResult.confirm(code);
    // })
  }

  backButton()
  {
    if(this.state.current === "login")
    {
      this.refs.scroll.scrollTo({ x: 0, y: 0, animated: true });
      this.setState({
        current: "splash",
        text_login: "Continue",
        text_forgot: "Create Account",
      })
    }
    else if(this.state.current === "forgot")
    {
      this.refs.scroll.scrollTo({ x: width, y: 0, animated: true });
      this.setState({
        current: "login",
        text_login: "Login",
        text_forgot: "Forgot Password",
      })
    }
    else if (this.state.current === "create")
    {
      this.refs.scroll.scrollTo({ x: 0, y: 0, animated: true });
      this.setState({
        current: "splash",
        text_login: "Continue",
        text_forgot: "Create Account",
      })
    }
    // if(this.state.text_login === "Login")
    // {
    //   this.refs.scroll.scrollTo({ x: 0, y: 0, animated: true });
    //   this.setState({
    //     text_login: "Continue",
    //     text_forgot: "Create Account",
    //   })
    // }
  }

  loginButton()
  {
    
    if(this.state.current === "splash")// text_login = "continue", text_forgot = "Create Account"
    {
        this.refs.scroll.scrollTo({ x: width, y: 0, animated: true });
        this.setState({
        current: "login",
        text_login: "Login",
        text_forgot: "Forgot Password"
      })
    }
    else if(this.state.current === "login") //text_login = "login", text_forgot = "forgot password"
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

          switch(response.reason)
          {
            case "admin":
              setTimeout(() => {
                this.props.navigation.navigate(response.reason);
              }, 1500);
              break;
            case "client":
            setTimeout(() => {
              this.props.navigation.navigate(response.reason);
            }, 1500);
              break;
            case "skip":
            setTimeout(() => {
              this.props.navigation.navigate(response.reason);
            }, 1500);
              break;
          }
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
    }
    else if(this.state.current === "create")
    {

      // submit creation
    }
    else if(this.state.current === "forgot")
    {
      // send email reset
      alert("An Email has been sent, please follow the reset instructions to retrieve your account.");

    }
  }

  forgotButton()
  {
    
    if(this.state.current === "splash")// text_login = "continue", text_forgot = "Create Account"
    {
        this.refs.scroll.scrollTo({ x: width * 3, y: 0, animated: true });
        this.setState({
        current: "create",
        text_login: "Create",
        text_forgot: ""
      })
    }
    else if(this.state.current === "login")// text_login = "login", text_forgot = "forgot password"
    {
      // fetch login data then navigate
      this.refs.scroll.scrollTo({ x: width * 2, y: 0, animated: true });
      this.setState({
        current: "forgot",
        text_login: "Send Email Reset",
        text_forgot: "Send Text Login"
      })
    }
    else if(this.state.current === "forgot")
    {
      // send text login
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
            <TextInput 
              onFocus={()=>  setState({ text_forgot: "Create Account" })}
              //onEndEditing
              //onTouchStart={()=>  setState({ text_forgot: "Create Account" })}
              onEndEditing={()=>  setState({ text_forgot: "Forgot Password" })}
              onChangeText={(text) => {
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
            <TextInput 
              onTouchStart={()=>  setTimeout(() => {setState({ text_forgot: "Create Account" })}, 500)}
              onEndEditing={()=>  setState({ text_forgot: "Forgot Password" })}
              onChangeText={(text) => {
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

        <View style={styles.slide3}>
        <Text style={{paddingBottom: 50, textAlign: `center`, fontSize: 20, color: this.state.color_response, width: `100%`}}>
            {state.text_response}
          </Text>

          <Text style={{fontSize: 30, marginLeft: sideMargins, marginRight: sideMargins,textAlign: `left`, color: `rgba(170, 142, 255, .65)`}}>
            Email | Phone Number
          </Text>
          <View style={styles.accnt}>
          <View style={styles.inputWrapper}>
            <TextInput 
              onFocus={()=>  setState({ text_forgot: "Create Account" })}
              //onEndEditing
              //onTouchStart={()=>  setState({ text_forgot: "Create Account" })}
              onEndEditing={()=>  setState({ text_forgot: "Forgot Password" })}
              onChangeText={(text) => {
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
            Secret Key (text only)
          </Text>
          <View style={styles.pass}>
          <View style={styles.inputWrapper}>
            <TextInput 
              onTouchStart={()=>  setTimeout(() => {setState({ text_forgot: "Create Account" })}, 500)}
              onEndEditing={()=>  setState({ text_forgot: "Forgot Password" })}
              onChangeText={(text) => {
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
        
        <View style={styles.slide4}>

        <Text style={{paddingBottom: 50, textAlign: `center`, fontSize: 20, color: this.state.color_response, width: `100%`}}>
            {state.text_create_response}
          </Text>

          <Text style={{fontSize: 30, marginLeft: sideMargins, marginRight: sideMargins,textAlign: `left`, color: `rgba(170, 142, 255, .65)`}}>
            Email
          </Text>
          <View style={styles.accnt}>
          <View style={styles.inputWrapper}>
            <TextInput 
              onFocus={()=>  setState({ text_forgot: "Create Account" })}
              //onEndEditing
              //onTouchStart={()=>  setState({ text_forgot: "Create Account" })}
              onEndEditing={()=>  setState({ text_forgot: "Forgot Password" })}
              onChangeText={(text) => {
              setState({
                text_input_email_confirm: text
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

          <Text style={{fontSize: 30, marginLeft: sideMargins, marginRight: sideMargins,textAlign: `left`, color: `rgba(170, 142, 255, .65)`}}>
            Phone Number
          </Text>
          <View style={styles.accnt}>
          <View style={styles.inputWrapper}>
            <TextInput 
              onFocus={()=>  setState({ text_forgot: "Create Account" })}
              //onEndEditing
              //onTouchStart={()=>  setState({ text_forgot: "Create Account" })}
              onEndEditing={()=>  setState({ text_forgot: "Forgot Password" })}
              onChangeText={(text) => {
              setState({
                text_input_phone_confirm: text
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
          <View style={styles.pass1}>
          <View style={styles.inputWrapper}>
            <TextInput 
              onTouchStart={()=>  setTimeout(() => {setState({ text_forgot: "Create Account" })}, 500)}
              onEndEditing={()=>  setState({ text_forgot: "Forgot Password" })}
              onChangeText={(text) => {
              setState({
                text_input_pass_confirm1: text
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

          <Text style={{fontSize: 30, marginLeft: sideMargins, marginRight: sideMargins,textAlign: `left`, color: `rgba(43, 255, 126, .65)`}}>
            Confirm Password
          </Text>
          <View style={styles.pass2}>
          <View style={styles.inputWrapper}>
            <TextInput 
              onTouchStart={()=>  setTimeout(() => {setState({ text_forgot: "Create Account" })}, 500)}
              onEndEditing={()=>  setState({ text_forgot: "Forgot Password" })}
              onChangeText={(text) => {
              setState({
                text_input_pass_confirm2: text
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
        

        //
        // back button
        //
        
        }
        {state.text_forgot != "Create Account" ? (
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
              //back_color: "rgba(0, 0, 0, 0.0)"

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
                color: `rgba(255, 255, 255, .65)`
              }
            }
            iconIdentifier={`FontAwesome/arrow-left`}
          />
          </View>
        </TouchableHighlight>
          
        </View>

        
        //
        // skip forward button
        //

        ) : null}
        {state.current === "login" ? (
        <View style={
          {
            position: 'absolute',
            marginTop: sideMargins,
            marginLeft: width - sideMargins - 50,
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
              //back_color: "rgba(0, 0, 0, 0.0)"

            })
            //this.props.navigation.navigate("skip");
            this.props.navigation.navigate("client");
          }}
        style={{
          width: 50,
          height: 50,
        }} underlayColor={"rgba(0, 0, 0, 0.0)"}>
        <View style={{
          alignItems: "center"}}>
          <Icon
            style={
              {
                fontSize: 48,
                color: `rgba(255, 255, 255, .65)`
              }
            }
            iconIdentifier={`Feather/skip-forward`}
          />
          <Text style={{color: `rgba(255, 255, 255, .65)`, fontSize: 20}}>
            Skip
          </Text>
        </View>
        </TouchableHighlight>
        </View>
        ) : null}
      </Fragment>
    );
  }
}

Login.defaultProps = {};

Login = withNavigationProp(Login);

export default Login;

export { img7c41f8ae, imgcadd08cd, styles };

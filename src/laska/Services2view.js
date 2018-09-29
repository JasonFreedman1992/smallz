import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Platform, SafeAreaView, FlatList, TouchableHighlight, Image, Dimensions, View, Text, ScrollView, StyleSheet } from "react-native";
import betterappslogo from "./LogoMakr_9r00Xk.png";
import cecomputerslogo from "./LogoChris.jpg";
import celphonelablogo from "./LogoMakr_1U89to.png";
import {LinearGradient} from "expo";
import img60d4716c from "./chrispurplelogo.png";
import img3d6da1b1 from "./chris.jpg";
import Icon from "./_laska_/Icon";
import imgcellphonelab from "./hollowtext.png";
import imgjasonfreedmancode from "./LogoMakr_584eO.png";
import imgjason from "./jason.png";


let width = Dimensions.get('screen').width;
let height = Dimensions.get('window').height;

let imgwidth = width * .9;
let imgheight = imgwidth * .65;

let buttonwidth = imgwidth * .8;

let oneColor = 'pink';

let tempColor = "blue";
let tempColor2 = "blue";
let color1 = "red";
let color2 = "orange";
let color3 = "yellow";
let color4 = "green";
let color5 = "blue";
let color6 = "purple";
let color7 = "pink";

const styles = StyleSheet.create({
    slide1: 
    {
        backgroundColor: '#000000',
        
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: 
    {
        backgroundColor: '#ffffff',
        
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide3: 
    {
        backgroundColor: '#ffffff',
        
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:
    {
        color: "#000000"
    },
    image:
    {
        width: imgwidth,
        height: imgheight,
        marginBottom: 75,
    },
    scroll:
    {
        flex:1
    },
    linearGradient:
    {
        width: buttonwidth,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonText:
    {
        backgroundColor: 'transparent',
        fontSize: 25,
        
        color: '#fff',
    },
    touchHighlight: 
    {
        alignItems: `center`,
        borderRadius: 40,
        backgroundColor: `rgba(202, 192, 241, 1)`,
        height: 50
    },
    container:
    {
        backgroundColor: `rgba(22, 92, 21, 1)`,
        flex: 1
    },
    s60d4716a: {
        height: 100,
        marginBottom: 20,
        maxHeight: 260,
        maxWidth: 620,
        minHeight: 200,
        minWidth: 330,
        width: 100
      },
      s60d4716b: {
        backgroundColor:"white",
        height: 100,
        marginBottom: 20,
        maxHeight: 260,
        maxWidth: 620,
        minHeight: 200,
        minWidth: 330,
        width: 100
      },
    s60d4716c: {
        backgroundColor:"white",
        height: 100,
        marginBottom: 20,
        maxHeight: 260,
        maxWidth: 620,
        minHeight: 200,
        minWidth: 330,
        width: 100
      },
      s222ad388: {
        color: `rgba(141, 54, 255, 1)`,
        fontSize: 24,
        fontWeight: `900`,
        marginBottom: 20,
        textAlign: `center`
      },
      s543fbc82: { color: `rgba(255, 255, 255, 1)`, fontSize: 18, marginBottom: 20 },
      s3d6da1b1: {
        height: 200,
        marginBottom: 20,
        maxHeight: 260,
        maxWidth: 620,
        width: 330
      },
      sb44318da: {
        color: `rgba(141, 54, 255, 1)`,
        fontSize: 24,
        fontWeight: `900`,
        marginBottom: 20,
        textAlign: `center`
      },
      sfe57bb66: { color: `rgba(255, 255, 255, 1)`, fontSize: 18, marginBottom: 20 },
      sb9d0a020: { alignItems: `center`, margin: 20 },
      s50cd3d52ContentContainerStyle: { alignItems: `center` },
      s50cd3d52: { backgroundColor: `rgba(0, 0, 0, 1)` },
      sbf9e8383: {
        backgroundColor: `rgba(255, 255, 255, 1)`,
        flex: 1,
        width: `100%`
      },
      s47f793ca: { flex: 1, marginBottom: 20, flexDirection: `row` },
      sa9e15501: { color: oneColor, fontSize: 45, marginLeft: 4 },
      sa9e15502: { color: 'purple', fontSize: 45, marginLeft: 4 },
      sa9e15503: { color: 'blue', fontSize: 45, marginLeft: 4 },
      sa9e15504: { color: 'green', fontSize: 45, marginLeft: 4 },
      sa9e15505: { color: 'yellow', fontSize: 45, marginLeft: 4 },
      sa9e15506: { color: 'orange', fontSize: 45, marginLeft: 4 },
      sa9e15507: { color: 'red', fontSize: 45, marginLeft: 4 },
      s9734972e: { color: 'white', fontSize: 18, marginBottom: 20, textAlign: `center` },
      lightblueText: {
        color: 'lightblue'
      },
      pinkText:{
        color: 'pink'
      },
      purpleText:
      {
        color: 'purple'
      }
});



class Services2view extends React.PureComponent {
  static navigationOptions = { title: "Services2view" };
  constructor(props) {
    super(props);
    this.state = {
        color1: "pink",
        color2: "purple",
    };

    if (this.awake) {
      this.awake();
      
    }
  }

  componentDidMount() {
    if(Platform.OS === 'ios')
    {
        this.interval = setInterval(() => { 
            const { props, state } = this;
            const setState = this.setState.bind(this);
            console.log("logging");

            tempColor = color7
            color7 = color1,
            tempColor2 = color6,
            color6 = tempColor,
            tempColor = color5,
            color5 = tempColor2,
            tempColor2 = color4,
            color4 = tempColor,
            tempColor = color3,
            color3 = tempColor2,
            tempColor2 = color2,
            color2 = tempColor,
            color1 = tempColor2
            // if(flip === false)
            // {
                setState({
                    color1: color1,
                    color2: color2,
                    color3: color3,
                    color4: color4,
                    color5: color5,
                    color6: color6,
                    color7: color7,
                })
        }, 220);
    }
    else if(Platform.OS === 'android')
    {
        this.interval = setInterval(() => { 
            const { props, state } = this;
            const setState = this.setState.bind(this);
            console.log("logging");

            tempColor = color7
            color7 = color1,
            tempColor2 = color6,
            color6 = tempColor,
            tempColor = color5,
            color5 = tempColor2,
            tempColor2 = color4,
            color4 = tempColor,
            tempColor = color3,
            color3 = tempColor2,
            tempColor2 = color2,
            color2 = tempColor,
            color1 = tempColor2
            // if(flip === false)
            // {
                setState({
                    color1: color1,
                    color2: color2,
                    color3: color3,
                    color4: color4,
                    color5: color5,
                    color6: color6,
                    color7: color7,
                })
        }, 620);
    }
  }

  componentWillUnmount() {
    clearInterval(clearInterval(this.interval));
  }

  updateColors()
  {
    console.log("logging");
  }

  render() {
    const { props, state } = this;
    const setState = this.setState.bind(this);
    return (

        <ScrollView 
        horizontal={true} 
        pagingEnabled={true} 
        showsHorizontalScrollIndicator={false}
        scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}}
        style={styles.scroll}>

            <View style={styles.slide1}>
                    <View style={styles.sbf9e8383}>
                <ScrollView
                    contentContainerStyle={styles.s50cd3d52ContentContainerStyle}
                    style={styles.s50cd3d52}
                >
                    <View style={styles.sb9d0a020}>
                        <View style={styles.s47f793ca}>
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color1, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color2, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color3, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color4, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color5, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color6, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color7, fontSize: 45, marginLeft: 4 }}
                            />
                        </View>
                        <Text style={styles.s9734972e}>
                            Swipe left for <Text style={styles.lightblueText}>Cell-Phone Lab</Text> and <Text style={styles.pinkText}>Jason Freedman Code</Text>!!
                        </Text>
                    <Image
                        resizeMode={`contain`}
                        source={img60d4716c}
                        style={styles.s60d4716a}
                    />
                    <Text style={styles.s222ad388}>CE Computer Repair</Text>
                    <Text style={styles.s543fbc82}>
                        Providing desktop, laptop, and cel-phone repairs, diagnostics,
                        and consulting to the Lynnwood and Seattle areas for 5+ years.
                        As of 2018 CE Computer Repairs is proud to be offering mobile and web apps!
                    </Text>
                    <Image
                        resizeMode={`contain`}
                        source={img3d6da1b1}
                        style={styles.s3d6da1b1}
                    />
                    <Text style={styles.sb44318da}>Chris Esponda</Text>
                    <Text style={styles.sfe57bb66}>
                        Chris Esponda is the owner of C.E. Computer Repairs. 
                        Chris manages, fulfills orders, and is the staple friendly
                        face for the Company. You can always find him with a smile and a
                        couple of trusty companions.
                        Working in the same Lynnwood
                        Location for over 5+ years, Chris has managed to bridge Desktop &amp; Mobile Repair 
                        with mobile &amp; web app services by partnering with both <Text style={styles.lightblueText}>Cell-Phone Lab</Text> and <Text style={styles.pinkText}>Jason Freedman Code</Text>.
                    </Text>
                    </View>
                </ScrollView>
                </View>
                {/*<Image
                resizeMode={`contain`}
                source={betterappslogo}
                style={styles.image}
                />
                <TouchableHighlight underlayColor={`rgba(222, 222, 222, 1)`} 
                    style={styles.touchHighlight}
                    onPress={() => {

                    }}>
                    <LinearGradient
                        colors={['#FA0089', '#3b5998']}
                        style={styles.linearGradient}>
                        <Text style={styles.buttonText}>
                            Learn More
                        </Text>
                    </LinearGradient>
                </TouchableHighlight>
                */}
            </View>

            <View style={styles.slide2}>

                <View style={styles.sbf9e8383}>
                <ScrollView
                    contentContainerStyle={styles.s50cd3d52ContentContainerStyle}
                    style={styles.s50cd3d52}
                >
                    <View style={styles.sb9d0a020}>
                        <View style={styles.s47f793ca}>
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color1, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color2, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-left`}
                            style={{ color: state.color3, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-up`}
                            style={{ color: state.color4, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color5, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color6, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color7, fontSize: 45, marginLeft: 4 }}
                            />
                        </View>
                        <Text style={styles.s9734972e}>
                            Swipe left for <Text style={styles.pinkText}>Jason Freedman Code</Text> and swipe right for<Text style={styles.purpleText}>CE Computer Repair</Text>!!
                        </Text>
                    <Image
                        resizeMode={`contain`}
                        source={imgcellphonelab}
                        style={styles.s60d4716b}
                    />
                    <Text style={styles.s222ad388}>Cell-Phone Lab</Text>
                    <Text style={styles.s543fbc82}>
                        Cel-phone repairs, diagnostics, and consulting to the team and Lynnwood public for 2 years
                        As of 2018 CE Computer Repairs is proud to be offering mobile and web apps!
                    </Text>
                    <Image
                        resizeMode={`contain`}
                        source={img3d6da1b1}
                        style={styles.s3d6da1b1}
                    />
                    <Text style={styles.sb44318da}>Chris Esponda</Text>
                    <Text style={styles.sfe57bb66}>
                        Chris Esponda is the owner of C.E. Computer Repairs. 
                        Chris manages, fulfills orders, and is the staple friendly
                        face for the Company. You can always find him with a smile and a
                        couple of trusty companions.
                        Working in the same Lynnwood
                        Location for over 5+ years, Chris has managed to bridge Desktop &amp; Mobile Repair 
                        with mobile &amp; web app services by partnering with both <Text style={styles.lightblueText}>Cell-Phone Lab</Text> and <Text style={styles.pinkText}>Jason Freedman Code</Text>.
                    </Text>
                    </View>
                </ScrollView>
                </View>
             
            </View>

            <View style={styles.slide3}>

                <View style={styles.sbf9e8383}>
                <ScrollView
                    contentContainerStyle={styles.s50cd3d52ContentContainerStyle}
                    style={styles.s50cd3d52}
                >
                    <View style={styles.sb9d0a020}>
                        <View style={styles.s47f793ca}>
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color1, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color2, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color3, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color4, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color5, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color6, fontSize: 45, marginLeft: 4 }}
                            />
                            <Icon
                            iconIdentifier={`FontAwesome/arrow-right`}
                            style={{ color: state.color7, fontSize: 45, marginLeft: 4 }}
                            />
                        </View>
                        <Text style={styles.s9734972e}>
                            Swipe right for <Text style={styles.purpleText}>CE Computer Repair</Text> and <Text style={styles.lightblueText}>Cell-Phone Lab</Text>!!
                        </Text>
                    <Image
                        resizeMode={`contain`}
                        source={imgjasonfreedmancode}
                        style={styles.s60d4716c}
                    />
                    <Text style={styles.s222ad388}>Jason Freedman Code</Text>
                    <Text style={styles.s543fbc82}>
                        Providing desktop, laptop, and cel-phone repairs, diagnostics,
                        and consulting to the Lynnwood and Seattle areas for 5+ years.
                        As of 2018 CE Computer Repairs is proud to be offering mobile and web apps!
                    </Text>
                    <Image
                        resizeMode={`contain`}
                        source={imgjason}
                        style={styles.s3d6da1b1}
                    />
                    <Text style={styles.sb44318da}>Jason Freedman</Text>
                    <Text style={styles.sfe57bb66}>
                    Jason Freedman is very fit in the
                    nerd-cave. Forever sworn to craft websites and mobile apps until
                    his fingers fall off.
                    </Text>
                    </View>
                </ScrollView>
                </View>
                
            </View>
        </ScrollView>
        
    );
  }
}

Services2view.defaultProps = {};

Services2view = withNavigationProp(Services2view);

export default Services2view;

export { styles };

import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { SafeAreaView, FlatList, TouchableHighlight, Image, Dimensions, View, Text, ScrollView, StyleSheet } from "react-native";
import betterappslogo from "./LogoMakr_9r00Xk.png";
import cecomputerslogo from "./LogoChris.jpg";
import celphonelablogo from "./LogoMakr_1U89to.png";
import {LinearGradient} from "expo";


let width = Dimensions.get('screen').width;
let height = Dimensions.get('window').height;

let imgwidth = width * .9;
let imgheight = imgwidth * .65;

let buttonwidth = imgwidth * .8;

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
    }
});


class Services2view extends React.PureComponent {
  static navigationOptions = { title: "Services2view" };
  constructor(props) {
    super(props);

    this.state = {};

    if (this.awake) {
      this.awake();
    }
  }

  render() {
    return (
        <ScrollView 
        horizontal={true} 
        pagingEnabled={true} 
        showsHorizontalScrollIndicator={false}
        scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}}
        style={styles.scroll}>

            <View style={styles.slide1}>

                <Image
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
           
            </View>

            <View style={styles.slide2}>

                <Image
                resizeMode={`contain`}
                source={cecomputerslogo}
                style={styles.image}
                />
                <TouchableHighlight underlayColor={`rgba(222, 222, 222, 1)`}
                    style={styles.touchHighlight}
                    onPress={() => {

                        }}>
                    <LinearGradient
                        colors={['#30ba25', '#053302']}
                        style={styles.linearGradient}>
                        <Text style={styles.buttonText}>
                            Learn More
                        </Text>
                    </LinearGradient>
                </TouchableHighlight>
             
            </View>

            <View style={styles.slide3}>

                <Image
                resizeMode={`contain`}
                source={celphonelablogo}
                style={styles.image}
                />
                <TouchableHighlight underlayColor={`rgba(222, 222, 222, 1)`}
                    style={styles.touchHighlight}
                    onPress={() => {

                        }}>
                    <LinearGradient
                        colors={['#0487FF', '#3b5998', '#0487FF']}
                        style={styles.linearGradient}>
                        <Text style={styles.buttonText}>
                            Learn More
                        </Text>
                    </LinearGradient>
                </TouchableHighlight>
                
            </View>
        </ScrollView>
        
    );
  }
}

Services2view.defaultProps = {};

Services2view = withNavigationProp(Services2view);

export default Services2view;

export { styles };

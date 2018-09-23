import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Easing, Dimensions, ScrollView, Text, View, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

let width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: { 
        flex: 1,
        backgroundColor: '#000000',
        width: width,
        alignItems: 'center',
        justifyContent: `center`
    },
    scroll:
    {
      flex:1
    }
});
class Statusresultsloadingview extends React.PureComponent {
  static navigationOptions = { title: "Statusresultsloadingview" };
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      notes: [],
      order: "",
      status: ""
    };

    if (this.awake) {
      // this.setState({
      //   data: globals.statusData
      // })
      
      this.awake();
    }
  }

  render() {

    return (

      <Fragment>
        <ScrollView
        horizontal={true} 
        pagingEnabled={true} 
        showsHorizontalScrollIndicator={false}
        scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}}
        style={styles.scroll}>
        {globals.statusData.map((currentItem, i) => (
         
          <View style={styles.container} >
          <AnimatedCircularProgress
          size={width * .75}
          width={40}
          fill={currentItem.status}
          tintColor="#00e0ff"
          easing={Easing.quad}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
          {/*<Text style={{color: "white"}}>{currentItem.order}</Text>*/}
          <Text style={{textAlign: 'center',marginTop: 20, fontSize: 30, color: "white"}}>{currentItem.status}%</Text>
          <Text style={{textAlign: 'center',marginTop: 20, fontSize: 30, color: "white"}}>Received: {currentItem.firstDate} @ {currentItem.firstTime}</Text>
          <Text style={{textAlign: 'center',marginTop: 20, fontSize: 30, color: "white"}}>Last Note: {currentItem.notes[currentItem.notes.length-1]}</Text>
          
          {/*<Text style={{color: "white"}}>{currentItem.notes[0]}</Text> */}
          </View>
        ))}
        </ScrollView>
      </Fragment>
    );
  }
}

Statusresultsloadingview.defaultProps = {};

Statusresultsloadingview = withNavigationProp(Statusresultsloadingview);

export default Statusresultsloadingview;

export { styles };
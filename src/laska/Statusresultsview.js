import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { KeyboardAvoidingView, ImageBackground, TextInput, TouchableHighlight, Easing, Dimensions, ScrollView, Text, View, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const moment = require('moment');

let width = Dimensions.get('screen').width;
let height = Dimensions.get('window').height;

currentDescription = "";
currentEmail = "";
currentId = "";
currentItem = "";
currentName = "";
currentNotes = [];
currentPhone = "";
currentTimeSent = "";
currentTimeFinished = "";
currentCharges = [];

const styles = StyleSheet.create({
  sa7f27131: { color: `rgba(255, 255, 255, 1)`, fontSize: 30 },
  s732b811e: {
    backgroundColor: `rgba(74, 74, 110, 1)`,
    flex: 1,
    justifyContent: `flex-end`,
    overflow: `hidden`,
    position: `absolute`
  },
  s93176135: {
    height: `100%`,
    justifyContent: `flex-end`,
    maxHeight: 199,
    width: `100%`
  },
  item_body: {
    color: `rgba(64, 253, 103, 1)`
  },
  item_date: {
    color: `rgba(255, 255, 255, 1)`
  },
  item_phone: {
    color: `rgba(192, 186, 255, 1)`
  },
  sd4c6b84e: { flex: 1 },
  s44622035: { height: (height-85)/7.85, backgroundColor: `rgba(74, 74, 110, 1)`,  borderColor: `rgba(198, 76, 243, 1)`,
  borderWidth: 1, },
  s7fe23c89: { flex: 1 },
  scadd08cd: {
      height: `100%`,
      opacity: 1,
      width: `100%`
    },
  sa7f27131: { color: `rgba(255, 255, 255, 1)`, fontSize: 30 },
  s732b811e: {
    backgroundColor: `rgba(74, 74, 110, 1)`,
    flex: 1,
    justifyContent: `flex-end`,
    overflow: `hidden`,
    position: `absolute`
  },
  s93176135: {
    height: `100%`,
    justifyContent: `flex-end`,
    maxHeight: 199,
    width: `100%`
  },
  s93176136: {
    height: `100%`,
    alignItems: 'center',
    justifyContent: `center`,
    maxHeight: 199,
    width: `100%`
  },
  item_body: {
    color: `rgba(64, 253, 103, 1)`
  },
  item_date: {
    color: `rgba(255, 255, 255, 1)`
  },
  item_phone: {
    color: `rgba(192, 186, 255, 1)`
  },
  sd4c6b84e: { flex: 1, backgroundColor:`rgba(74, 74, 110, 1)`,
borderColor: `rgba(198, 76, 243, 1)`,
borderWidth: 1,
},
sff493afb: { height: 100, width: '100%' },
  s44622035: { height: (height-85)/7.85 },
  s7fe23c89: { flex: 1 },
  scadd08cd: {
      height: `100%`,
      opacity: 1,
      width: `100%`
    },
    s397ad170: {
      width: `100%`,
        backgroundColor: `rgba(0, 0, 0, .25)`,
        flex: 1,
      },
  s2f214928: { fontSize: 45, margin: 5, color: 'white' },
  s44622037: { height: (height-85)/7.85 },
  sd4c6b84: { flex: 1 },
  s93176137: {
    height: `100%`,
    alignItems: 'center',
    justifyContent: `center`,
    maxHeight: 199,
    width: `100%`
  },
  s8aa63795: { color: `rgba(255, 255, 255, 1)`, fontSize: 18, margin: 5 },
  sa2282081: { flex: 1 },
  s8e82c08e: { backgroundColor: `rgba(0, 0, 0, 0.25)`, margin: 20 },
  s270ef303: { flex: 1 },
  sf2f5c5b1: { flex: 1 },
  wrap: { flex: 1 },
  s7ba85f25: {
    color: `rgba(255, 255, 255, 1)`,
    height: 20,
    margin: 5,
    width: '100%'
  },
  s7ba85f26: {
    color: `rgba(255, 255, 255, 1)`,
    margin: 5,
    flex: .35,
    width: '100%'
  },
  sa6743b22: {
    height: 210,
    margin: 20,
    marginBottom: 20,
    marginTop: 0,
    alignItems: `center`,
    backgroundColor: `rgba(0, 0, 0, 0.25)`,
    flex: 1,
    justifyContent: `center`
  },
  sa6743b23: {
    height: 210,
    margin: 20,
    marginBottom: 20,
    marginTop: 0,
    alignItems: `center`,
    backgroundColor: `rgba(0, 255, 46, 0.4)`,
    flex: 1,
    justifyContent: `center`
  },
  sa6743b24: {
    height: 210,
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
  s88b1bf09: {
    color: 'white',
    fontSize: 18
  },
  s3c247739: {
    alignItems: `center`,
    backgroundColor: `rgba(255, 83, 83, 0.45)`,
    flex: 1,
    justifyContent: `center`,
    margin: 10
  },
  s3e2c715c: {
    backgroundColor: `rgba(0, 0, 0, 0.25)`,
    height: 410,
    margin: 20,
    marginTop: 0
  },
  sff493afc: { marginTop: 0, height: 100, width: '100%' },
  sc4aa036b: {
    alignItems: `center`,
    backgroundColor: `rgba(175, 163, 233, 0.69)`,
    flex: 1,
    justifyContent: `center`,
    margin: 10
  },
  sc4aa036c: {
    alignItems: `center`,
    backgroundColor: `rgba(55, 63, 103, 0.79)`,
    flex: 1,
    justifyContent: `center`,
    margin: 10
  },
  sc4aa036d: {
    alignItems: `center`,
    backgroundColor: `rgba(105, 63, 85, 0.79)`,
    flex: 1,
    justifyContent: `center`,
    margin: 10
  },
  item_body12: {
    color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18, marginTop: 0
  },
  item_body2: {
    color: `rgba(64, 253, 103, 1)`, margin: 5, fontSize: 18
  },
  item_body23: {
    color: `rgba(64, 253, 103, 1)`, margin: 5, fontSize: 18, flex: 1
  },
  item_body29: {
    color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18, flex: 0
  },
  item_body25: {
    color: `rgba(64, 253, 103, 1)`, margin: 5, fontSize: 18, flex: 0
  },
  item_date2: {
    color: `rgba(255, 255, 255, 1)`, margin: 5, fontSize: 18
  },
  item_date23: {
    color: `rgba(255, 255, 255, 1)`, margin: 5, fontSize: 18, flex: 1
  },
  item_phone2: {
    color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18
  },
  item_phone23: {
    color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18, flex: 1, marginTop: 0
  },
  item_phone27: {
    color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18, flex: 1, marginTop: 0
  },
  item_phone28: {
    color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18, flex: 0, marginTop: 0
  },
  item_phone3: {
    color: `rgba(255, 255, 255, 1)`, margin: 5, fontSize: 18
  },
  item_phone37: {
    color: `rgba(255, 255, 255, 1)`, margin: 5, marginRight: 0, fontSize: 18
  },
  s7181d70a: { alignItems: `center`, flex: 1, justifyContent: `center` },
  s1c4ded82: { height: `100%`, width: `100%` },
  s9be9753c: { flex: 1 },
  sf02d78e4: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 20 },
  sedd01e1e: { color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5 },
  sb6797fe4: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 5 },
  sdf566e0f: { color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5 },
  s59a65273: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 5 },
  sc1cfa38d: { color: `rgba(64, 253, 103, 1)`, fontSize: 18, margin: 5 },
  sa6ccf43c: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 5 },
  sbb37430a: { color: `rgba(255, 255, 255, 1)`, fontSize: 18, margin: 5 },
  sa0cf86e2: { backgroundColor: `rgba(0, 0, 0, .25)`, flex: 1, margin: 5 },
  column: {
    flex: 1, flexDirection: `row`
  },
  container: { 
        flex: 1,
        width: width,
        alignItems: 'center',
        justifyContent: `center`,
        backgroundColor: `rgba(0, 0, 0, .25)`
    },
    scroll:
    {
      flex: 1,
      
    },
    topContain: {
      flex: 1, 
      margin: 20,
    }
});
class Statusresultsloadingview extends React.PureComponent {
  static navigationOptions = { title: "Statusresultsloadingview" };
  constructor(props) {
    super(props);
    currentDescription = this.currentDescription;
    currentEmail = this.currentEmail;
    currentId = this.currentId;
    currentItem = this.currentItem;
    currentName = this.currentName;
    currentNotes = this.currentNotes;
    currentPhone = this.currentPhone;
    currentTimeSent = this.currentTimeSent;
    currentTimeFinished = this.currentTimeFinished;
    currentCharges = this.currentCharges;

    this.state = {
      currentDescription: "",
      currentEmail: "",
      currentId: "",
      currentItem: "",
      currentName: "",
      currentNotes: [],
      currentPhone: "",
      currentTimeSent: "",
      currentTimeFinished: "",
      currentCharges: [],
      data: [],
      notes: [],
      order: "",
      status: "",
      current: "article"
    };

    if (this.awake) {
      
      this.awake();
    }
  }

  componentDidMount()
  {

  }

  total(charges)
  {
    let total = 0;
    charges.forEach(data => {
      total = total + parseFloat(data.price);
    })
      return `Total: $${total}`;
  }

  warranty(date)
  {
    let warrantyDate;

    var obj = moment(date).add(60, 'days');



    return(moment(obj).format('MMMM Do YYYY'));
  }

  render() {

    const { props, state } = this;
    const setState = this.setState.bind(this);

    return (

      <Fragment>
        <ScrollView
        style={styles.scroll}>
          <View style={styles.container} >
          <View style={styles.topContain}>
          <AnimatedCircularProgress
          size={width * .75}
          width={40}
          fill={50}
          tintColor="#00e0ff"
          easing={Easing.quad}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
          <Text style={{textAlign: 'center', marginTop: 20, fontSize: 30, color: "white"}}>{50}%</Text>
          </View>
          </View>

        {state.current === "article" ? (
        <View style={styles.s7181d70a}>
            <ImageBackground style={styles.s1c4ded82}>
            <View style={styles.s397ad170}>
              <KeyboardAvoidingView style={styles.s9be9753c}>
                
                    <View style={styles.sf02d78e4}>
                        <View style={styles.column}><Text style={styles.item_body2}>Item:</Text><TextInput selectTextOnFocus={true} editable={false} multiline={true}  style={styles.item_phone23} value={globals.statusData.item}></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Description:</Text><TextInput selectTextOnFocus={true} editable={false} multiline={true} style={styles.item_phone27} value={globals.statusData.description}></TextInput></View>
                        <View style={{ flexDirection: 'row', flex: 1, borderColor: 'white', height: 2, borderWidth: 1, margin: 1, marginLeft: 5, marginRight: 5}}></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Notes:</Text></View>
                        {globals.statusData.notes.map((repeatForItem, i) => (
                          <View style={styles.column}><TextInput multiline={true} selectTextOnFocus={true} editable={false} style={styles.item_phone23} value={repeatForItem}></TextInput></View>
                        ))}
                        <View style={{ flexDirection: 'row', flex: 1, borderColor: 'white', height: 2, borderWidth: 1, margin: 1, marginLeft: 5, marginRight: 5}}></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Charges:</Text></View>
                        {globals.statusData.charges.map((repeatForItem, i) => ( 
                          <View style={styles.column}><TextInput multiline={true} selectTextOnFocus={true} editable={false} value={`${repeatForItem.item}: $${repeatForItem.price}`} style={styles.item_phone28}></TextInput>
                          </View>
                        ))}
                        <TextInput multiline={true} selectTextOnFocus={true} editable={false} value={ this.total(globals.statusData.charges) } style={styles.item_phone28}></TextInput>
                        <View style={{ flexDirection: 'row', flex: 1, borderColor: 'white', height: 2, borderWidth: 1, margin: 1, marginLeft: 5, marginRight: 5}}></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Name:</Text><TextInput selectTextOnFocus={true} editable={false} multiline={true} style={styles.item_phone23} value={globals.statusData.name} ></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Email: </Text><TextInput multiline={true} selectTextOnFocus={true} editable={false} value={globals.statusData.email} style={styles.item_phone23}></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Phone: </Text><TextInput multiline={true} selectTextOnFocus={true} editable={false} value={globals.statusData.phone} style={styles.item_phone23}></TextInput></View>
                        <Text style={styles.item_body2}>Received: </Text><Text style={{color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5}}>{moment(globals.statusData.timeSent).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                        <Text style={styles.item_body2}>Returned: </Text><Text style={{color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5}}>{moment(globals.statusData.timeFinished).format('MMMM Do YYYY, h:mm:ss a')} </Text>
                        <Text style={styles.item_body2}>Under Warranty Until: </Text><Text style={{color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5}}>{this.warranty(globals.statusData.timeFinished)}</Text>
                        <TextInput multiline={true} selectTextOnFocus={true} editable={false} style={styles.item_body12}>ID: {globals.statusData.id}</TextInput>
                    </View>
              </KeyboardAvoidingView>
              </View>
            </ImageBackground>
          </View>
      ): null}
      </ScrollView>
      </Fragment>
    );
  }
}

Statusresultsloadingview.defaultProps = {};

Statusresultsloadingview = withNavigationProp(Statusresultsloadingview);

export default Statusresultsloadingview;

export { styles };
import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { TextInput, ActivityIndicator, RefreshControl, KeyboardAvoidingView, Dimensions, ImageBackground, TouchableHighlight, ScrollView, Text, StyleSheet, View } from "react-native";
import img93176135 from "./jubavrli.png";
import imgcadd08cd from "./BG.png";
const moment = require('moment');

currentDescription = "";
currentEmail = "";
currentId = "";
currentItem = "";
currentName = "";
currentNotes = "";
currentPhone = "";
currentTimeSent = "";
currentTimeFinished = "";
currentCharges = [];
total = 0;

let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    sa7f27131: { color: `rgba(255, 255, 255, 1)`, fontSize: 30 },
    s50a58322: {
      alignItems: `center`,
      backgroundColor: `rgba(0, 0, 0, 1)`,
      flex: 1,
      justifyContent: `center`
    },
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
      s397ad170: {
        width: `100%`,
          backgroundColor: `rgba(0, 0, 0, .25)`,
          flex: 1,
        },
        //
        //
        //
        //
        //
        //
    sa7f27131: { color: `rgba(255, 255, 255, 1)`, fontSize: 30 },
    s50a58322: {
      alignItems: `center`,
      backgroundColor: `rgba(0, 0, 0, 1)`,
      flex: 1,
      justifyContent: `center`
    },
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
    }
});
class History extends React.PureComponent {
  static navigationOptions = { title: "History" };
  constructor(props) {
    super(props);

    this.state = {
      current_history: "",
      current: "list",
      refreshing: false,

      currentNewNote: "",
      currentNewChargePrice: 0,
      currentNewChargeItem: "",
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
    };

    if (this.awake) {
      this.awake();
    }
  }

  _onRefresh = () => {

    this.setState({
      refreshing: true
    })

      fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/get_cust_history', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: currentPhone
      })
    })
    .then(response => response.json())

    .then(response => {
      console.log(response.reason);
      if(response.body === "Auth")
      {
        this.setState({
          current_history: response.reason,
          refreshing: false,
        })
          if(response.reason == "0")
          {
            setState({
              article2_name: currentName,
              article2_phone: currentPhone,
            })
          }
          else
          {
            state.current_client_history = response.reason;
            setState({
              article2_name: currentName,
              article2_phone: currentPhone,
            })
          }

      }
      else //if response.body === "Denied"
      {
        console.log("wrong 1");
        this.setState({
          refreshing: false
        })

        this.setState({
          refreshing: false
        })
      }
    })
    .catch(error => {
      console.log("wrong 2");
      console.log(response);
      console.log("wrong 2");
      console.log(error);
      this.setState({
        refreshing: false
        //article_bot2_current: "wrong"
      })
    })
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

    return (
      <Fragment>
      {state.current === "list" ? (
        <View style={styles.s7fe23c89}>
          <ImageBackground style={styles.scadd08cd}>
            <View style={styles.s397ad170}>
              <ScrollView
                refreshControl={
                  <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                  />
                }
                >
                {globals.current_history.map((repeatForItem, i) => (
                  <TouchableHighlight
                    style={styles.s44622035}
                    underlayColor={`rgba(255, 255, 255, 1)`}
                    key={`${i}-44622035-204b-428c-84fd-3560afae236d`}
                    onPress={() => {

                      currentDescription = repeatForItem.description;
                      currentEmail = repeatForItem.email;
                      currentName = repeatForItem.name;
                      currentPhone = repeatForItem.phone;
                      currentItem = repeatForItem.item;
                      currentNotes = repeatForItem.notes;
                      currentId = repeatForItem.id
                      currentTimeSent = repeatForItem.timeSent
                      currentTimeFinished = repeatForItem.timeFinished
                      currentCharges = repeatForItem.charges

                      this.setState({
                        current: "article",
                        currentDescription: repeatForItem.description,
                        currentEmail: repeatForItem.email,
                        currentName: repeatForItem.name,
                        currentPhone: repeatForItem.phone,
                        currentItem: repeatForItem.item,
                        currentNotes: repeatForItem.notes,
                        currentId: repeatForItem.id,
                        currentTimeSent: repeatForItem.timeSent,
                        currentTimeFinished: repeatForItem.timeFinished,
                        currentCharges: repeatForItem.charges
                      })
                        
                    }}
                  >
                    <View style={styles.sd4c6b84e}>
                        <View style={styles.s732b811e}>
                        <Text style={styles.item_phone}>Item: {repeatForItem.item}</Text>
                        <Text style={styles.item_phone}>Description: {repeatForItem.description}</Text>
                        <Text style={styles.item_body}>Name: {repeatForItem.name.substring(0,40)}</Text>
                        <Text style={styles.item_date}>Start Date: {moment(repeatForItem.timeSent).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                    </View>
                    </View>
                  </TouchableHighlight>
                ))}
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      ): null}
      {state.current === "article" ? (
        <View style={styles.s7181d70a}>
            <ImageBackground style={styles.s1c4ded82}>
            <View style={styles.s397ad170}>
              <KeyboardAvoidingView style={styles.s9be9753c}>
                <ScrollView>
                    <View style={styles.sf02d78e4}>
                        <View style={styles.column}><Text style={styles.item_body2}>Item:</Text><TextInput selectTextOnFocus={true} editable={false} multiline={true}  style={styles.item_phone23} value={state.currentItem}></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Description:</Text><TextInput selectTextOnFocus={true} editable={false} multiline={true} style={styles.item_phone27} value={state.currentDescription}></TextInput></View>
                        <View style={{ flexDirection: 'row', flex: 1, borderColor: 'white', height: 2, borderWidth: 1, margin: 1, marginLeft: 5, marginRight: 5}}></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Notes:</Text></View>
                        {currentNotes.map((repeatForItem, i) => (
                          <View style={styles.column}><TextInput multiline={true} selectTextOnFocus={true} editable={false} style={styles.item_phone23} value={repeatForItem}></TextInput></View>
                        ))}
                        <View style={{ flexDirection: 'row', flex: 1, borderColor: 'white', height: 2, borderWidth: 1, margin: 1, marginLeft: 5, marginRight: 5}}></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Charges:</Text></View>
                        {currentCharges.map((repeatForItem, i) => ( 
                          <View style={styles.column}><TextInput multiline={true} selectTextOnFocus={true} editable={false} value={`${repeatForItem.item}: $${repeatForItem.price}`} style={styles.item_phone28}></TextInput>
                          </View>
                        ))}
                        <TextInput multiline={true} selectTextOnFocus={true} editable={false} value={ this.total(currentCharges) } style={styles.item_phone28}></TextInput>
                        <View style={{ flexDirection: 'row', flex: 1, borderColor: 'white', height: 2, borderWidth: 1, margin: 1, marginLeft: 5, marginRight: 5}}></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Name:</Text><TextInput selectTextOnFocus={true} editable={false} multiline={true} style={styles.item_phone23} value={state.currentName} ></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Email: </Text><TextInput multiline={true} selectTextOnFocus={true} editable={false} value={state.currentEmail} style={styles.item_phone23}></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Phone: </Text><TextInput multiline={true} selectTextOnFocus={true} editable={false} value={state.currentPhone} style={styles.item_phone23}></TextInput></View>
                        <Text style={styles.item_body2}>Received: </Text><Text style={{color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5}}>{moment(state.currentTimeSent).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                        <Text style={styles.item_body2}>Returned: </Text><Text style={{color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5}}>{moment(state.currentTimeFinished).format('MMMM Do YYYY, h:mm:ss a')} </Text>
                        <Text style={styles.item_body2}>Under Warranty Until: </Text><Text style={{color: `rgba(192, 186, 255, 1)`, fontSize: 18, margin: 5}}>{this.warranty(state.currentTimeFinished)}</Text>
                        <TextInput multiline={true} selectTextOnFocus={true} editable={false} style={styles.item_body12}>ID: {state.currentId}</TextInput>
                    </View>
                  {state.article_bot_current === "form" ? (
                    <View style={styles.s3e2c715c}>
                      <View style={styles.sff493afb}>
                        <TouchableHighlight
                        shouldRasterizeIOS={true} renderToHardwareTextureAndroid={true}
                          style={styles.s3c247739}
                          onPress={() => {
                            //
                            // cancel
                            setState({
                              current: "list",
                            })
                          }}
                          underlayColor={`rgba(255, 255, 255, .6)`}
                        >
                          <Text style={styles.s88b1bf09}>Cancel</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.sff493afc}>
                        <TouchableHighlight
                          style={styles.sc4aa036b}
                          onPress={() => {

                            setState({
                              article_bot_current: "loading",
                            })


                            if(state.currentNewChargePrice !== "" && state.currentNewChargeItem !== "")
                            {
                              const charge = {
                                price: state.currentNewChargePrice,
                                item: state.currentNewChargeItem
                              }
                              setState({
                                currentCharges: state.currentCharges.push(charge),
                                
                              })
                            }

                            if(state.currentNewNote !== "")
                            {
                              setState({
                                currentNotes: state.currentNotes.push(state.currentNewNote)
                              })
                            }

                            // setState({
                            //   article_bot_current: "loading",
                            //   currentCharges: state.currentCharges.push(charge),
                            //   currentNotes: state.currentNotes.push(state.currentNewNote)
                            // })
                            
                            setTimeout(() => {
                              setState({
                                currentNewChargeItem: "",
                                currentNewChargePrice: "",
                                currentNewNote: "",
                              })
                            },500)

                            

                            fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/update_order', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                item: state.currentItem,
                                description:state.currentDescription,
                                name: state.currentName,
                                notes: state.currentNotes,
                                charges: state.currentCharges,
                                email: state.currentEmail,
                                id: state.currentId,
                                phone: state.currentPhone,
                                timeSent: state.currentTimeSent,
                                timeFinished: state.currentTimeFinished
                              })
                            })
                            // reponse to json
                            .then(response => response.json())
                                    
                            .then(response => {
                              if(response.body === "Auth")
                              {
                                setState({
                                  article_bot_current: "done"
                                })

                                setTimeout(() => {
                                  setState({
                                    article_bot_current: "form"
                                  })
                                }, 2000)
                              }
                              else
                              {
                                setState({
                                  article_bot_current: "wrong"
                                })
                                setTimeout(() => {
                                  setState({
                                    article_bot_current: "form"
                                  })
                                }, 2000)
                              }
                            })
                            .catch(error => {
                              console.log("error: ", error);
                            })
                          }}
                          underlayColor={`rgba(255, 255, 255, .6)`}
                        >
                          <Text style={styles.s88b1bf09}>Save Changes</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.sff493afc}>
                        <TouchableHighlight
                          style={styles.sc4aa036c}
                          onPress={() => {

                            setState({
                              article_bot_current: "loading",
                            })


                            if(state.currentNewChargePrice !== "" && state.currentNewChargeItem !== "")
                            {
                              const charge = {
                                price: state.currentNewChargePrice,
                                item: state.currentNewChargeItem
                              }
                              setState({
                                currentCharges: state.currentCharges.push(charge),
                                
                              })
                            }

                            if(state.currentNewNote !== "")
                            {
                              setState({
                                currentNotes: state.currentNotes.push(state.currentNewNote)
                              })
                            }

                            // setState({
                            //   article_bot_current: "loading",
                            //   currentCharges: state.currentCharges.push(charge),
                            //   currentNotes: state.currentNotes.push(state.currentNewNote)
                            // })
                            
                            setTimeout(() => {
                              setState({
                                currentNewChargeItem: "",
                                currentNewChargePrice: "",
                                currentNewNote: "",
                              })
                            },500)

                            fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/update_order_to_phone', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                id: state.currentId,
                                phone: state.currentPhone,
                              })
                            })
                            // reponse to json
                            .then(response => response.json())
                                    
                            .then(response => {
                              console.log(response);
                              if(response.body === "Auth")
                              {
                                setState({
                                  article_bot_current: "done"
                                })

                                setTimeout(() => {
                                  setState({
                                    article_bot_current: "form"
                                  })
                                }, 2000)
                              }
                              else
                              {
                                setState({
                                  article_bot_current: "wrong"
                                })
                                setTimeout(() => {
                                  setState({
                                    article_bot_current: "form"
                                  })
                                }, 2000)
                              }
                            })
                            .catch(error => {
                              console.log("error: ", error);
                            })
                          }}
                          underlayColor={`rgba(255, 255, 255, .6)`}
                        >
                          <Text style={styles.s88b1bf09}>Save ID to Phone</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.sff493afc}>
                        <TouchableHighlight
                          style={styles.sc4aa036d}
                          onPress={() => {

                            setState({
                              article_bot_current: "loading"
                            })


                            if(state.currentNewChargePrice !== "" && state.currentNewChargeItem !== "")
                            {
                              const charge = {
                                price: state.currentNewChargePrice,
                                item: state.currentNewChargeItem
                              }
                              setState({
                                currentCharges: state.currentCharges.push(charge),
                                
                              })
                            }

                            if(state.currentNewNote !== "")
                            {
                              setState({
                                currentNotes: state.currentNotes.push(state.currentNewNote)
                              })
                            }

                            // setState({
                            //   article_bot_current: "loading",
                            //   currentCharges: state.currentCharges.push(charge),
                            //   currentNotes: state.currentNotes.push(state.currentNewNote)
                            // })
                            
                            setTimeout(() => {
                              setState({
                                currentNewChargeItem: "",
                                currentNewChargePrice: "",
                                currentNewNote: "",
                              })
                            },500)

                            

                            fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/delete_order', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                id: state.currentId,
                              })
                            })
                            // reponse to json
                            .then(response => response.json())
                                    
                            .then(response => {

                              if(response.body === "Auth")
                              {
                                setState({
                                  article_bot_current: "done"
                                })

                                setTimeout(() => {
                                  setState({
                                    article_bot_current: "form"
                                  })
                                }, 2000)
                              }
                              else
                              {
                                setState({
                                  article_bot_current: "wrong"
                                })
                                setTimeout(() => {
                                  setState({
                                    article_bot_current: "form"
                                  })
                                }, 2000)
                              }
                            })
                            .catch(error => {
                              console.log("error: ", error);
                            })
                          }}
                          underlayColor={`rgba(255, 255, 255, .6)`}
                        >
                          <Text style={styles.s88b1bf09}>Mark as Finished</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                    ) : null}
                    {state.article_bot_current === "loading" ? (
                    <View style={styles.sa6743b22}>
                      <ActivityIndicator size='large'/>
                    </View>
                    ): null}
                    {state.article_bot_current === "done" ? (
                    <View style={styles.sa6743b23}>
                        <Icon iconIdentifier={`FontAwesome/check`} style={styles.sb1470029} />
                        <Text style={styles.sd1b9a1c5}>{this.state.response_reason}</Text>
                    </View>

                    ): null}
                    {state.article_bot_current === "wrong" ? (
                    <View style={styles.sa6743b24}>
                        <Icon iconIdentifier={`Entypo/cross`} style={styles.sb1470029} />
                    <Text style={styles.sd1b9a1c5}>Sorry! Something went wrong. =(</Text>
                    </View>
                    ): null}
                </ScrollView>
              </KeyboardAvoidingView>
              </View>
            </ImageBackground>
          </View>
      ): null}
      </Fragment>
    );
  }
}

History.defaultProps = {
    eventsData: [
        {
          place: "Seattle, WA",
          miles: 50
        },
        {
          place: "New York, New York",
          miles: 2600
        },
        {
          place: "Los Angeles, CA",
          miles: 900
        },
        {
          place: "San Francisco, CA",
          miles: 750
        },
      ]

};

History = withNavigationProp(History);

export default History;

export { styles };

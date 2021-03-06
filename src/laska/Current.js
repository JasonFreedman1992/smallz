import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { RefreshControl, ActivityIndicator, TextInput, KeyboardAvoidingView, Dimensions, ImageBackground, TouchableHighlight, ScrollView, Text, StyleSheet, View } from "react-native";
import img93176135 from "./jubavrli.png";
import Icon from "./_laska_/Icon";
import imgcadd08cd from "./BG.png";
const moment = require('moment');

let height = Dimensions.get('window').height;

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
      color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18
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
      color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18, flex: 1
    },
    item_phone27: {
      color: `rgba(192, 186, 255, 1)`, margin: 5, fontSize: 18, flex: 1, marginTop: 0
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
class Current extends React.PureComponent {
  static navigationOptions = { title: "Current" };
  constructor(props) {
    super(props);

    this.state = {
      current: "list",
      bot_current: "form",
      text_input_item: "",
      text_input_description: "",
      text_input_name: "",
      text_input_email: "",
      text_input_phone: "",
      response_reason: "",
      refreshing: false,
      article_bot_current: "form",

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
    fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/order_data_request', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        admin: "Chris",
      })
    })
    // reponse to json
    .then(response2 => response2.json())
    .then(response2 => {
      if(response2.body === "Auth")
      {
        globals.current_data = response2.reason;
        this.setState({
          refreshing: false
        })
        //this.props.navigation.navigate("admin");
      }
      else
      {
        console.log(response2.reason);
        this.setState({
          refreshing: false
        })
      }

    })
    .catch(error2 => {
      console.log("Error, ", error2);
      this.setState({
        refreshing: false
      })
    })
  }

  textInputHandle(i, text, notei)
  {
    switch(i)
    {
      case 0:

        this.setState({
          currentItem: text
        })

        break;

      case 1:

        this.setState({
          currentDescription: text
        })
      
        break;

      case 2:

        this.setState({
          currentName: text
        })

        break;

      case 3:

        this.setState({
          currentNewNote: text
        })
      
        break;

      case 4:
        const currentNotes = this.state.currentNotes
        currentNotes[notei] = text 
        this.setState({
          currentNotes: currentNotes
        })
        break;

      case 5:
        this.setState({
          currentNewChargeItem: text,
        })
        break;

      case 6:
        this.setState({
          currentNewChargePrice: text,
        })
        break;

      case 7:
        const currentCharges1 = this.state.currentCharges;
        currentCharges1[notei].item = text;
        this.setState({
          currentCharges: currentCharges1
        })
        break;

      case 8:
        const currentCharges2 = this.state.currentCharges;
        currentCharges2[notei].price = text;
        this.setState({
          currentCharges: currentCharges2
        })
        break;
      case 9:
        
        this.setState({
          currentEmail: text
        })

        break;
      case 10:
        
      this.setState({
        currentPhone: text
      })

        break;
    }
  }

  render() {

    const { props, state } = this;

    const setState = this.setState.bind(this);
    const navigate = this.props.navigation;
    

    return (
      <Fragment>
        { state.current === "article" ? (
          <View style={styles.s7181d70a}>
            <ImageBackground style={styles.s1c4ded82}>
            <View style={styles.s397ad170}>
              <KeyboardAvoidingView style={styles.s9be9753c}>
                <ScrollView>
                    <View style={styles.sf02d78e4}>
                        <View style={styles.column}><Text style={styles.item_body2}>Item:</Text><TextInput onChangeText={(text) => {this.textInputHandle(0, text, 0)}} style={styles.item_phone23} value={state.currentItem}></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Description:</Text><TextInput onChangeText={(text) => {this.textInputHandle(1, text, 0)}} multiline={true} style={styles.item_phone27} value={state.currentDescription}></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Name:</Text><TextInput onChangeText={(text) => {this.textInputHandle(2, text, 0)}} style={styles.item_phone23} value={state.currentName} ></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Notes:</Text><TextInput value={state.currentNewNote} onChangeText={(text) => {this.textInputHandle(3, text, 0)}} placeholderTextColor="grey" placeholder="Note" style={styles.item_body29}></TextInput></View>
                        {currentNotes.map((repeatForItem, i) => (
                          <View style={styles.column}><TextInput onChangeText={(text) => {this.textInputHandle(4, text, i)}} style={styles.item_phone23} value={repeatForItem}></TextInput></View>
                        ))}
                        <View style={styles.column}><Text style={styles.item_body2}>Charges:</Text><TextInput onChangeText={(text) => {this.textInputHandle(5, text, 0)}} value={state.currentNewChargeItem} placeholderTextColor="grey" placeholder="Item" style={styles.item_body29}></TextInput><TextInput  onChangeText={(text) => {this.textInputHandle(6, text, 0)}} value={state.currentNewChargePrice} placeholderTextColor="grey" placeholder="Price" style={styles.item_body29}></TextInput></View>
                        {currentCharges.map((repeatForItem, i) => (
                          <View style={styles.column}><TextInput  onChangeText={(text) => {this.textInputHandle(7, text, i)}} value={repeatForItem.item} style={styles.item_body29}></TextInput>
                          <Text style={styles.item_phone37}>$</Text><TextInput  onChangeText={(text) => {this.textInputHandle(8, text, i)}} value={repeatForItem.price} style={styles.item_phone23}></TextInput>
                          </View>
                        ))}
                        <View style={styles.column}><Text style={styles.item_body2}>Email: </Text><TextInput onChangeText={(text) => {this.textInputHandle(9, text, 0)}} value={state.currentEmail} style={styles.item_phone23}></TextInput></View>
                        <View style={styles.column}><Text style={styles.item_body2}>Phone: </Text><TextInput onChangeText={(text) => {this.textInputHandle(10, text, 0)}} value={state.currentPhone} style={styles.item_phone23}></TextInput></View>
                        <Text style={styles.item_body12}>Sign-up Date: {moment(state.currentTimeSent).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                        <Text style={styles.item_body12}>Finish Date: {state.currentTimeFinished}</Text>
                        <Text style={styles.item_body12}>ID: {state.currentId}</Text>
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
        ) : null}
        { state.current === "list" ? (
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
            {globals.current_data.map((repeatForItem, i) => (
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
                  
                    setState({
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
                  <ImageBackground
                    style={styles.s93176135}
                  >
                    <View style={styles.s732b811e}>
                    <Text style={styles.item_phone}>Item: {repeatForItem.item}</Text>
                    <Text style={styles.item_phone}>Description: {repeatForItem.description}</Text>
                      <Text style={styles.item_body}>Name: {repeatForItem.name.substring(0,40)}</Text>
                      <Text style={styles.item_date}>Start Date: {moment(repeatForItem.timeSent).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableHighlight>
            ))} 
              <TouchableHighlight
              style={styles.s44622037}
              underlayColor={`rgba(255, 255, 255, .5)`}
              onPress={() => {
                this.setState({
                  current: "status",
                })
              }}>
              <View style={styles.sd4c6b84}>
                <ImageBackground
                  
                  style={styles.s93176137}
                >

                  <Icon
                    iconIdentifier={`FontAwesome/plus`}
                    style={styles.s2f214928}
                  />

                </ImageBackground>
              </View>
            </TouchableHighlight>
          </ScrollView>
          </View>
          </ImageBackground>
        </View>
        ) : null}
        {state.current === "status" ? (
          <View style={styles.wrap}>
          <ImageBackground style={styles.scadd08cd}>
          <View style={styles.s397ad170}>
          <KeyboardAvoidingView behavior={`padding`} style={styles.sf2f5c5b1}>
            <ScrollView style={styles.s270ef303}>
              <View style={styles.s8e82c08e}>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Item</Text>
                  <TextInput
                    placeholder={`Item`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_item: text
                      })
                    }}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Description</Text>
                  <TextInput
                    multiline={true}
                    blurOnSubmit={true}
                    onChangeText={(text) => {
                      setState({
                        text_input_description: text,
                        //text_input_body: text
                      })
                    }}
                    onKeyPress={onKeyPress = ({nativeEvent}) => {
                      if(nativeEvent.key === 'Enter')
                      {

                      }
                    }}
                    underlineColorAndroid="transparent"
                    placeholder={`Description`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f26}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Name (Optional)</Text>
                  <TextInput
                    placeholder={`Name`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_name: text,
                      })
                    }}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Email (Optional)</Text>
                  <TextInput
                    placeholder={`Email`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_email: text,
                      })
                    }}
                  />
                </View>
                <View style={styles.sa2282081}>
                  <Text style={styles.s8aa63795}>Phone Number (Optional)</Text>
                  <TextInput
                    placeholder={`Phone #`}
                    placeholderTextColor={`rgba(255, 255, 255, 0.5)`}
                    style={styles.s7ba85f25}
                    onChangeText={(text) => {
                      setState({
                        text_input_phone: text,
                      })
                    }}
                  />
                </View>
              </View>
              {state.bot_current === "form" ? (
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
                      //
                      // submit
                      setState({
                        bot_current: "loading"
                      })

                      fetch('https://us-central1-cecomputerrepair-6d460.cloudfunctions.net/create_order_request', {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          item: this.state.text_input_item,
                          description: this.state.text_input_description,
                          name: this.state.text_input_name,
                          email: this.state.text_input_email,
                          phone: this.state.text_input_phone,
                        })
                      })
                      // reponse to json
                      .then(response => response.json())
                              
                      .then(response => {
                        console.log("loggin response")
                        console.log(response);
                        if(response.body === "Auth")
                        {
                          setState({
                            response_reason: response.reason1,
                            bot_current: "done"
                          })

                          setTimeout(() => {
                            setState({
                              bot_current: "form"
                            })
                          }, 5000)
                        }
                        else
                        {
                          setState({
                            bot_current: "wrong"
                          })

                          setTimeout(() => {
                            setState({
                              bot_current: "form"
                            })
                          }, 3000)
                        }
                      })
                      .catch(error => {

                      })
                    }}
                    underlayColor={`rgba(255, 255, 255, .6)`}
                  >
                    <Text style={styles.s88b1bf09}>Submit</Text>
                  </TouchableHighlight>
                </View>
              </View>
              ) : null}
              {state.bot_current === "loading" ? (
              <View style={styles.sa6743b22}>
                <ActivityIndicator size='large'/>
              </View>
              ): null}
              {state.bot_current === "done" ? (
              <View style={styles.sa6743b23}>
                  <Icon iconIdentifier={`FontAwesome/check`} style={styles.sb1470029} />
                  <Text style={styles.sd1b9a1c5}>{this.state.response_reason}</Text>
              </View>

              ): null}
              {state.bot_current === "wrong" ? (
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
        ) : null}

      </Fragment>
    );
  }
}

Current.defaultProps = {
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
          place: "Seattle, WA",
          miles: 50
        },
        {
          place: "New York, New York",
          miles: 2600
        },
        {
          place: "Seattle, WA",
          miles: 50
        },
      ]

};

Current = withNavigationProp(Current);

export default Current;

export { styles };

import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import { Dimensions, ImageBackground, TouchableHighlight, ScrollView, Text, StyleSheet, View } from "react-native";
import img93176135 from "./jubavrli.png";
import imgcadd08cd from "./BG.png";

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
        }
});
class History extends React.PureComponent {
  static navigationOptions = { title: "History" };
  constructor(props) {
    super(props);

    this.state = {
      current_history: "",
      current: "list",
      refreshing: "",

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

  onRefresh = () => {

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

        //state.current_client_history = response.reason;
          setState({
            article2_name: currentName,
            article2_phone: currentPhone,
          })
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

  render() {

    const { props, state } = this;

    return (
      <Fragment>
      {state.current === "list" ? (
        <View style={styles.s7fe23c89}>
          <ImageBackground style={styles.scadd08cd}>
            <View style={styles.s397ad170}>
              <ScrollView>
                {globals.current_history.map((repeatForItem, i) => (
                  <TouchableHighlight
                    style={styles.s44622035}
                    underlayColor={`rgba(255, 255, 255, 1)`}
                    key={`${i}-44622035-204b-428c-84fd-3560afae236d`}
                    onPress={() => {

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
                          <Text>City</Text>
                          <Text>Distance</Text>
                          <Text>Date</Text>
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

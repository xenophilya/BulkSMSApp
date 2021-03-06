import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Dialog from "react-native-dialog";

import Skeleton from './Skeleton';

export default class TextSMS extends React.Component {
  state = {
    
    CharCount:0,
    page:0,
    Message:"",
    ShowRecipientMenu:false,
    ShowSendMenu:false,
    unit:0,

  };

  

  handleTextChange (mssg) {
    
    var p = Math.floor( mssg.length/160) + 1
    console.log("current page", ""+p)
    this.setState({ Message:mssg,
      CharCount:mssg.length,
    page: p })
    }

    handleCancel = () => {
      this.setState({ ShowRecipientMenu: false, ShowSendMenu: false });
    };

    showDialog = () => {
      this.setState({ ShowRecipientMenu: true });
    };

    showSenderDialog = () => {
      this.setState({ ShowSendMenu: true });
    };

  render() {
    return (
      <Skeleton 
      OpenDrawerMenu= {this.props.navigation} 
      title={"SuyaSMS"}
      
      >

  <ScrollView >
            <View>

            <View style={styles.FormPane}>
                <View style={styles.FormTextView}>
                  
                   <View style={{flex: 50,alignItems: 'center',}}><Text style={{fontWeight:'bold',}}>Balance: {this.state.unit} Unit(s)</Text></View>
                   <View style={{flex: 50,alignItems: 'center',}}>
                   <TouchableHighlight underlayColor="#efefef" style={styles.TopUp}>
              <Text style={styles.buttonText}>TopUp</Text>
            </TouchableHighlight>
                     </View>
                </View>
                </View>

            


              <View style={styles.TextSMSHeader}>
                <Text style={styles.TextSMSHeaderText}>Send Bulk SMS</Text>
              </View>
              
              <View style={styles.FormAllPane}>
              
              <View style={styles.FormPane} >
                
                  <TextInput
                    placeholder="Sender Name"
                    style={styles.FormText}
                  />
                  </View>


              <View style={styles.FormPane}>
                <View style={styles.FormTextView}>
                  <TextInput placeholder="Recipient" style={styles.RecipientFormText} />
                  <TouchableHighlight
                    underlayColor="#efefef"
                    style={styles.Contact}
                    onPress={ () => this.showDialog()}
                  >
                    <Icon  size={25} name='verified-user'/>
                  </TouchableHighlight>
                </View>
                </View>

                
                <View style={styles.FormPane}>
              <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Type something"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
      onChangeText={(text) => this.handleTextChange(text)}
    />
  </View>
  </View>


                <View style={styles.FormPane}>
                <View style={styles.FormTextView}>
                  
    <View style={{flex: 50,alignItems: 'center',}}><Text >{this.state.CharCount}/160</Text></View>
                   <View style={{flex: 50,alignItems: 'center',}}><Text>{this.state.page} page(s)</Text></View>
                </View>
                </View>

    <View style={styles.FormPane}>
    <TouchableHighlight
              underlayColor="#efefef"
              style={styles.SendNow}
              onPress={ () => this.showSenderDialog()}
            >
              <Text style={styles.buttonText}>Send</Text>
            </TouchableHighlight>
    </View>
        </View>

        <Dialog.Container visible={this.state.ShowRecipientMenu}
            style={styles.dialogContainer}>
          <Dialog.Title>Recipient(s)</Dialog.Title>
          <Dialog.Description>
            Select where to fetch recipient(s)
          </Dialog.Description>
          
          <Dialog.Button label="Cancel" onPress={ () => this.handleCancel()} />
        </Dialog.Container>

        <Dialog.Container visible={this.state.ShowSendMenu}
            style={styles.dialogContainer}>
          <Dialog.Title>Confirm</Dialog.Title>
          <Dialog.Description>
            You are Sending {this.state.page} page(s) message. SMS will cost {(this.state.page * 2 )} units
          </Dialog.Description>
          
          <Dialog.Button label="Send" onPress={ () => this.handleCancel()} />
          <Dialog.Button label="Cancel" onPress={ () => this.handleCancel()} />
        </Dialog.Container>
        

        </View>

        
      
          </ScrollView>

          </Skeleton>
    );
  }
}

const styles = StyleSheet.create({


    FormAllPane:{
      
      alignItems: 'center',
    justifyContent: 'center',
    },

    textAreaContainer: {
        borderColor: 'rgba(105,79,173,0.3)',
        //borderWidth: 1,
        padding: 5,
        width:'80%',
        borderRadius: 10,
        backgroundColor:'rgba(105,79,173,0.3)',
      },
      textArea: {
        height: 200,
        justifyContent: "flex-start"
      },
  FormTextView: {
    marginBottom: 10,
    flexDirection: 'row',
    width:'80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'rgba(105,79,173,0.3)',
  },
  FormText: {
    width: '80%',
    borderRadius: 10,
    backgroundColor:'rgba(105,79,173,0.3)',
    fontSize: 14,
  },

  RecipientFormText:{
    width:'80%',
    fontSize: 14,
    borderRadius: 10,
    backgroundColor:'rgba(105,79,173,0.3)',
  },
  
  FormPane: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  TextSMSHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextSMSHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  TopUp: {
    marginLeft: 20,
    backgroundColor: '#694fad',
    padding: (5, 5, 5, 5),
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#694fad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SendNow: {
    
    backgroundColor: '#694fad',
    width: '80%',
    height:40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#694fad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  LogOut: {
    marginLeft: 20,
    backgroundColor: 'gray',
    padding: (5, 5, 5, 5),
    width: '30%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Contact: {
    marginLeft: 2,
    
    padding: (5, 5, 5, 5),
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

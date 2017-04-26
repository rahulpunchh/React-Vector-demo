/**
 * Created by Rahul Purohit on 4/22/2017.
 */
import React, {Component} from "react";
import {styleheet, View, Text, ToastAndroid} from "react-native";
import {Back, Heart, More, PinIcon, Share} from "../util/icons";
export default class TopBar extends Component {
    render() {
        return ( <View style={this.props.style.PinHeader}>
            <View style={this.props.style.UtilityNav}>
                <Back />
                <Heart />
                <Share />
                <More />
            </View>
            <View style={this.props.style.PinButtonContainer}>
                <View style={this.props.style.PinButton}>
                    <PinIcon onPress={()=>{
Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
              }}/>

                    <Text style={this.props.style.PinButtonText} onPress={()=>{
                  ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
              }}>Save</Text>
                </View>
            </View>
        </View>);
    }
}


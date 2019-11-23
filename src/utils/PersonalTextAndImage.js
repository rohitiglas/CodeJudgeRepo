import {responsiveFontSize, responsiveHeight} from "./ResponsiveUI";
import {Image, Text, View} from "react-native";
import React, { Component } from 'react';

const PersonalTextAndImage=(props)=>{
   return(
       <View style={{marginTop:responsiveHeight(5),
           height: responsiveHeight(3), flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dadada', justifyContent: 'space-between'}}>
           <Text style={{fontSize: responsiveFontSize(1)}}>{props.name}</Text>

           {props.image!='' && <Image source={props.image}
                  style={{width: responsiveHeight(2), height: responsiveHeight(2), resizeMode: "contain"}}
           />}

       </View>
   ) ;
}
export default PersonalTextAndImage;


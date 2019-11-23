import {Image, Text, TouchableOpacity, View} from "react-native";
import {blueColor, whiteColor} from "./AppColor";
import {responsiveFontSize, responsiveHeight} from "./ResponsiveUI";
import React from "react";
const TextAndHamburger=(props)=>{
    return(
        <View style={{
            height:responsiveHeight(8),
            backgroundColor:'#1ce2d6',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <View>
                <TouchableOpacity onPress={props.onPress}>

                    <Image source= {require('../images/hamburger.png')}
                           style = {{marginLeft:20,
                               tintColor:'#FFFFFF',width: responsiveHeight(3), height: responsiveHeight(3) }}
                    />


                </TouchableOpacity>
            </View>
            <View>
                <Text style={{color:whiteColor,marginLeft:20,
                    textAlign:'center',
                    fontSize:responsiveFontSize(2.2)}}>NY Times Most Popular</Text>

            </View>

            <View style={{position:'absolute',right:10}}>


                    <Image source= {require('../images/search_icon.png')}
                           style = {{marginLeft:20,
                               tintColor:'#FFFFFF',width: responsiveHeight(3), height: responsiveHeight(3) }}
                    />



            </View>

            <View style={{position:'absolute',right:40}}>


                <Image source= {require('../images/triple_dots.png')}
                       style = {{marginLeft:20,
                           tintColor:'#FFFFFF',width: responsiveHeight(3), height: responsiveHeight(3) }}
                />



            </View>

            <View />

        </View>
    )
}
export default TextAndHamburger;


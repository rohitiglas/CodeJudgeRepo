import {Image, Text, TouchableOpacity, View} from "react-native";
import {responsiveFontSize, responsiveHeight} from "./ResponsiveUI";
import React from "react";
import {blueColor} from "./AppColor";

const LoginOrCreateButton=(props)=>
{
    return(
        <TouchableOpacity onPress={props.onPress}>


            <View style={{marginTop:responsiveHeight(4),borderRadius:responsiveHeight(2),alignItems:'center',
                flexDirection:'row',width:responsiveHeight(14),height:responsiveHeight(3.5),backgroundColor:blueColor}}>

                <Image source= {require('../images/arrow_down.png')}
                       style = {{ marginLeft:responsiveHeight(1.5),width: 10, height: 10 }}
                />
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:responsiveFontSize(1.2),
                        textAlign:'center',color:'#FFFFFF'}}>{props.name}</Text>
                </View>


            </View>
        </TouchableOpacity>
    )
}
export default LoginOrCreateButton;


import {Image, Text, View} from "react-native";
import {responsiveFontSize, responsiveHeight} from "./ResponsiveUI";
import React from "react";
import {blueColor} from "./AppColor";

const HeaderImageAndText=(props)=>
{
    return(
        <View style={{marginTop:responsiveHeight(3),alignItems:'center'}}>
            <Image source = {require('../images/app_logo.png')}
                   style = {{ marginTop:20,width: responsiveHeight(12), height: responsiveHeight(12) }}
            />

            <Text style={{fontFamily:'Montserrat-Bold',marginTop:responsiveHeight(1),
                fontSize:responsiveFontSize(1.6)
                ,color:blueColor,}}>{props.name}</Text>
        </View>
    )
}
export default HeaderImageAndText;


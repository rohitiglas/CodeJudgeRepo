import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Image} from 'react-native';
import {responsiveFontSize, responsiveHeight} from "./ResponsiveUI";
import {blackColor} from "./AppColor";

const TextInputWithIcon=(props)=>{

    return (
        <View style={styles.container}>

            <View style={styles.SectionStyle}>



                <TextInput
                    style={{fontFamily:'Montserrat-Medium',fontSize:responsiveFontSize(1.2),flex:1}}
                    placeholder={props.placeHolderName}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={blackColor}
                />
                {props.image!='' && <Image source={props.image} style={styles.ImageStyle} />}


            </View>

        </View>
    );

}




const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#E8E8E8',
        borderTopColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        height: responsiveHeight(5.5),
        margin: 10
    },

    ImageStyle: {


        margin: 5,
        height: responsiveHeight(2),
        width: responsiveHeight(2),
        alignItems: 'center'
    },

});
export default TextInputWithIcon;

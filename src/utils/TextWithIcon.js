import React, { Component } from 'react';

import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {blackColor} from "./AppColor";

const TextWithIcon=(props)=>{

    return (
        <View style={styles.container}>



            <View style={styles.SectionStyle}>


                <TouchableOpacity  style={{flex:1}} onPress={props.onPress}>
                <Text
                    style={{fontFamily:'Montserrat-Medium',color:blackColor,fontSize:10}}
                >
                    {props.placeHolderName}
                </Text>
                </TouchableOpacity>

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
        height: 40,
        margin: 10
    },

    ImageStyle: {
        padding:5,

        margin: 5,
        height: 15,
        width: 15,
        resizeMode : 'stretch',
        alignItems: 'center'
    },

});
export default TextWithIcon;

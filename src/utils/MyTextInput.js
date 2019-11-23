import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Image} from 'react-native';

const MyTextInput=(props)=>{

    return (
        <View style={styles.container}>

            <View style={styles.SectionStyle}>



                <TextInput
                    style={{fontSize:10,flex:1}}
                    placeholder={props.placeHolderName}
                    underlineColorAndroid="transparent"
                />



            </View>

        </View>
    );

}




const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
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
export default MyTextInput;

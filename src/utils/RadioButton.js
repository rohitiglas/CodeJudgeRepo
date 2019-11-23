import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {responsiveHeight} from "./ResponsiveUI";
import {blackColor, darkBlack, underLineColor} from "./AppColor";


export default class RadioButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (

                <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.8} style={styles.radioButton}>
                    <View style={[styles.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor: this.props.button.color }]}>
                        {
                            (this.props.button.selected)
                                ?
                                (<View style={[styles.radioIcon, { height: this.props.button.size, width: this.props.button.size, backgroundColor: this.props.button.color }]}></View>)
                                :
                                null
                        }
                    </View>
                    <Text style={[styles.label, { fontFamily:'Montserrat-SemiBold',color: darkBlack }]}>{this.props.button.label}</Text>
                </TouchableOpacity>


        );
    }
}

const styles = StyleSheet.create({
    radioButton: {
        borderStartColor:underLineColor,
        borderEndColor:underLineColor,
        borderLeftColor:'#FFF',
        borderRightColor:'#FFF',
        borderTopWidth:0.2,
        borderBottomWidth:0,
        width:'100%',
        height:'10%',
        flexDirection: 'row',
        marginTop: responsiveHeight(1),
        alignItems: 'center',
    },
    radioButtonHolder: {
        marginLeft:120,
        borderRadius: 40,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioIcon: {

        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginLeft: 50,
        fontSize: 12
    },

});

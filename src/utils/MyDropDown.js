import * as React from 'react'
import {Alert, Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "../utils/ResponsiveUI";
import {blackColor, greenColor, underLineColor} from "../utils/AppColor";

export default class MyDropDown extends React.Component {
    render() {
        const options = [
            {
                color: blackColor,
                label: 'Male',
                value: 1
            },
            {
                color: blackColor,
                label: 'Female',
                value: 2
            },
        ]
        return (
            <View style={{marginTop:10,marginBottom:10,marginLeft:20,marginRight:20, flex:1,width:responsiveWidth(100),
                height:responsiveHeight(5.5),flexDirection: 'row',
                justifyContent:'center',alignItems:'center' }}>
                <CustomPicker
                    placeholder={'Gender M/F'}
                    options={options}
                    getLabel={item => item.label}
                    fieldTemplate={this.renderField}


                />
                <Image source={require('../images/drop_down.png')} style={styles.ImageStyle} />
            </View>
        )
    }


    renderField(settings) {
        const { selectedItem, defaultText, getLabel, clear } = settings
        return (
            <View style={styles.container}>
                <View>
                    {!selectedItem && <Text style={[styles.text, { color: 'grey' }]}>{defaultText}</Text>}
                    {selectedItem && (
                        <View style={styles.innerContainer}>
                            <Text style={[styles.text, { color: selectedItem.color }]}>
                                {getLabel(selectedItem)}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        )
    }

    renderOption(settings) {
        const { item, getLabel } = settings
        return (
            <View style={styles.optionContainer}>
                <View style={styles.innerContainer}>
                    <View style={[styles.box, { backgroundColor: item.color }]} />
                    <Text style={{ color: item.color, alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        width:responsiveWidth(80),
        borderWidth: 1,
        borderBottomColor: '#E8E8E8',
        borderTopColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        padding: 5
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    text: {
        fontFamily:'Montserrat-Medium',
        color:blackColor,
        fontSize: responsiveFontSize(1.4)
    },
    headerFooterContainer: {
        padding: 10,
        alignItems: 'center'
    },
    clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
    optionContainer: {
        padding: 10,
        borderBottomColor: greenColor,
        borderBottomWidth: 1
    },
    optionInnerContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    ImageStyle: {
        position:'absolute',
        right:responsiveHeight(7),



        margin: 5,
        height: responsiveHeight(2),
        width: responsiveHeight(2),
        alignItems: 'center'
    },
})
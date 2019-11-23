import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, FlatList,ActivityIndicator} from 'react-native';
import {responsiveHeight, responsiveWidth,responsiveFontSize} from "../utils/ResponsiveUI";
import MenuDrawer from "react-native-side-drawer";
import {connect} from 'react-redux';
import {blackColor, blueColor, darkBlack} from "../utils/AppColor";
import TextAndHamburger from "../utils/TextAndHamburger";
import {filterRestaurant, getArticles, getRestaurantData} from "../actions/MyAction";
import ArticleListData from "./ArtileListData";

class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,

            showDetails: false,
            selectedItem: null,
            starCount: 3.5,
            showPlanner: true,
            showBoard: false,
            showConnect: false,
            showCalender: false,
            isShowOptionMenu:false,
            showZipCode:false,
            showDetailsMenu:false,
            isUserDetails:false
        };
    }
    componentDidMount()
    {

        this.props.getArticles();
    }
    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    };


    drawerContent = () => {
        return (
            <View style={styles.animatedBox}>
                <View style={{marginTop:responsiveHeight(10),flexDirection:'row',alignItems:'center'}}>


                    <TouchableOpacity onPress={this.toggleOpen}>
                        <Image source= {require('../images/15_07.png')}
                               style = {{ marginLeft:responsiveHeight(5),width: responsiveHeight(2), height: responsiveHeight(2) }}
                        />
                    </TouchableOpacity>
                    <Text style={{marginLeft:responsiveHeight(3),marginRight:responsiveHeight(3),color:blackColor,textAlign:'center',fontSize:responsiveFontSize(1.6)}}>settings</Text>


                </View>
                <View style={{marginTop:responsiveHeight(5),flexDirection:'row',alignItems:'center'}}>


                    <TouchableOpacity onPress={this.toggleOpen}>
                        <Image source= {require('../images/15_11.png')}
                               style = {{ marginLeft:responsiveHeight(5),width: responsiveHeight(2), height: responsiveHeight(2) }}
                        />
                    </TouchableOpacity>
                    <Text style={{marginLeft:responsiveHeight(3),marginRight:responsiveHeight(3),color:blackColor,textAlign:'center',fontSize:responsiveFontSize(1.6)}}>Terms and Conditions</Text>


                </View>
                <View style={{marginTop:responsiveHeight(5),flexDirection:'row',alignItems:'center'}}>


                    <TouchableOpacity onPress={this.toggleOpen}>
                        <Image source= {require('../images/15_14.png')}
                               style = {{ marginLeft:responsiveHeight(5),width: responsiveHeight(2), height: responsiveHeight(2) }}
                        />
                    </TouchableOpacity>
                    <Text style={{marginLeft:responsiveHeight(3),marginRight:responsiveHeight(3),color:blackColor,textAlign:'center',fontSize:responsiveFontSize(1.6)}}>Privacy Policy</Text>


                </View>
                <TouchableOpacity onPress={this.signOut}>
                    <View style={{marginTop:responsiveHeight(5),flexDirection:'row',alignItems:'center'}}>



                        <Image source= {require('../images/15_17.png')}
                               style = {{ marginLeft:responsiveHeight(5),width: responsiveHeight(2), height: responsiveHeight(2) }}
                        />

                        <Text style={{marginLeft:responsiveHeight(3),marginRight:responsiveHeight(3),color:blackColor,textAlign:'center',fontSize:responsiveFontSize(1.6)}}>Sign Out</Text>


                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    closeDrawer=()=>{
        if(this.state.open)
        this.setState({ open: !this.state.open });
    }

    render() {
        if(this.props.isFetching)
        {
         return (
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <ActivityIndicator size={"large"}/>
             </View>

         )
        }
        return (

            <View style={styles.container}>
            <MenuDrawer
                open={this.state.open}
                drawerContent={this.drawerContent()}
                drawerPercentage={55}
                animationTime={250}
                overlay={true}
                opacity={0.4}>
            <View style={{flex:1,marginTop:30}}>

                <TextAndHamburger onPress={this.toggleOpen} />


            <ArticleListData/>






            </View>
            </MenuDrawer>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    optionContainer: {
        flex: 1,
        backgroundColor: "#eeeeee",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0
    },
    container: {
        flex: 1,
        backgroundColor: "#eeeeee",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0
    },
    animatedBox: {
        flex: 1,
        height:'100%',
        backgroundColor: "#FFFFFF",
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    detailBoxStyle:{
        backgroundColor: '#fff',
        paddingHorizontal: responsiveHeight(3),
        marginTop: responsiveHeight(2),
        marginHorizontal: responsiveHeight(6),
        marginBottom: responsiveHeight(15),
        height: responsiveHeight(65)
    },
    listItem:{
        marginLeft:20,
        marginRight:20,
        marginBottom: responsiveHeight(5),
        height:responsiveHeight(15),
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:responsiveHeight(2)
    },
    flatListStyle:{
        backgroundColor: 'transparent',paddingHorizontal: responsiveHeight(3), marginTop: responsiveHeight(2), marginBottom: responsiveHeight(15)
    }
})


const mapStateToProps = (state) =>{
    return {}
}
const mapDispatchToProps = (dispatch)=>{
    return{

        getArticles: ()=>dispatch(getArticles()),
        getFilterRestaurantData: (data)=>dispatch(filterRestaurant(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

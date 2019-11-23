import {ActivityIndicator, FlatList, Image, Text, View} from "react-native";
import {responsiveFontSize, responsiveHeight} from "../utils/ResponsiveUI";
import React from "react";
import {filterRestaurant, getArticles} from "../actions/MyAction";
import {connect} from "react-redux";

const ArticleListData=(props)=>{
    if(props.isFetching)
    {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator size={"large"}/>
            </View>

        )
    }

return(
    <FlatList

        data={ props.listData}

        ItemSeparatorComponent = {this.FlatListItemSeparator}

        renderItem={({item}) =>{
            return(<View style={{margin:10}}>
                <View style={{flex:1, flexDirection: 'row',alignItems:'center'}}>
                    <View style={{width:40,height:40,borderRadius:20,backgroundColor:'#919191'}}/>
                    <View style={{flex:1,marginLeft: 20,marginRight: 30}}>
                        <Text style={{fontSize: responsiveFontSize(2),color:'#000'}}>{item.title}</Text>
                        <Text style={{marginTop:10,fontSize: responsiveFontSize(2),color:'#919191'}}>{item.byline}</Text>
                        <View style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                            <Text style={{fontSize: responsiveFontSize(2),color:'#919191'}}>{item.section}</Text>
                            <View style={{flexDirection: 'row',alignItems:'center'}}>
                                <Image source= {require('../images/calender.png')}
                                       style = {{
                                           marginRight:10,
                                           width: responsiveHeight(3),
                                           height: responsiveHeight(3) }}
                                />
                                <Text style={{textAlign:'center',
                                    fontSize: responsiveFontSize(1.8),color:'#919191'}}>{item.published_date}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{position:'absolute',right:10}}>
                        <Image source= {require('../images/right_arrow_icon.png')}
                               style = {{marginLeft:20,
                                   width: responsiveHeight(3), height: responsiveHeight(3) }}
                        />
                    </View>








                </View>



            </View>)
        }



        }

        keyExtractor={(item, index) => index.toString()}


    />
)
}


const mapStateToProps = (state) =>{
    console.log("Given State",state)

    return {
        isSignup:state.isSignup,
        error:state.error,
        isFetching:state.isFetching,
        listData:state.listData

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{

        getArticles: ()=>dispatch(getArticles()),
        getFilterRestaurantData: (data)=>dispatch(filterRestaurant(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListData);

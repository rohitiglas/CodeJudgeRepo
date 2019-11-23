// Sign up
import {Alert} from "react-native";

export const LIST_PENDING = 'LIST_PENDING';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_ERROR = 'LIST_ERROR';
import axios from 'axios';


let apiKey='';



function listPending(msg) {
    return {
        type: LIST_PENDING,
        message: msg
    };
}

function listSuccess(data) {
    return {
        type: LIST_SUCCESS,
        data
    };
}

function listError(listError) {
    return {
        type: LIST_ERROR,
        listError
    }
}


//signup
export function getRestaurantData(lat,long){


    return dispatch => {
        dispatch(listPending())
        let url =  'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=Vt0hBkCiVPbCzufPAiNQw4SdAvl0EeZI';
        axios.get(url)
            .then(res => {
                console.log("JSJSJJSRohit",res.data)
                dispatch(listSuccess(res))
            }).catch(err=>{
            dispatch(listError(err))
        })
    };
}
export function  getArticles(){

    console.log("SKKSKSKSKKSKKSKS","Calling")


    return async dispatch => {
        dispatch(listPending())
        let url =  'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=Vt0hBkCiVPbCzufPAiNQw4SdAvl0EeZI';
        await axios.get(url)
            .then(res => {

                console.log("SKKSKSKSKKSKKSKS","Success")
                dispatch(listSuccess(res))
            }).catch(err=>{

            console.log("SKKSKSKSKKSKKSKSError",err)
            dispatch(listError(err))
        })
    };
}

export function filterRestaurant(data){


    return dispatch => {
        dispatch(listPending())
        let url =  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.4595,77.0266&radius=2500&type=restaurant&keyword='+data+'&key='+apiKey;
        axios.get(url)
            .then(res => {
                dispatch(listSuccess(res))
            }).catch(err=>{
            dispatch(listError(err))
        })
    };
}

import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import { Animated, Easing, Platform } from 'react-native';
import ArticleList from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";


export function fromLeft(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: ({ layout, position, scene }) => {
            const { index } = scene;
            const { initWidth } = layout;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [-initWidth, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return { opacity, transform: [{ translateX }] };
        },
    };
}

const AppNavigator = createStackNavigator(
    {

        ArticleList: {
            screen: ArticleList,
        },
        ArticleDetails: {
            screen: ArticleDetails,
        },



    },
    {
        initialRouteName: 'ArticleList',
        headerMode: 'none',
        transitionConfig: () => fromLeft()
    },
);
export default createAppContainer(AppNavigator);

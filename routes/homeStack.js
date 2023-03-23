import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
    Home: { //default screen since at top of the stack
        screen: Home,
        navigationOptions: {
            title: 'GameZone'
            //headerStyle: { backgroundColor: '#eee' }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            //headerStyle: { backgroundColor: '#eee' }
        }
        
    }
}
const HomeStack = createNativeStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;
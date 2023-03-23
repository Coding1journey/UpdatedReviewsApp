import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';

const screens = {
    About: { //default screen since at top of the stack
        screen: About,
        navigationOptions: {
            title: 'About GameZone'
            //headerStyle: { backgroundColor: '#eee' }
        }
    },
    
}
const AboutStack = createNativeStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default AboutStack;
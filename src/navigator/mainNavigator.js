import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera45849Navigator from '../features/Camera45849/navigator';
import Add-Item45848Navigator from '../features/Add-Item45848/navigator';
import UserProfile45825Navigator from '../features/UserProfile45825/navigator';
import Maps45821Navigator from '../features/Maps45821/navigator';
import Add-Item45817Navigator from '../features/Add-Item45817/navigator';
import Maps45816Navigator from '../features/Maps45816/navigator';
import UserProfile45776Navigator from '../features/UserProfile45776/navigator';
import Maps45772Navigator from '../features/Maps45772/navigator';
import Add-Item45768Navigator from '../features/Add-Item45768/navigator';
import Maps45767Navigator from '../features/Maps45767/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Camera45849: { screen: Camera45849Navigator },
Add-Item45848: { screen: Add-Item45848Navigator },
UserProfile45825: { screen: UserProfile45825Navigator },
Maps45821: { screen: Maps45821Navigator },
Add-Item45817: { screen: Add-Item45817Navigator },
Maps45816: { screen: Maps45816Navigator },
UserProfile45776: { screen: UserProfile45776Navigator },
Maps45772: { screen: Maps45772Navigator },
Add-Item45768: { screen: Add-Item45768Navigator },
Maps45767: { screen: Maps45767Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

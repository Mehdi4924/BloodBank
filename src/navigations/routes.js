import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Auth/Splash';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import OnBoarding from '../screens/Auth/OnBoarding';
import DashBoard from '../screens/Home/Dashboard';
import MobileNumber from '../screens/Auth/MobileNumber';
import OTP from '../screens/Auth/OTP';
import CompleteProfile from '../screens/Home/CompleteProfile';
import Donate from '../screens/Home/Donate';
import OrderBlood from '../screens/Home/OrderBlood';
import Compaign from '../screens/Home/Compaign';
import Assistant from '../screens/Home/Assistant';
import Reports from '../screens/Home/Reports';
import Search from '../screens/Home/Search';
import Home from '../screens/Home/Home';
import AddRequest from '../screens/Home/AddRequest';
import Settings from '../screens/Home/Settings';
import Filters from '../screens/Home/Filters';
import GetHelp from '../screens/Home/GetHelp';
import EditProfile from '../screens/Home/EditProfile';
import AllRequests from '../screens/Home/AllRequests';
import Notifications from '../screens/Home/Notifications';
import CashDonation from '../screens/Home/CashDonation';
import CampRegistation from '../screens/Home/CampRegistration';
import SelectLogin from '../screens/Auth/SelectLogin';
import PatientOTP from '../screens/Patient/PatientAuth/PatientOTP';
import PatientMobileNumber from '../screens/Patient/PatientAuth/PatientMobileNumber';
import PatientRegistration from '../screens/Patient/PatientAuth/PatientRegistration';
import PendingScreen from '../screens/Patient/PatientAuth/PendingScreen';
import PatientDashboard from '../screens/Patient/PatientAuth/PatientDashboard';
import EditRegistration from '../screens/Patient/PatientAuth/EditRegistration';
import Gallery from '../screens/Home/Gallery';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MobileNumber"
          component={MobileNumber}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen
          name="OrderBlood"
          component={OrderBlood}
          options={{
            title: 'Request Blood to Sundas',
          }}
        />
        <Stack.Screen name="Compaign" component={Compaign} />
        <Stack.Screen
          name="Assistant"
          component={Assistant}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddRequest" component={AddRequest} />
        <Stack.Screen name="HoSettingsme" component={Settings} />
        <Stack.Screen name="Filters" component={Filters} />
        <Stack.Screen name="GetHelp" component={GetHelp} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CashDonation" component={CashDonation} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen
          name="PatientRegistration"
          component={PatientRegistration}
        />

        <Stack.Screen
          name="PatientOTP"
          component={PatientOTP}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PatientMobileNumber"
          component={PatientMobileNumber}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SelectLogin"
          component={SelectLogin}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CampRegistration"
          component={CampRegistation}
          options={{
            title: 'Camp Registration',
          }}
        />

        <Stack.Screen
          name="AllRequests"
          component={AllRequests}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PendingScreen"
          component={PendingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PatientDashboard"
          component={PatientDashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditRegistration"
          component={EditRegistration}
          options={{
            title: 'Edit Registration',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigator/AppNavigation';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
      <Toast />
    </NavigationContainer>
  );
};

export default App;

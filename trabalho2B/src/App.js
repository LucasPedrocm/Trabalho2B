import { NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import { AuthProvider } from './contexts/AuthContext';


export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Welcome } from "./screens";
import useAuth from './hooks/useAuths';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = React.useState(null);

  // Check for authentication state changes
  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'MainContainer' : 'Welcome'}
      >
        {user ? (
          <>
            <Stack.Screen
              name="MainContainer"
              component={MainContainer}
              options={{
                headerShown: false
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

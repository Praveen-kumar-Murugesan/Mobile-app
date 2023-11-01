import { onAuthStateChanged } from 'firebase/auth';
import * as React from 'react';
import { View, Text } from 'react-native';
import { auth } from '../firebase';

export default function useAuth() {
    const [user, setUser] = React.useState(null);

    React.useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user=>{
            console.log('got user: ',user);
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
        });
        return unsub;
    },[])
    return {user}
}
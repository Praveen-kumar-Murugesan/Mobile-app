import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
export default function SettingsScreen({ navigation }) {
    const handleLogout = async ()=>{
        await signOut(auth);
    }
    return (
        <View style={{ flex: 1, marginHorizontal: 22 }}>
                <Button
                    title="Log out"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={handleLogout}
                />
        </View>
    );
}
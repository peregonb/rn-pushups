import React, {useState} from 'react';
import {AppLoading} from "expo";
import * as Font from 'expo-font'
import {MainLayout} from "./src/MainLayout";

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadApp = async () => {
        await Font.loadAsync({
            "antoutline": require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
            "antfill": require('@ant-design/icons-react-native/fonts/antfill.ttf')
        });
    };
    if (!isReady) {
        return <AppLoading startAsync={loadApp}
                           onError={err => console.log(err)}
                           onFinish={() => setIsReady(true)}/>
    }
    return <MainLayout/>
}
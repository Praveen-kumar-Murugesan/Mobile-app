import React, { useState, useEffect } from 'react';
import { View, Image,Text, StyleSheet, Animated } from 'react-native';
import { getDownloadURL, ref, getStorage} from 'firebase/storage';
import { PinchGestureHandler, State , GestureHandlerRootView} from 'react-native-gesture-handler';
export default function MBACanteen({ navigation }) {
    const [url, setUrl] = useState();

  useEffect(() => {
    const func = async () => {
        const storage = getStorage();
        const reference = ref(storage, '/mba/canteen1.jpeg');
        await getDownloadURL(reference).then((x) => {
          setUrl(x);
        })
      }
  
      if (url == undefined) {func()};
    }, []);

    scale = new Animated.Value(1)
    
    onZoomEventFunction=Animated.event(
        [{
            nativeEvent:{scale:this.scale}
        }],
        {
            useNativeDriver:true
        }
    )

    onZoomStateChangeFunction=(event)=>{
        if(event.nativeEvent.oldState==State.ACTIVE){
            Animated.spring(this.scale,{
                toValue:1,
                useNativeDriver:true
            }).start()
        }
    }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={{flex: 1, backgroundColor: '#fffff', alignItems: 'center', justifyContent: 'center'}}>
        <PinchGestureHandler
        onGestureEvent={this.onZoomEventFunction}
        onHandlerStateChange={this.onZoomStateChangeFunction}
        >
      <Animated.Image
        style={{width: '100%', height: '100%', resizeMode: 'stretch', transform:[{scale:this.scale}]}}
        source={{ uri: url }}
      />
      </PinchGestureHandler>
    </View></GestureHandlerRootView>
  );
}

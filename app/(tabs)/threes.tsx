import React from "react";
import { View , StyleSheet  } from "react-native";
import MapView from "react-native-maps";

export default function TabThreeScreen(){
    return(
        <View style={style.container}>
            <MapView/>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})

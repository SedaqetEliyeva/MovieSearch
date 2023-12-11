import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {StackNavigator} from "./navigation/StackNavigator";
import {Provider} from "react-redux";
import {store} from "./redux/store";

export const App=()=>{
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default App;
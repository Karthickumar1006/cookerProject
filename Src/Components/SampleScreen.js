import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text ,Platform, Button} from "react-native";
import { NativeModules } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch, useSelector } from 'react-redux';
import { airportDetailsAction } from '../Redux/actions/actions';

const SampleScreen = () => {
    const { RNConfig } = NativeModules;
    const [connectionType, setConnectionType] = useState(null);
    const [isConnected, setIsConnected] = useState(null);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.airData.info);
    const loading = useSelector((state) => state.airData.loading);
    const error = useSelector((state) => state.airData.error);
    const data1 = useSelector(state => state.data);
    const loading1 = useSelector(state => state.loading);
    const error1 = useSelector(state => state.error);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setConnectionType(state.type);
            setIsConnected(state.isConnected);
            console.log('Connection type', state.type);
            console.log('Is connected?', state.isConnected);
        });

        
        // Cleanup subscription on unmount
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <SafeAreaView>
            <View>
                <Text>{Platform.OS === 'ios' ? `Target Name: ${RNConfig.targetName}` : "Target Name: Prod"}</Text>
                <Text>Connection Type: {connectionType}</Text>
                <Text>Is Connected: {isConnected ? "Yes" : "No"}</Text>
                <Button
                    title="Get Airport Details from Redux"
                    onPress={() => {
                        dispatch(airportDetailsAction())
                    }}
                />
                
                <Text>{JSON.stringify(data)}</Text>
            </View>
        </SafeAreaView>
    );
};

export default SampleScreen;

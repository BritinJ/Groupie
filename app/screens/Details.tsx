import {View, Text } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps{
    navigation: NavigationProp<any,any>;
}


const Details = ({navigation} : RouterProps) => {
    return(
        <View>
            <Text>Details</Text>
        </View>
    )
}

export default Details
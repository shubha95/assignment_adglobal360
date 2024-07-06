import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";


const CardComponent = ({ data, childCall }) => {
    console.log("f-------------------", data)
    return (
        <TouchableOpacity onPress={() => childCall(data.userId)}>
            <View style={{
                alignContent: 'center',
                alignSelf: 'center',
                flex: 1,
                borderWidth: 1,
                backgroundColor: "#aaaaaa",
                width: '85%',
                paddingHorizontal: 10,
                paddingVertical: 10,
                margin: 10
            }}>
                <Text style={{ color: '#000', fontSize: 14, fontWeight: '500', marginTop: 10 }}>{data?.userId}</Text>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '500' }}>{data?.title}</Text>
                <Text style={{ color: '#000', fontSize: 14, fontWeight: '500', marginTop: 10 }}>{data?.body}</Text>
            </View>
        </TouchableOpacity>
    );

}


export default CardComponent;
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useMemo, useState } from 'react'
import CardComponent from './CardComponent';
const ListComponent = ({ data, childHandelCall }) => {
 
    const renderItem = useCallback(({ item }) => (<CardComponent data={item} childCall={(id) => childHandelCall(id)} />), [data])
    return (
        <View style={{ flex: 0.95 }}>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                initialNumToRender={5}
            />


        </View>


    )
}

export default memo(ListComponent)

const styles = StyleSheet.create({})
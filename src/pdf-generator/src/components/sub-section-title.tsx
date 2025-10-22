import React from 'react';
import {Text, View, ViewProps} from "@react-pdf/renderer";
import {styles} from "../styles";

export function SubSectionTitle({listValue, title, ...props}: Readonly<{
    listValue: string;
    title: string
} & ViewProps>) {
    return (
        <View style={[styles.subSectionTitle]} {...props}>
            <Text style={{
                width: "7%",
            }}>{listValue}</Text>
            <Text style={{width: '90%'}}>{title}</Text>
        </View>
    )
}

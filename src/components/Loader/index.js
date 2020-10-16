import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";

export const Loader = () => {
    const [loading, setLoading] = useState(false);

    return (
        <View>
        <ActivityIndicator animating={loading} size="large" color="red" />
        </View>
    );
}
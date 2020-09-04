import React from 'react';

import { styles } from './styles';
import { View, Text } from 'react-native';

export const Header = ({ title }) => {
    return (
        <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}
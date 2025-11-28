import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatCard = ({ label, value, bgColor, valueColor }: any) => {
    const styles = StyleSheet.create({
        card: {
            padding: 16,
            borderRadius: 12,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        label: {
            fontSize: 14,
            color: '#6b7280',
            marginBottom: 4,
        },
        value: {
            fontSize: 20,
            fontWeight: '700',
        },
    });

    return (
        <View style={[styles.card, { backgroundColor: bgColor }]}>
            <Text style={styles.label}>{label}</Text>
            <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
        </View>
    );
};

export default StatCard;
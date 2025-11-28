import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PigCard = ({ pig, onPress }: any) => {
    const styles = StyleSheet.create({
        card: {
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
            paddingBottom: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#f3f4f6',
        },
        title: {
            fontSize: 18,
            fontWeight: '700',
            color: '#111827',
        },
        badge: {
            paddingHorizontal: 12,
            paddingVertical: 4,
            borderRadius: 12,
        },
        badgeActive: {
            backgroundColor: '#dcfce7',
        },
        badgeInactive: {
            backgroundColor: '#e5e7eb',
        },
        badgeText: {
            fontSize: 12,
            fontWeight: '600',
        },
        badgeTextActive: {
            color: '#15803d',
        },
        badgeTextInactive: {
            color: '#374151',
        },
        metricsContainer: {
            flexDirection: 'row',
            backgroundColor: '#f9fafb',
            padding: 12,
            borderRadius: 8,
            justifyContent: 'space-around',
        },
        metricItem: {
            alignItems: 'center',
            flex: 1,
        },
        metricLabel: {
            fontSize: 12,
            color: '#6b7280',
            marginBottom: 4,
        },
        metricValue: {
            fontSize: 14,
            fontWeight: '600',
            color: '#111827',
        },
    });

    const isActive = pig.activity === 'Active';

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => onPress(pig)}
            activeOpacity={0.7}
        >
            <View style={styles.header}>
                <Text style={styles.title}>{pig.id}</Text>
                <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeInactive]}>
                    <Text style={[styles.badgeText, isActive ? styles.badgeTextActive : styles.badgeTextInactive]}>
                        {pig.activity}
                    </Text>
                </View>
            </View>

            <View style={styles.metricsContainer}>
                <View style={styles.metricItem}>
                    <Text style={styles.metricLabel}>Temp</Text>
                    <Text style={styles.metricValue}>{pig.temp}</Text>
                </View>
                <View style={styles.metricItem}>
                    <Text style={styles.metricLabel}>Heart Rate</Text>
                    <Text style={styles.metricValue}>{pig.heartRate}</Text>
                </View>
                <View style={styles.metricItem}>
                    <Text style={styles.metricLabel}>Feed</Text>
                    <Text style={styles.metricValue}>{pig.feedIntake}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PigCard;
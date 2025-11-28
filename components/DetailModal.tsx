import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const DetailItem = ({ label, value, large = false }: any) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 4,
        },
        label: {
            color: '#6b7280',
            fontSize: large ? 14 : 16,
        },
        value: {
            fontWeight: '600',
            fontSize: large ? 20 : 16,
            color: large ? '#111827' : '#1f2937',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const DetailModal = ({ pig, onClose }: any) => {
    if (!pig) return null;

    const styles = StyleSheet.create({
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
        },
        container: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 24,
            paddingBottom: 32,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            paddingBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#e5e7eb',
        },
        title: {
            fontSize: 24,
            fontWeight: '700',
            color: '#111827',
        },
        closeButton: {
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
        },
        closeButtonText: {
            fontSize: 16,
            fontWeight: '600',
            color: '#ef4444',
        },
        pigIdSection: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 8,
            marginBottom: 16,
        },
        pigIdLabel: {
            fontSize: 16,
            color: '#4b5563',
            fontWeight: '500',
        },
        pigIdValue: {
            fontSize: 18,
            fontWeight: '700',
            color: '#2563eb',
        },
        gridContainer: {
            flexDirection: 'row',
            backgroundColor: '#eff6ff',
            padding: 16,
            borderRadius: 12,
            marginBottom: 16,
            gap: 16,
        },
        gridItem: {
            flex: 1,
            alignItems: 'center',
        },
        reproductionBox: {
            backgroundColor: '#e0f2fe',
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#7dd3fc',
        },
        reproductionTitle: {
            fontSize: 14,
            fontWeight: '700',
            color: '#0369a1',
            marginBottom: 12,
            paddingBottom: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#7dd3fc',
        },
    });

    return (
        <Modal
            visible={true}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Breeder Details</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={onClose}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.pigIdSection}>
                        <Text style={styles.pigIdLabel}>Pig ID:</Text>
                        <Text style={styles.pigIdValue}>{pig.id}</Text>
                    </View>

                    <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                            <DetailItem label="Weight" value={pig.weight} large={true} />
                        </View>
                        <View style={styles.gridItem}>
                            <DetailItem label="Health Score" value={pig.breederHealth} large={true} />
                        </View>
                    </View>

                    <View style={styles.reproductionBox}>
                        <Text style={styles.reproductionTitle}>Reproduction Data</Text>
                        <DetailItem label="Last Insemination:" value={pig.lastInsemination} />
                        <DetailItem label="Insemination Type:" value={pig.inseminationType} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default DetailModal;
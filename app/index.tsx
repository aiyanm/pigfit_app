import { ScrollView, Text, View } from "react-native";
import React, { useState } from 'react';
import PigCard from './components/PigCard';
import StatCard from './components/StatCard';
import DetailModal from './components/DetailModal';
import { appStyles } from './styles/appStyles';

const OVERALL_DATA = {
    healthScore: 94,
    avgTemp: '38.5°C',
    activityLevel: 'Normal',
};

const PIG_DATA = [
    {
        id: 'PIG-101',
        temp: '38.6°C',
        heartRate: '75 bpm',
        feedIntake: '2.4 kg',
        activity: 'Active',
        weight: '210 kg',
        breederHealth: 'Excellent',
        lastInsemination: '2025-10-15',
        inseminationType: 'Artificial',
    },
    {
        id: 'PIG-102',
        temp: '39.1°C',
        heartRate: '82 bpm',
        feedIntake: '1.8 kg',
        activity: 'Active',
        weight: '198 kg',
        breederHealth: 'Good',
        lastInsemination: '2025-11-01',
        inseminationType: 'Natural',
    },
    {
        id: 'PIG-103',
        temp: '38.4°C',
        heartRate: '72 bpm',
        feedIntake: '2.5 kg',
        activity: 'Eating',
        weight: '215 kg',
        breederHealth: 'Excellent',
        lastInsemination: '2025-09-20',
        inseminationType: 'Artificial',
    },
];

export default function App() {
    // State management for modal visibility and selected pig data
    const [selectedPig, setSelectedPig] = useState<typeof PIG_DATA[0] | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handlePigPress = (pig: typeof PIG_DATA[0]) => {
        setSelectedPig(pig);
        setModalVisible(true);
    };

    return (
        <View style={appStyles.container}>
            <ScrollView contentContainerStyle={appStyles.content}>
                {/* Header Section */}
                <View style={appStyles.header}>
                    <Text style={appStyles.title}>Farm Monitor</Text>
                    <Text style={appStyles.subtitle}>Live Status Dashboard</Text>
                </View>

                {/* Overall Status Cards */}
                <Text style={appStyles.sectionTitle}>Overall Status</Text>
                <View style={appStyles.statsContainer}>
                    <StatCard 
                        label="Health Score" 
                        value={`${OVERALL_DATA.healthScore}%`} 
                        bgColor="#dbeafe" 
                        valueColor="#2563eb"
                    />
                    <StatCard 
                        label="Avg Temp" 
                        value={OVERALL_DATA.avgTemp} 
                        bgColor="#dcfce7" 
                        valueColor="#16a34a"
                    />
                    <StatCard 
                        label="Activity" 
                        value={OVERALL_DATA.activityLevel} 
                        bgColor="#fef3c7" 
                        valueColor="#ca8a04"
                    />
                </View>

                {/* Livestock List */}
                <Text style={appStyles.sectionTitle}>Livestock List</Text>
                <View style={appStyles.listContainer}>
                    {PIG_DATA.map((pig) => (
                        <PigCard 
                            key={pig.id} 
                            pig={pig} 
                            onPress={handlePigPress} 
                        />
                    ))}
                </View>

                {/* Visual padding for the bottom */}
                <View style={{ height: 48 }} />
            </ScrollView>
            
            {/* Modal */}
            {modalVisible && selectedPig && (
                <DetailModal 
                    pig={selectedPig} 
                    onClose={() => setModalVisible(false)} 
                />
            )}
        </View>
    );
}
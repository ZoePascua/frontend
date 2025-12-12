import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles'; // Use the consolidated styles

export default function Homepage(){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.formCard}>
                <Text style={styles.title}>Welcome!</Text>

                <Text style={styles.dataValue}>
                    Ready to create your account? Drag this folder into Snack to import a working example.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert('Info','This is a demo button')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>START REGISTRATION</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles'; // Use the consolidated styles

export default function Homepage({navigation}){
    return(
        // Use mainContainer for the full sky blue background
        <View style={styles.mainContainer}>
            {/* Create a welcome card similar to the other pages for consistency */}
            <View style={styles.formCard}>
                <Text style={styles.title}>Welcome!</Text>
                
                <Text style={styles.dataValue}>
                    Ready to create your account? 
                    Click the button below to start the registration process.
                </Text>

                {/* Styled Register Button using TouchableOpacity */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>START REGISTRATION</Text>
                </TouchableOpacity>

                                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('UserList')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>VIEW USERS</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import styles from '../styles';

export default function EditUserPage({ route, navigation }) {
    const { user } = route.params;
    
    const [formData, setFormData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        gender: user.gender,
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleUpdate = async () => {
        try {
            console.log("Updating user:", user.id, "with data:", formData);
            const response = await axios.put(
                `http://192.168.1.25:8000/registration/api/users/${user.id}/`,
                formData
            );
            console.log("Update successful:", response.data);
            Alert.alert("Success", "User updated successfully");
            navigation.goBack();
        } catch (error) {
            console.log("Update error:", error);
            console.log("Error response:", error.response?.data);
            console.log("Error status:", error.response?.status);
            Alert.alert("Error", error.response?.data?.detail || JSON.stringify(error.response?.data) || "Something went wrong");
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.formCard}>
                <Text style={styles.title}>Edit User</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>First name</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.first_name}
                        onChangeText={(text) => handleChange("first_name", text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last name</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.last_name}
                        onChangeText={(text) => handleChange("last_name", text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        value={formData.email}
                        onChangeText={(text) => handleChange("email", text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        value={formData.password}
                        onChangeText={(text) => handleChange("password", text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Gender</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.gender}
                        onChangeText={(text) => handleChange("gender", text)}
                    />
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.secondaryButtonText}>CANCEL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleUpdate}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.submitButtonText}>UPDATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
import { View, Text, TextInput, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import styles from '../styles';
import { useState } from 'react';

export default function RegisterPage({ navigation }) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        gender: "",
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        // You'd typically validate data here before navigating
        navigation.navigate("Review", { formData });
    };

    return (
        // Use the 'mainContainer' style for centering the content
        <View style={styles.mainContainer}>
            <View style={styles.formCard}>
                <Text style={styles.title}>User Registration</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>First name</Text>
                    <TextInput
                        style={styles.input} // Apply the boxed style
                        value={formData.first_name}
                        onChangeText={(text) => handleChange("first_name", text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last name</Text>
                    <TextInput
                        style={styles.input} // Apply the boxed style
                        value={formData.last_name}
                        onChangeText={(text) => handleChange("last_name", text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input} // Apply the boxed style
                        keyboardType="email-address"
                        value={formData.email}
                        onChangeText={(text) => handleChange("email", text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input} // Apply the boxed style
                        secureTextEntry={true} // Important for passwords
                        value={formData.password}
                        onChangeText={(text) => handleChange("password", text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Gender</Text>
                    <TextInput
                        style={styles.input} // Apply the boxed style
                        value={formData.gender}
                        onChangeText={(text) => handleChange("gender", text)}
                    />
                </View>

                {/* Custom Button using TouchableOpacity for full styling control */}
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                    activeOpacity={0.8}
                >
                    <Text style={styles.submitButtonText}>REVIEW AND SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
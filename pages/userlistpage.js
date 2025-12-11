import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../styles';

export default function UserListPage({navigation}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://192.168.1.25:8000/registration/api/users/')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
        Alert.alert("Error", "Failed to fetch users");
      });
  };

  const handleEdit = (user) => {
    navigation.navigate("EditUser", { user });
  };

  const handleDelete = (user) => {
    Alert.alert(
      "Delete User",
      `Are you sure you want to delete ${user.first_name} ${user.last_name}?`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => deleteUser(user.id),
          style: "destructive"
        }
      ]
    );
  };

  const deleteUser = async (userId) => {
    try {
      console.log("Deleting user:", userId);
      await axios.delete(`http://192.168.1.25:8000/registration/api/users/${userId}/`);
      console.log("Delete successful");
      Alert.alert("Success", "User deleted successfully");
      fetchUsers();
    } catch (error) {
      console.log("Delete error:", error);
      console.log("Error response:", error.response?.data);
      console.log("Error status:", error.response?.status);
      Alert.alert("Error", error.response?.data?.detail || JSON.stringify(error.response?.data) || "Failed to delete user");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>User List Page</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.userListWrapper}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <View style={styles.userRow}>
              <Text style={styles.userLabel}>Firstname:</Text>
              <Text style={styles.userValue}>{item.first_name}</Text>
            </View>
            <View style={styles.userRow}>
              <Text style={styles.userLabel}>Lastname:</Text>
              <Text style={styles.userValue}>{item.last_name}</Text>
            </View>
            <View style={styles.userRow}>
              <Text style={styles.userLabel}>Email:</Text>
              <Text style={styles.userValue}>{item.email}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.editButton}
                onPress={() => handleEdit(item)}
                activeOpacity={0.8}
              >
                <Text style={styles.secondaryButtonText}>EDIT</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.editButton, { backgroundColor: '#E74C3C' }]}
                onPress={() => handleDelete(item)}
                activeOpacity={0.8}
              >
                <Text style={styles.secondaryButtonText}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}



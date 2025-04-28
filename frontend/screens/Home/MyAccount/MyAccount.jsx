import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { signOut } from 'firebase/auth'; // <-- imported correctly
import { auth } from '../../../services/firebaseConfig'; // <-- imported correctly
import { AuthContext } from "../../../context/AuthContext";

export default function MyAccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = () => {
    if (newPassword.trim()) {
      setUser({ ...user, password: newPassword });
      Alert.alert("Success", "Your password has been updated.");
      setNewPassword("");
    } else {
      Alert.alert("Error", "Password cannot be empty.");
    }
  };

  const handleLogout = async () => {
    console.log('Logout button pressed');
    try {
      console.log('Signing out from Firebase...');
      await signOut(auth);
      console.log('Signed out from Firebase successfully');

      console.log('Clearing app user...');
      setUser(null);
      console.log('Cleared user — AppNav will now automatically switch to WelcomeScreen!');
      // ❌ NO navigation.navigate('WelcomeScreen')
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>Account</Text>
        <Text style={styles.sidebarSubtitle}>Manage your account info.</Text>

        <TouchableOpacity style={styles.sidebarItem}>
          <Text style={styles.sidebarText}>🧑 Profile</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={handleLogout}
        >
          <Text style={styles.sidebarText}>🚪 Logout</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.sidebarText}>⬅️ Back</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Profile Details</Text>

        {/* Username */}
        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Username</Text>
          <Text style={styles.infoText}>{user?.username || "Guest"}</Text>
        </View>

        <View style={styles.divider} />

        {/* Change Password */}
        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Change Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
            <Text style={styles.changePasswordButtonText}>Update Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRightWidth: 1,
    borderRightColor: "#DDD",
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sidebarSubtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  sidebarItem: {
    paddingVertical: 10,
  },
  sidebarText: {
    fontSize: 16,
    color: "#333",
  },
  content: {
    flex: 1,
    padding: 15,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#DDD",
    marginVertical: 15,
  },
  infoBlock: {
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  changePasswordButton: {
    backgroundColor: "#FF6B00",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  changePasswordButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

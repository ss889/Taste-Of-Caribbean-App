import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert, Image } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function MyAccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = () => {
    if (newPassword.trim()) {
      // Update user object
      setUser({ ...user, password: newPassword });
      Alert.alert("Success", "Your password has been updated.");
      setNewPassword("");
    } else {
      Alert.alert("Error", "Password cannot be empty.");
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
          onPress={() => navigation.navigate('Logout')} // Navigate to Logout screen
        >
          <Text style={styles.sidebarText}>🚪 Logout</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => navigation.goBack()} // Navigate back to the previous screen
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

        {/* Profile Info */}
        {/* <View style={styles.profileHeader}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Jaylon Dias</Text>
            <TouchableOpacity>
              <Text style={styles.editProfile}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* <View style={styles.divider} /> */}

        {/* Email Addresses */}
        {/* <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Email Addresses</Text>
          <Text style={styles.infoText}>
            example@clerk.dev <Text style={styles.primaryLabel}>Primary</Text>
          </Text>
          <Text style={styles.infoText}>example@personal.com</Text>
          <Text style={styles.infoText}>email@work.io</Text>
          <TouchableOpacity>
            <Text style={styles.addLink}>+ Add Email Address</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} /> */}

        {/* Phone Number */}
        {/* <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Phone Number</Text>
          <Text style={styles.infoText}>
            +1 (555) 123-4567 <Text style={styles.primaryLabel}>Primary</Text>
          </Text>
          <TouchableOpacity>
            <Text style={styles.addLink}>+ Add Phone Number</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} /> */}

        {/* Connected Accounts */}
        {/* <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Connected Accounts</Text>
          <View style={styles.accountRow}>
            <Text style={styles.infoText}>🔴 Google • example@email.com</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.addLink}>+ Connect Account</Text>
          </TouchableOpacity>
        </View> */}
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
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  editProfile: {
    color: "#007AFF",
    fontSize: 14,
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
  primaryLabel: {
    fontSize: 12,
    color: "#007AFF",
    backgroundColor: "#E0F0FF",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    marginLeft: 5,
  },
  addLink: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 5,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
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

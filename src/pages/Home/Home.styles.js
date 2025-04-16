import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      paddingBottom: 80, // Allow space for the bottom navbar
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: '#666',
    },
    navbarContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 35,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        paddingHorizontal: 12,
        zIndex: 999,
        ...Platform.select({
          ios: {
            shadowOpacity: 0.2,
          },
        }),
      },
      navItem: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      navText: {
        fontSize: 12,
        color: '#333',
        marginTop: 2,
      },
      activeText: {
        color: '#FF5733',
        fontWeight: '600',
      },
  });

export default styles;
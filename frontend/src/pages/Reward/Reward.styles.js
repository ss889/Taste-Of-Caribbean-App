import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF5733',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  rewardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

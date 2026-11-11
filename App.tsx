import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
const [modalVisible, setModalVisible] = useState<boolean>(false)

const handlePress = () => setModalVisible(true)

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text>Show modal message</Text>
      </Pressable>
      <StatusBar style="auto" />
      
      <Modal
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.container}>
            <Text>This is modal...</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.close}>Close</Text>
          </Pressable>


        </View>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    close: {
      fontWeight: 'bold',
      marginTop: 15,
    }
});

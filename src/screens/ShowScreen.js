import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default ShowScreen;

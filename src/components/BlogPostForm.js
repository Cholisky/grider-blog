import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const BlogPostForm = ({ onSubmit, type, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>{type === 'create' ? 'Enter Title' : 'Edit Title'}:</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.input} />
      <Text style={styles.label}>{type === 'create' ? 'Enter Content' : 'Edit Content'}:</Text>
      <TextInput value={content} onChangeText={text => setContent(text)} style={styles.input} />
      <Button
        title={type === 'create' ? 'Save Blog Post' : 'Update Blog Post'}
        onPress={() => onSubmit(title, content)}
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
    id: '',
  },
  type: '',
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  }
});

export default BlogPostForm;
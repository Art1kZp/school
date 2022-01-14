import React from "react";
import { TextInput, Button } from 'react-native';

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Save message"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Home',
              params: { post: postText },
              merge: true,
            });
          }}
        />
      </>
    );
  }

  export default CreatePostScreen;
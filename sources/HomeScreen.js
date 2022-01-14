import React from "react";
import { Text, Button, View } from 'react-native';

function HomeScreen({ navigation, route }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);
    return ( 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Count: {count}</Text>
        <Button
          title="Create Message"
          onPress={() => navigation.navigate('CreatePost')}
        />
        <Text style={{ margin: 10 }}>Your Message: {route.params?.post}</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to pictures"
          onPress={() => navigation.navigate('Picture')}
        />
        <Button
          title="Update the title on your message"
          onPress={() => navigation.setOptions({ title: "Updated"})}
        />  
        <Button 
          title="Setting"  
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
      
    );
  } 

export default HomeScreen;
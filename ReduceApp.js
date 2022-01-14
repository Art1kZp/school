import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, reset, logIn, logOut} from './actions';
import {View, Text, Button, SafeAreaView} from 'react-native';

function ReduceApp() {
  const counter = useSelector(state => state.counter);
  console.log(counter);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <Text>Hello World A little Redux Project. YaaY!</Text>
        <Text>Counter:</Text>
        <Text>{counter}</Text>
        <Button onPress={() => dispatch(increment())} title="Increase" />
        <Button onPress={() => dispatch(reset())} title="Reset" />
        <Button onPress={() => dispatch(decrement())} title="Decrease" />

        <Text>>For Logged in users only</Text>
        <Text>Log in to see a secret about me</Text>
        <Button onPress={() => dispatch(logIn())} title="Login" />
        <Button onPress={() => dispatch(logOut())} title="Logout" />
        {auth ? (
          <View>
            <Text>
              Iaaa don't more thaddddddn 50% of redux. But if you know 50% of it,
              you're like a Superman.
            </Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

export default ReduceApp;

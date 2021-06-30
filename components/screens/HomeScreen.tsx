import {Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "~/App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>

type Props = {
  navigation: HomeScreenNavigationProp
}

export const HomeScreen = ({navigation}: Props) => (
  <View style={styles.container}>
    <Text>Select your sandbox.</Text>
    <View>
      <Pressable onPress={() => navigation.push('Swr')}>
        <Text>
          SWR
        </Text>
      </Pressable>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

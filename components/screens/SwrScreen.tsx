import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useSWR from "swr";

const fetcher = (url: string): Promise<any> => fetch(url).then(res => res.json());

export const SwrScreen = () => {
  const { data, error } = useSWR<{status: string, message: string}>(
    'https://dog.ceo/api/breeds/image/random',
    fetcher,
  )

  if (error) return <View><Text>Error occurred!!</Text></View>
  if (!data) return <View><Text>Loading...</Text></View>

  return (
    <View style={styles.container}>
      <Text>Fetch data by SWR</Text>
      <Text>{data.status}</Text>
      <Text>{data.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

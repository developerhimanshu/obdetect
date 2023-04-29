import {View, StyleSheet, Image} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from './types';

type Props = NativeStackScreenProps<RootStackParamsList, 'Result'>;
const Result = ({route, navigation}: Props) => {
  let imgUri = route.params.uri;

  const [resulturi, setResulturi] = useState<string | null>();
  useEffect(() => {
    const sendToServer = async () => {
      let data = new FormData();
      data.append('img_file', {
        uri: imgUri,
      });

      await fetch(`http://192.168.43.241:3000`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });
    };
    sendToServer();
  }, []);

  return (
    <View style={styles.outer}>
      <View style={styles.card}>
        <Image resizeMode="cover" source={{uri: imgUri, height: 400}} />
      </View>
      <View style={styles.card}>
        <Text>Total Counts are:0</Text>
        <Text>Total Nuts:0</Text>
        <Text>Total Bolts:0</Text>
        <Text>Total Washers:0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 45,
    width: '95%',
    marginVertical: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  outer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Result;

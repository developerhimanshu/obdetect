import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from './types';

type Props = NativeStackScreenProps<RootStackParamsList, 'Main'>;

const Main = ({navigation}: Props) => {
  const openGallary = async () => {
    const openGal = await launchImageLibrary({mediaType: 'photo'});
    if (openGal.assets) {
      navigation.navigate('Result', {
        uri: openGal.assets[0].uri!,
      });
    }
  };

  const openCam = async () => {
    const openCamera = await launchCamera({mediaType: 'photo'}, () => {});
    if (openCamera.assets) {
      navigation.navigate('Result', {
        uri: openCamera.assets[0].uri!,
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
      }}>
      <Text variant="displayMedium" style={styles.logo}>
        AI
      </Text>
      <View style={styles.upload}>
        <Button icon="image-multiple" mode="elevated" onPress={openGallary}>
          Gallery{' '}
        </Button>
        <Button icon="camera" mode="elevated" onPress={openCam}>
          Camera{' '}
        </Button>
      </View>
      <Text style={{marginBottom: 100, marginTop: -250}}>EXPLORE AI 2.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  upload: {
    flex: 1,
    flexDirection: 'row',
    gap: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 130,
    backgroundColor: '#e3dcf2',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    color: '#7D53CC',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Main;

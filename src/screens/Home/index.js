import React, {useRef, useEffect} from 'react';
import Albert from '../../assets/albert.svg';
import Chat from '../../assets/chat.svg';
import {
  View,
  Animated,
  Dimensions,
  Easing,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native-gesture-handler';
import styles from './styles';
import UserMessage from '../../components/UserMessage';
import Colecionavel from '../../components/Colecionavel';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  const goToScanner = () => {
    navigation.navigate('QrScanner');
  };

  const goToBar = () => {
    navigation.navigate('Live');
  };

  const gotoTests = () => {
    navigation.navigate('RoutesText');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.profilesTop}>
        <Albert width={57} height={57} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.beerLinkText}>Beer</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FB7800'}}>
            Link
          </Text>
        </View>
        <TouchableOpacity onPress={gotoTests} style={styles.boxChat}>
          <Chat width={25} height={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.totalHours}>2.000</Text>
        <Text style={styles.barHours}>Horas de bar</Text>
        <View style={styles.btnBtn}>
          <TouchableOpacity onPress={goToScanner} style={styles.btnTop}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#BA0C2F'}}>
              Escanear QrCode
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToBar} style={styles.btnTop}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#BA0C2F'}}>
              Entrar no bar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          height: 250,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            marginTop: 15,
            marginBottom: 5,
            fontSize: 17,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#7E7E7E',
          }}>
          Colecionaveis
        </Text>
        <View style={{width: '100%', height: 200, marginBottom: 10}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Colecionavel />
            <Colecionavel />
            <Colecionavel />
          </ScrollView>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          height: 200,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            marginTop: 15,
            fontSize: 17,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#7E7E7E',
          }}>
          Top 10
        </Text>
        <View style={{width: '100%', height: 235, paddingTop: 10}}>
          <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Home;

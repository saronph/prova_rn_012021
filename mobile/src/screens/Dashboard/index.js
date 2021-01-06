import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

// import api from '../../api';

const Dashboard = () => {
  useEffect(() => {
    // async function teste() {
    //   const response = await api.get('/test');

    //   console.log('response: ', response);
    // }

    // teste();

  }, [])

  return (
    <View>
      <Text>Meu IMC</Text>
    </View>
  );
};

export default Dashboard;

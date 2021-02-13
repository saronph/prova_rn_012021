import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../../api';

import * as S from './styles';

const TargetWeightValue = () => {
  const [weight, setWeight] = useState('');
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('/peso-alvo').then((response) => {
      setWeight(response.data);
    });
  }, []);

  const navigateToTargetWeight = useCallback(() => {
    navigate('TargetWeight');
  }, []);

  return (
    <S.Container>
      <S.TargetWeight>Peso Alvo: {weight?.peso}</S.TargetWeight>
      <S.Button onPress={navigateToTargetWeight}>
        <S.ButtonText>Editar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default TargetWeightValue;

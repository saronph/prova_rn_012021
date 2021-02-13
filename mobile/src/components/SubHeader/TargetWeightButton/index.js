import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

const TargetWeightButton = () => {
  const { navigate } = useNavigation();

  const navigateToTargetWeight = useCallback(() => {
    navigate('TargetWeight');
  }, []);

  return (
    <S.Container>
      <S.Button onPress={navigateToTargetWeight}>
        <S.ButtonText>CADASTRAR PESO-ALVO</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default TargetWeightButton;

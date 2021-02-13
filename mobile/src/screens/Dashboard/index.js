import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../api';

import RegisterList from './components/RegisterList';
import TargetWeightButton from '../../components/SubHeader/TargetWeightButton';
import TargetWeightValue from '../../components/SubHeader/TargetWeightValue';
import * as S from './styles';

const Dashboard = () => {
  const [weight, setWeight] = useState('');
  const [full, setFull] = useState('');
  const [rendered, setRendered] = useState(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('/peso-alvo').then((response) => {
      setWeight(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/registro').then((response) => {
      setFull(response.data);
    });
  }, []);

  const navigateToTargetWeight = useCallback(() => {
    navigate('TargetWeight');
  }, []);

  const navigateToRegisterIMCNoId = useCallback(() => {
    navigate('RegisterIMCNoId');
  }, []);

  return (
    <S.Container>
      <S.TargetWeightContainer>
        {weight.peso ? (
          <TargetWeightValue onPress={navigateToTargetWeight} />
        ) : (
          <TargetWeightButton onPress={navigateToTargetWeight} />
        )}
      </S.TargetWeightContainer>

      <S.CircleAlign>
        <S.CircleContainer>
          <S.IMCText>8,9</S.IMCText>
          <S.Text>imc</S.Text>
        </S.CircleContainer>
        <S.CircleContainer>
          <S.WeightText>60,3</S.WeightText>
          <S.Text>peso(kg)</S.Text>
        </S.CircleContainer>
      </S.CircleAlign>

      <S.IMCRegisterButton onPress={navigateToRegisterIMCNoId}>
        <S.IMCRegisterButtonText>CADASTRAR</S.IMCRegisterButtonText>
      </S.IMCRegisterButton>

      <RegisterList />
    </S.Container>
  );
};

export default Dashboard;

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';

import api from '../../api/index';
import Input from '../../components/Input';

import * as S from './styles';

const TargetWeight = () => {
  const { reset, navigate } = useNavigation();
  const [loadWeight, setLoadWeight] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    api.get('/peso-alvo').then((response) => {
      setLoadWeight(response.data);
    });
  }, []);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        Keyboard.dismiss();
        await api.put('/peso-alvo', data);
        reset({
          routes: [
            {
              name: 'Dashboard',
            },
          ],
          index: 0,
        });
      } catch (err) {
        console.log(err);
      }
    },
    [reset],
  );

  const navigateToDashboard = useCallback(() => {
    navigate('Dashboard');
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
      }}>
      <Form ref={formRef} initialData={loadWeight} onSubmit={handleSubmit}>
        <S.FormContainer>
          <S.InputContainer>
            <Input
              name="peso"
              keyboardType="numeric"
              returnKeyType="send"
              placeholder="Peso alvo..."
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
            <S.SideText>(kg)</S.SideText>
          </S.InputContainer>

          <S.ButtonContainer>
            <S.CancelButton onPress={navigateToDashboard}>
              <S.CancelText>Cancelar</S.CancelText>
            </S.CancelButton>
            <S.SaveButton
              onPress={() => {
                formRef.current?.submitForm();
              }}>
              <S.SaveText>Salvar</S.SaveText>
            </S.SaveButton>
          </S.ButtonContainer>
        </S.FormContainer>
      </Form>
    </View>
  );
};

export default TargetWeight;

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';

import api from '../../../api';
import Input from '../../../components/Input';

import * as S from './styles';

const RegisterIMCNoId = () => {
  const { reset, navigate } = useNavigation();
  const [loadData, setLoadData] = useState('');

  const heightInputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    api.get(`/registro`).then((response) => {
      setLoadData(response.data);
    });
  }, []);

  const navigateToDashboard = useCallback(() => {
    navigate('Dashboard');
  }, []);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        Keyboard.dismiss();
        if (isNaN(parseFloat(data.altura) || parseFloat(data.peso))) {
          alert('Preencha todos os campos');
          return;
        }
        await api.post(`/registro`, data);
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

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <S.Container>
        <S.IMCValueText>IMC</S.IMCValueText>
      </S.Container>

      <Form ref={formRef} initialData={loadData} onSubmit={handleSubmit}>
        <S.FormContainer>
          <S.InputContainer>
            <Input
              name="peso"
              keyboardType="numeric"
              returnKeyType="next"
              placeholder="Seu peso..."
              onSubmitEditing={() => {
                heightInputRef.current?.focus();
              }}
            />
            <S.SideText>(kg)</S.SideText>
          </S.InputContainer>

          <S.InputContainer>
            <Input
              ref={heightInputRef}
              name="altura"
              keyboardType="numeric"
              returnKeyType="send"
              placeholder="Sua altura..."
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
            <S.SideText>(m)</S.SideText>
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

export default RegisterIMCNoId;

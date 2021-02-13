import React, { useCallback, useRef, useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import { Form } from '@unform/mobile';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '../../api/index';
import Input from '../../components/Input';

import * as S from './styles';

const RegisterIMC = () => {
  const route = useRoute();
  const { reset, navigate } = useNavigation();
  const [loadData, setLoadData] = useState('');

  const { id } = route.params;
  const heightInputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    api.get(`/registro/${id}`).then((response) => {
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
          alert('É necessário inserir os valores novamente');
          return;
        }
        await api.put(`/registro/${id}`, data);
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

  const { peso, altura } = loadData;
  const IMC = (peso / altura).toFixed(1);

  let IMCColor;

  if (IMC < 16) {
    IMCColor = '#e42626';
  } else if (IMC < 18.4) {
    IMCColor = '#ffff00';
  } else if (IMC < 29.9) {
    IMCColor = '#26e472';
  } else if (IMC < 39.9) {
    IMCColor = '#ffff00';
  } else {
    IMCColor = '#e42626';
  }

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <S.Container>
        <S.IMCValueText style={{ color: IMCColor }}>{IMC}</S.IMCValueText>
        <S.IMCText>imc</S.IMCText>
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

export default RegisterIMC;

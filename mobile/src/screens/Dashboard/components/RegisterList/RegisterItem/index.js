import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation, reset } from '@react-navigation/native';

import api from '../../../../../api';

import * as S from './styles';

const RegisterItem = ({ data, dateFormated }) => {
  const { navigate } = useNavigation();

  const navigateToEdit = useCallback(
    (id) => {
      navigate('RegisterIMC', { id });
    },
    [navigate],
  );

  const handleDelete = useCallback(
    (id) => {
      try {
        api.delete(`/registro/${id}`);
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

  const { peso, altura } = data;
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
    <S.Container>
      <S.IMCView>
        <S.IMCText style={{ color: IMCColor }}>{IMC}</S.IMCText>
        <S.IMCTextIMC>imc</S.IMCTextIMC>
      </S.IMCView>
      <S.DataDetailsView>
        <S.DataDetailsText>Peso: {data?.peso}(kg)</S.DataDetailsText>
        <S.DataDetailsText>Altura: {data?.altura}(m)</S.DataDetailsText>
        <S.DataDetailsText>Data: {dateFormated}</S.DataDetailsText>
      </S.DataDetailsView>
      <View>
        <S.EditButton>
          <S.EditButtonText onPress={() => navigateToEdit(data?.id)}>
            EDITAR
          </S.EditButtonText>
        </S.EditButton>
        <S.DeleteButton onPress={() => handleDelete(data?.id)}>
          <S.DeleteButtonText>EXCLUIR</S.DeleteButtonText>
        </S.DeleteButton>
      </View>
    </S.Container>
  );
};

export default RegisterItem;

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import RegisterItem from './RegisterItem';

import api from '../../../../api';

import * as S from './style';

const RegisterList = () => {
  const [loadData, setLoadData] = useState([{}]);

  useEffect(() => {
    async function loadList() {
      await api.get('/registro').then((response) => {
        setLoadData(response.data);
      });
    }
    loadList();
    console.log(loadData);
  }, []);

  // const [{ data }] = loadData;
  // const dateFormated = format(data, 'dd/MM/yyyy');
  const dateFormated = '12/12/2010';

  return (
    <S.Container>
      <S.List
        data={loadData}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={S.Separator}
        renderItem={({ item }) => (
          <RegisterItem data={item} dateFormated={dateFormated} />
        )}
      />
    </S.Container>
  );
};

export default RegisterList;

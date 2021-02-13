import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const IMCView = styled.View`
  align-items: center;
  min-width: 60px;

  margin-left: 30px;
  margin-right: 30px;
`;

export const IMCText = styled.Text`
  line-height: 30px;
  font-size: 28px;
`;

export const IMCTextIMC = styled.Text`
  color: #c4c4c4;

  line-height: 20px;
  font-size: 16px;
`;

export const DataDetailsView = styled.View`
  justify-content: center;

  width: 180px;
`;

export const DataDetailsText = styled.Text`
  font-size: 16px;
`;

export const EditButton = styled.TouchableOpacity`
  width: 102px;
  height: 33px;
  margin-top: 18px;
  margin-bottom: 18px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  background-color: #26c2e4;
`;

export const EditButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 102px;
  height: 33px;
  margin-bottom: 15px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  background-color: #e42626;
`;
export const DeleteButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

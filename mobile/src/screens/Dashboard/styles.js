import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: #ffffff;
`;

export const TargetWeightContainer = styled.View`
  margin-top: 29px;
  margin-bottom: 45px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList``;

export const CircleAlign = styled.View`
  flex-direction: row;
`;

export const CircleContainer = styled.View`
  align-items: center;
  justify-content: center;

  margin: 0 20px;
  margin-bottom: 60px;
`;

export const IMCText = styled.Text`
  font-size: 50px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #c4c4c4;
`;

export const WeightText = styled.Text`
  font-size: 50px;
`;

export const IMCRegisterButton = styled.TouchableOpacity`
  width: 197px;
  height: 55px;
  border-radius: 4px;
  margin-bottom: 70px;

  background-color: #26c2e4;

  align-items: center;
  justify-content: center;
`;

export const IMCRegisterButtonText = styled.Text`
  font-size: 24px;
  color: #ffffff;
`;

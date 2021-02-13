import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TargetWeight = styled.Text`
  color: #000000;
  font-size: 20px;
  font-weight: bold;

  margin-right: 9px;
`;

export const Button = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
  border-radius: 4px;

  background-color: #26c2e4;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

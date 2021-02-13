import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  padding-top: 70px;
  padding-bottom: 60px;
`;

export const IMCValueText = styled.Text`
  font-size: 50px;
`;

export const IMCText = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: #c4c4c4;
`;

export const InputContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const SideText = styled.Text`
  font-size: 24px;
  padding-top: 12px;
  padding-left: 8px;
  color: #c4c4c4;
`;

export const FormContainer = styled.View`
  flex: 1;
  width: 370px;
`;

export const ButtonContainer = styled.View`
  margin-top: 45%;
  /* border: 1px solid red; */

  justify-content: flex-end;
  flex-direction: row;
`;

export const CancelButton = styled.TouchableOpacity`
  height: 50px;
  margin-right: 18px;
  justify-content: center;
`;

export const CancelText = styled.Text`
  font-size: 20px;
  color: #26c2e4;
`;

export const SaveButton = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  background-color: #26c2e4;
`;

export const SaveText = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

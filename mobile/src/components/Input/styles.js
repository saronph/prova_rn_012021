import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 85%;
  height: 60px;
  margin-bottom: 26px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #26c2e4;
    `}
`;

export const TextInput = styled.TextInput`
  background-color: #f8f8f8;
  padding: 14px 20px;
  font-size: 24px;
  border-radius: 4px;
`;

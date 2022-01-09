import React from 'react';
import styled from 'styled-components';
import {TextInput} from 'react-native';

const Input = ({children, ...props}) => {
  return <TextInput {...props}>{children}</TextInput>;
};

// check if styled components works 
export const TInput = styled(Input)`
  display: flex;
  borderBottomWidth: 1px;
  borderBottomColor: '#cccccc';
`;

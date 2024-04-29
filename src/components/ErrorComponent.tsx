import { errorStyle } from '../styles';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const ErrorComponent = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  if (typeof error === 'string') {
    return <p style={errorStyle}>{error}</p>;
  }

  return null;
};

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { inputStyle, labelStyle } from '../styles';

interface RadioButtonOption {
  value: string;
  label: string;
}

interface RadioButtonsGroupProps {
  name: string;
  options: RadioButtonOption[];
}
export const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({
  name,
  options,
}) => {
  const { register } = useFormContext();

  return (
    <>
      {options.map((option, index) => (
        <label key={index} style={labelStyle}>
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            style={inputStyle}
          />
          {option.label}
        </label>
      ))}
    </>
  );
};

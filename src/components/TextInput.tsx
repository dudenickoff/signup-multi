import React from 'react';
import { useFormContext } from 'react-hook-form';
import { inputStyle, labelStyle } from 'styles';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  fieldName: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  placeholder,
  fieldName,
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(fieldName)}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
};

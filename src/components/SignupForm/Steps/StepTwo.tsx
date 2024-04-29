import React from 'react';
import { ErrorComponent } from '../../ErrorComponent';
import { InputField } from 'components';

const StepTwo: React.FC = () => {
  return (
    <div>
      <InputField
        label="Email:"
        type="text"
        id="email"
        fieldName="email"
        placeholder="example@email.com"
      />
      <ErrorComponent name="email" />

      <InputField
        label="Password:"
        type="password"
        id="password"
        fieldName="password"
        placeholder="Create password"
      />
      <ErrorComponent name="password" />

      <InputField
        label="Confirm Password:"
        type="password"
        id="password"
        fieldName="confirmPassword"
        placeholder="Confirm password"
      />
      <ErrorComponent name="confirmPassword" />
    </div>
  );
};

export default StepTwo;

import React from 'react';
import { ErrorComponent } from '../../ErrorComponent';
import { InputField } from '../../TextInput';

const StepOne: React.FC = () => {
  return (
    <div>
      <InputField
        label="Full Name:"
        type="text"
        id="fullName"
        fieldName="fullName"
      />
      <ErrorComponent name="fullName" />
    </div>
  );
};

export default StepOne;

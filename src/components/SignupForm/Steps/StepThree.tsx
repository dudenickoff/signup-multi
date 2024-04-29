import React from 'react';
import { useFormContext } from 'react-hook-form';
import { sectionStyle } from 'styles';
import { ErrorComponent, InputField, RadioButtonsGroup } from 'components';

const paymentOptions = [
  { value: 'pp', label: 'PayPal' },
  { value: 'cc', label: 'Credit Card' },
];

const StepThree: React.FC = () => {
  const { watch } = useFormContext();

  const paymentMethod = watch('paymentMethod.type');

  return (
    <div>
      <RadioButtonsGroup name="paymentMethod.type" options={paymentOptions} />
      <ErrorComponent name="paymentMethod.type" />

      {paymentMethod === 'pp' && (
        <div style={sectionStyle}>
          <InputField
            label="PayPal Email:"
            type="email"
            id="paymentMethod.email"
            fieldName="paymentMethod.email"
            placeholder="paypal@example.com"
          />
          <ErrorComponent name="paymentMethod.email" />
        </div>
      )}

      {paymentMethod === 'cc' && (
        <div style={sectionStyle}>
          <InputField
            label="Card Number:"
            type="text"
            id="paymentMethod.cardNumber"
            fieldName="paymentMethod.cardNumber"
            placeholder="4242 4242 4242 4242"
          />

          <ErrorComponent name="paymentMethod.cardNumber" />
        </div>
      )}
    </div>
  );
};

export default StepThree;

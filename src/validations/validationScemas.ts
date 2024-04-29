import * as yup from 'yup';
import {
  fullNameValidation,
  emailValidation,
  passwordValidation,
  cardNumberValidation,
} from './entities';
import {
  cardNumberRequired,
  confirmPasswordMatch,
  confirmPasswordRequired,
  paymentTypeRequired,
  paypalEmailInvalid,
  paypalEmailRequired,
} from './validationConstants';

export const stepOneSchema = yup.object().shape({
  fullName: fullNameValidation,
});

export const stepTwoSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: passwordValidation
    .required(confirmPasswordRequired)
    .oneOf([yup.ref('password')], confirmPasswordMatch),
});

export const stepThreeSchema = yup.object({
  paymentMethod: yup.object({
    type: yup.string().required(paymentTypeRequired),
    email: yup.string().when('type', (type: string[], schema) => {
      if (type[0] === 'pp') {
        return schema.required(paypalEmailRequired).email(paypalEmailInvalid);
      }
      return schema.strip();
    }),
    cardNumber: cardNumberValidation.when('type', (type: string[], schema) => {
      if (type[0] === 'cc') {
        return schema.required(cardNumberRequired);
      }
      return schema.strip();
    }),
  }),
});

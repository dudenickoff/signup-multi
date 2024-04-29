import * as yup from 'yup';
import {
  cardNumberInvalid,
  emailInvalid,
  emailRequired,
  fullNameRequired,
  passwordInvalid,
  passwordRequired,
} from './validationConstants';

export type FormData = {
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
  paymentMethod: {
    type: 'cc' | 'pp';
    cardNumber?: string;
    email?: string;
  };
};
export const fullNameValidation = yup
  .string()
  .matches(/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/, fullNameRequired);
export const emailValidation = yup
  .string()
  .required(emailRequired)
  .email(emailInvalid);
export const passwordValidation = yup
  .string()
  .required(passwordRequired)
  .min(8, passwordInvalid)
  .matches(/\d/, passwordInvalid)
  .matches(/[A-Z]/, passwordInvalid);
export const cardNumberValidation = yup
  .string()
  .matches(/^\d{16}$/, cardNumberInvalid);

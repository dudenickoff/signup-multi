import {
  FormData,
  stepOneSchema,
  stepThreeSchema,
  stepTwoSchema,
} from '../../validations';
import * as yup from 'yup';

export const customResolver = async (data: FormData, step: number) => {
  try {
    if (step === 1) {
      await stepOneSchema.validate(data, { abortEarly: false });
    }
    if (step === 2) {
      await stepTwoSchema.validate(data, { abortEarly: false });
    }
    if (step === 3) {
      await stepThreeSchema.validate(data, { abortEarly: false });
    }
    return { values: data, errors: {} };
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const formattedErrors = error.inner.reduce(
        (acc, currentError) => {
          acc[currentError.path || ''] = currentError.message;
          return acc;
        },
        {} as Record<string, string>
      );
      return { values: {}, errors: formattedErrors };
    } else {
      return { values: {}, errors: {} };
    }
  }
};

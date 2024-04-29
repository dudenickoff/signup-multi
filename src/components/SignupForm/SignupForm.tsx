import React, { lazy, Suspense, useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormData, stepThreeSchema } from 'validations';

import { defaultValues } from './defaultValues';
import { customResolver } from './customResolver';
const StepOne = lazy(() => import('./Steps/StepOne'));
const StepTwo = lazy(() => import('./Steps/StepTwo'));
const StepThree = lazy(() => import('./Steps/StepThree'));

const stepComponents: React.ComponentType[] = [StepOne, StepTwo, StepThree];

export const SignupForm = () => {
  const [step, setStep] = useState(1);

  const form = useForm<FormData>({
    defaultValues: defaultValues,
    resolver: (data: FormData) => customResolver(data, step),
  });

  const { trigger } = form;

  const handleNext = useCallback(async () => {
    const isValid = await trigger();
    if (isValid && step < 3) {
      setStep(step + 1);
    }
  }, [trigger, step]);

  const handleBack = useCallback(() => {
    if (step > 1) {
      setStep(step - 1);
    }
  }, [step]);

  const handleSubmit = useCallback((data: FormData) => {
    const validData = stepThreeSchema.cast(data);
    console.log({ data, validData });
  }, []);

  const renderStepComponent = (Component: React.ComponentType) => (
    <Suspense fallback={<div>Loading step component...</div>}>
      <Component />
    </Suspense>
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="container">
          {renderStepComponent(stepComponents[step - 1])}
        </div>
        <button type="button" onClick={handleBack} disabled={step === 1}>
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={step === stepComponents.length}
        >
          Next
        </button>
        {step === stepComponents.length && (
          <button type="submit">Submit</button>
        )}
      </form>
    </FormProvider>
  );
};

import React from 'react';
import { Formik, Form, FormikHelpers, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';

interface FormWrapperProps<T extends FormikValues> {
  initialValues: T;
  validationSchema: Yup.ObjectSchema<Partial<T>>;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<void>;
  children: (formikProps: FormikProps<T>) => React.ReactNode;
  className?: string;
}

export function FormWrapper<T extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  className,
}: FormWrapperProps<T>) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur
    >
      {(formikProps) => (
        <Form className={className}>
          {children(formikProps)}
        </Form>
      )}
    </Formik>
  );
}

export default FormWrapper;
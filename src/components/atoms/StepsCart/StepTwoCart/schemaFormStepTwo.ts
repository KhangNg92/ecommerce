import * as yup from 'yup';

export const schemaFormStepTwo = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Password is required'),
  phone_number: yup.string().required('Phone number is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Email invalidate')
    .min(5, 'Length from 5 - 160 characters')
    .max(160, 'Length from 5 - 160 characters'),
  street_address: yup
    .string()
    .required('Street address is required')
    .min(5, 'Length from 5 - 160 characters')
    .max(160, 'Length from 5 - 160 characters'),
  country: yup.string().required('Country is required'),
  city: yup
    .string()
    .required('City is required')
    .min(5, 'Length from 5 - 160 characters')
    .max(160, 'Length from 5 - 160 characters'),
  state: yup
    .string()
    .required('State is required')
    .min(2, 'Length from 2 - 160 characters')
    .max(160, 'Length from 2 - 160 characters'),
  zip_code: yup.string().required('Zip code  is required'),
  card_number: yup.string().required('Card number is required'),
  expiration_date: yup.string().required('Expiration date is required'),
  cvc_code: yup.string().required('Cvc code is required'),
});
export type SchemaFormStepTwo = yup.InferType<typeof schemaFormStepTwo>;

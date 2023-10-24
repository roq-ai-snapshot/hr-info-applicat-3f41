import * as yup from 'yup';

export const applicantValidationSchema = yup.object().shape({
  cv_link: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

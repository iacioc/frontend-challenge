import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FormikForm = ({ children }) => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    email: '',
    password: '',
    favoriteColor: '',
    agreedToTerms: false,
  };

  const yupSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    favoriteColor: Yup.string().required('Required'),
    agreedToTerms: Yup.boolean()
      .required('Required')
      .oneOf([true], 'You must accept the terms.'),
  });

  const handleOnSubmit = (
    { firstName, email, password, favoriteColor, agreedToTerms },
    { resetForm }
  ) => {
    fetch('http://localhost:3001/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: firstName,
        email: email,
        password: password,
        color: favoriteColor,
        terms: agreedToTerms
      })
    }).then(response => {
      // Resetting form here instead of on success/error page
      resetForm();
      if(response.ok){
        navigate('/success');
      } else {
        navigate('/error');
      }
    })
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormikForm;

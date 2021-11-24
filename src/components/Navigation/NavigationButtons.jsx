import React from 'react';
import { useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import BaseButton from './BaseButton';

const BaseNavigationButton = ({ url, text }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(url);
  };
  return <BaseButton text={text} onClick={handleNavigation} />;
};

export const BackButton = ({ url }) => (
  <BaseNavigationButton text="BACK" url={url} />
);

export const RestartButton = () => (
  <BaseNavigationButton text="RESTART" url="/" />
);

export const NextButton = ({ fieldsToCheck, url }) => {
  const navigate = useNavigate();
  const { errors, touched, setFieldTouched } = useFormikContext();

  const handleNavigation = () => {
    const touchedFieldNames = Object.keys(touched);
    const errorsFound = Object.keys(errors).some((errorField) =>
      fieldsToCheck.includes(errorField)
    );
    const fieldsLeftUntouched = !fieldsToCheck.every((fieldName) =>
      touchedFieldNames.includes(fieldName)
    );
    if (fieldsLeftUntouched) {
      // This will force formik to validate untouched fields
      fieldsToCheck.forEach((field) => setFieldTouched(field));
    } else {
      if (!errorsFound) {
        navigate(url);
      }
    }
  };

  return <BaseButton text="NEXT" onClick={handleNavigation} />;
};

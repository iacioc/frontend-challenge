import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import LoadingCircles from '../components/LoadingCircles';
import PageContainer from '../components/PageContainer';
import {
  BackButton,
  NextButton,
} from '../components/Navigation/NavigationButtons';
import NavigationButtonsContainer from '../components/Navigation/NavigationButtonsContainer';
import SelectDropdown from '../components/Inputs/SelectDropdown';
import TermsAndConditions from '../components/Inputs/TermsAndConditions';

const AdditionalInfo = () => {
  const { values: { favoriteColor } } = useFormikContext();
  const fieldsToCheck = ['favoriteColor', 'agreedToTerms'];
  const [availableColors, setAvailablecolors] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3001/api/colors')
    .then(response => response.json())
    .then(data => {
      setAvailablecolors(data);
    });
  }, []);

  return (
    <PageContainer title="ADDITIONAL INFO">
      { !availableColors.length && <LoadingCircles />}
      <SelectDropdown name="favoriteColor">
        <option value="">SELECT YOUR FAVORITE COLOR</option>
        {availableColors.map(color => (
          <option
            key={color}
            value={color}
            {...(favoriteColor === color ? { selected: true } : undefined)}
          >
            {color}
          </option>
        ))}
      </SelectDropdown>
      <TermsAndConditions name="agreedToTerms">
        <div>
          I AGREE TO &nbsp;
          <a
            href="https://www.upgrade.com/funnel/borrower-documents/TERMS_OF_USE"
            target="_blank"
            rel="noopener noreferrer"
          >
            TERMS AND CONDITIONS
          </a>
          .
        </div>
      </TermsAndConditions>
      <NavigationButtonsContainer>
        <BackButton url="/" />
        <NextButton fieldsToCheck={fieldsToCheck} url="/confirmation" />
      </NavigationButtonsContainer>
    </PageContainer>
  );
};

export default AdditionalInfo;

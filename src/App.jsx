import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddtitionalInfo from './routes/AdditionalInfo';
import Confirmation from './routes/Confirmation';
import Signup from './routes/Signup';
import Success from './routes/Success';
import Error from './routes/Error';
import FormikForm from './components/FormikForm';

const App = () => {
  return (
    <FormikForm>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="more-info" element={<AddtitionalInfo />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="success" element={<Success />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </FormikForm>
  );
}

export default App;
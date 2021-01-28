import React from 'react';
import './styles/vendor/reset.css'
import './styles/vendor/main.css'
import FormContainer from './containers/FormContainer';
import InputComponent from './components/InputComponent/InputComponent';
import FormComponent from './components/FormComponent/FormComponent';

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <FormContainer
          values={{
            firstName: 'Karen',
            lastName: 'Yeghiazaryan',
            age: 22,
            email: 'wrong email',
          }}
        >

          <FormComponent>
            <InputComponent type="text" name="firstName" isRequired={true} />
            <InputComponent type="text" name="lastName" isRequired={true} />
            <InputComponent type="number" name="age" isRequired={false} />
            <InputComponent type="email" name="email" isRequired={true} />
          </FormComponent>

        </FormContainer></div>
    </div>
  );
}

export default App;

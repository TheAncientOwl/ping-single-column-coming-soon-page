import { Form, Input, SubmitButton, InvalidEmailMessage } from './EmailInputElements';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function EmailInput({ onSubmit, placeholder, invalidEmailMessage }) {
  const [valid, setValid] = useState(true);
  const [email, setEmail] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmitClick = () => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validEmail = regex.test(email);

    onSubmit(email, validEmail);
    setValid(validEmail);
  };

  return (
    <div>
      <Form>
        <Input
          valid={valid}
          type='email'
          placeholder={placeholder}
          value={email}
          onChange={handleEmailChange}
          required
        />
        <SubmitButton onClick={handleSubmitClick}>Notify Me</SubmitButton>
      </Form>
      <InvalidEmailMessage valid={valid}>{invalidEmailMessage}</InvalidEmailMessage>
    </div>
  );
}

EmailInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  invalidEmailMessage: PropTypes.string.isRequired,
};

import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';
import Colors from '../../Colors';

export const Form = styled.form`
  display: flex;
  margin-top: 2em;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Input = styled.input`
  min-width: 40ch;
  border: 0.15em solid ${({ valid }) => (valid ? Colors.desaturatedRed : Colors.lightRed)};
  padding: 0.9em 2em;
  border-radius: 1.5em;
  outline: none;

  color: ${({ valid }) => (valid ? Colors.paleBlue : Colors.lightRed)};
  &::placeholder {
    color: ${({ valid }) => (valid ? Colors.paleBlue : Colors.lightRed)};
    opacity: 0.7;
  }
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  min-width: 5em;
  padding: 0.5em 2em;
  border-radius: 1.5em;

  margin-left: 1em;

  color: white;
  cursor: pointer;

  background: ${Colors.blue};
  transition: 100ms linear;

  &:hover {
    transform: scale(1.1);
    transition: 100ms linear;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: 0.5em;
  }
`;

export const InvalidEmailMessage = styled.div`
  visibility: ${({ valid }) => (valid ? 'hidden' : '')};
  font-style: italic;
  font-size: 0.8em;
  padding: 0.7em 2em;
  color: ${Colors.lightRed};
`;

import styled from 'styled-components';
import Logo from './components/Logo';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import EmailInput from './components/email-input';
import Dashboard from './components/Dashboard';
import Socials from './components/Socials';
import Copyright from './components/Copyright';
import Breakpoints from './Breakpoints';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3em 1em;

  @media (max-width: ${Breakpoints.mobile}) {
    transform: scale(0.9);
  }
`;

export default function App() {
  return (
    <Container>
      <Logo />
      <Title />
      <Subtitle />
      <EmailInput
        placeholder='Your email adress...'
        invalidEmailMessage='Please provide a valid email adress'
        onSubmit={(email, validEmail) => {
          if (validEmail) alert(`You will be notified at ${email}`);
        }}
      />
      <Dashboard />
      <Socials />
      <Copyright />
    </Container>
  );
}

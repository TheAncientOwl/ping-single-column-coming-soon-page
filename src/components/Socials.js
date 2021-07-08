import styled from 'styled-components';
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr';
import Colors from '../Colors';

const Container = styled.div`
  display: flex;
  margin-top: 2em;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.blue};
  border: 0.1em solid ${Colors.paleBlue};
  padding: 0.35em;
  margin: 0 0.2em;
  border-radius: 50%;
`;

export default function Socials() {
  return (
    <Container>
      {[<GrFacebookOption key={10} />, <GrTwitter key={11} />, <GrInstagram key={12} />].map((item, index) => (
        <Icon key={index}>{item}</Icon>
      ))}
    </Container>
  );
}

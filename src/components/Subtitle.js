import styled from 'styled-components';
import Colors from '../Colors';

const Container = styled.div`
  color: ${Colors.darkBlue};
  margin-top: 0.65em;
  font-size: 1.09em;
`;

export default function Subtitle() {
  return <Container>Subscribe and get notified</Container>;
}

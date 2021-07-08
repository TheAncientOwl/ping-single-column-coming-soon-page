import styled from 'styled-components';
import Breakpoints from '../Breakpoints';
import Colors from '../Colors';

const Container = styled.div`
  text-align: center;
  font-size: 2.5em;
  color: ${Colors.gray};
  margin-top: 1em;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0 1em;
  }
`;

const Em = styled.b`
  color: ${Colors.darkBlue};
`;

export default function Title() {
  return (
    <Container>
      We are launching <Em>soon!</Em>
    </Container>
  );
}

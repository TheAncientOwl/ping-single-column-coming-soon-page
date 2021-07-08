import styled from 'styled-components';
import { AiOutlineCopyright } from 'react-icons/ai';
import Colors from '../Colors';

const Container = styled.div`
  color: ${Colors.gray};
  display: flex;
  align-items: center;
  margin-top: 1em;
`;

export default function Copyright() {
  return (
    <Container>
      <AiOutlineCopyright />
      Copyright Ping. All right reserved.
    </Container>
  );
}

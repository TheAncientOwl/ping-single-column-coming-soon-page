import styled from 'styled-components';
import DashboardSrc from '../images/illustration-dashboard.png';

const Container = styled.img`
  margin-top: 1em;
  font-size: 2.5em;
  width: 24ch;
  height: auto;
`;

export default function Dashboard() {
  return <Container src={DashboardSrc} alt='dashboard image' />;
}

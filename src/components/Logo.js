import styled from 'styled-components';
import LogoSrc from '../images/logo.svg';

const Container = styled.img``;

export default function Logo() {
  return <Container src={LogoSrc} alt='PING logo' />;
}

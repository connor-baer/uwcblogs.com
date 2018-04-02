import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Heading, SubHeading, Text } from 'circuit-ui';

import Image from '../Image';

const headerBaseStyles = ({ theme }) => css`
  width: 100%;
  max-width: calc(60rem / 4 * 3);
  margin: 3rem auto;

  @media (min-width: ${theme.breakpoints.medium}) {
    margin: 5rem auto;
  }
`;

const sharedTitleStyles = ({ theme }) => css`
  @media (min-width: ${theme.breakpoints.medium}) {
    display: inline;
  }
`;

const titleColorStyles = ({ theme, subtitle }) =>
  subtitle &&
  css`
    color: ${theme.colors.p500};
  `;

const subtitleBaseStyles = ({ theme }) => css`
  color: ${theme.colors.n900};

  @media (max-width: ${theme.breakpoints.medium}) {
    margin-top: 0.5rem;
  }
`;

const sublineBaseStyles = ({ theme }) => css`
  display: block;
  margin-top: 1rem;
  color: ${theme.colors.n700};
`;

const imageBaseStyles = ({ theme }) => css`
  display: none;
  @media (min-width: ${theme.breakpoints.large}) {
    position: fixed !important;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    display: block;
  }
`;

const HeaderContainer = styled('header')`
  ${headerBaseStyles};
`;

const Title = styled(Heading)`
  ${sharedTitleStyles} ${titleColorStyles};
`;

const SubTitle = styled(SubHeading)`
  ${sharedTitleStyles} ${subtitleBaseStyles};
`;

const SubLine = styled(Text)`
  ${sublineBaseStyles};
`;

const Figure = styled('figure')`
  ${imageBaseStyles};
`;

const Header = ({ title, subtitle, subline, image, children }) => (
  <HeaderContainer>
    <Title element="h1" size="zetta">
      {title}&ensp;
    </Title>
    {subtitle && (
      <SubTitle element="h2" size="zetta">
        {subtitle}
      </SubTitle>
    )}
    {subline && <SubLine>{subline}</SubLine>}
    {children}

    {image && (
      <Figure>
        <Image
          src={image.file.url}
          sizes="(min-width: 60em) 50vw"
          alt={image.description}
          responsive
          cover
        />
      </Figure>
    )}
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  image: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    file: PropTypes.object
  }),
  children: PropTypes.node
};

export default Header;

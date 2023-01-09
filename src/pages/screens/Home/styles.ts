import styled from 'styled-components';
import colors from 'src/utils/colors';

export const Container = styled.div`
  hr {
    height: 2px;
    background-color: ${colors.lightBlue};
    border: 0;
    margin-top: -8px;
  }
  @media only screen and (max-width: 600px) {
    hr {
      width: 130%;
    }
  }
`;

export const FlagContainer = styled.div`
  margin-top: -35%;
`;

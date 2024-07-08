import styled from "styled-components";
import { Theme } from "../../utils/theme";

export const FooterBlock = styled.footer`
  padding: 20px 0;
  background-color: ${(p: { theme: Theme }) => p.theme.color.bg};
  & div {
    width: 100%;
    text-align: center;
  }
`;

export const FooterText = styled.p`
  font-size: 16px;
`;

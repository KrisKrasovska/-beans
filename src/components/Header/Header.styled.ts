import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Theme } from "../../utils/theme";

export const HeaderBlock = styled.header`
  padding: 20px 0;
  background-color: ${(p: { theme: Theme }) => p.theme.color.bg};
  & div {
    width: 100%;
  }
`;

export const Link = styled(NavLink)`
  color: #ffffff;
  font-size: 14px;
  transition: color 200ms linear;
  &:hover,
  &:focus {
    color: ${(p: { theme: Theme }) => p.theme.color.accentColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Navigate = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    gap: 30px;
  }
`;

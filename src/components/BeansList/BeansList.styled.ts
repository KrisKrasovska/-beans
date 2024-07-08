import styled from "styled-components";
import { Theme } from "../../utils/theme";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 15px;
  width: 100%;
  border: 1px solid ${(p: { theme: Theme }) => p.theme.color.secondaryColor};
  padding: 10px;
  border-radius: 15px;

  transition: border 200ms linear;

  &:hover,
  &:focus {
    border: 1px solid ${(p: { theme: Theme }) => p.theme.color.accentColor};
  }
  @media screen and (min-width: 500px) {
    width: calc((100% - 25px) / 2);
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 50px) / 3);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 75px) / 4);
  }
`;

export const BeansTitle = styled(NavLink)`
  color: ${(p: { theme: Theme }) => p.theme.color.secondaryColor};
  font-size: 20px;
  text-align: center;
  display:block;
`;

export const BeansImg = styled.img`
  width: 150px;
  margin: 0 auto;
`;

export const BeansText = styled.p`
  color: ${(p: { theme: Theme }) => p.theme.color.secondaryColor};
  font-size: 16px;
`;

export const CardTitle = styled.p`
  color: ${(p: { theme: Theme }) => p.theme.color.secondaryColor};
  font-size: 20px;
  text-align: center;
  display:block;
`;

export const CardText = styled.p`
  color: ${(p: { theme: Theme }) => p.theme.color.thirdColor};
  font-size: 14px;
`;

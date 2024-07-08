import styled from "styled-components";
import { Theme } from "../utils/theme";

export const Container = styled.div`
  min-width: 320px;
  width: 100%;
  max-width: 1440px;
  padding: 0 15px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 0 50px;
  }
  @media screen and (min-width: 1400px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: ${(p: { theme: Theme }) => p.theme.color.secondaryColor};
`;

export const Section = styled.section`
  padding: 40px 0;
`;

export const ErrorMessage = styled.p`
  padding: 30px 0;
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const CardImage = styled.img`
  width: 200px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1px solid ${(p: { theme: Theme }) => p.theme.color.secondaryColor};
  background-color: transparent;
  border-radius: 10px;
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
`;

import styled from 'styled-components';

export const Container = styled.div`
min-width: 320px;
width:100%;
max-width: 1440px;
padding: 0 15px;
margin: 0 auto;
@media screen and (min-width: 768px) {
width: 768px;
padding: 0 30px;
}
@media screen and (min-width: 1400px) {
width: 1440px;
padding: 0 100px;
}
`;

export const Title = styled.h1`
text-align: center;
font-size: 24px;
`;
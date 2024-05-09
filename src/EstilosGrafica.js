import styled, { keyframes } from "styled-components";

export const Texto = styled.h1`
  font-size: 3em;
  color: ${({ color }) => color};
  text-align: center;
`;

const animacionCrecerHaciaArriba = (altura, desde) => keyframes`
    from{
      height: ${desde}px;
    }
    to{
      height: ${altura}px;
    }
    `;

export const ContenedorGrafica = styled.div`
  width: 500px;
  height: 400px;
  border-left: 5px solid black;
  border-bottom: 5px solid black;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  position: relative;
`;

export const Linea = styled.div`
  position: absolute;
  border-top: 1px dashed black;
  width: 500px;
  height: 1px;
  left: 15px;
  bottom: 386px;
`;

export const GraficaBarra = styled.div`
  width: 100px;
  background-color: ${({ color }) => (color ? color : "silver")};
  animation: ${({ altura, desde }) => animacionCrecerHaciaArriba(altura, desde)}
    1.5s ease-in-out forwards;
  cursor: pointer;
`;

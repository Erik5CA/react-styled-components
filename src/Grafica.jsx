import { valores } from "./datos";
import { useState } from "react";
import { useEffect } from "react";
import {
  ContenedorGrafica,
  GraficaBarra,
  Linea,
  Texto,
} from "./EstilosGrafica";

const COLORES = ["red", "blue", "green", "yellow", "orange", "purple"];

function Grafica() {
  const [colorTexto, setColorTexto] = useState("red");
  const [datos, setDatos] = useState(valores);

  const selecionarColorRandom = () => {
    const colorRandom = COLORES[Math.floor(Math.random() * COLORES.length)];
    setColorTexto(colorRandom);
  };

  useEffect(() => {
    selecionarColorRandom();
  }, []);

  const agrandar = (altura, indice) => {
    setDatos(
      datos.map((valor, index) =>
        index === indice
          ? {
              ...valor,
              altura: valor.altura < 375 ? valor.altura + 100 : valor.altura,
              desde: valor.altura,
            }
          : { ...valor, desde: valor.altura }
      )
    );
  };

  return (
    <>
      <Texto color={colorTexto}>Tus Ganancias</Texto>
      <ContenedorGrafica>
        {datos.map((valor, index) => (
          <GraficaBarra
            key={index}
            color={valor.color}
            altura={valor.altura}
            desde={valor.desde}
            onClick={() => agrandar(valor.altura, index)}
          />
        ))}
        <Linea />
      </ContenedorGrafica>
    </>
  );
}

export default Grafica;

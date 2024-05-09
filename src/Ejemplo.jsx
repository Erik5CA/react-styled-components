import { Contenedor, Moverse, Sombra, Titulo } from "./Estilos";

function Ejemplo() {
  return (
    <>
      <Contenedor>
        <Titulo elColor="red">Caja 1</Titulo>
        <Titulo redondo elColor="pink">
          Caja 2
        </Titulo>
        <Titulo redondo>Caja 3</Titulo>
        <Titulo>Caja 4</Titulo>
      </Contenedor>
      <Moverse distancia={333} segs={12}></Moverse>
      <Moverse distancia={111} segs={3}></Moverse>
      <Moverse distancia={22} segs={2}></Moverse>
      <Sombra />
    </>
  );
}

export default Ejemplo;

import React from 'react';
import styled from '@emotion/styled';
//styled
const Contenedor =styled.div`
    display:flex;
    align-items:center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Botton = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100% );
    background-size: 300px;
    font-family: Arial,Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
`;
function App() {
  const consultarApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json();
    console.log(frase[0]);
  }

  return (
    <Contenedor>
      <Botton
        onClick={consultarApi}
      >Obtener Frase</Botton>
    </Contenedor>
  );
}

export default App;

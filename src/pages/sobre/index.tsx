import React, { useContext, useEffect } from 'react';
import { ContextoTema } from '../../context/contextTema';

const Sobre = () => {

  const tema = useContext(ContextoTema)

    useEffect(() => {
        console.log('tema sobre: ', tema)
    }, [tema])

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Sobre o Criador</h1>
      <h2>{tema}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <img 
          src="https://pbs.twimg.com/media/EKTMUVJXUAAQHLp.jpg" 
          alt="Avatar do Criador" 
          style={{ width: '150px', borderRadius: '50%', marginBottom: '20px' }} 
        />
        <div>
          <h2>Raul Parzianello</h2>
          <h3>Profissão: Estagiário de Software 🤣</h3>
          <p style={{ maxWidth: '500px', margin: '0 auto' }}>
            Salve! Flamenguista roxo e tentando ser um programador para ter o que comer quando ficar mais velho.
             Atualmente estou estagiando na empresa Vilesoft de Minas Gerais - BR, trabalho principalmente na parte
             front-end com angular e principlamente com a biblioteca do PrimeNG.
          </p>
          <p>
            Confira meu <a href="https://github.com/Raul0P" target="_blank" rel="noopener noreferrer">GitHub</a> para mais projetos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

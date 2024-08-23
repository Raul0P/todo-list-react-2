import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bem-vindo ao nosso TodoList</h1>
      <p>
        Um TodoList é uma ferramenta simples que permite que você organize suas tarefas diárias.
        Você pode adicionar novas tarefas, marcar as que já foram concluídas e deletar aquelas que
        não são mais necessárias. O objetivo é ajudar você a se manter organizado e produtivo, 
        garantindo que nada importante seja esquecido.
      </p>
      <p>
        Usar um TodoList é fácil: basta criar uma nova tarefa e ela será adicionada à sua lista. 
        Conforme você vai completando suas tarefas, pode marcá-las como feitas. E se algo mudar, 
        você pode editar ou remover as tarefas da lista.
      </p>
    </div>
  );
};

export default Home;
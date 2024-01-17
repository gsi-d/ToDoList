import { useState } from "react"

function App() {
  const tarefasIniciais = []
  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais)
  const [listaFinalizadas, setFinalizadas] = useState([])

  function adicionarTarefa() {
    const novaTarefa = prompt("Digite sua tarefa")
    if(novaTarefa != ""){
      let tarefasAtualizadas = [...listaTarefas, novaTarefa]
      setListaTarefas(tarefasAtualizadas)
    }
  }

  function checkTarefa(tarefa){
    if(!listaFinalizadas.includes(tarefa)){
      let finalizadasAtualizada = [...listaFinalizadas, tarefa]
      setFinalizadas(finalizadasAtualizada)
    }else{
      let finalizadasAtualizada = listaFinalizadas.filter(t => t != tarefa)
      setFinalizadas(finalizadasAtualizada)
    }
  }

  return (
    <div className="conteudo">
      <img src="img/logoatualizada.png" alt="logo" />

      <div className="adicionar-tarefa">
        <input type="text" placeholder="Digite a tarefa..." />
        <button onClick={adicionarTarefa} className="botao-adicionar">+</button>
      </div>

      <ul className="lista-tarefas">
        {listaTarefas.map((tarefa) => (
          <li onClick={() => checkTarefa(tarefa)} className={`tarefa ${listaFinalizadas.includes(tarefa) ? "finalizada" : ""}`}>
            <ion-icon name={listaFinalizadas.includes(tarefa) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
            {tarefa}
          </li>
        ))}

      </ul>
    </div>
  )
}

export default App
import { useState } from "react"
import Logo from "./components/Logo"
import AdicionarTarefas from "./components/AdicionarTarefas"
import ListarTarefas from "./components/ListarTarefas"

function App() {
  const tarefasIniciais = []
  const [listaTarefas, setListaTarefas] = useState(tarefasIniciais)
  const [listaFinalizadas, setFinalizadas] = useState([])
  const [textoInput, setTextoInput] = useState("")

  return (
    <div className="conteudo">
      <Logo/>
      <AdicionarTarefas listaTarefas={listaTarefas} textoInput={textoInput} setListaTarefas={setListaTarefas} setTextoInput={setTextoInput}/>
      <ListarTarefas listaFinalizadas={listaFinalizadas} setFinalizadas={setFinalizadas} listaTarefas={listaTarefas}/>
    </div>
  )
}

export default App
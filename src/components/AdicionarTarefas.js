export default function AdicionarTarefas({listaTarefas, textoInput, setListaTarefas, setTextoInput}){
    function adicionarTarefa() {
        if(textoInput != ""){
          let tarefasAtualizadas = [...listaTarefas, textoInput]
          setListaTarefas(tarefasAtualizadas)
          setTextoInput("")
        }
      }

      function input(event){
        setTextoInput(event.target.value)
      }

    return (
        <div className="adicionar-tarefa">
        <input type="text" placeholder="Digite a tarefa..." onChange={input} value={textoInput} />
        <button onClick={adicionarTarefa} className="botao-adicionar">+</button>
      </div>
    )
}
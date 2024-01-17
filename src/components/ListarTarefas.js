export default function ListarTarefas({listaFinalizadas, setFinalizadas, listaTarefas}){
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
        <ul className="lista-tarefas">
            {listaTarefas.map((tarefa) => (
            <li onClick={() => checkTarefa(tarefa)} className={`tarefa ${listaFinalizadas.includes(tarefa) ? "finalizada" : ""}`} key={tarefa}>
                <ion-icon name={listaFinalizadas.includes(tarefa) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
                {tarefa}
            </li>
            ))}
        </ul>
    )
}
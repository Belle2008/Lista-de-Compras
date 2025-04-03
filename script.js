function newtask() {
    // Pega o valor do campo de entrada
    const input = document.getElementById('input-new-task');
    const taskText = input.value.trim(); // Remove espaços extras

    // Se o campo estiver vazio, exibe um alerta
    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Cria um novo item da lista <li>
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Cria o botão "OK" para marcar a tarefa como concluída
    const button = document.createElement('button');
    button.textContent = "OK";
    button.onclick = function() {
        newTask.remove(); // Remove a tarefa ao clicar no botão
    };

    // Adiciona o botão "OK" à tarefa
    newTask.appendChild(button);

    // Adiciona a nova tarefa à lista de tarefas
    document.getElementById('to-do-list').appendChild(newTask);

    // Limpa o campo de entrada após adicionar a tarefa
    input.value = '';
}


function addTask()
{
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if(taskText === '')
    {
        alert('Please Enter a Task !');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML =
    `<span onclick="toggleTask(this)">${taskText}</span>
    <button onclick="removeTask(this)"> X </button> ` ;

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

function removeTask(button)
{
    const li = button.parentElement;
    li.remove();
}

function toggleTask(span)
{
    const li = span.parentElement;
    li.classList.toggle('completed');
}
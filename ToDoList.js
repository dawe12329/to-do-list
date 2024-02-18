const userInput = document.getElementById('userInput');
const enterButton = document.getElementById('enter');
const ul = document.querySelector('ul');

function getLength() {
  return userInput.value.length;
}

function addTask() {
  if (getLength() > 0) {
    const li = document.createElement('li');
    const input = userInput.value;
    li.appendChild(document.createTextNode(input));
    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);
    li.addEventListener("click", completeTask);
    deleteButton.addEventListener('click', function () {
      deleteTask(li);
    });

    ul.appendChild(li);
    userInput.value = '';
  }
}

function completeTask() {
  if (this.style.backgroundColor === 'green') {
    this.style.backgroundColor = ''; 
  } else {
    this.style.backgroundColor = 'green';
  }
}

function deleteTask(taskElement) {
  taskElement.remove();
}

enterButton.addEventListener('click', addTask);

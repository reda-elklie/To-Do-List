const add = document.querySelector("#add");
const taskContainer = document.querySelector(".task-container");
const inputTask = document.getElementById("input-task");


// Event listener for add Button
add.addEventListener("click", function() {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerText = "check"
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "delet"
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton)


    if (inputTask.value === "") {
        alert('please fill the blank');
    } else {
        taskContainer.appendChild(task)
    }
    inputTask.value = ""
    inputTask.focus()
        // checkButton.addEventListener("click", function() {
        //     checkButton.classList.toggle('active');

    //     checkButton.parentElement.style.textDecoration = "underline"


    // })
    checkButton.addEventListener("click", function() {
        li.style.textDecoration = "line-through"
        checkButton.style.backgroundColor = "rgba(51, 8, 8, 0.349)"
        checkButton.innerHTML = "checked"
    })
    deleteButton.addEventListener("click", function() {
        task.remove()
    })
});
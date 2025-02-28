let remainingTasks = 6;
let completedTasks = 0;

const remainingTasksElement = document.getElementById('remaining-task');
const completedTasksElement = document.getElementById('completed-task');

const completeBtn = document.querySelectorAll('#complete-btn');



for (let i = 0; i < completeBtn.length; i++) {
    completeBtn[i].addEventListener('click', function(event) {
        if(remainingTasks >= 0) {
            remainingTasks--;
            completedTasks++;

            remainingTasksElement.innerHTML = remainingTasks;
            completedTasksElement.innerHTML = completedTasks;

            alert('Task board completed succusfully!');

            event.target.disabled = true;
            event.target.style.backgroundColor = 'grey';

            if (remainingTasks === 0) {
                alert('Congrats! you have completed all the tasks');
            }
      
        } else {
            alert('There is no tasks remain!');}
    })
}
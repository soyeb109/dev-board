let remainingTasks = 6;
let completedTasks = 0;

const remainingTasksElement = document.getElementById('remaining-task');
const completedTasksElement = document.getElementById('completed-task');

const titleEl = document.getElementById('title');
const newListEl = document.getElementById('new-list');

// Get current time
const time = new Date().toLocaleTimeString();

const completeBtn = document.querySelectorAll('#complete-btn');



for (let i = 0; i < completeBtn.length; i++) {
    completeBtn[i].addEventListener('click', function(event) {
        
        // data attribute
        const titleText = event.target.getAttribute('data-title');

        const listItem = document.createElement('li');

        listItem.innerHTML = titleText + ' - at ' + time;

        newListEl.appendChild(listItem);


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

    // History clear button
    const clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', function() {
        newListEl.innerHTML = '';
    })

    // Theme changing button

    const randomColor = function () {
        const hex = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    
      // Event listener to change the background color when button is clicked
      
      document.querySelector('#bg-change').addEventListener('click', function() {
        document.body.style.backgroundColor = randomColor();
      });


    //   Blog url 
    document.getElementById("blog-url").addEventListener("click", function() {
        window.location.href = "blog.html";
    })




  
  
  


}




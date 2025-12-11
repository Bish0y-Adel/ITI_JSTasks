//1
//? DOM Manipulation Tasks - All in one function
function performDOMTasks() {
    let img = document.createElement("img");
    
    img.setAttribute("src", "download.jfif");
    
    // appendChild => add at the end of div
    let container = document.getElementById("container");
    container.appendChild(img);
    
    // insertBefore => insert before reference node in the div
    let secondImg = document.createElement("img");
    secondImg.setAttribute("src", "download.jfif");
    container.insertBefore(secondImg, img);
    
    let childCount = container.childNodes.length;
    alert("Number of child nodes: " + childCount);
    //childNodes includes elements, text nodes , whitespace, comments");
    
    container.removeChild(secondImg);
}

//2
//? Task 2: Image Slider with Prev/Next buttons
let imagesData = [
    {
        name: "1.jpg",
        description: "Description"
    },
    {
        name: "2.jpg",
        description: "Description"
    },
    {
        name: "3.jpg",
        description: "Description"
    },
    {
        name: "4.jpg",
        description: "Description"
    },
    {
        name: "5.jpg",
        description: "Description"
    },
    {
        name: "6.jpg",
        description: "Description"
    }
];

let currentIndex = 0;

// Get elements
let sliderImage = document.getElementById("sliderImage");
let imageDescription = document.getElementById("imageDescription");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

function displayImage(index) {
    sliderImage.setAttribute("src", imagesData[index].name);
    imageDescription.innerText = imagesData[index].description;
}


nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= imagesData.length) {
        currentIndex = 0; 
    }
    displayImage(currentIndex);
});


prevBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesData.length - 1; 
    }
    displayImage(currentIndex);
});

displayImage(currentIndex);

//3
function TodoList() {
    let taskInput = document.getElementById("taskInput");
    let addBtn = document.getElementById("addBtn");
    let taskList = document.getElementById("taskList");


    function addTask() {
        let taskText = taskInput.value;
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        let taskDiv = document.createElement("div");

        // task text
        let taskSpan = document.createElement("span");
        taskSpan.innerText = taskText;

        // Done button
        let doneBtn = document.createElement("button");
        doneBtn.innerText = "Done";
        
        doneBtn.addEventListener("click", function() {
            taskDiv.style.background = "#4CAF50";
        });

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(taskDiv);
        });

        // Append elements
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(doneBtn);
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);

        // Clear input
        taskInput.value = "";
    }


    addBtn.addEventListener("click", addTask);


    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
}

//TodoList();
//B.1
//? Task B.1: Alert ASCII Code and detect special keys (Alt, Ctrl, Shift)
function detectKeyPress() {
    document.addEventListener("keydown", function(e) {

        let asciiCode = e.keyCode;
        

        let keyInfo = "ASCII Code: " + asciiCode + "\nKey: " + e.key;
        
        if (e.altKey) {
            keyInfo += "\nAlt key is pressed!";
        }
        if (e.ctrlKey) {
            keyInfo += "\nCtrl key is pressed!";
        }
        if (e.shiftKey) {
            keyInfo += "\nShift key is pressed!";
        }
        
        alert(keyInfo);
        console.log(e);
    });
}

//detectKeyPress();

//B.2
//? Task B.2: Prevent context menu from mouse right click
function preventContextMenu() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        alert("Right click is disabled!");
        console.log("Context menu prevented");
    });
}

//preventContextMenu();



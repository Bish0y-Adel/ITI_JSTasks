//1.1
function calculateCircleArea() {
    let radius = +(prompt("Enter circle raduis"));
    let area = Math.PI * radius * radius;
    alert("Area = " + area);
}
// calculateCircleArea();

//1.2
function calculateSquareRoot() {
    let value = +(prompt("Enter Value to calc square root"));
    let result = Math.pow(value, 0.5);
    alert("squar root of " + value + " is " + result);
}
//calculateSquareRoot();

//1.3
function calculateCosine() {
    let angle = +(prompt("Enter an angle"));
    let radians = angle * (Math.PI / 180);
    let cosValue = Math.cos(radians);
    document.write("cos " + angle + "° is " + cosValue.toFixed(4));
}
// calculateCosine();

//2
function printOddNums(start, end) {
    for(let i = start; i <= end; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}

// printOddNums(1, 20);

//3
function showTipOfTheDay() {
    let tips = [
        "Use 'let' and 'const' instead of 'var' for better scope control",
        "Always use === instead of == for strict comparison",
        "Arrays in JavaScript are actually objects",
        "Use template literals with backticks for easier string concatenation",
        "Arrow functions do not have their own 'this' context",
        "NaN is the only value in JavaScript that is not equal to itself",
        "You can use Math.random() to generate random numbers",
        "Use Array methods like map, filter, and reduce for cleaner code",
        "Functions in JavaScript are first-class objects",
        "Always validate user input before using it in your code"
    ];

    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    
    alert("Tip of the Day:\n" + randomTip);
}

// showTipOfTheDay();

//4
function evaluateExpression(expression) {
    let result = eval(expression);
    alert("You entered: " + expression + " and the result is: " + result);
}

// let userExpression = prompt("Enter math expression (Ex. 3+4*5/10*8)");
// evaluateExpression(userExpression);

//5
function studentsOperations() {

    let students = [
        {name: "Bishoy", degree: 95},
        {name: "Sara", degree: 85},
        {name: "Mohamed", degree: 55},
        {name: "Kero", degree: 75},
        {name: "Ali", degree: 45}
    ];
    
    console.log("Original array:");
    console.log(students);
    
    // student between 90 and 100
    let topStudent = students.find((student) => student.degree >= 90 && student.degree <= 100);
    console.log("\nStudent with degree between 90-100:");
    console.log(topStudent.name);
    
    // Filter students less than 60
    let failedStudents = students.filter((student) => student.degree < 60);
    console.log("\nStudents with degree less than 60:");
    for(let i = 0; i < failedStudents.length; i++) {
        console.log(failedStudents[i].name);
    }
    
    // push()
    students.push({name: "Omar", degree: 88});
    console.log("\nAfter adding new student: ");
    for(let i in students) {
        console.log(students[i].name + " - " + students[i].degree);
    }
    
    // pop()
    students.pop();
    console.log("\nAfter removing last student: ");
    for(let student of students) {
        console.log(student.name + " - " + student.degree);
    }
    
    // Sort by name
    students.sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    });
    console.log("\nAfter sorting: ");
    console.log(students);
    
    // Bonus1 Add 2 students after second element using splice
    students.splice(2, 0, {name: "Nour", degree: 92}, {name: "Youssef", degree: 78});
    console.log("\nAfter adding 2 students usong splice():");
    console.log(students);
    
    // Bonus2 Remove 1 student after third element using splice
    students.splice(3, 1);
    console.log("\nAfter removing 1 student using splice():");
    console.log(students);
}

//studentsOperations();


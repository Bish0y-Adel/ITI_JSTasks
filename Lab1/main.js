//1
function PrintHeaders(i)
{
    for(let j=0;j<i;j++)
        {
            document.write("<h"+(j+1)+"> This is header number"+(j+1)+" </h"+(j+1)+">");
        }

        document.write("<h1> Bishoy Adel </h1>");
}

PrintHeaders(6);

//2
function temperature(temp)
{
    temp>=30?console.log("Hot"):console.log("Cold");
}

temperature(75);

//3
function Sum() {
    let sum = 0;

    while (true) {
        if (sum > 100) {
            return sum;
        }
        

        let num = +(prompt("Enter a number:"));
          

        if (typeof num !== 'number') {
            alert("Enter a valid number!");
            continue;
        }
        else{
            if (num === 0) {
                return sum;
            }
            else{
                    sum += num;
                }
        
        }

    
    }
}

//console.log(Sum());


//4
function PrintName()
{
    alert("Welcome to my site");

    let name = prompt("Enter your name:");

    document.write("<h1> Welcome " + name + "</h1>");
}

//PrintName();

//5
function Divisible(x,y,z)
{
    if(x%y===0 && x%z===0)
        console.log(x + " is divisible by both  " + y + " and " + z);
    else if(x%y!==0 && x%z!==0)
        console.log(x + " is not divisible by both  " + y + " and " + z);   
    else
    {
        if(x%y===0)
            console.log(x + " is divisible by " + y + " only");
        else if(x%z===0)
            console.log(x + " is divisible by " + z + " only");
    }

}

Divisible(15,8,5);

function PrintUserData()
{
    var Birth;
    var name;
    var age; 

    while(true){
        name = prompt("Enter your name:");
        
        if(name.length === 0 || !isNaN(+name)){
            alert("Enter a valid name!");
            continue;
        }
        
        Birth = +(prompt("Enter your year of birth:"));
        
        if(isNaN(Birth)){
            alert("Enter a valid number!");
            continue;
        }
        
        if(Birth > 2010){
            alert("Year of birth should be less than 2010");
            continue;
        }
        
        let currYear = new Date().getFullYear();
        age = currYear - Birth;
        break;
    } 
    
    document.write("<p> Name: " + name + "</p>");
    document.write("<p> Year Of Birth: " + Birth + "</p>");
    document.write("<p> Age: " + age + "</p>");
}

PrintUserData();
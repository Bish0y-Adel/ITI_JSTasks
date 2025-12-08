
function CountChar()
{
    let str =prompt("Enter any string:");
    let char=prompt("Enter the character to count:");
    let isCaseSensitive=confirm("case sensitivity?");

    if(!isCaseSensitive)
    {
        str=str.toLowerCase();
        char=char.toLowerCase();
    }
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===char)
            count++;    
    }
    alert("Number of letter appearances: "+count);
}
//CountChar();

function IsPalindrome()
{
    let str=prompt("Enter a string to check:");
    let isCaseSensitive=confirm("case sensitivity?");

    if(!isCaseSensitive)
        str=str.toLowerCase();
    
    let orginal=str;
    str=str.split("");
    str=str.reverse();
    str=str.join("");
    
    if(orginal===str)
        alert("The string is a palindrome");
    else
        alert("The string is not a palindrome");
}
//IsPalindrome();

function SplitWords()
{
    let strLine=prompt("Enter a string to split into words:");
    let words=strLine.split(" ");
    let maxIndex=0;
    for ( let i = 0; i < words.length; i++) 
        {
            if(words[i].length>words[maxIndex].length)
                maxIndex=i;
        }
    alert(words[maxIndex]);
}
//SplitWords();

//4
function UserData()
{

    // Validation patterns
    let namePattern = /^[A-Za-z]+$/;
    let phonePattern = /^[0-9]{8}$/;
    let mobilePattern = /^(010|011|012)[0-9]{8}$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    

    let Name;
    do
    {
        Name=prompt("Enter Your Name: (Only chars)");
    }while(!Name.match(namePattern));

    let Phone;
    do
    {
        Phone=prompt("Enter Your Phone Number: (8 degits only)");
    }while(!Phone.match(phonePattern));

    let mobile;
    do
    {
        mobile=prompt("Enter Your Mobile Number: ")
    }while(!mobile.match(mobilePattern));

    let email;
    do{
        email=prompt("Enter Your Email: ")
    }while(!email.match(emailPattern));

    let date=new Date().getDate;




    document.write("<h1>Welcome "+Name+"</h1>")  
    document.write("<h2>Phone: "+ Phone+"</h2>")   
    document.write("<h3>Mobile: "+mobile+"</h3>")   
    document.write("<h4>Email:  "+email+"</h4>")   
    document.write("<h5>Date: "+date+"</h4>")   


}
//UserData()

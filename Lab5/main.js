//1
let win;

function OpenWin(){
    win = open("","","width=150,height=150")
    win.focus()
    let intervalId = setInterval(MoveWin, 50)
}

let y = 0;
let direction = 1;

function MoveWin(){
    if(y >= screen.height - 150){
        direction = -1
    }
    if(y <= 0){
        direction = 1
    }
    y += direction * 10
    win.moveTo(win.screenX, y)
    win.focus()
}

function closeWin(){
    win.close()
}

//2
let typingWin;
let message = "Hello to Our wibsite";
let index = 0;

function showTypingMessage(){
    typingWin = open("","","width=400,height=200")
    typingWin.document.write("<h2 id='msg'></h2>")
    
    let intervalId = setInterval(()=>{
        if(index < message.length){
            typingWin.document.getElementById("msg").innerText += message[index]
            index++
        } else {
            clearInterval(intervalId)
        }
    }, 100)
    
    setTimeout(()=>{
        typingWin.close()
        index = 0
    }, 5000)
}

//3
let adWin;
let scrollX = 0;

function openAdWindow(){
    adWin = open("","","width=400,height=300,scrollbars=yes")
    adWin.document.write(`
        <html>
        <head>
            <title>Advertisement</title>
            <style>
                body { margin: 0; padding: 20px; background: #f0f0f0; overflow-x: scroll; white-space: nowrap; }
                h2 { text-align: center; }
                .container { display: inline-block; }
                img { width: 350px; height: 200px; display: inline-block; margin-right: 20px; }
            </style>
        </head>
        <body>
            <h2>Our Products</h2>
            <div class="container">
                <img src="1.jpg">
                <img src="2.jpg">
                <img src="3.jpg">
                <img src="4.jpg">
                <img src="5.jpg">
            </div>
        </body>
        </html>
    `)
    adWin.focus()
    
    let intervalId = setInterval(()=>{
        scrollX += 2
        adWin.scroll(scrollX, 0)
        
        let maxScroll = adWin.document.body.scrollWidth - adWin.innerWidth
        if(scrollX >= maxScroll){
            clearInterval(intervalId)
            setTimeout(()=>{
                adWin.close()
                scrollX = 0
            }, 1000)
        }
    }, 50)


}

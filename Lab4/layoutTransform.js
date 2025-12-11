function ImageCloning() {

    let originalImage = document.getElementById("originalImage");
    
    console.log("Image cloning setup ready");
    

    originalImage.addEventListener("click", function() {
        

        let clonedImg = document.createElement("img");
        

        clonedImg.setAttribute("src", originalImage.src);
        clonedImg.setAttribute("class", "cloned-image");
        

        let randomTop = Math.floor(Math.random() * (window.innerHeight - 250)) + 50;
        let randomLeft = Math.floor(Math.random() * (window.innerWidth - 250)) + 50;
        

        clonedImg.style.top = randomTop + "px";
        clonedImg.style.left = randomLeft + "px";
        

        document.body.appendChild(clonedImg);
        
        
        
    });
}


ImageCloning();

{ 
    console.log("Witam wszystkich."); 
 
    const toggleBackground = () => { 
        let currentBackground = document.querySelector(".js-currentBackground"); 
        let body = document.querySelector(".body"); 
        body.classList.toggle("dark"); 
        currentBackground.innerText = body.classList.contains("dark") ? "jasne" : "ciemne"; 
    } 
 
    const init = () => { 
        let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton"); 
 
        changeBackgroundButton.addEventListener("click", toggleBackground); 
    } 
 
    init ()
}

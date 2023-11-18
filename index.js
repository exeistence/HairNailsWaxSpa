let modal = document.querySelector("#modal");
let bookButton1 = document.querySelector("#bookButton1");
let bookButton2 = document.querySelector("#bookButton2");
let closeButton = document.querySelector("#closeButton");


//modal event listeners
bookButton1.addEventListener("click", ()=>{
    modal.showModal();
});

bookButton2.addEventListener("click", ()=>{
    modal.showModal();
});

closeButton.addEventListener("click", ()=>{
    modal.close();
});


//scroll animation event listener
window.addEventListener("scroll", show);


//scroll animation function
function show() {
    let titles = document.querySelectorAll(".sectionTitle");
    for(let i= 0; i < titles.length; i++){
        let elementTop = titles[i].getBoundingClientRect().top;
        if(elementTop < window.innerHeight - 25){
            titles[i].classList.add("show");
        }
    }
};

//function calls
show();

const overley = document.querySelector(".overley");
const closeButton = document.querySelector(".close");

// const showModal = () => {
//     overley.classList.remove("hide");
// };

// const hideModal = () => {
//     overley.classList.add("hide");
// }
// addEventListener("DOMContentLoaded", showModal); 
//  closeButton.addEventListener("click", hideModal); 

consttogleModal = () => {
    overley.classList.toggle("hide"); 
};



addEventListener("DOMContentLoaded", consttogleModal); 
 closeButton.addEventListener("click", consttogleModal); 
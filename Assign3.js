const leftBtn = document.getElementById('left-button'); 
const btnText = document.getElementById('btnTxt'); 
leftBtn.addEventListener('click', () => {
  btnText.innerHTML = "I'm right!"; 
}); 
const rightBtn = document.getElementById('right-button'); 
rightBtn.addEventListener('click', () => {
  btnText.innerHTML = "No, I'm right!"
});

const dntHvrH1 = document.getElementById('dntHvrH1'); 
dntHvrH1.addEventListener('mouseover', () => {
    alert('Hey, I told you not to hover over me!')
});
let truePass = 12345678;

let fPass = document.getElementById('password'); 
let sub = document.getElementById('submit'); 


sub.addEventListener('click', (i) => {
    const fValuePass = document.getElementById('password').value; 
    if(fValuePass != truePass){
        alert("Incorrect Password");
    } else {
        i.preventDefault();
        document.getElementById('loginInfo').innerHTML = "<h1>Welcome!</h1>";
    }
});


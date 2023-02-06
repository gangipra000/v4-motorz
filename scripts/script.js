let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

function Calculate() {
  
  // Extracting value in the amount 
  // section in the variable
  const amount = document.querySelector("#amount").value;

  // Extracting value in the interest
  // rate section in the variable
  const rate = document.querySelector("#rate").value;

  // Extracting value in the months 
  // section in the variable
  const months = document.querySelector("#months").value;

  // Calculating interest per month
  const interest = (amount * (rate * 0.01)) / months;
    
  // Calculating total payment
  const total = ((amount / months) + interest).toFixed(2);

  document.querySelector("#total")
      .innerHTML = "EMI : (₹)" + total;
};

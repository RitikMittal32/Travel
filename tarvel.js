function validateEmail() {
          var emailInput = document.getElementById("email-input");
          var email = emailInput.value;
    
          var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          var isValidEmail = emailPattern.test(email);

          
    
          if (isValidEmail) {

            alert("Email is valid");
          } else {

            alert("Invalid email");
          }
}

const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('expand');
});

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


document.addEventListener('DOMContentLoaded', function() {
  const plane = document.getElementById('plane');
  const planeContainer = document.getElementById('plane-container');
  let containerWidth;
  let position = -100;
  let direction = 1;

  function animatePlane() {
    containerWidth = planeContainer.offsetWidth;

    position += 3 * direction;
    
    if (position > containerWidth) {
      position = -100;
    }
    plane.style.left = position + 'px';

    requestAnimationFrame(animatePlane);
  }
  animatePlane();
});

var popupForm = document.querySelector("form");
var popupButton = popupForm.querySelector("button"); 
     popupButton.addEventListener('click', function (e) {
          e.preventDefault();

          document.getElementById('MyForm').style.display = 'none';
          document.getElementById('thank_you').style.display = 'block';

     });

(function () {

    const buttons = document.getElementsByTagName('button')

    buttons[0].addEventListener('click', colorChange);

    function colorChange (){
      buttons[0].classList.toggle('button-danger');
    }

    buttons[1].addEventListener('click', youClicked);

    function youClicked (){
      buttons[1].innerHTML = "You clicked me!"
    }

    


})();

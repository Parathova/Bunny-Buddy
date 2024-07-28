
function startButton() {

  $(document).ready(function () {
    // Declare variables
    var maxHealth = 100;
    var curHealth = maxHealth; // It is generally better to use 'var', 'let', or 'const' for variable declarations

    // Update the displayed health values
    $('.total').html(curHealth + "/" + maxHealth);

    // Set the width of the health bar to 100%
    $(".health-bar").css({
      "width": "100%"
    });
  });

  let count = 100;
  const timer = setInterval(function () {
    count--;
    //progressBar();
    let healthTest = document.getElementById("healthTest");
    healthTest.value = count;

    document.getElementById("health-amount123").innerHTML = "HEALTH: " + count;
    if (count === 0) {
      clearInterval(timer);
      /*reset character??*/
    }

    if (count >= 90) {
      document.getElementById("bun").style.width = "100%";
    } else if (count >= 75) {
      document.getElementById("bun").style.width = "80%";

    } else if (count >= 60) {
      document.getElementById("bun").style.width = "60%";

    } else if (count >= 40) {
      document.getElementById("bun").style.width = "40%";

    } else if (count >= 30) {
      document.getElementById("bun").style.width = "30%";

    } else if (count >= 20) {
      document.getElementById("bun").style.width = "20%";

    } else if (count >= 10) {
      document.getElementById("bun").style.width = "10%";

    } else if (count >= 5) {
      document.getElementById("bun").style.width = "5%";

    } else if (count == 0) {
      document.getElementById("bun").style.width = "50%";
      document.getElementById("bun").src = "./img/broken-heart-bunny.png";
    }





  }, 100);


}


function progressBar() {
  var element = document.getElementById("health-stat");

  health = element.innerHTML;
  console.log(health);

  health = health / 10;


  for (let i = 10; i > health; i--) {
    document.getElementById(i).style.backgroundColor = "blue";


  }

}

//function skinnyQueen() {
//if (document.getElementById("health-bar").width <= "90") {
// document.getElementById("bunny")
// }
//}

/*var maxHealth = 100;
curHealth = maxHealth;
$('.total').html(maxHealth + "/" + maxHealth);
$(".health-bar").css({
  "width": "100%"
});*/

/*
$(document).ready(function() {
  // Declare variables
  var maxHealth = 100;
  var curHealth = maxHealth; // It is generally better to use 'var', 'let', or 'const' for variable declarations

  // Update the displayed health values
  $('.total').html(curHealth + "/" + maxHealth);

  // Set the width of the health bar to 100%
  $(".health-bar").css({
    "width": "100%"
  });
});
*/


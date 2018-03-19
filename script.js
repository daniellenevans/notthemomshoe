// I need the "Find Your Shoe For" to update to current month every month.
// On the click of the button a random shoe, for "current month" should pop up 
// and the visitor should be able to re-click until 
// something visitor likes pop up or visitor should come back next month
// or put a suggestion aside where visitor could visit more shoes from "current months" brand

//--- Image array ---//

// display random kicks
function display_mom_kicks() {
  //var kicks = 0;
  
  var randomKicks = new Array ();
  var randomKicks = ["img/eqt_basketball_ad2side.jpg", "img/eqt_basketball_adv1fr.jpg", "img/eqt_support_adv.jpg", "img/nmd_r1_shoes2.jpg", "img/pharrell_williams_tennis_hu_shoes.jpg", "img/prophere_blue.jpg", "img/prophere_white.jpg", "img/run_lux_clima_shoes.jpg", "img/tubular_viral_2.0.jpg", "img/tubulardawnshoes.jpg"];

  kicks = Math.floor(Math.random() * randomKicks.length);


document.getElementById("mom-shoe1").src = randomKicks[kicks];
}

display_mom_kicks();


// automatically change month each month

function display_month() {
   var month = new Array ();
       month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
   var newKicks = new Date();
   var newMonth = month[newKicks.getMonth()];
   document.getElementById("shoe-month").innerHTML = "Find your kicks for the month of " + newMonth + "!"; ;

    

    
}

display_month();




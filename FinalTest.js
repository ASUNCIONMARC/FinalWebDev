function showInfo(word) {
  var gods = document.getElementsByClassName("Gods");
  var creatures = document.getElementsByClassName("Creatures");
  var weapons = document.getElementsByClassName("Weapons");

  var greekGods = document.getElementsByClassName("GreekGods");
  var greekCreatures = document.getElementsByClassName("GreekCreatures");
  var greekWeapons = document.getElementsByClassName("GreekWeapons");

  var romanGods = document.getElementsByClassName("RomanGods");
  var romanCreatures = document.getElementsByClassName("RomanCreatures");
  var romanWeapons = document.getElementsByClassName("RomanWeapons");

  var italianGods = document.getElementsByClassName("ItalianGods");
  var italianCreatures = document.getElementsByClassName("ItalianCreatures");
  var italianWeapons = document.getElementsByClassName("ItalianWeapons");

  var spanishGods = document.getElementsByClassName("SpanishGods");
  var spanishCreatures = document.getElementsByClassName("SpanishCreatures");
  var spanishWeapons = document.getElementsByClassName("SpanishWeapons");
  function showInfo(word) {
    var slides = document.getElementsByClassName("word-slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("selected");
    }

    var selectedSlide = document.getElementById(word);
    selectedSlide.classList.add("selected");

}


  if (word === "slide1") {
      hideAll();
      gods[0].style.display = "block";
      greekGods[0].style.display = "block";
      creatures[0].style.display = "block";
      greekCreatures[0].style.display = "block";
      weapons[0].style.display = "block";
      greekWeapons[0].style.display = "block";
  } else if (word === "slide2") {
      hideAll();
      gods[0].style.display = "block";
      romanGods[0].style.display = "block";
      creatures[0].style.display = "block";
      romanCreatures[0].style.display = "block";
      weapons[0].style.display = "block";
      romanWeapons[0].style.display = "block";
  } else if (word === "slide3") {
      hideAll();
      gods[0].style.display = "block";
      italianGods[0].style.display = "block";
      creatures[0].style.display = "block";
      italianCreatures[0].style.display = "block";
      weapons[0].style.display = "block";
      italianWeapons[0].style.display = "block";
  } else if (word === "slide4") {
      hideAll();
      gods[0].style.display = "block";
      spanishGods[0].style.display = "block";
      creatures[0].style.display = "block";
      spanishCreatures[0].style.display = "block";
      weapons[0].style.display = "block";
      spanishWeapons[0].style.display = "block";
  }
}

function hideAll() {
  var allElements = document.querySelectorAll('.Gods, .Creatures, .Weapons');
  allElements.forEach(function(element) {
      element.style.display = 'none';
  });

  var allSubElements = document.querySelectorAll('.GreekGods, .GreekCreatures, .GreekWeapons, .RomanGods, .RomanCreatures, .RomanWeapons, .ItalianGods, .ItalianCreatures, .ItalianWeapons, .SpanishGods, .SpanishCreatures, .SpanishWeapons');
  allSubElements.forEach(function(element) {
      element.style.display = 'none';
  });
}

function expandImage(image) {
  // Get the image source
  var src = image.src;
  
  // Create a modal element
  var modal = document.createElement("div");
  modal.classList.add("modal");
  
  // Create an image element inside the modal
  var modalImg = document.createElement("img");
  modalImg.src = src;
  
  // Append the image to the modal
  modal.appendChild(modalImg);
  
  // Append the modal to the body
  document.body.appendChild(modal);
  
  // Close the modal when clicked outside the image
  modal.addEventListener("click", function() {
      modal.remove();
  });
}

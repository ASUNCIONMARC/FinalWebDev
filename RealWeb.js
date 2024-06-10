document.addEventListener("DOMContentLoaded", function(event) {
    var slides = document.querySelectorAll('.image-slide');
    for (var i = 1; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  });
  
  var totalSlides = 4;
  var currentSlide = 1;
  
  function showInfo(slideId) {
    var infoPopup = document.getElementById("infoPopup");
    var infoContent = document.getElementById("infoContent");
    var info = "";
    
    switch (slideId) {
      case "slide1":
        info = "Greek Mythology";
        break;
      case "slide2":
        info = "Roman Mythology";
        break;
      case "slide3":
        info = "Italian Mythology";
        break;
      case "slide4":
        info = "Spanish Mythology";
        break;
    }
    
    infoContent.innerHTML = ""; 
    var infoText = document.createElement("p");
    infoText.innerText = info;
    infoText.style.color = 'black';
    infoContent.appendChild(infoText);

   
    var updateButton = document.createElement("button");
    updateButton.innerText = "View Details";
    updateButton.onclick = function() {
        updateInfo(slideId);
    };
    infoContent.appendChild(updateButton);
    
    infoPopup.style.display = "block";
    currentSlide = parseInt(slideId.replace("slide", ""));
}


  
  function closeInfoPopup() {
    var infoPopup = document.getElementById("infoPopup");
    infoPopup.style.display = "none";
  }
  
  function showNext() {
    var current = document.getElementById('slide' + currentSlide);
    current.style.display = "none";
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    var next = document.getElementById('slide' + currentSlide);
    next.style.display = "block";
    updateInfo(next.id);
  }
  
 

  function Prev(){
    var current = document.getElementById('slide' + currentSlide);
    current.style.display = 'none';
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    var prev = document.getElementById('slide' + currentSlide);
    prev.style.display = "block";
    updateInfo(prev.id);
  }
  


  function updateInfo(slideId) {
    var title = "";
    var info = "";
    
    switch (slideId) {
      case "slide1":
        title = "Greek Mythology";
        info = "Greek mythology, body of stories concerning the gods, heroes, and rituals of the ancient Greeks and Classical antiquity. That the myths contained a considerable element of fiction was recognized by the more critical Greeks, such as the philosopher Plato in the 5th–4th century BCE. In general, however, in the popular piety of the Greeks, the myths were viewed as true accounts. Greek mythology has subsequently had extensive influence on the arts and literature of Western civilization, which fell heir to much of Greek culture.";
        break;
      case "slide2":
        title = "Roman Mythology";
        info = "The ancient Romans had a rich mythology and, while much of it was derived from their neighbors and predecessors, the Greeks, it still defined the rich history of the Roman people as they eventually grew into an empire. Roman writers such as Ovid and Virgil documented and extended the mythological heritage of the ancient Mediterranean to gives us such long-lasting and iconic figures as Aeneas, Vesta, Janus, and the twin founders of Rome itself, Romulus and Remus.";
        break;
        case "slide3":
        title = "Italian Mythology";
        info = "Italian mythology is a fascinating blend of ancient indigenous beliefs, influences from neighboring cultures, and later additions from Christianity. Overall, Italian mythology reflects the country's rich history, cultural diversity, and enduring fascination with the supernatural and the divine. It's a testament to the enduring power of myth to shape human imagination and creativity.";
        break;
      case "slide4":
        title = "Spanish Mythology";
        info = "Spanish mythology is a rich tapestry woven from the cultural heritage of Spain, blending influences from its diverse history, including Celtic, Roman, Germanic, and Arabic cultures. Overall, Spanish mythology reflects the complex history and cultural diversity of the Iberian Peninsula, with influences from both indigenous beliefs and the various peoples who have inhabited the region throughout its history.";
        break;
    }
    
    var titleElement = document.createElement("h2");
    titleElement.innerText = title;
    titleElement.style.color = 'black';
    titleElement.style.fontFamily = 'Georgia, Times New Roman, Times, serif'
    var infoContent = document.getElementById("infoContent");
    infoContent.innerHTML = "";
    infoContent.appendChild(titleElement);
  
    var paragraphElement = document.createElement("p");
    paragraphElement.innerText = info;
    paragraphElement.style.fontSize = "20px";
    paragraphElement.style.color = 'black'; 
    paragraphElement.style.fontFamily = 'gentium';
    infoContent.appendChild(paragraphElement);
  }
  



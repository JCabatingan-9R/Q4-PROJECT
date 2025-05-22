function ratingSubmit() {
  var rate = document.getElementById('ratings').value;
  var name = document.getElementById('nameID').value;
  if (rate = "1") {
    window.alert('Thanks for rating, ' + name + '...Sorry for the inconvenience >o<');
  }
  else if (rate = "2") {
    window.alert('Thanks for rating, ' + name + '...At least it is not a one >o<');
  }

  else if (rate = "3") {
    window.alert('Thanks for rating, ' + name + '! Lucky number 3 >o<');
  }

  else if (rate = "4") {
    window.alert('Thanks for rating, ' + name + '! Shucks, so close to a perfect >o<');
  }

  else if (rate = "5") {
    window.alert('Thanks for rating, ' + name + '! We will remember you! >o<');
  }
    
  else {
    window.alert('Oops! Looks like you forgot to rate our site!');
  }
}

function searchButton() {
  window.alert('Sorry, this button currently does not work.');
}

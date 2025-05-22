function ratingSubmit() {
  var infoRate = document.getElementById('infoID').value;
  var projRate = document.getElementById('projID').value;
  var feedRate = document.getElementById('feedID').value;
  var aveRate = Math.round((infoRate + projRate + feedRate) / 3);
  if (aveRate <= 1) {
    window.alert('Thanks for rating, ' + name + '...Sorry for the inconvenience >o<');
  }
  else if (aveRate >= 2 && aveRate < 3) {
    window.alert('Thanks for rating, ' + name + '...At least it is not a one >o<');
  }

 else if (aveRate >= 3 && aveRate < 4) {
    window.alert('Thanks for rating, ' + name + '...Lucky in the middle! >o<');
  }

 else if (aveRate >= 4 && aveRate < 5) {
    window.alert('Thanks for rating, ' + name + '...Nearly perfect >o<');
  }

 else if (aveRate = 5) {
    window.alert('Thanks for rating, ' + name + '...We will remember you >o<');
  }

  else {
    window.alert('Oops! Looks like you forgot to rate our site!');
  }
}

function searchButton() {
  window.alert('Sorry, this button currently does not work.');
}

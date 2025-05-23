function ratingSubmit() {
  var name = document.getElementById('nameID').value;
  
  var infoRate = document.getElementById('infoID').value;
  var projRate = document.getElementById('projID').value;
  var feedRate = document.getElementById('feedID').value;
  var aveRate = Math.round((infoRate + projRate + feedRate) / 3);
  
  if (aveRate <= 1) {
    window.alert('Thanks, ' + name + '!' + aveRate '...Sorry for the inconvenience >o<');
  }
  else if (aveRate >= 2 && aveRate < 3) {
    window.alert('Thanks ' + name + '!' + aveRate+ '...At least it is not a one >o<');
  }

 else if (aveRate >= 3 && aveRate < 4) {
    window.alert('Thanks, ' + name + '!' + aveRate + '...Lucky in the middle! >o<');
  }

 else if (aveRate >= 4 && aveRate < 5) {
    window.alert('Wow, ' + name + '!' + aveRate + '...Nearly perfect >o<');
  }

 else if (aveRate = 5) {
    window.alert('Wow, ' + name + '!' + aveRate + '...We will remember you >o<');
  }

  else {
    window.alert('Oops! Looks like you forgot to rate our site!');
  }
}

function searchButton() {
  window.alert('Sorry, this button currently does not work.');
}

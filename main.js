//CABATINGAN

function searchButton() {
  window.alert('Sorry, this currently does not work.'); // for search button that isn't working
}

function ratingSubmit() {
        var name = document.getElementById('fnameID').value; // to address viewer
        var info = Number(document.getElementById('infoID').value); //value of profile information rating
        var proje = Number(document.getElementById('projID').value); // value of quarter project rating
        var feed = Number(document.getElementById('feedID').value); // value of form rating
        var aver = (info + proje + feed) / 3;
        var aver = aver.toFixed(2); // using this instead of Math.round to fix to two decimal places
        
        if (aver >= 1 && aver <= 1.99) {
          window.alert(Number(aver) + '. ' + name + '...Sorry for the inconveniece >o<'); //response to low rating
        }

        else if (aver >= 2 && aver <= 2.99) {
          window.alert(Number(aver) + '. ' + name + '...At least it is greater than 1 >o< ') // response to low rating
        }

        else if (aver >= 3 && aver <= 3.99) {
          window.alert(Number(aver) + '. ' + name + ', Thanks for a rating in the middle >o<') // response to mid rating
        }

        else if (aver >= 4 && aver <= 4.99) {
          window.alert(Number(aver) + '! ' + name + ', Thanks for a high rating >o<') // response to high rating
        }
        
        else if (aver = 5) {
          window.alert(Number(aver) + '! ' + name + ', We will remember you >o<') //response to high rating
        }
        
        else {
          window.alert('Erm...try again!'); //for inappropriate outputs
        }

      }

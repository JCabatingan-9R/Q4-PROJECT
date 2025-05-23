function searchButton() {
  window.alert('Sorry, this currently does not work.');
}

function ratingSubmit() {
        var name = document.getElementById('lnameID').value;
        var info = Number(document.getElementById('infoID').value);
        var proje = Number(document.getElementById('projID').value);
        var feed = Number(document.getElementById('feedID').value);
        var aver = (info + proje + feed) / 3;
        var aver = aver.toFixed(2);
        
        if (aver >= 1 && aver <= 1.99) {
          window.alert(Number(aver) + '. ' + name + '...Sorry for the inconveniece >o<'); //for Excellent
        }

        else if (aver >= 2 && aver <= 2.99) {
          window.alert(Number(aver) + '. ' + name + '...At least it is greater than 1 >o< ')
        }

        else if (aver >= 3 && aver <= 3.99) {
          window.alert(Number(aver) + '. ' + name + ', Thanks for a rating in the middle >o<')
        }

        else if (aver >= 4 && aver <= 4.99) {
          window.alert(Number(aver) + '! ' + name + ', Thanks for a high rating >o<')
        }
        
        else if (aver = 5) {
          window.alert(Number(aver) + '! ' + name + ', We will remember you >o<')
        }
        
        else {
          window.alert('Erm...try again!'); //for inappropriate outputs
        }

      }

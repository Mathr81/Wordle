document.querySelector('.check-button').addEventListener('click', function() {
      var letters = document.querySelectorAll('.letter-input');
        var word = '';

          for (var i = 0; i < letters.length; i++) {
              if (letters[i].value.trim() !== '') {
                    word += letters[i].value.trim().toUpperCase();
                        }
                          }

                            if (word.length === 5) {
                                // Vérifier le mot ici
                                    var resultContainer = document.querySelector('.result-container');
                                        var resultText = document.querySelector('.result');

                                            if (/* Condition pour vérifier le mot */) {
                                                  resultText.textContent = 'Gagné!';
                                                        resultText.style.color = 'green';
                                                            } else {
                                                                  resultText.textContent = 'Perdu!';
                                                                        resultText.style.color = 'red';
                                                                            }

                                                                                resultContainer.style.display = 'block';
                                                                                  }
                                                                                  
})
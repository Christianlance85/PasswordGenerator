
$(document).ready(function() {
    $('#advancedOptions').hide();
    $('.button1').click(function() {
      if ($('#advancedOptions').is(':hidden')) {
        $('#advancedOptions').slideDown();
      } else {
        $('#advancedOptions').slideUp();
      }
    });
  });
  
  $(document).ready(function() {
    $('.button2').click(function() {
      var characterSet = '';
      if (document.getElementById('cbox1').checked)
        characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (document.getElementById('cbox2').checked)
        characterSet += 'abcdefghijklmnopqrstuvwxyz';
      if (document.getElementById('cbox3').checked)
        characterSet += '0123456789';
      if (document.getElementById('cbox5').checked)
        characterSet += '-=~!@#$%^&*()_+[]\\{}|;\':",./<>?';
      else if (document.getElementById('cbox4').checked)
        characterSet += '!@#$%^&*(){}[]?';

      var extraChars = document.getElementById('additionalCharacters')
                               .value;
      for (const character of extraChars) {
        if (character !== ' ' && characterSet.indexOf(character) == -1) {
          characterSet += character;
        }
      }
      var passwordLength = Number(document.getElementById('passwordLength')
                                          .value);
      var randomNums = new Uint8Array(passwordLength);
      window.crypto.getRandomValues(randomNums);
      var password = '';
      for (var i = 0; i < passwordLength; ++i) {
        password += characterSet.charAt(randomNums[i] % characterSet.length);
      }
      document.getElementById('result')
              .value = password;
    });
  });
  
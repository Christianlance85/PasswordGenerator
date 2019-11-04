// Slide down the advanced options menu.
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

// Generate and show password.
$(document).ready(function() {
  $('.button2').click(function() {
    // Get the checkmarked character sets for the password.
    var characterSet = '';
    if (document.getElementById('cbox1').checked)
      characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (document.getElementById('cbox2').checked)
      characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (document.getElementById('cbox3').checked)
      characterSet += '0123456789';
    if (document.getElementById('cbox5').checked)
      characterSet += '-=~!@#$%^&*()_+[]\\{}|;\':",./<>?';
    // If checkbox 5 is checked, we already have characters in cbox 4
    else if (document.getElementById('cbox4').checked)
      characterSet += '!@#$%^&*(){}[]?';

    // Get the additional characters that are (non-space && not yet included)
    var extraChars = document.getElementById('additionalCharacters')
                             .value;
    for (const character of extraChars) {
      if (character !== ' ' && characterSet.indexOf(character) == -1) {
        characterSet += character;
      }
    }

    // Generate the password.
    var passwordLength = Number(document.getElementById('passwordLength')
                                        .value);
    var randomNums = new Uint8Array(passwordLength);
    window.crypto.getRandomValues(randomNums);
    var password = '';
    for (var i = 0; i < passwordLength; ++i) {
      password += characterSet.charAt(randomNums[i] % characterSet.length);
    }

    // Show the password.
    document.getElementById('result')
            .value = password;
  });
});

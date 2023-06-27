document.getElementById('submitButton').addEventListener('click', function() {
  var userInput = document.getElementById('inputBox').value;
  
  if (userInput === 'shivilovestaylor') {
    // Redirect to the next page or perform any other actions
    window.location.href = 'page2.html';
  } else {
    alert('Incorrect password');
  }
});

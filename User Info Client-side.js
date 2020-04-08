console.log('Client-side code running');

const button = document.getElementById('myButton');
button.addEventListener('User_info', function(e) {
  console.log('button was clicked');

  fetch('/User_info', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Checking if username has been taken');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

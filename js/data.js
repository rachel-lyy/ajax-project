/* exported data */
var form = document.getElementById('myForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // create results
  function getJSON(data) {
    // take search terms and process it
    var formValue = document.querySelector('#search').value.split(' ').join('+');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + formValue + '&key=AIzaSyBi2qjgitOmNBWMLT-kqGh7yr4I84SZYkY');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {

      var response = xhr.response.items;
      // remove duplicate results
      const outputArray = Object.values(
        response.reduce((acc, obj) => ({ ...acc, [obj.volumeInfo.title]: obj }), {})
      );

      // loop through results and display on page
      for (let i = 0; i < 4; i++) {
        var id = '#book' + i;
        var item = document.querySelector(id);
        if (outputArray[i] !== undefined) {
          item.textContent = outputArray[i].volumeInfo.title;
        } else {
          return;
        }
      }
    });
    xhr.send();
  }
  getJSON('');
});

// save user read by date
var dateBtn = document.getElementById('theDateBtn');
dateBtn.addEventListener('click', saveTheDate);
function saveTheDate() {
  // var month = document.querySelector('#validationCustom01').value;
  // var date = document.querySelector('#validationCustom02').value;
  // var year = document.querySelector('#validationCustom03').value;
  // console.log(month);
  // console.log(date);
  // console.log(year);
}

// Book Details: onClick book => show book details

// Dashboard

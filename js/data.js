/* exported data */
var form = document.getElementById('myForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // take search terms and process it
  // var formValue = document.querySelector('#search').value.split(' ').join('+');

  // create results
  getJSON();
  function getJSON(processSearch) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + processSearch + '&key=AIzaSyBi2qjgitOmNBWMLT-kqGh7yr4I84SZYkY');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      // console.log(xhr.status);
      // console.log(xhr.response);
      // console.log('Book Title: ' + xhr.response.items[0].volumeInfo.title);
      // console.log('Book Author: ' + xhr.response.items[0].volumeInfo.authors);
      // console.log('Book Pages: ' + xhr.response.items[0].volumeInfo.pageCount);
    });
    xhr.send();
  }
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

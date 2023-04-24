/* exported data */
var form = document.getElementById('theSubmitBtn');
form.addEventListener('click', function (e) {
  e.preventDefault();
  // create results
  function getJSON(data) {
    // take search terms and process it

    var formValue = document.querySelector('#search').value.split(' ').join('+');
    if (formValue === '') {
      return alert('Enter a valid book title');
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + formValue + '&key=AIzaSyBi2qjgitOmNBWMLT-kqGh7yr4I84SZYkY');
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
      // console.log(xhr.status);
      // console.log(xhr.response);
        var response = xhr.response.items;
        // remove duplicate results
        const outputArray = Object.values(
          response.reduce((acc, obj) => ({ ...acc, [obj.volumeInfo.title]: obj }), {})
        );

        // loop through results and display on page
        for (let i = 0; i < 4; i++) {
          if (outputArray[i] !== undefined) {
            var id = '#book' + i;
            var item = document.querySelector(id);
            var newBookImg = document.createElement('img');
            newBookImg.src = outputArray[i].volumeInfo.imageLinks.thumbnail;
            var bookTitle = document.createElement('h4');
            bookTitle.textContent = outputArray[i].volumeInfo.title;
            bookTitle.classList.add('mt-2');
            var bookAuthor = document.createElement('p');
            bookAuthor.textContent = outputArray[i].volumeInfo.authors;
            item.appendChild(newBookImg);
            item.appendChild(bookTitle);
            item.appendChild(bookAuthor);
          } else {
            return;
          }
        }

      });

      xhr.send();
    }

  }

  // save user read by date

  // var month = document.querySelector('#validationCustom01').value;
  // var date = document.querySelector('#validationCustom02').value;
  // var year = document.querySelector('#validationCustom03').value;
  // if (year === 'default') {
  //   console.log('Choose a year');
  // } else {
  //   console.log(year);
  //   console.log(month);
  //   console.log(date);
  // }

  document.querySelector('#searchResultsSection').classList.remove('visually-hidden');
  document.querySelector('#searchSection').classList.add('visually-hidden');

  getJSON('');
});

// Book Details: onClick book => show book details

// Dashboard

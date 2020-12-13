let firstElem = (x) => document.querySelector(x);
let arrayElem = (x) => document.querySelectorAll(x);

let mainInput = firstElem("#main-input");
let mainBtn = firstElem("#main-btn");

let cardsBody = firstElem("#cards-body");
let imgsArray = arrayElem(".imgs");
let titlesArray = arrayElem(".titles");
let typesArray = arrayElem(".types");
let yearsArray = arrayElem(".years");

let search;

// http://www.omdbapi.com/?i=tt3896198&apikey=a7eeeb91

mainBtn.addEventListener('click', function () {

  return new Promise (function (resolve, reject) {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let { Search } = JSON.parse(this.response);

        search = Search;

        if (Search !== undefined) {
          for (let i = Search.length - 1; i >= 0; i--) {
            let { Poster, Title, Type, Year } = Search[i];
            imgsArray[i].src = `${Poster}`;
            titlesArray[i].innerHTML = `${Title}`;
            typesArray[i].innerHTML = `${Type}`;
            yearsArray[i].innerHTML = `${Year}`;
          }
          cardsBody.className = "content elem_hide";
          setTimeout(function () {
            cardsBody.className = "content elem_visible";
          }, 200);
        } else {
          cardsBody.className = "content elem_hide";
        }
      }
    }
    xhr.open('GET', `http://www.omdbapi.com/?s=${mainInput.value.trim()}&apikey=a7eeeb91`);
    xhr.send();

  })


})

let moreDetailsArray = arrayElem("a");
let modal = firstElem(".modal");
for (let i = 0; i < moreDetailsArray.length; i++) {
  moreDetailsArray[i].addEventListener('click', function () {

    return new Promise (function (resolve, reject) {
      let { imdbID } = search[i];

      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let { Poster, Title, Rated, Year, Genre, Plot, Writer, Director, Actors, BoxOffice, Awards, Ratings } = JSON.parse(this.response);
          let imgModal = firstElem(".img-modal");
          let titleModal = firstElem(".title-modal");
          let year = firstElem("#year");
          let plot = firstElem("#plot");
          let writer = firstElem("#writer");
          let director = firstElem("#director");
          let actors = firstElem("#actors");
          let boxOffice = firstElem("#box-office");
          let awards = firstElem("#awards");
          let ratings = firstElem("#ratings");

          imgModal.src = `${Poster}`;
          titleModal.innerHTML = `${Title}`;
          year.innerHTML = `${Rated} ${Year} ${Genre}`;
          plot.innerHTML = `${Plot}`;
          writer.innerHTML = `<b>Written by:</b> ${Writer}`;
          director.innerHTML = `<b>Directed by:</b> ${Director}`;
          actors.innerHTML = `<b>Starring:</b> ${Actors}`;
          boxOffice.innerHTML = `<b>BoxOffice:</b> ${BoxOffice}`;
          awards.innerHTML = `<b>Awards:</b> ${Awards}`;
          ratings.innerHTML = `<b>Ratings:</b> <br/> ${Ratings[0].Source} ${Ratings[0].Value} <br/> ${Ratings[1].Source} ${Ratings[1].Value} <br/> ${Ratings[2].Source} ${Ratings[2].Value}`;
        }
      }
      xhr.open('GET', `http://www.omdbapi.com/?i=${imdbID}&apikey=a7eeeb91`);
      xhr.send();

    })

  })
}

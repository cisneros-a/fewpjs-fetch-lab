window.addEventListener("DOMContentLoaded", (event)=> { 
  


  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json =>  {printBookTitles(json), printTotalPages(json)});

 
  

  

  let main = document.querySelector('main')

  function printBookTitles(booksArray) {
    booksArray.forEach(book => {
      p = document.createElement('p');
      p.innerText = `${book.name}`
      main.appendChild(p)
      }); 
  }

  totalPages = document.querySelector('h3.total')
 
  function printTotalPages(booksArray) {
    total = 0
    booksArray.forEach(book => {
      total += parseInt(`${book.numberOfPages}`)
    })
    console.log(total)
    p = document.createElement('p') 
    p.innerText = `${total}`
    totalPages.appendChild(p)
  }

 

});
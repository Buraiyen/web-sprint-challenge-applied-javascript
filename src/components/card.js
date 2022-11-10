import axios from 'axios';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');

  const headlineEl = document.createElement('div');
  headlineEl.classList.add('headline');
  headlineEl.textContent = article.headline;
  cardEl.appendChild(headlineEl)

  const authorEl = document.createElement('div');
  const imgContainerEl = document.createElement('div');
  const authorPhotoEl = document.createElement('img');
  const authorName = document.createElement('span');
  authorName.textContent = article.authorName;
  authorEl.classList.add('author');
  authorPhotoEl.setAttribute('src', article.authorPhoto);
  authorPhotoEl.classList.add('authorPhoto');

  imgContainerEl.classList.add('img-container')
  imgContainerEl.appendChild(authorPhotoEl);
  authorEl.appendChild(imgContainerEl);
  authorEl.appendChild(authorName);

  cardEl.append(authorEl);
  return cardEl;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const URL = 'http://localhost:5001/api/articles'
  axios.get(URL)
       .then(res => {
         const javascriptData = res.data.articles.javascript;
         const bootstrapData = res.data.articles.bootstrap;
         const technologyData = res.data.articles.technology;
         const jqueryData = res.data.articles.jquery;
         const nodeData = res.data.articles.node;
         const cardContainer = document.querySelector(selector);

         for (let key in javascriptData) {
           const newCard = Card(javascriptData[key]);
           cardContainer.appendChild(newCard);
         }
         for (let key in bootstrapData) {
           const newCard = Card(bootstrapData[key]);
           cardContainer.appendChild(newCard);
         }
         for (let key in technologyData) {
           const newCard = Card(technologyData[key]);
           cardContainer.appendChild(newCard);
         }
         for (let key in jqueryData) {
           const newCard = Card(jqueryData[key]);
           cardContainer.appendChild(newCard);
         }
         for (let key in nodeData) {
           const newCard = Card(nodeData[key]);
           cardContainer.appendChild(newCard);
         }
       })
}

export { Card, cardAppender }

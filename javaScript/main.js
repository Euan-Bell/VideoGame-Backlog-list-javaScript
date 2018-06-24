document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');

  const handleFormSubmit = function(event){
    event.preventDefault();
    console.dir(event.target.publisher.value);
    const gameTitle = event.target.gameTitle.value);
    const publisher = event.target.publisher.value);
  }
})

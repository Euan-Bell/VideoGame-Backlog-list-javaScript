document.addEventListener('DOMContentLoaded', () => {
  console.log('javaScript loaded');

  const form = document.querySelector('#new-item-form');

  const handleFormSubmit = function(event){
    event.preventDefault();
    console.dir(event.target.platform.value);
    const gameTitle = event.target.gameTitle.value;
    const publisher = event.target.publisher.value;
    const platform = event.target.platform.value;

    const videoGameBacklog = document.querySelector('#videoGame-backlog');
    const div = document.createElement('h3');
    videoGameBacklog.appendChild(div);
    div.textContent = `${gameTitle} ${publisher} ${platform}`;
    // this.reset();

  }

  form.addEventListener('submit', handleFormSubmit);

  const removeAll = document.querySelector('#remove-all');

  const handleRemoveAll = function(event){
    const videoGameBacklog = document.querySelector('#videoGame-backlog');
    videoGameBacklog.innerHTML = ''
  }
  removeAll.addEventListener('click', handleRemoveAll);
})

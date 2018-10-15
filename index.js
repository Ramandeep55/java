

    // this variable will awlays keep track of our last clicked game entry
let selectedGame = 0;

let linkInbox = document.getElementById('linkInbox');
let linkCompose = document.getElementById('linkCompose')




linkInbox.addEventListener('click', function(e){
e.preventDefault();
let filtered = games.filter(game => !game.deleted);
selectedGame = 0;
render(filtered);
});



linkCompose.addEventListener('click', ComposeForm);


function ComposeForm(e){
e.preventDefault();
let html_ComposeForm =`


<form class="pure-form pure-form-stacked">
    <fieldset>
        <legend>Legend</legend>

        <div class="pure-g">
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="first-name">First Name</label>
                <input id="first-name" class="pure-u-23-24" type="text">
            </div>

            <div class="pure-u-1 pure-u-md-1-3">
                <label for="last-name">Last Name</label>
                <input id="last-name" class="pure-u-23-24" type="text">
            </div>

            <div class="pure-u-1 pure-u-md-1-3">
                <label for="email">E-Mail</label>
                <input id="email" class="pure-u-23-24" type="email" required>
            </div>

            <div class="pure-u-1 pure-u-md-1-3">
                <label for="city">City</label>
                <input id="city" class="pure-u-23-24" type="text">
            </div>

            <div class="pure-u-1 pure-u-md-1-3">
                <label for="state">State</label>
                <select id="state" class="pure-input-1-2">
                    <option>AL</option>
                    <option>CA</option>
                    <option>IL</option>
                </select>
            </div>
        </div>

        <label for="terms" class="pure-checkbox">
            <input id="terms" type="checkbox"> I've read the terms and conditions
        </label>

        <button type="submit" class="pure-button pure-button-primary">Submit</button>
    </fieldset>
</form>

`;

let main = document.getElementById('main');
main.innerHTML = html_ComposeForm;

}









function render(games) {
let displayGameSnippet = `
${games.map ((game, index) => `
          <div class="email-item pure-g" data-id="${index}">
            <div class="pure-u">
            <img width="64" height="64" alt="" class="obj-avatar" src="${game.avatar}">
            </div>

             <div class="pure-u-3-4">
             <h5 class="email-name">${game.first_name} ${game.last_name}</h5>
           <h4 class="email-subject">${game.subject}</h4>
            <p class="email-desc">
${game.body.lenght > 100 ? `${game.body.substr(0,99)}...` : game.body}
          </p>
        </div>
        </div>

`).join('')}
       `;
       let el = document.getElementById('list');
       el.innerHTML= displayGameSnippet;
initialize(games);


function initialize(games){
       let gameList = Array.from(document.querySelectorAll('[data-id]'));
     gameList.map((game, index) => game.addEventListener('click', function(e){
      
console.log(game);       
game.classList.add('email-item-selected');

     }));


if(games.length){
  gameList[selectedGame].classList.add('email-item-selected');
  showGameBody(selectedGame, games);
}

}
}

function showGameBody(idx,games){
let displayGameBody =`

<div class="email-content">
            <div class="email-content-header pure-g">
                <div class="pure-u-1-2">
                    <h1 class="email-content-title">${games[idx].subject}</h1>
                    <p class="email-content-subtitle">
                         From<a>${games[idx].first_name} ${games[idx].last_name}</a> at <span>${games[idx].body}, ${games[idx].date}Published By Namco,1963
                    </p>
                </div>

                <div class="email-content-controls pure-u-1-2">
                    <button id="delete" class="secondary-button pure-button" } "data-id="idx">Deleted</button>
                    <button class="secondary-button pure-button">Forward</button>
                    <button class="secondary-button pure-button">Move to</button>
                </div>
            </div>

            <div class="email-content-body">
 <p>
 ${games[idx].body}
 </p>
            </div>
        </div>
      `;





let btn_delete = document.getElementById('delete');
btn_delete.addEventListener('click', () => deletedGame(btn_delete.dataset.id, games));
}


function deletedGame(games){
// if this current email does Not have the key/ value of deleted:true
if(emails[index].deleted){

// add the key/value property of deleted:true inside the currently selected emails
games[inbox].deleted = true;




}

else{
  // if this current email does Not have the key/ value of deleted:true
  delete games[index].deleted;
  let filtered = games.filter(game => game.deleted);
  selectedGame = 0;
  render(filter);
}



};



// if localStorage exists called 'items' then use it. Else use the global games 
if(localStorage.getItem('items')){
  games =JSON.parse(localStorage.getItem('item'));
  let filtered = games.filter(game => game.deleted)
  render(filtered);
}
else{
  render(games);
}

console.log('hello');
render (games);




 

      
   
/*
JAVASCRIPT USED TO ASSIGN AN EVENT LISTENER TO EACH BUTTON ON THE FAVOURITE BOXERS PAGE.
THIS WILL SAVE THE ENTRY IN SESSIONSTORAGE, WHICH IS THEN PULLED AND DISPLAYED IN A LIST OF THE STORED NAMES
IN THE VIEW FAVOURITES PAGE.
FUTURE PLAN WILL BE TO ADD SOME IMAGES, AND ADD FUNCTIONALITY TO THE UPDATE/DELETE BUTTONS ONCE THERE IS 
DATABASE CONNECTIVITY.
*/
const buttonBoxer = () => {
    let wrapper = document.getElementById('wrapper');
    if(wrapper == null) {
        console.log('null')
    } else {
    wrapper.addEventListener('click', (event) => {  
      const isButton = event.target.nodeName === 'BUTTON';
      if (!isButton) {
        return;
      }
      let boxerId = event.target.parentElement.id
      let boxerValue = event.target.parentElement.innerHTML
      sessionStorage.setItem(boxerId, boxerValue);  
    })
}
}
buttonBoxer();

const likeButton = () => {
  let wrapper = document.getElementById('potentialWrapper');
  if(wrapper == null) {
      console.log('null')
  } else {
  wrapper.addEventListener('click', (event) => {  
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    let btnId = event.target.id;
    console.log(event.target.id)
    sessionStorage.setItem(btnId, 1);
    event.target.innerHTML = sessionStorage.getItem(btnId);
  })
  }
}
likeButton();

// adds the input to the list.
const addItem = () => {
  let inputValue = document.querySelector('#comment');
  if (inputValue.value == '') {
      alert('You havent entered anything');
      inputValue.value = '';
  } else {
    sessionStorage.setItem("comment", inputValue.value);
  }
}
/*
SHOW COMMENTS
*/
let commenttList = document.querySelector('#yourComments');
const commentList = () => {
    let listItem = document.createElement('li');
    if(commenttList == null) {
      console.log('null')
  } else {
    let comment = sessionStorage.getItem("comment");
    listItem.innerHTML = comment;
    listItem.id = "boxerComment";
    commenttList.appendChild(listItem);
  }
}
commentList();

// adds favourite boxers
let htmlList = document.querySelector('#itemList');
const updateList = () => {
    let listItem = document.createElement('li');
    if(htmlList == null) {
      console.log('null')
  } else {
    let values = Object.values(sessionStorage);
    let keys = Object.keys(sessionStorage);
    for(let key of keys) {
      let storage = sessionStorage.getItem(key);
      let split = storage.split('\n');
      let boxer = split[0];
      if (boxer != '1') {
      let listItem = document.createElement('li');
      listItem.innerHTML = boxer;
      listItem.id = "boxer";
      htmlList.appendChild(listItem);
      }
     }
  }
}
updateList();

const addLike = () => {
  let btn = document.querySelector('#like');
  let result = document.querySelector('#result');

sessionStorage.setItem('likes', 0);
result.innerHTML = localStorage.getItem('likes');

btn.addEventListener('click', addLike());

function addLike(){
  localStorage.setItem('likes',  parseInt(localStorage.getItem('likes')) + 1);
  result.innerHTML = localStorage.getItem('likes');
}
}


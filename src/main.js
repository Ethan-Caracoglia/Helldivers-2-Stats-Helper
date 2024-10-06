'use strict'

let WEAPON_DATA;
let xhr;

// Load the data when the page loads
window.onload = init;

let init = () => {
    // Get the json for the weapons
xhr = new XMLHttpRequest();
xhr.open('GET', 'data/Helldivers Weapon Stats.json', true);
xhr.responseType = 'json';
xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.response;
      WEAPON_DATA = data;
    }
  };
  xhr.send();
}
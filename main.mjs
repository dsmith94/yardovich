
import { plants } from './plants.mjs';


function createOption(str) {

    const opt = document.createElement('option');
    opt.value = str;
    opt.label = str;
    return opt;

}


async function changePlant() {

    const sel = document.getElementById("select");
    const plant = sel.options[sel.selectedIndex].value;

    const f = await fetch(`https://y36viyfqzk.execute-api.us-west-2.amazonaws.com/items/${plant}`);
    const json = await f.json();
    const guide = document.getElementById("guide");
    const zone = document.getElementById("zone");
    const wintering = document.getElementById("wintering");
    const watering = document.getElementById("watering");
    const photo = document.getElementById("photo");

    guide.innerHTML = json.guide;
    zone.innerHTML = json.zone;
    wintering.innerHTML = json.wintering;
    watering.innerHTML = json.watering;
    photo.innerHTML = `<img src="${json.photo}"></img>`

}


function load_app() {

    const app = document.querySelector('#app');
    const sel = document.createElement('select');
    const guide = document.createElement('div');
    const zone = document.createElement('div');
    const wintering = document.createElement('div');
    const watering = document.createElement('div');
    const photo = document.createElement('div');

    sel.id = 'select';
    guide.id = 'guide';
    zone.id = 'zone';
    wintering.id = 'wintering';
    watering.id = 'watering';
    photo.id = 'photo';

    plants.map(x = sel.options.add(createOption(x)));
    sel.onchange = () => {
        changePlant();
    };
    app.innerHTML = '';
    app.append(sel);
    app.append(photo);
    app.append(guide);
    app.append(zone);
    app.append(wintering);
    app.append(watering);

}

load_app();

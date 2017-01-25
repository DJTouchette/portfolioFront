/* eslint-disable */

function typeText() {
  let container = document.getElementById('changeText');

  let things = ['I write code on the Internet...', 'The web is my passion and I want to make a difference', 'Click the hamburger menu to browse my site.'];
  let t = -1;
  let thing = '';
  let message = container.innerHTML;
  let mode = 'write';
  let delay = 1000;

function updateText(txt) {
    container.innerHTML = txt;
}

function tick() {

    if(container.innerHTML.length === 0) {
        t++;
        thing = things[t];
        message = '';
        mode = 'write';
    }

    switch(mode) {
        case 'write' :
            message += thing.slice(0, 1);
            thing = thing.substr(1);

            updateText(message);

            if(thing.length === 0 && t === (things.length - 1)) {
                window.clearTimeout(timeout);
                // timeout = window.setTimeout(tick, delay);
                return;
            }

            if(thing.length === 0){
                mode = 'delete';
                delay = 1500;
            } else {
                delay = 20 + Math.round(Math.random() * 40);
            }

            break;

        case 'delete' :
            message = message.slice(0, -1);
            updateText(message);

            if(message.length === 0)
            {
                mode = 'write';
                delay = 1500;
            } else {
                delay = 3 + Math.round(Math.random() * 100);
            }
            break;
    }

    timeout = window.setTimeout(tick, delay);
}

  let timeout = window.setTimeout(tick, delay);
}

export { typeText };

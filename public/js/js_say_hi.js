let say = document.querySelector('#say');

say.addEventListener('click', () => {
    let displayName = document.querySelector('#display-name');
    let name = displayName.value;

    let response = document.querySelector('#response');

    if (!name) {
        response.classList.remove('active');
    } else {
        response.innerHTML = `Hi, ${name}`;
        response.classList.add('active');
    }
})

let quit = false;

let ss = quit ? 'Bye' : 'Welcome';

let s2 = '';

if (quit) {
    s2 = 'Bye';
} else {
    s2 = 'Welcome';
}

console.log(ss, s2);


let sw = 2;

switch (sw) {
    case 1:
        console.log('sw is 1');
        break;

    case 2:
        console.log('sw is 2');
        break;

    default:
        console.log('not match');
        break;
}

if (sw == 1) {
    console.log('sw is 1');
}

if (sw == 2) {
    console.log('sw is 2');
}


let a = 1;
let b = '1';

console.log(`${a} is ${typeof a}, ${b} is ${typeof b}`);

if (a == b) {
    console.log('is match ==')
}

if (a === b) {
    console.log('is match ===')
}

if (a != b) {
    console.log('not match !=')
}

if (a !== b) {
    console.log('not match !==')
}

if (a = b) {
    console.log('is match =')
    console.log(a);
}
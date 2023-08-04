const lorem = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";
const doesExit = lorem.includes("make");
console.log(doesExit);
const DoNoExit = lorem.includes("galleeeeeee");
console.log(DoNoExit);
const search = lorem.includes('and');
console.log(search);

const seaRch = lorem.includes('text');
console.log(seaRch);

// index of --------
console.log(lorem.indexOf('is'));
console.log(lorem.indexOf('dummy'));
console.log(lorem.indexOf('jon'));

// endSwitch
const fileName = 'biodat.pdf';
const otherfile = 'pic.png';
fileName.endsWith('.pdf');
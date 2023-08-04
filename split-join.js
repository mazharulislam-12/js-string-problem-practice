const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"; // 
  // split 
  let parts = lorem.split(' ')
  console.log(parts);

  let sentence = lorem.split('.')
  console.log(sentence);
  
  let chars = lorem.split('');
  console.log(chars);

// slice 
let partial = lorem.slice(5, 9);
console.log(partial);
// substring
let partial2 = lorem.substring(5, 9);
console.log(partial2);

// array join 
let lines = [
  'In publishing and graphic',
  'As In publishing and gradddldphic',
  'of publishing and graphifkdkc'
]
let newLine = lines.join(' : ')
console.log(newLine);
const request = require('request');
const fs = require('fs');
const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const catBreed = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + catBreed, (error, response, body) => {
  const data = JSON.parse(body);
  console.log('if there was an error, you will see it here: ', error);
  if (data == false) {
    console.log('That is not a valid cat breed, try again bro')
  } else{
  // console.log(data);
  console.log('description: ', data[0]);
}})




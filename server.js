function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteFood = process.env.FAVORITE_FOOD;

  while(true) {
    console.log('Containers rule!');
    console.log(`My favorite junkfood is ${favoriteFood}`);
    await sleep(5000);
  }
}

main();

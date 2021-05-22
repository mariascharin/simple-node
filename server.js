// Set a local variable populated by the environment variable $NAME
const FAVORITE_FOOD = process.env.FAVORITE_FOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVORITE_FOOD} rocks!!!`);
    await sleep(5000);
  }
}

main();

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r|   ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1200);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 1800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r|   ");
}, 2100);

// ... fill in the rest yourself ...
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r|   ");
}, 2400);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  console.log();
}, 2700);

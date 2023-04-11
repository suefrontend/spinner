const spinners = [
  "\r|",
  "\r/",
  "\r-",
  "\r\\",
  "\r|",
  "\r/",
  "\r-",
  "\r\\",
  "\r|",
];

const printSpinners = () => {
  for (let i = 0; i < spinners.length; i++) {
    setTimeout(
      () => process.stdout.write(`${spinners[i]}   `),
      i * 2 * 100 + 100
    );
  }
  setTimeout(() => console.log(), spinners.length * 2 * 100 + 300);
};

printSpinners();

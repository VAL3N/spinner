process.stdout.write('hello from spinner1.js... \rheyyy\n');

let count = 0;
const stringOfSymbols = "|/-\|/-\|";

for (let i = 0; i < stringOfSymbols.length; i++) {
  
  setTimeout(() => {
    process.stdout.write(`\r${stringOfSymbols[i]}  `);
    if (i === stringOfSymbols.length - 1){
      process.stdout.write('\n');
    }
  }, count += 200);
}
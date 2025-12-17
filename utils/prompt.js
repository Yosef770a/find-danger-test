import readlineSync from 'readline-sync';


export function ask(question) {
  return readlineSync.question(question);
  };


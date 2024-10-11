// The CLI entry point should live here!

import { reverseSentence } from "./reverse";

const argv = process.argv.slice(2)
if (argv.length > 0 && argv[0][0] !== "-") {
  const sentence = argv[0]  
  const reverseWord = argv.includes("--word")
  const reverseLetter = argv.includes("--letter")
  console.log(reverseSentence(sentence, reverseWord, reverseLetter));
} else {
  console.error("Please include a sentence to reverse.")
  console.error("If sentence includes '-' at the start, please remove it")

  console.error("Usage: npm start -- `please reverse this sentence`")
  console.error(`Parameters: 
    --word    - Reverses the order of the words
    --letter  - Reverses the order of the letters within each word
  `)
}

/**
 * https://nodejs.org/docs/latest/api/process.html#process_process_argv
 * 
 * Notes:
 * Need to consider empty string, and args
 
 * Sample Inputs:
      npm start -- 
      npm start -- "" --word


 */

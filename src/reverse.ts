

// This is a sentence - string 
// Word - ["This", "is", "a", "sentence"] => ["sentence", "a", "is", "This"]
// Letter - [['T', 'h', 'i', 's'], [X], [Y], [Z]] => [['s', 'i', 'h', 't'], [X], [Y], [Z]]
// Both - ["This", "is", "a", "sentence"] => [[Z], [Y], [X], ['s', 'i', 'h', 'T']

export const reverseSentence = (
  sentence: string,
  reverseWords: boolean,
  reverseLetters: boolean
): string => {
  let reverse = sentence.split(" ");
  if (reverseWords) reverse.reverse();
  if (reverseLetters) {
    reverse.map((word, index) => {
      reverse[index] = word.split("").reverse().join("")
    })
  }
  return reverse.join(" ")
};
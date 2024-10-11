import { expect } from "chai";
import { describe } from "mocha";
import { reverseSentence } from "../src/reverse";

describe("reverseSentence", () => {
  it("should do nothing when passed false false", () => {
    const sentence = "this is a sentence";
    const reverseWords = false;
    const reverseLetters = false;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "this is a sentence"
    );
  });

  it("should reverse a single letter to itself", () => {
    const sentence = "a";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "a"
    );
  });

  it("should reverse sentences by words", () => {
    const sentence = "this is a sentence";
    const reverseWords = true;
    const reverseLetters = false;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "sentence a is this"
    );
  });

  it("should reverse sentences by letters", () => {
    const sentence = "the letters";
    const reverseWords = false;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "eht srettel"
    );
  });

  it("should reverse both", () => {
    const sentence = "this is a sentence";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "ecnetnes a si siht"
    );
  });

  ///// Additional Tests /////
  it("Empty - should return nothing", () => {
    const sentence = "";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      ""
    );
  });

  it("Space - should return space", () => {
    const sentence = " ";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      ""
    );
  });

  it("Singles - should reverse singles to itself", () => {
    const sentence = "a b c d e";
    const reverseWords = false;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "a b c d e"
    );
  });

  it("Singles - should reverse sentence by words", () => {
    const sentence = "a b c d e";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "e d c b a"
    );
  });

  it("Leading & Trailing Spaces - should reverse sentences by letters & remove spaces", () => {
    const sentence = "   the letters        ";
    const reverseWords = false;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "eht srettel"
    );
  });
});

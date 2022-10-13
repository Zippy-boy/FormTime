"""Put all words greater then 5 letters into a .txt file."""

from nltk.corpus import words

with open("words.txt", "a") as f:
    f.flush()
    for word in words.words():
        if len(word) > 5 and len(word) < 10:
            word.strip()
            f.write(word + "\n")
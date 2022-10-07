# check all lines in words.txt and save the onse that have a number before them
# in a new file called wordsWithNumbers.txt

"""import re

with open('words.txt', 'r') as file:
    with open('wordsWithNumbers.txt', 'w') as newFile:
        for line in file:
            if re.search('^\d', line):
                newFile.write(line)"""

# Generate a list of rare words in a text file
# Path: help-python\listOfWords.py

"""import re
from collections import Counter
from nltk.corpus import words

Listwords = words.words()
# for each word in the list of words, check if it is rare
# if it is rare, add it to the list of rare words
c = 0
rareWords = []
for word in Listwords:
    c += 1
    print(c)
    if word.isalpha():
        if word not in rareWords:
            rareWords.append(word)

# open the file and read it
with open('wordsrare.txt', 'w') as file:
    for word in rareWords:
        file.write(word + '\n')"""


# use the https://api.dictionaryapi.dev/api/v2/entries/en/<word> to get the definition of all the words in wordsrare.txt
# if the word is not found, remove it from the list

import requests
import threading

# get the list of words
with open('wordsrare.txt', 'r') as file:
    words = file.readlines()
    words = [word.strip() for word in words]

# split the list into 100 words each
words = [words[i:i + 100] for i in range(0, len(words), 100)]
print(words[0])

# create a list of threads
wordGood = []
threads = []

def getDefinition(word):
    with open("wordsBad.txt", "w") as file:
        for i in word:
            try:
                url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + i
                response = requests.get(url)
                wordGood.append(i)
                file.write(i + '\n')
            except:
                pass
        print("1 done")

# for each list in words, create a thread that will check if the word is in the dictionary

for wordList in words:
    t = threading.Thread(target=getDefinition, args=(wordList,))
    threads.append(t)
    print(len(threads))
    t.start()

c= 0
# wait for all the threads to finish
for thread in threads:
    c += 1
    print(c)
    thread.join()

# save the list of words in a file
with open('wordsGood.txt', 'w') as file:
    for word in wordGood:
        file.write(word + '\n')
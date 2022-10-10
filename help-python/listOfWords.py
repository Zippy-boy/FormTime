
"""import re
from collections import Counter
from nltk.corpus import words

Listwords = words.words()
# save the list of words to a file called words.txt
with open('words.txt', 'w') as f:
    for item in Listwords:
        f.write(f"{item}\n")"""


# go thorugh all words in words.txt andsee if they a commonly used
# word in the english language
# if they are, then add them to a new file called commonWords.txt
# if they are not, then add them to a new file called uncommonWords.txt

"""score = {
    'a': 1, 'b': 3, 'c': 3, 'd': 2,
    'e': 1, 'f': 4, 'g': 2, 'h': 4,
    'i': 1, 'j': 8, 'k': 5, 'l': 1,
    'm': 3, 'n': 1, 'o': 1, 'p': 3,
    'q': 10, 'r': 1, 's': 1, 't': 1,
    'u': 1, 'v': 4, 'w': 4, 'x': 8,
    'y': 4, 'z': 10, ' ': 0, '-': 0
}

def scrabble_score(word):
    return sum(score[letter] for letter in word.lower())

for word in open('words.txt'):
    word = word.strip()
    if scrabble_score(word) > 20:
        with open('rareWords.txt', 'a') as f:
            f.write(f"{word}\n")


"""

# check if all words are in https://api.dictionaryapi.dev/api/v2/entries/en/
# if they are, then add them to a new file called commonWords.txt and split it into 20 threads

# if they are not, then add them to a new file called uncommonWords.txt

import requests
import re
import json
import threading
import time
import os
from queue import Queue


start = time.time()

# create a queue and threader
q = Queue()
threads = 40

# create a function to do the next job in the queue
def do_next_job(q):
    while True:
        url = q.get()
        #print(url)
        response = requests.get(url)
        #print(response)
        if response.status_code == 200:
            with open('commonWords.txt', 'a') as f:
                f.write(f"{url}\n")
        else:
            with open('uncommonWords.txt', 'a') as f:
                f.write(f"{url}\n")
        q.task_done()

# create a function to create threads
def create_threads():
    for _ in range(threads):
        t = threading.Thread(target=do_next_job, args=(q,))
        t.daemon = True
        t.start()

# create a function to do the next job in the queue
def create_jobs():
    for word in open('words.txt'):
        word = word.strip()
        url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
        q.put(url)
    q.join()

create_threads()
create_jobs()

end = time.time()
print(f"Time taken: {end - start}")


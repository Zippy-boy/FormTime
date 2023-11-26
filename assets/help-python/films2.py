import os

for folder, _, _ in os.walk("films"):
    new_folder = folder[:-4]

    new_folder = new_folder.split("\\")
    try:
        print(new_folder[1])
        os.rename(folder, f"films/{new_folder[1]}")
    except:
        pass
import glob
import os
import cv2
import logging
import random

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Specify the drives you want to search
drives = ["E:", "F:"]
logger.info(f"Searching for mp4 files in drives: {drives}")

# Search for .mp4 files in the specified drives
mp4_files = []
for drive in drives:
    search_path = drive + "/**/*.mp4"
    mp4_files.extend(glob.glob(search_path, recursive=True))
logger.info(f"Found {len(mp4_files)} mp4 files")

# Exclude files in "TV Series" or "3D Movies" folders
excluded_folders = ["TV Series", "3D Movies", "$RECYCLE.BIN", "Game of Thrones Season 4", "Game of Thrones Season 5", "Game of Thrones Season 6"]
filtered_files = []
for file in mp4_files:
    if not any(folder in file for folder in excluded_folders):
        filtered_files.append(file)
logger.info(
    f"Found {len(filtered_files)} mp4 files that are not TV Series or 3D Movies"
)

# Grab screenshots from the movies
for file in filtered_files:
    logger.info(f"Grabbing screenshots from {file}")
    movie_name = os.path.splitext(os.path.basename(file))[0][:-5]
    movie_name = "".join(
        e for e in movie_name if e.isalnum()
    )  # Remove special characters and spaces

    # Create directory if it doesn't exist
    directory = f"films/{movie_name}"
    if not os.path.exists(directory):
        os.makedirs(directory)
    # Open the video file
    cap = cv2.VideoCapture(file)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    start_frame = int(total_frames * 0.2)  # Exclude first 20% of frames
    end_frame = int(total_frames * 0.8)  # Exclude last 20% of frames

    # Save screenshots
    num_frames = 3
    random_frames = random.sample(range(start_frame, end_frame), num_frames)
    for i, frame_num in enumerate(random_frames):
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_num)

        ret, frame = cap.read()
        if not ret:
            break
        targetname = f"{directory}/image_{i}.png"  # Append frame number to filename
        cv2.imwrite(targetname, frame)

    # Release the video capture object
    cap.release()

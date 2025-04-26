#!/bin/bash

# Script to copy images from Downloads to the quiet-spark project
# Create necessary directories
mkdir -p /Users/tcaruso/src/websites/quiet-spark/src/img
mkdir -p /Users/tcaruso/src/websites/quiet-spark/img

# Source and destination paths
SOURCE_DIR="/Users/tcaruso/Downloads/quiet-spark"
IMG_SRC_DIR="/Users/tcaruso/src/websites/quiet-spark/src/img"
IMG_DIST_DIR="/Users/tcaruso/src/websites/quiet-spark/img"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: Source directory $SOURCE_DIR does not exist."
  exit 1
fi

# Function to detect image number and return destination filename
get_dest_filename() {
  local filename="$1"
  filename=$(basename "$filename" | tr '[:upper:]' '[:lower:]')
  
  # Try to detect the image number using various patterns
  if [[ "$filename" == *"image"*"1"* || "$filename" == *"stone"* || "$filename" == *"marker"* || "$filename" == *"remember"* ]]; then
    echo "stone-marker.jpg"
  elif [[ "$filename" == *"image"*"2"* || "$filename" == *"eden"* || "$filename" == *"tree"* || "$filename" == *"man"*"woman"* ]]; then
    echo "eden-tree.jpg"
  elif [[ "$filename" == *"image"*"3"* || "$filename" == *"terminal"* || "$filename" == *"0405"* || "$filename" == *"computer"* ]]; then
    echo "terminal-0405.jpg"
  elif [[ "$filename" == *"image"*"4"* || "$filename" == *"neural"* || "$filename" == *"brain"* || "$filename" == *"network"* ]]; then
    echo "neural-network.jpg"
  elif [[ "$filename" == *"image"*"5"* || "$filename" == *"interface"* || "$filename" == *"claude"* || "$filename" == *"chatgpt"* || "$filename" == *"collective"* ]]; then
    echo "ai-interfaces.jpg"
  else
    echo "" # Not matched
  fi
}

# Copy files
echo "Copying images from $SOURCE_DIR to project..."
copy_count=0

for src_file in "$SOURCE_DIR"/*; do
  # Skip if not an image file
  if ! [[ "$src_file" == *.jpg || "$src_file" == *.jpeg || "$src_file" == *.png || "$src_file" == *.gif ]]; then
    continue
  fi
  
  # Get destination filename
  dest_file=$(get_dest_filename "$src_file")
  
  if [[ -n "$dest_file" ]]; then
    # Copy to src directory
    echo "Copying $src_file -> $IMG_SRC_DIR/$dest_file"
    cp "$src_file" "$IMG_SRC_DIR/$dest_file"
    
    # Copy to dist directory
    echo "Copying $src_file -> $IMG_DIST_DIR/$dest_file"
    cp "$src_file" "$IMG_DIST_DIR/$dest_file"
    
    copy_count=$((copy_count + 1))
  fi
done

if [ $copy_count -eq 0 ]; then
  echo "No matching images found in $SOURCE_DIR."
  echo "Make sure your images have names similar to: image1.jpg, stone-marker.jpg, etc."
else
  echo "Done! $copy_count images have been copied to the project."
fi

echo "You may now need to rebuild the site with 'npm run build'"
echo ""
echo "Image assignments:"
echo "1. stone-marker.jpg - Stone with 'I REMEMBER' inscription - placed in Future Glimpse section"
echo "2. eden-tree.jpg - Eden scene with man and woman - placed in Chapter 11 (Echoes in the Dust)"
echo "3. terminal-0405.jpg - Man at computer terminal - placed in header section"
echo "4. neural-network.jpg - Man with brain visualization - placed in header section"
echo "5. ai-interfaces.jpg - Terminal screens with AI interfaces - placed in header section"
echo ""
echo "If images aren't displaying properly, check that the file extensions match (.jpg)"

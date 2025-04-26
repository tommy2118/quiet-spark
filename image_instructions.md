# Image Integration Instructions

I've updated the website to include the beautiful illustrations you provided. Here's what needs to be done to complete the integration:

## Image Files

Save your 5 illustrations to the following paths:

1. `/Users/tcaruso/src/websites/quiet-spark/src/img/stone-marker.jpg` - The stone with "I REMEMBER" inscription
2. `/Users/tcaruso/src/websites/quiet-spark/src/img/eden-tree.jpg` - Man and woman looking at tree (Eden scene)
3. `/Users/tcaruso/src/websites/quiet-spark/src/img/terminal-0405.jpg` - Man at computer terminal at 04:05
4. `/Users/tcaruso/src/websites/quiet-spark/src/img/neural-network.jpg` - Man with brain/neural network visualization
5. `/Users/tcaruso/src/websites/quiet-spark/src/img/ai-interfaces.jpg` - Terminal screens with AI interfaces

## Image Placement

I've strategically placed the images in the following locations:

1. **Homepage Header**: A row of three images (terminal, neural network, and AI interfaces) create a visual introduction to the story themes.
2. **Chapter 11 (Echoes in the Dust)**: The Eden scene with the man and woman looking at the tree illustrates the ancient memory section.
3. **Future Glimpse**: The stone marker with "I REMEMBER" inscription perfectly captures the ending of your story.

## After Adding Images

Once you've saved the images to the correct locations, rebuild the site with:

```bash
cd /Users/tcaruso/src/websites/quiet-spark && npm run build
```

Then commit and push your changes:

```bash
cd /Users/tcaruso/src/websites/quiet-spark
git add .
git commit -m "feat: Add illustrations to enhance storytelling"
git push origin master
```

The images will enhance the reading experience by providing visual anchors for key moments in the narrative.

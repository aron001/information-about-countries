#!/bin/bash

# Build the React app
npm run build

# Create a new branch named "gh-pages"
git checkout -b gh-pages

# Remove existing files in the branch
git rm -rf .

# Copy the build files to the branch
cp -r build/* .

# Stage the changes
git add .

# Commit the changes
git commit -m "Deploy app to GitHub Pages"

# Push the changes to the "gh-pages" branch
git push origin gh-pages --force

# Switch back to the main branch
git checkout main

# Delete the "gh-pages" branch
git branch -D gh-pages

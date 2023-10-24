#!/bin/bash

# Run tests
npm test

# If tests pass, deploy the app
if [ $? -eq 0 ]; then
  # Build the React app
  npm run build

  # Move into the build directory
  cd build

  # Initialize a new Git repository
  git init

  # Add and commit all files
  git add .
  git commit -m "Deploy to GitHub Pages"

  # Set the remote repository URL
  git remote add origin https://github.com/aron001/information-about-countries.git
  # Push the build files to the gh-pages branch
  git push origin HEAD:gh-pages --force

  # Extract the deployment link
  DEPLOYMENT_LINK="https://aron001.github.io/information-about-countries/"
  echo "Deployment Link: $DEPLOYMENT_LINK"
fi

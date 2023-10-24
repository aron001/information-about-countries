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
  # Replace `username` with your GitHub username and `repository` with your repository name
  git remote add origin https://github.com/aron001/information-about-countries.git

  # Push the build directory to the `gh-pages` branch
  git push --force origin HEAD:gh-pages

  # Clean up
  cd ..
  rm -rf build
else
  echo "Tests failed. Deployment aborted."
fi

@echo off
REM Set local Node.js to PATH
set "PATH=%~dp0..\node\node-v20.17.0-win-x64;%PATH%"

REM Install dependencies (if needed)
..\node\node-v20.17.0-win-x64\npm.cmd install

REM Build the Astro site
..\node\node-v20.17.0-win-x64\npm.cmd run build

REM Deploy to gh-pages branch
cd dist

git init

git remote add origin https://github.com/rizwanhaidar/Protofolio.git

git checkout -b gh-pages

git add .
git commit -m "Deploy to GitHub Pages"
git push -f origin gh-pages

echo Deployment complete. Check your site at https://rizwanhaidar.github.io/Protofolio

#install latest version node
-- nvm install 18
-- nvm use 18
-- node --version
#yarn 
yarn install:
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
yarn --version

yarn start -to start a react application


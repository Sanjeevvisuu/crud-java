#remove
-- rm -rf node_modules yarn.lock
this application work in node 16
#install latest version node
--nvm install 16
-- nvm use 16

-- node --version
#yarn 
yarn install
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
yarn --version

yarn start -to start a react application


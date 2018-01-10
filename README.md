# hello-world-react
following https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

Install project using yarn
Eivinds-MacBook-Air:hello-world-react eivind$ yarn init
yarn init v1.3.2
question name (hello-world-react): 
question version (1.0.0): 
question description: learning from yarnpkg.com
question entry point (index.js): 
question repository url: 
question author: Eivind
question license (MIT): 
question private: 
success Saved package.json
Add webpack:

Eivinds-MacBook-Air:hello-world-react eivind$ yarn add webpack webpack-dev-server path
yarn add v1.3.2
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 448 new dependencies.

Add babel:
Eivinds-MacBook-Air:hello-world-react eivind$ yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
yarn add v1.3.2

Eivinds-MacBook-Air:hello-world-react eivind$ touch .babelrc
Eivinds-MacBook-Air:hello-world-react eivind$ nano .babelrc 

Create client directory and some files:
Eivinds-MacBook-Air:hello-world-react eivind$ mkdir client
Eivinds-MacBook-Air:hello-world-react eivind$ cd client
Eivinds-MacBook-Air:client eivind$ touch index.js
Eivinds-MacBook-Air:client eivind$ touch index.html

Eivinds-MacBook-Air:hello-world-react eivind$ yarn add html-webpack-plugin
yarn add v1.3.2

start web aplication:
Eivinds-MacBook-Air:hello-world-react eivind$ yarn start
yarn run v1.3.2

Add react:
Eivinds-MacBook-Air:hello-world-react eivind$ yarn add react react-dom
yarn add v1.3.2


Adding to Github:
Eivinds-MacBook-Air:hello-world-react eivind$ touch .gitignore
Eivinds-MacBook-Air:hello-world-react eivind$ nano .gitignore 
Eivinds-MacBook-Air:hello-world-react eivind$ git add .
Eivinds-MacBook-Air:hello-world-react eivind$ git commit -m "initial commit"
Eivinds-MacBook-Air:hello-world-react eivind$ git remote add https://github.com/eili/hello-world-react.git
Eivinds-MacBook-Air:hello-world-react eivind$ git push -f origin master
Username for 'https://github.com': eili
Password for 'https://eili@github.com': 


Created Github certificate:
No password on cert
File: ~/.ssh/id_rsa_hotmail

Eivinds-MacBook-Air:hello-world-react eivind$ ssh-keygen -t rsa -b 4096 -C "eivind_lindseth@hotmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/eivind/.ssh/id_rsa): /Users/eivind/.ssh/id_rsa_hotmail
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/eivind/.ssh/id_rsa_hotmail.
Your public key has been saved in /Users/eivind/.ssh/id_rsa_hotmail.pub.
The key fingerprint is:
SHA256:3BD4A6IvEi3VNHvJ6pHZc6xKywsoxJai/URLfp7GFTw eivind_lindseth@hotmail.com
The key's randomart image is:
+---[RSA 4096]----+
|   oo  ..        |
|  . o+o. .       |
| o ...++.        |
|+ +  * oEo       |
|.B .B o S+.      |
|*o.=.o +.        |
|+.o.*.o.         |
|.  * =o.         |
|    *oo          |
+----[SHA256]-----+
Eivinds-MacBook-Air:hello-world-react eivind$ ls -al ~/.ssh
total 40
drwx------   7 eivind  staff   224 Dec 26 22:37 .
drwxr-xr-x+ 60 eivind  staff  1920 Dec 26 21:42 ..
-rw-------   1 eivind  staff  1679 Jan 16  2017 id_rsa
-rw-r--r--   1 eivind  staff   407 Jan 16  2017 id_rsa.pub
-rw-------   1 eivind  staff  3247 Dec 26 22:37 id_rsa_hotmail
-rw-r--r--   1 eivind  staff   753 Dec 26 22:37 id_rsa_hotmail.pub
-rw-r--r--   1 eivind  staff  1234 Mar 14  2017 known_hosts

Copy certo to clipboard:
pbcopy < ~/.ssh/id_rsa_hotmail.pub


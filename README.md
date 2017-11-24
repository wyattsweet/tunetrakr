# Tunetrakr

This is a music productivity app to help musicians store data on music they know how to play and keep track of music they want to learn in the future.
This app is built with HTML/CSS, React, Node.js and PostgreSQL.

## Bootstrapping the app

1. Clone repo
2. run `yarn install`
3. Make sure you have PostgreSQL installed and running
	- [MacOS installer](http://postgresapp.com/)
4. Create Postgres database (manual step at this point)
	- `$ psql postgres`
	- `# CREATE DATABASE tunetrakr;`
	- `# \q`
5. Create table by running `$ node scripts/tables`

## todo

1. Blow away most of app and start fresh
2. Build app without data layer. Add in after.

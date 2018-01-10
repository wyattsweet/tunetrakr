# Tunetrakr

TuneTrakr is a music productivity app built with React. It's main purpose is to help musicians store data on music they know how to play and keep track of music they want to learn in the future.

For now all you need to do to run the app locally is clone the repo, run `yarn install`. Then, `npm start` will run the development build.

In the future, to run the app locally. The process will be something like:

1. Clone repo
2. run `yarn install`
3. Make sure you have PostgreSQL installed and running
	- [MacOS installer](http://postgresapp.com/)
4. Create Postgres database (manual step at this point)
	- `$ psql postgres`
	- `# CREATE DATABASE tunetrakr;`
	- `# \q`
5. Create table by running `$ node scripts/tables`

# NodeDex

## What is NodeDex?
NodeDex is a Pokédex website written in TypeScript and compiled in a Node.js environment, hence the name. This is largely a project for fun, but I want to incorporate features of the popular Pokémon fansites, like [Serebii](https://www.serebii.net/), [Bulbapedia](https://bulbapedia.bulbagarden.net/), and [Pokémon DB](https://pokemondb.net/) and hopefully make a site than their PokéDex sections. You can access the production build [here](https://pokedex.mechadragonx.me/)!

## How do I run it?
You can just go [here](https://pokedex.mechadragonx.me/) but...
As stated before, this project is written in TypeScript which compiles in a Node.js environment to JS. Make sure to install the [`typescript`](https://www.typescriptlang.org/) and [`ts-node`](https://www.npmjs.com/package/ts-node) packages to allow the project to run and then install all the packages specified in the `package.json`. Here are the commands you'll need:
```shell
$ npm install -g typscript
$ npm install -g ts-node
$ npm i
$ ts-node src/server
```
Then navigate to http://localhost:1996/.
Why that port number? Cuz [February 27, 1996](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Day)

## What's there now?
You can view basic dex pages for all Pokémon from generation 1 to 7 (8 is not supported by PokéAPI yet). You can navigate to `/national/<National Dex Number>` or `/national/<Pokémon Name in Lowercase>` and you will be able to see it in action. For example, if you type
`/national/448` or `/national/lucario`
you'll see this:
![English Screenshot - 18/3/2020](https://i.imgur.com/TUJhtEl.png "English Screenshot - 18/3/2020")

If you click on the Japanese toggle switch at the top, you'll see this:
![Japanese Screenshot - 18/3/2020](https://i.imgur.com/uHr1auR.png "Japanese Screenshot - 18/3/2020")

## Will this be the final name?
Probably not, but I can't be bothered at the moment. lol

## Upcoming Features
- Kana display option for Japanese
- More languages?
- Landing page for the national dex that shows less information
- Search bar on landing page
- Stat distribution and ability information
- Other misc information

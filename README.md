# Pokédex

I't s a small side project of mine, a Pokédex containing information about all pokémons from the Kanto region. For now, this project is purely vanilla, I created it to practice and improve on vanilla JS skills.

It's a work in progress, I mean to add more features in the future and fix some existing problems.

### Links

[Live site URL](https://pokedex-vanilla.netlify.app/)

### Built with

- semantic HTML
- vanilla CSS
- Javascript
- PokéAPI
- Font Awesome

### What I learned

#### Dynamically generated HTML

In previous projects everything was hardcoded so generating the pokémon cards and using string interpolation to display values that I was getting from the PokéAPI was something new to me. I used creatElement to create the individual cards, then added them with appendChild to the container (one of the few hardcoded HTML elements). 

I also created an object containing all pokémon types with their appropriate color representation. I used this object to match types with colors for each card to create a small border on the bottom.

#### API

This project was my introduction to using APIs and asynchronous Javascript. I'm not a 100% comfortable with this topic just yet, but I was so glad I managed to make it work! It gave me some confidence and I'm motivated to move forward from here.

#### padStart

I used [padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) to style the display of IDs, so each ID has the same length regardless of where the pokémon is on the list, by adding some "dummy" zeros:

````
<span class="poke-id">#${pokemon.id.toString().padStart(3, '0')}</span>
````

The first argument here is the length of the string we'd like, the second is the character we'd like to use to "pad" the existing string to achieve the desired length. So this would transform an ID of #3 to #003, #33 to #033, and so on.

### Work in progress

I plan to add some sort of display that would provide more information about each pokémon (height, weight, moves, etc). I'm still debating what would be the best way to do this (perhaps some sort of modal).

At the moment, there's only one type displayed for each pokémon to make things a bit simpler but I'm meaning to change this.

The search functions at the moment work well separately but when used together, there's a bit of a mess, I'm meaning to fix this, so when you have a pokémon type selected, the searchbar will only search for names from the given list.

CSS wasn't the main focus here (although I still put a lot of effort into making it accessible), so some of the solutions are less than optimal. Once I'm done with the functionality, I'll do a cleanup.
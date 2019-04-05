/*
  Object oriented design is commonly used in video games.  
  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject (attrs){
  this.createdAt = attrs.createdAt;
  this.name = attrs.name;
  this.dimensions = attrs.dimensions;
};
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats (attrs2){
  GameObject.call(this, attrs2) ;
  this.healthPoints = attrs2.healthPoints;
  this.strength = attrs2.strength;
};
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage ${this.strength}.`
};
CharacterStats.prototype.giveDamage = function(){
  return `${this.name} gave damage ${this.strength}.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid (attrs3) {
  CharacterStats.call(this, attrs3)
  this.team = attrs3.team;
  this.weapons = attrs3.weapons;
  this.language = attrs3.language;
};
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`;
};
Humanoid.prototype.attack = function(target){
  target.healthPoints -= 5;
  if (target.healthPoints === 0){
    return target.destroy();
  } else {
  return target.healthPoints;
};
};

// Stretch Goals!

function Hero (attrs4) {
  Humanoid.call(this, attrs4);
  this.title = attrs4.title;
  this.motivation = attrs4.motivation;
  this.saying = attrs4.saying;
};

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.shout = function(){
  return `The ${this.title} ${this.name}, calls out their famous saying: ${this.saying}`;
};
Hero.prototype.motive = function(){
  return `The ${this.title} ${this.name}, calls out their motivation, ${this.motivation}`;
};
Hero.prototype.attack = function(target){
  target.healthPoints -= 10;
  if (target.healthPoints === 0){
    return target.destroy();
  } else {
  return `${target.name} has ${target.healthPoints} hit points left!`;
};
};
Hero.prototype.screech = function(){
  return `${this.name}, the Hero, gave out a loud victory screech over the land at Jabba's defeat!`;
};

function Villain (attrs5) {
  Hero.call(this, attrs5);
  this.evilplan = attrs5.evilplan;
};

Villain.prototype = Object.create(Hero.prototype);
Villain.prototype.cackle = function (){
  return `Forever a villain, foolish and procrastinating, ${this.name} gives their evil plan: ${this.evilplan}!`
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    strength: 5,
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
    strength: 5,
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    strength: 5,
  });

  // Stretch Goals!

  const mweber = new Hero ({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 5,
    },
    healthPoints: 50,
    name: 'Mack',
    team: 'Heroes Guild',
    weapons: [
      'Dragon Scimitar',
      'Dragon Kite-Shield',
    ],
    language: 'l33tsp3@k',
    strength: 10,
    title: 'Ultra Captain-Knight Class Five',
    motivation: "To be the best, like no one ever was!",
    saying: "'I am referencing Runescape and Pokemon in my character!'"
  });

  const jabba = new Villain ({
    createdAt: new Date(),
    dimensions: {
      length: 9,
      width: 9,
      height: 9,
    },
    healthPoints: 50,
    name: 'Jabba the Script',
    team: 'The Bad Crew featuring Jabba',
    weapons: [
      'The Staff of Frustration',
      'The Dagger of False-Euphoria',
    ],
    language: 'c0d3sp3@k',
    strength: 10,
    title: 'Ultra Jerk',
    motivation: "'No truly evil person needs motivation!'",
    saying: "'I want to trick others into not getting references!'",
    evilplan:"'You weren't expecting a Jojo reference, but it was me, Dio!'",
  })

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
 
  // Stretch Tasks!

  // console.log(mweber.createdAt);
  // console.log(mweber.dimensions);
  // console.log(mweber.healthPoints);
  // console.log(mweber.name);
  // console.log(mweber.team);
  // console.log(mweber.weapons);
  // console.log(mweber.title);
  // console.log(mweber.motivation);
  // console.log(mweber.saying);
  // console.log(mweber.greet());
  // console.log(mweber.takeDamage());
  // console.log(mweber.destroy());
  // console.log(mweber.giveDamage());
  // console.log(mweber.shout());
  // console.log(mweber.motive());

  // console.log(jabba.createdAt);
  // console.log(jabba.dimensions);
  // console.log(jabba.healthPoints);
  // console.log(jabba.name);
  // console.log(jabba.team);
  // console.log(jabba.weapons);
  // console.log(jabba.title);
  // console.log(jabba.motivation);
  // console.log(jabba.saying);
  // console.log(jabba.greet());
  // console.log(jabba.takeDamage());
  // console.log(jabba.destroy());
  // console.log(jabba.giveDamage());
  // console.log(jabba.shout());
  // console.log(jabba.motive());
  // console.log(jabba.cackle());

  console.log(mweber.giveDamage(jabba))
  console.log(jabba.takeDamage(mweber));
  console.log(mweber.attack(jabba));
  console.log(jabba.giveDamage(mweber));
  console.log(mweber.takeDamage(jabba));
  console.log(jabba.attack(mweber));
  console.log(mweber.shout());

  console.log(mweber.giveDamage(jabba))
  console.log(jabba.takeDamage(mweber));
  console.log(mweber.attack(jabba));
  console.log(jabba.giveDamage(mweber));
  console.log(mweber.takeDamage(jabba));
  console.log(jabba.attack(mweber));
  console.log(jabba.shout());

  console.log(mweber.giveDamage(jabba))
  console.log(jabba.takeDamage(mweber));
  console.log(mweber.attack(jabba));
  console.log(jabba.giveDamage(mweber));
  console.log(mweber.takeDamage(jabba));
  console.log(jabba.attack(mweber));
  console.log(mweber.motive());

  console.log(mweber.giveDamage(jabba))
  console.log(jabba.takeDamage(mweber));
  console.log(mweber.attack(jabba));
  console.log(jabba.giveDamage(mweber));
  console.log(mweber.takeDamage(jabba));
  console.log(jabba.attack(mweber));
  console.log(jabba.motive());

  console.log(jabba.cackle());
  console.log(mweber.giveDamage(jabba))
  console.log(jabba.takeDamage(mweber));
  console.log(mweber.attack(jabba));
  console.log(mweber.screech());

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
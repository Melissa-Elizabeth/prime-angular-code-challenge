app.controller('AddHeroController', ['HeroFactory', function(HeroFactory){
    console.log('Add Hero Controller loaded');
  var self = this;
 self.heroes = HeroFactory.heroes;
self.superpowers = HeroFactory.superpowers;

 self.addHero = function() {
   HeroFactory.addHero(self.newHero);

 };
}]);

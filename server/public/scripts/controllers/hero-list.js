app.controller('HeroListController', ['HeroFactory', function(HeroFactory){
    console.log('Hero List Controller loaded');
  var self = this;
 self.heroes = HeroFactory.heroes;


 self.deleteHero = function(heroid) {
     HeroFactory.deleteHero(heroid);
   };

   self.updateHero = function(heroid) {
  HeroFactory.updateHero(heroid);
};
}]);

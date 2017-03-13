app.factory('HeroFactory', ['$http', function($http) {


  var heroes ={list: []};


  getHero();

  function getHero() {
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response) {
      console.log(response.data);
      heroes.list = response.data;

    });
  }

  function addHero(newHero) {
    $http({
      method: 'POST',
      url: '/heroes',
      data: newHero
    }).then(function(response){
      console.log(response);
      getHero();
    });
  }

  function deleteHero(heroid) {
    $http({
      method: 'DELETE',
      url: '/heroes/' + heroid,
    }).then(function(response) {
      getHero();
    });
  }

  function updateHero(hero) {
    $http({
      method: 'PUT',
      url: '/heroes/' + heroes.id,
      data: hero
    }).then(function(response) {
      getHero();
    });
  }


  return {
    heroes: heroes,
    getHero: getHero,
    updateHero: updateHero,
    addHero: addHero,
    deleteHero: deleteHero
  };
}]);

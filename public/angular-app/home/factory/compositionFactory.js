angular.module('pirsonal-app').factory('CompositionFactory', CompositionFactory);

function CompositionFactory($http) {

    return {
        post: post
    };

    function post(data){
       return $http({
            method: 'POST',
            url: '/api/composition',
            data: data,
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(complete).catch(failed);
    }

    function complete(reponse){
        return reponse;
    }

    function failed(error){
        console.log(error);
    }
}
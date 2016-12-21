'use strict';

angular
	.module('dolist')// ime modula
	.controller('DolistCtrl', DolistCtrl); // ('ime kontrolera', 'ime funkcije ove dole')

DolistCtrl.$inject = ['$http', 'getDataFactory'] // dipendensi - ImeKontrolera.ubacujemServise = ['ime servisa builtIn', 'imeMogServisa']

function DolistCtrl($http, getDataFactory) {  // kontroler i dependency (getDataFactory je u servisu)
		var vm = this;
		vm.title = "To do lista";  //po papi da bi se izbeglo scope
		vm.subtitle = "Angular primer";  //metode i varijabile
        vm.add = add;
        vm.remove = remove;
    
    
        
    
//funkcija za dodavanje    
function add(id, text) {
        var newPost = {
        id: vm.lists.length+1,
        text: vm.ulaz
        }
        vm.lists.push(newPost);
        vm.ulaz = "";   //cisti formu nakon unosa 
    
        return get(newPost).then(function(){});
    
        function get(newPost) {
            return getDataFactory.postData(newPost).then(function(response){})
        }     
}
    

  
//funkcija za brisanje    
function remove(index, id) {
    vm.lists.splice(index, 1);
    
    return get(id).then(function(){});   
       function get(id) {
          return getDataFactory.deleteData(id).then(function(response){})
       }     
}   
    
    
getData();     //poziva funkciju
    
function getData(){ //funkcija ImeFunkcije(){ return - vraca podatke koje dobije iz get funkcije.then(dobijem response od backenda)}
    return get().then(function(){});
            
    function get(){
        return getDataFactory.getData().then(function(response){  // ovde pozivam servis getdataFactory sa metodom getData, i tu dobijam podatke od backenda
                vm.lists = response.data;    // ovde dobijam podatke
                return vm.lists;  //vraca varijablu
         })
    }
};
      
}

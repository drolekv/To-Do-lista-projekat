'use strict';

angular
    .module('dolist')
    .factory('getDataFactory', getDataFactory);    //ime servisa

function getDataFactory($http){    //servis
        return {
            getData: getData,   //metode
            postData: postData,
            deleteData: deleteData
        
};

    
    
//servis za get    
function getData() {      //instanciranje metode
        return	$http.get("http://192.168.166.30:8080/ToDoList/api-v1/todolist/0") // get marko
                .then(success)    //uspesno
                .catch(failed);  //neuspesno
               
    
        function success(response){  // funkcija za uspesno
             return response;
        }
    
        function failed(response){   //funkcija za neuspesno
           // console.log(response);
            return response;
        }
   
}
  
    
//servis za post    
    function postData(data) {
     	return	$http.post("http://192.168.166.30:8080/ToDoList/api-v1/todolist", data)
                .then(success)
                .catch(failed);
    
    function success(response){
        return response;
    }
    
    function failed(response){
        return alert(response);
    }
}
    
    
//servis za delete    
    function deleteData(id) {
     	return	$http.delete("http://192.168.166.30:8080/ToDoList/api-v1/todolist/listitem/"+id)
                .then(success)
                .catch(failed);
    
    function success(response){
        return response;
    }
    
    function failed(response){
        return response;
    }
}    
    
    
};


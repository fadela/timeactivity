
var $ = require('jquery');


module.exports= {
    setTodos (todos){
        if($.isArray(todos)) {

           localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos (){
        let stringTodos =localStorage.getItem('todos');
        let todos = [] ;
        

        try{
           let todos = JSON.parse(stringTodos);
        }
        catch(e){

        }

        return $.isArray(todos) ? todos : [] ;
    },
    filterTodos(todos, showCompleted, searchText) {
        let filteredTodos =  todos;

        // Filter by showCompleted
          
        // Filter by searchText

        // Sort todos with non-completed first
        return filteredTodos;
    }
};
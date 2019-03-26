
var $ = require('jquery');


module.exports= {
    setTodos (todos){
        if($.isArray(todos)) {

            {/* json.stringify conver an object or array to the string
            because the locale storage just store the srtrings  */}

            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos (){
        let stringTodos = localStorage.getItem('todos');
        let todos = [] ;

        try{
            todos = JSON.parse(stringTodos);
        }
        catch(e){

        }

        return $.isArray(todos) ? todos : [] ;
    }
};
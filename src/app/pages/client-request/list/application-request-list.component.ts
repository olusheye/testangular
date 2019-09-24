interface ITodo {
  addTodo(todo: string): void;
  removeTodo(todo: string): void;
  showTodo(): void;
}
export class Todo implements ITodo {
  todoList: string[];
  addTodo(todo: string) {
    this.todoList.push(todo);
  }
  showTodo() {}
  removeTodo(todo: string) {
    const todoIndex = this.todoList.indexOf(todo);
    this.todoList.splice(todoIndex, 1);
  }
}


////////////////////////////////
//Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5

function sum(num1, num2) {
	var isValidInput = validate(num1, num2);
	if (!isValidInput) {
		return 0;
	}
	if (num2 !== undefined) {
		return num1 + num2;
	} else {
		return function(num2) {
			return num1 + num2;
		};
	}
}
function validate(num1, num2) {
	return true;
}
console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5

/////////////////////////////
//What is <router-outlet> for?

//What are decorators in angular 2?

//How do you define optional fields in a TypeScript class?

//What are the interfaces in Typescript?

console.log("Task manager loaded");

class Task {
	static lastId = 0;
	#id; // private
	constructor(title) {
		this.title = title;
		this.#id = ++Task.lastId;
		this.completed = false;
	}
	// getter for id
	get id() {
		return this.#id;
	}
	toggleComplete() {
		this.completed = !this.completed;
	}
}

class TaskList {
	constructor() {
		this.tasks = [];
	}
	addTask(title) {
		let newTask = new Task(title);
		this.tasks.push(newTask);
	}
	deleteTask(id) {
		this.tasks = this.tasks.filter(task => task.id !== id);
	}
	toggleTask(id) {
		const taskToToggle = this.tasks.find(task => task.id === id);
		taskToToggle.toggleComplete();
	}
	getTasks() {
		return this.tasks;
	}
	saveToLocalStorage() {
	  localStorage.setItem("tasks", this.tasks)
	}
	loadFromLocalStorage() {
	  this.items = localStorage.getItem("tasks")
	}
}

const list1 = new TaskList();
console.log(list1.tasks);
list1.addTask("hooi");
list1.addTask("ho");
console.log(list1.tasks);
console.log(list1.tasks);
list1.toggleTask(2);
console.log(list1.getTasks());
list1.saveToLocalStorage()
console.log('localStorage: ',localStorage.tasks)
list1.deleteTask

// ===========================
// Шаг 3: Работа с DOM
// ===========================
// Получить элементы:
// - форму добавления задачи
// - input с текстом
// - список задач (ul)

// Добавить обработчик события submit:
// - предотвратить перезагрузку
// - взять значение input
// - вызвать addTask()
// - обновить отображение списка

// Добавить функцию renderTasks():
// - очистить список
// - пройтись по всем задачам и создать li с кнопками
// - добавить класс completed, если задача завершена
// - добавить кнопки для удаления и переключения completed

// Повесить события на кнопки удаления и переключения

// ===========================
// Шаг 4: Инициализация
// ===========================
// Создать экземпляр TaskList
// Загрузить задачи из localStorage
// Отрендерить их

// Готово!

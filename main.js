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

const task1 = new Task("new task");

// ===========================
// Шаг 2: Класс TaskList
// ===========================
// Создать класс TaskList, который управляет массивом задач:
// - tasks (массив объектов Task)

// Методы:
// - addTask(title): создаёт и добавляет новую задачу
// - removeTask(id): удаляет задачу по id
// - toggleTask(id): переключает completed у задачи
// - getTasks(): возвращает текущий список задач
// - saveToLocalStorage(): сохраняет задачи в localStorage
// - loadFromLocalStorage(): загружает задачи из

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
}

const list1 = new TaskList();
console.log(list1.tasks);
list1.addTask("hooi");
list1.addTask("ho");
console.log(list1.tasks);
list1.deleteTask(3);
console.log(list1.tasks);
list1.toggleTask(2);
console.log(list1.getTasks());

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

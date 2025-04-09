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
	saveToLocalStorage() {
		// must use stringify while work with localStorage
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
	}
	loadFromLocalStorage() {
		// must use parse while get inf from localStorage
		const data = localStorage.getItem("tasks");
		if (data) {
			const parsed = JSON.parse(data);
			this.tasks = parsed.map(t => new Task(t.title));
		}
	}
}

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

const list1 = new TaskList();

function renderTasks() {
	taskList.innerHTML = ""; // clean ul
	list1.tasks.forEach(task => {
		const li = document.createElement("li");
		li.textContent = task.title;
		taskList.appendChild(li);
	});
}

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const formData = new FormData(form);
	const taskName = formData.get("task-name"); // use input's name in get
	if (taskName.trim() !== "") {
		list1.addTask(taskName);
	}
	form.reset();
	renderTasks();
});

// ===========================
// Шаг 3: Работа с DOM
// ===========================

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

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
	// FIXME: Issue_1 on load for each task from local storage create new Task. Every new Task gots new ID. It means that IDs wont be saved correctly. For example user adds 3 tasks. The last one have #id: 3. User deletes the second task. It's update local storage. Now in localStorage only 2 tasks and after window reload task that had #id: 3 will get #id:2. See review.md
	loadFromLocalStorage() {
		// must use parse while get inf from localStorage
		const data = localStorage.getItem("tasks");
		if (data) {
			const parsed = JSON.parse(data);
			this.tasks = parsed.map(t => {
				const task = new Task(t.title);
				// if task status was completed, set it completed
				if (t.completed) task.completed = true;
				return task;
			});
		}
	}
}

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

const list1 = new TaskList();
list1.loadFromLocalStorage();
renderTasks();
console.log(list1);

// FIXME: Issue_2 Full rerendering on each action not good practice at all. It's will be better to update only specific element.
function renderTasks() {
	taskList.innerHTML = ""; // clean ul
	list1.tasks.forEach(task => {
		const li = document.createElement("li");
		li.textContent = task.title;
		// delete btn
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "delete";
		deleteBtn.addEventListener("click", function (e) {
			e.preventDefault();
			list1.deleteTask(task.id);
			renderTasks();
		});
		li.appendChild(deleteBtn);
		// toggle task status
		const toggleStatusBtn = document.createElement("button");
		toggleStatusBtn.textContent = "done";
		if (task.completed) toggleStatusBtn.classList.add("done");
		toggleStatusBtn.addEventListener("click", function (e) {
			e.preventDefault();
			list1.toggleTask(task.id);
			// FIXME: Issue_3 in this realisation toggling class here is excessive(избыточно). renderTasks() will rerender all list and logic in if(task.completed) will set the right class
			this.classList.toggle("done");
			renderTasks();
		});
		li.appendChild(toggleStatusBtn);
		taskList.appendChild(li);
		// FIXME: Issue_4 I am saving tasks to localStorage inside forEach loop in render function. It means that if 10 tasks will be rendered it will save be 10 times to localStorage. For each rendered task.
		list1.saveToLocalStorage();
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

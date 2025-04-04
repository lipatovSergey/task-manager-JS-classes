console.log("Task manager loaded");
// ===========================
// Шаг 1: Класс Task
// ===========================
// Создать класс Task с полями:
// - id (уникальный идентификатор)
// - title (название задачи)
// - completed (булевое значение выполнена или нет)

class Task {
  static lastId = 0;
  #id // private
  constructor(title) {
    this.title = title
    this.#id = ++Task.lastId
    this.completed = false
  }
  // getter for id
  get id() {
    return this.#id
  }
  toggleComplete() {
    this.completed = !this.completed
  }
}

const task1 = new Task("new task")

const task2 = new Task("task2")
console.log(task2)
task2.toggleComplete()
console.log(task2)

// Добавить метод toggleComplete() для смены состояния completed

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
// - loadFromLocalStorage(): загружает задачи из localStorage

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

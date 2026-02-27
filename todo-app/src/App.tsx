import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import './App.css';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    activeCount,
    completedCount,
    totalCount,
  } = useTodos();

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">TODO</h1>
          <p className="app-subtitle">タスクを管理しましょう</p>
        </header>

        <main className="todo-card">
          <TodoInput onAdd={addTodo} />

          {totalCount > 0 ? (
            <>
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
              <TodoFilter
                filter={filter}
                onFilterChange={setFilter}
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={clearCompleted}
              />
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <p>タスクを追加してみましょう！</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

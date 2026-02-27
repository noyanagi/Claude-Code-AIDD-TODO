import type { FilterType } from '../types';

interface Props {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了済み' },
];

export function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: Props) {
  return (
    <div className="todo-footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> 件残り
      </span>

      <div className="filter-btns">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`filter-btn ${filter === f.value ? 'active' : ''}`}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <button
        className="clear-btn"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
      >
        完了を削除
      </button>
    </div>
  );
}

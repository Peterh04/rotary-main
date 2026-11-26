import "../styles/FilterChips.css";

/** Row of toggle buttons for filtering a list. Controlled: pass `value` and `onChange`. */
export default function FilterChips({
  options,
  value,
  onChange,
  label = "Filter",
}) {
  return (
    <div className="filter-chips" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className="filter-chips__chip"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function ScienceFilter({ onFilterChange }) {
  return (
    <section>
      <button
        type="button"
        aria-label="filter category all"
        onClick={() => onFilterChange("All")}
      >
        All
      </button>
      <button
        type="button"
        aria-label="filter category neurology"
        onClick={() => onFilterChange("Neurology")}
      >
        Neurology
      </button>
      <button
        type="button"
        aria-label="filter category psychology"
        onClick={() => onFilterChange("Psychology")}
      >
        Psychology
      </button>
      <button
        type="button"
        aria-label="filter category clinical research"
        onClick={() => onFilterChange("Clinical Research")}
      >
        Clinical Research
      </button>
    </section>
  );
}

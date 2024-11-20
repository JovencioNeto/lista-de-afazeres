import styles from './styles.module.css'

export default function Filter({ filter, setFilter, setSort }) {
  return (
    <div className={styles.filter}>
      <h2>Filtrar:</h2>
      <div className={styles.filterOptions}>
        <p>Status:</p>
        <select
          name="select-filter"
          id="select-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incompletas</option>
        </select>
      </div>
      <div>
        <p>Ordem alfabética:</p>
        <button onClick={() => setSort("Asc")} className={styles.ascButton}>Cresc</button>
        <button onClick={() => setSort("Desc")} className={styles.descButton}>Descresc</button>
      </div>
    </div>
  )
}

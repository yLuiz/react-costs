import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      
      <label htmlFor={name}>{text}</label>

      <select 
        name={name} 
        id={name} 
        onChange={handleOnChange} 
        value={value || ''}
      >
        <option selected /*disabled*/>
          Seleciona uma opção
        </option>

        <option value={1} key={1}>
          Infra
        </option>

        <option value={2} key={2}>
          Desenvolvimento
        </option>

        <option value={3} key={3}>
          Design
        </option>

        <option value={4} key={4}>
          Planejamento
        </option>

        {options.map(option => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

export function Input ({ id, name, type = 'text', textLabel, placeholder = '' }: { id: string, name: string, type?: string, textLabel: string, placeholder?: string }) {
  return (
    <fieldset>
        <label htmlFor={id}>{textLabel}</label>
        <input
          className="block w-full px-1 py-0.5 rounded"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
        />
    </fieldset>
  )
}

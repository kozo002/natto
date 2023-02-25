type Props = {
  type?: 'text'
  name: string
  value?: string
  placeholder?: string
}
export function Input(props: Props) {
  return (
    <input
      type={props.type ?? 'text'}
      name={props.name}
      className="rounded border border-gray-400 py-2 px-3 w-full"
      value={props.value}
      placeholder={props.placeholder}
    />
  )
}
import type { ReactNode } from 'react'
type Props = {
  name?: string
  children: ReactNode
}
export function Label(props: Props) {
  return (
    <label
      htmlFor={props.name}
      className="font-bold text-sm"
    >
      {props.children}
    </label>
  )
}
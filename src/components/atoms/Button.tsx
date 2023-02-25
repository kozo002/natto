import type { ReactNode } from 'react'

type Props = {
  type?: 'submit' | 'button'
  variant: 'primary' | 'secondary'
  children: ReactNode
  onClick?: () => void
}
export function Button(props: Props) {
  return (
    <button
      type={props.type || 'button'}
      className={`btn-${props.variant}`}
      onClick={() => props.onClick?.()}
    >
      {props.children}
    </button>
  )
}

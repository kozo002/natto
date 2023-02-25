import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function FormGroup(props: Props) {
  return (
    <div className="flex flex-col gap-y-2">
      {props.children}
      <hr className="mt-2" />
    </div>
  )
}

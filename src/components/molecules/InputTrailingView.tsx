import type { ReactNode, ReactElement } from 'react'

type Props = {
  input: ReactElement
  children: ReactNode
}
export function InputTrailingView(props: Props) {
  return (
    <div className="flex gap-x-2">
      <div className="flex-grow">
        {props.input}
      </div>
      <div className="">
        {props.children}
      </div>
    </div>
  )
}
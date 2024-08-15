import { InputHTMLAttributes, ReactNode } from 'react'

interface IInputWithActionButton extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'md' | 'lg'
  button: {
    label: string
    icon: ReactNode
    theme: 'btn-primary' | 'btn-secondary' | 'btn-accent'
  }
}

export default function InputWithActionButton({
  button,
  ...props
}: IInputWithActionButton) {
  return (
    <label
      className={`input input-sm contents sm:flex sm:input-md input-bordered justify-between items-center pr-0 sm:pr-0`}
    >
      <input {...props} type="text" />
      <button className={`btn btn-sm sm:btn-md ${button.theme} `} type="submit">
        {button.label}
        <div className="hidden sm:block"> {button.icon}</div>
      </button>
    </label>
  )
}

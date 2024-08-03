import { InputHTMLAttributes } from 'react'

interface IInputWithActionButton extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'md' | 'lg'
  button: {
    label: string
    icon: React.SVGProps<SVGSVGElement>
    theme: 'btn-primary' | 'btn-secondary' | 'btn-accent'
  }
}

export default function InputWithActionButton({
  button,
  inputSize = 'md',
  ...props
}: IInputWithActionButton) {
  console.log(props)
  return (
    <label
      className={`input input-${inputSize} input-bordered flex justify-between items-center pr-0`}
    >
      <input {...props} type="text" />
      <button
        className={`btn btn-${inputSize} ${button.theme} h-full w-auto`}
        type="submit"
      >
        {button.label}
        {button.icon}
      </button>
    </label>
  )
}

import React from "react"

interface ButtonProps {
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  const defaultClassName =
    "bg-black text-white py-2 px-9 rounded-full text-sm font-bold leading-7 cursor-pointer hover:bg-galactic-blue"
  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

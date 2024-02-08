import React, { ReactNode } from "react"

interface CardProps {
  className?: string
  children: ReactNode
  title: string
}

const Card: React.FC<CardProps> = ({ className, children, title }) => {
  return (
    <div className={`flex flex-col rounded-lg p-6 text-white ${className}`}>
      <div className="ml-auto">{children}</div>
      <h2 className="text-2xl font-bold leading-normal">{title}</h2>
    </div>
  )
}

export default Card

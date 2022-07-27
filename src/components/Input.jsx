import React from 'react'

const Input = ({
  type,
  value,
  name,
  title,
  cy,
  action,
  label,
  className
}) => {
  return (
    <div className={className}>
      <span>{label}</span>
        <input 
          type={type}
          value={value}
          name={name}
          title={title}
          data-cy={cy}
          onChange={(e) => action(e.target)}
      />
    </div>
  )
}

export default Input
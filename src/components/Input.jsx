import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "", // by default ise khali lete hai aur niche hum reference b pass krege
    ...props
}, ref){
    const id = useId()
    return (
      <div className="w-full">
        {label && (
          <label // agr kisi ne label pass kiya hai to - meaning of &&
            className="inline-block mb-1 pl-1"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 duration-200 border-2 border-black  w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
})

export default Input
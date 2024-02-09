import React from 'react'

const TextRender = ({title, content}) => {
  return (
    <div className="text-2xl ">
            <h4>{title}</h4>
            <p className="border border-[#A9A9A9] rounded-[10px] py-4 pl-8 ">{content}</p>
          </div>
  )
}

export default TextRender
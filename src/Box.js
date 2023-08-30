import React from 'react'

const Box = ({color,hex,textColor}) => {
  return (
    <div className='box'
      style={
        {backgroundColor:color, 
        color:textColor ? "#000" : "#FFF"}}
    >
      <p>{color ? color : "Empty value"}</p>
      <p className='secondText'>{hex ? hex : null}</p>
    </div>
  )
}
Box.defaultProps={
  color:"Empty Color Value"
}
export default Box
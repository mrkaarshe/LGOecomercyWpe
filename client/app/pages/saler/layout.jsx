import React from 'react'
import Saler from  '../../../components/Saler'
 const layout = ({children}) => {
  return (
    <div className=' max-h-[90vh] overflow-hidden flex'>
        <Saler/>
        {children}
    </div>
  )
}
export default layout

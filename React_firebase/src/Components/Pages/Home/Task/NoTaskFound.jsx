import React from 'react'
import { SlNote } from "react-icons/sl";

const NoTaskFound = () => {
  return (
   <>
   <section className="sections">
           <div ><h3 className="flex items-center gap-4 text-white font-bold text-xl ">No task found <span><SlNote  /></span> </h3></div>
   </section>
   </>
  )
}

export default NoTaskFound
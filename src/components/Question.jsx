import React, { useState } from 'react'

export default function Question({object}) {

    const {id,title,info} = object; //destructuring the props object
    const [isToggled,setIsToggled] = useState(false);

    function toggle(){
        setIsToggled(prev => !prev); //negation of previous value alternates it
    }

  return (
        <div class="question">
            <header>
                <h3>{title}</h3>
                <button onClick={toggle} class="btn">{isToggled ? '-' : '+'}</button>
            </header>
            <p className={isToggled && `new-p`}>{isToggled && info}</p>
        </div>
  )
}

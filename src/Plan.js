import React from 'react'
function Plan(props)
{
    return(
        <React.Fragment>
           <li className='shadow p-2 my-2 col-sm-9'>{props.value}</li>
           <button className="btn btn-danger offset-1 my-2 col-sm-2" onClick={()=>{
            props.sendData(props.id)
           }}>X</button>
        </React.Fragment>
    )
}
export default Plan;
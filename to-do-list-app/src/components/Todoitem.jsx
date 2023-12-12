import React from 'react'
export default class TodoItem extends React.Component{

    render (){
        console.log(this.props)
        let {e,i, updateItem, deleteI} = this.props
        return (
            <div key={i}>
            <input type="text" value={e} onChange={(event)=>{
                updateItem(event.target.value, i)
            }}/>
            <button style={{
                backgroundColor:"red"
            }} onClick={()=>{
                deleteI(i)
            }}>Delete</button>
            </div>
        )
    }

}
import React, { Component } from 'react'
import './App.css';
import Plan from './Plan.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class App extends Component {
  state={
    item:[],
    text:""
  }
  handleChange=(e)=>{
    this.setState({text:e.target.value})
  }
  handleAdd=(e)=>{
    if(this.state.text !=="")
    {
      const items=[...this.state.item, this.state.text]
      this.setState({item:items,text:""});
    }
  }
  handleDelete=(id)=>{
    console.log("delete",id)
    const Olditems=[...this.state.item];
    console.log("Olditems",Olditems);
    const items=Olditems.filter((element,i)=>{
      return i !==id;
    })
    this.setState({item:items})
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center">Today's Plan</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control" placeholder="Write Plan Here"
                value={this.state.value} onChange={this.handleChange}/>
              </div>
              <div className='col-2'>
                <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className='list-unstyled row m-5'>
                  {
                    this.state.item.map((value,i)=>{
                      return(<Plan key={i} id={i} value={value} sendData={this.handleDelete}/>)
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

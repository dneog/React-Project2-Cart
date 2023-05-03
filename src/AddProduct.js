import React from 'react'
import './AddProduct.css'
const AddProduct = ({tasks, setTasks}) => {
  function submitHandler(event){
    event.preventDefault();

    const newItems = {
      name : event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
      l : event.target.l.value,
      m: event.target.m.value,
      s: event.target.s.value
    }
    setTasks([...tasks, newItems])
  }

  return (
    <div className='bg' >
        <form onSubmit={submitHandler}>
           
            <label htmlFor="">Shoe Name</label>
            <input type="text" name="name" id="" />

            <label htmlFor="">Description</label>
            <input type="text" name="description" id="" />

            <label htmlFor="">Price</label>
            <input type="number" name="price" id="" />

            <div >
           <div className='available'>
            <p className=''>Quantity Available</p>
            </div>
            <div className='quantity'>
           
           
           
              <div>
              <p>L</p>
              <input  type="number" name='l' />
              </div>
              <div>
              <p>M</p>
              <input type="number" name='m' />
              </div>
              <div>
              <p>S</p>
              <input  type="number" name='s'/>
              </div>
              </div>

            </div>
            <button className='btn' type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct
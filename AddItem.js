import React from 'react'
import { FaPlus} from 'react-icons/fa'

const AddItem = (newItem,setNewItem,handleSubmit) => {
  return (
      <form className='addform' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
        id="addItem"
        type="text"
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
         /><button 
         type='submit'
         >
            <FaPlus/> 
            </button>
           
      </form>  
  )
}

export default AddItem
import React, { useEffect, useState } from "react";
 //import { BrowserRouter,Routes,Route } from "react-router-dom";
//import {useEffect, useState } from 'react'
 import Header from "./Header.js";
 import Content from "./content.js";
 import Footer from './Footer.js';
 import AddItem from "./AddItem.js";
import SearchItem from "./SearchItem.js";
import './App.css';
import axios from "axios";


function App() {

  const  [item, setItems] = useState( []);


  const [SetSearch,SearchItem] =useState('')

   const [newItem,setNewItem] =useState('')

   useEffect(()=>{
    JSON.parse(localStorage.getItem('todoList'))
  },[])

   const addItem =(item) =>{
    const id =item.length ?item[item.length-1].id+1 : 1; 

     const addNewItem ={id,checked:false, item}
     const listItems =[...item,addNewItem]
     setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))

    }
    const handleCheck = (id) =>{
      const listItems =  item.map((item) => item
     .id===id ? {...item, checked:!item.checked} : item)
     setItems(listItems)
     localStorage.setItem("todo_list",JSON.stringify(listItems))

   }
    const handleDelete = (id) =>{
    const listItems = item.filter((item) =>
    item.id !== id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
   } 

 const handleSubmit =(e)=>{
   e.preventDefault()
   console.log("submitted");
   if(!newItem) return;
   console.log(newItem);
   addItem(newItem)
   setNewItem('')
 }
 const SearchResult =()=>{
   ItemsList.filter((i)=>item.toLowercase().includes(Search.toLowercase))
 }
 
    return(
   
    
     <div className='App'>
         <Header title ="haikyu"  />
         <AddItem
         newItem ={newItem}
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}/>
         <SearchItem
         Search={SearchItem}
         SetSearch ={SetSearch}
         />
         <Content 
         item ={item.filter(item=>((item.item).toLowercase()).include(SearchItem.toLowercase()))}
         handleCheck ={handleCheck}
         handleDelete ={handleDelete}
         />
        
         <Footer />
         length ={item.length}
       </div>
  
  );
 }
 export default App;
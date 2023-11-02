import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const[bookmarks,setBookMarks]=useState([]);
  const[readingTime,setReadingTime]=useState(0)

  const addToBookmarks=(blog)=>{
  const newBookmarks=[...bookmarks,blog];
  setBookMarks(newBookmarks)

  }
  const handleMarkAsRead=(time,id)=>{
    setReadingTime(readingTime+time)
    //remove reading items
    const removeReading=bookmarks.filter(bookmark=>bookmark.id!=id);
    setBookMarks(removeReading)

  }
 

  return (
    <>
    
      <div>
        <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs addToBookmarks={addToBookmarks}  handleMarkAsRead={ handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
       
        
      </div>
    </>
  )
}

export default App

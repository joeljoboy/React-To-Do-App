"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler =(e)=>
  {
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i)=>
  {
    let copyt=[...mainTask];
    copyt.splice(i,1)
    setmainTask(copyt)
  }


  let renderTask = <h2>No Task Available</h2> 


  if(mainTask.length>0)
  {
    renderTask = mainTask.map((t,i)=>
  {
    return (
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button onClick={()=>
      {
        deleteHandler(i)
      }} className='bg-red-400 text-white px-4 py-2 font-bold rounded-md'>Delete</button>
      </li>
    );
  });
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
      Joe's To-do List
    </h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-zinc-600 border-4 rounded-lg m-8 px-4 py-2 ' placeholder='Enter Task here'
      value={title}
      onChange={(e)=>
      {
        setTitle(e.target.value)
      }}
      />

      <input type='text' className='text-2xl border-zinc-600 border-4 rounded-lg m-8 px-4 py-2 ' placeholder='Enter Description here'
      value={desc}
      onChange={(e)=>
      {
        setDesc(e.target.value)
      }}
      />

      <button className='bg-black text-white rounded-full m-5 px-4 py-3 text-2xl font-bold'>Add Task</button>
    </form>

    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
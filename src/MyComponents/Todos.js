import React, { useState } from 'react'
import Todo from './Todo'

export default function Todos(props) {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const addTask =() =>{
        if(!title || !desc){
            alert('title or description cannot be empty!')
        }else{
            props.addtodo(title, desc)
        }
    }

    return (
        <div>
            <div className="mx-auto my-8 max-w-lg rounded-lg bg-white shadow-lg">
                <h1 className="bg-gray-200 py-4 text-center text-2xl font-bold text-gray-800">
                    Todo App
                </h1>
                <div className="p-4">
                    <div className="w-full max-w-md">
                        <form>
                            <div className="mb-6 flex flex-wrap">
                                <div className="w-full px-3">
                                    <label
                                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                        htmlFor="grid-title"
                                    >
                                        {" "}
                                        Title{" "}
                                    </label>
                                    <input
                                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                        id="grid-title"
                                        type="text"
                                        placeholder="Task Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-6 flex flex-wrap">
                                <div className="w-full px-3">
                                    <label
                                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                        htmlFor="grid-description"
                                        
                                    >
                                        {" "}
                                        Description{" "}
                                    </label>
                                    <textarea
                                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                        id="grid-description"
                                        placeholder="Task Description"
                                        defaultValue={""}
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <div className="w-full px-3">
                                    <button
                                        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                        type="button"
                                        onClick={addTask}
                                    >
                                        Add Task
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <ul className="divide-y"></ul>
                    {props.todo.map(e => <Todo todo={e} key={e.sno} onEdit={props.onEdit} onDelete={props.onDelete} />)}
                </div>
            </div>

        </div>
    )
}

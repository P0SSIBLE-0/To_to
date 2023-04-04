import React from 'react'

export default function Todo({ todo , onDelete, onEdit}) {
    return (
        <div>
            {todo.length<0 ? <p className="text-gray-800 font-550">Add todo...</p>: ''}
            <li className="py-4 list-none">
                <div className="flex justify-between">
                    <div style={{ textAlign: 'start'}}>
                    <p className="text-gray-800 font-550">{todo.title}</p>
                    <p className="text-gray-500 font-550">{todo.desc}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            className="focus:shadow-outline rounded bg-yellow-500 px-2 py-1 text-white hover:bg-yellow-700 focus:outline-none"
                            type="button"
                            onClick={() => {
                                let newTitle = prompt('Enter New Title: ');
                                let desc = prompt('Enter Description: ');
                                onEdit(todo.sno,newTitle, desc)
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className="focus:shadow-outline rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700 focus:outline-none"
                            type="button"
                            onClick={() => {onDelete(todo)}}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </li>
            <hr/>
        </div>
    )
}

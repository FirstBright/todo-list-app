import { ChangeEvent, Fragment, useState } from "react"
import { ToDo } from "./todo"

export interface IToDo {
    idx: number
    check: boolean
    title: string
    status: "must" | "should" | "could" | "if"
}

export function TodoList() {
    const [searchDate, setSearchDate] = useState("")
    const [todos, setTodos] = useState<IToDo[]>([
        {
            idx: 0,
            check: false,
            title: "exxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            status: "must",
        },
        { idx: 1, check: false, title: "exxxxxxxxxxx", status: "should" },
    ])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchDate(e.currentTarget.value)
    }

    return (
        <>
            <div className='w-full flex justify-center'>
                <div
                    className='w-full max-w-5xl m-4 p-4 rounded-lg bg-white
                shadow-lg shadow-gray-300 flex flex-col gap-4'
                >
                    <div className='flex justify-evenly items-center'>
                        <p className='font-serif text-6xl'>To Do LIST</p>
                        <div className='flex items-center bg-blue-300 rounded-md p-1'>
                            <div className='flex '>
                                <p className='mt-1 ml-2 mr-2 font-serif'>
                                    DATE :
                                </p>
                                <input
                                    className='bg-blue-300 rounded-md p-1 font-serif'
                                    type='text'
                                    value={searchDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div className='flex'>
                            {todos
                                .filter((todo) => todo.title.match(searchDate))
                                .filter((todo) => todo.status.match("must"))
                                .map((todo) => (
                                    <Fragment key={todo.idx}>
                                        <ToDo todo={todo} />
                                    </Fragment>
                                ))}
                        </div>
                        <div className='flex'>
                            {todos
                                .filter((todo) => todo.title.match(searchDate))
                                .filter((todo) => todo.status.match("should"))
                                .map((todo) => (
                                    <Fragment key={todo.idx}>
                                        <ToDo todo={todo} />
                                    </Fragment>
                                ))}
                        </div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div className='flex'>
                            {todos
                                .filter((todo) => todo.title.match(searchDate))
                                .filter((todo) => todo.status.match("could"))
                                .map((todo) => (
                                    <Fragment key={todo.idx}>
                                        <ToDo todo={todo} />
                                    </Fragment>
                                ))}
                        </div>
                        <div className='flex'>
                            {todos
                                .filter((todo) => todo.title.match(searchDate))
                                .filter((todo) => todo.status.match("if"))
                                .map((todo) => (
                                    <Fragment key={todo.idx}>
                                        <ToDo todo={todo} />
                                    </Fragment>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

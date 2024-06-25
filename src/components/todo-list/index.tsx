import { ChangeEvent, Fragment, useState } from "react"
import { ToDo } from "./todo"

export interface IToDo {
    checks: boolean[]
    titles: string[]
    status: "must" | "should" | "could" | "if"
}

export function TodoList() {
    const [search, setSearch] = useState("")
    const [todos, setTodos] = useState<IToDo[]>([
        {
            checks: [true, false, false, false, false, false],
            titles: ["밑줄을 클릭해서 편집하세요", "", "", "", "", ""],
            status: "must",
        },
        {
            checks: [true, false, false, false, false, false],
            titles: ["체크박스를 사용하세요", "", "", "", "", ""],
            status: "should",
        },
        {
            checks: [false, false, false, false, false, false],
            titles: ["", "", "", "", "", ""],
            status: "could",
        },
        {
            checks: [false, false, false, false, false, false],
            titles: ["", "", "", "", "", ""],
            status: "if",
        },
    ])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const handleCheckChange = (
        status: string,
        index: number,
        check: boolean
    ) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.status === status
                    ? {
                          ...todo,
                          checks: todo.checks.map((c, i) =>
                              i === index ? check : c
                          ),
                      }
                    : todo
            )
        )
    }

    const handleTitleChange = (
        status: string,
        index: number,
        title: string
    ) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.status === status
                    ? {
                          ...todo,
                          titles: todo.titles.map((t, i) =>
                              i === index ? title : t
                          ),
                      }
                    : todo
            )
        )
    }
    const filteredTodos = todos.filter((todo) =>
        todo.titles.some((title) => title.match(search))
    )

    return (
        <>
            <div className='w-full h-full flex justify-center'>
                <div
                    className='w-full max-w-5xl m-4 p-4 rounded-lg bg-white
                shadow-lg shadow-gray-300 flex flex-col gap-4'
                >
                    <div className='flex justify-evenly items-center g-20 header mb-5'>
                        <p className='font-serif text-6xl headerText'>
                            To Do LIST
                        </p>
                        <div className='flex items-center bg-blue-300 rounded-md p-1'>
                            <div className='flex searchContainer'>
                                <p className='mt-1 ml-2 mr-2 font-serif'>
                                    Search :
                                </p>
                                <input
                                    className='bg-blue-300 rounded-md p-1 font-serif'
                                    type='text'
                                    value={search}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`flex flex-wrap justify-center gap-12 ${
                            filteredTodos.length === 1
                                ? "w-full h-screen items-center"
                                : ""
                        }`}
                    >
                        {filteredTodos.map((todo) => (
                            <Fragment key={todo.status}>
                                <ToDo
                                    todo={todo}
                                    onCheckChange={handleCheckChange}
                                    onTitleChange={handleTitleChange}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

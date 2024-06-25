import { useState } from "react"
import { IToDo } from "."

interface IProps {
    todo: IToDo
    onCheckChange: (status: string, index: number, check: boolean) => void
    onTitleChange: (status: string, index: number, title: string) => void
}

export function ToDo({ todo, onCheckChange, onTitleChange }: IProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const [newTitle, setNewTitle] = useState("")

    const setTitle = (state: string) => {
        switch (state) {
            case "must":
                return "MUST DO"
            case "should":
                return "SHOULD DO"
            case "could":
                return "COULD DO"
            case "if":
                return "IF I HAVE TIME"
            default:
                return ""
        }
    }

    const getBackgroundColor = (state: string) => {
        switch (state) {
            case "must":
                return "bg-pink-200"
            case "should":
                return "bg-yellow-200"
            case "could":
                return "bg-blue-200"
            case "if":
                return "bg-purple-200"
            default:
                return "bg-gray-200"
        }
    }

    const handleTitleChange = () => {
        onTitleChange(todo.status, currentTitleIndex, newTitle)
        setIsModalOpen(false)
    }
    const handleTitleRemove = () => {
        onTitleChange(todo.status, currentTitleIndex, "")
        setIsModalOpen(false)
    }

    const makeToDoPage = () =>
        todo.titles.map((title, index) => (
            <div
                className='flex justify-start items-center gap-x-3 '
                key={index}
            >
                <input
                    type='checkbox'
                    checked={todo.checks[index]}
                    onChange={(e) =>
                        onCheckChange(todo.status, index, e.target.checked)
                    }
                />
                <button
                    onClick={() => {
                        setCurrentTitleIndex(index)
                        setNewTitle(title)
                        setIsModalOpen(true)
                    }}
                >
                    {title || (
                        <span className='underline'>
                            _____________________________________
                        </span>
                    )}
                </button>
            </div>
        ))

    return (
        <>
            <div
                className={`p-4 rounded-md w-80 ${getBackgroundColor(
                    todo.status
                )} flex flex-col`}
            >
                <p className='font-serif text-lg flex justify-center mb-5'>
                    {setTitle(todo.status)}
                </p>
                <div className='flex flex-col'>{makeToDoPage()}</div>
            </div>
            {isModalOpen && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md relative'>
                        <button
                            className='absolute top-2 right-2 text-xl'
                            onClick={() => setIsModalOpen(false)}
                        >
                            X
                        </button>
                        <h2 className='text-2xl mb-4'>To Do</h2>
                        <input
                            className='border p-2 w-full'
                            type='text'
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleTitleChange()
                                }
                            }}
                        />
                        <form className='flex justify-end mt-4'>
                            <button
                                className='bg-red-500 text-white p-2 rounded mr-2'
                                onClick={handleTitleRemove}
                            >
                                Remove
                            </button>
                            <button
                                className='bg-blue-500 text-white p-2 rounded'
                                onClick={handleTitleChange}
                                type='submit'
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

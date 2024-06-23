import { IToDo } from "."

interface IProps {
    todo: IToDo
}

export function ToDo({ todo }: IProps) {
    const setTitle = (state: string) => {
        if (state === "must") {
            return "MUST DO"
        } else if (state === "should") {
            return "SHOULD DO"
        } else if (state === "could") {
            return "COULD DO"
        } else {
            return "IF I HAVE TIME"
        }
    }
    return (
        <>
            <div className='bg-purple-300'>
                <p className='font-serif text-xl flex justify-center'>
                    {setTitle(todo.status)}
                </p>
                <div className=''>
                    <div className='flex justify-start items-center'>
                        <input type='checkbox' className='mr-2 mt-1' />
                        <button>{todo.title}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

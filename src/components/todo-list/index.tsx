import { ChangeEvent, useState } from "react"

export function TodoList() {
    const [searchDate, setSearchDate] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchDate(e.currentTarget.value)
    }

    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-full max-w-5xl m-4 p-4 rounded-lg bg-gray-300 shadow-lg shadow-gray-300 flex flex-col gap-4'>
                    <div className='flex justify-center'>
                        <p>To Do LIST</p>
                        <p>date</p>
                        <div>
                            <p>DATE: </p>
                            <input
                                type='text'
                                value={searchDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

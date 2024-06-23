import Head from "next/head"
import { TodoList } from "../components/todo-list"

export default function TodoListPage() {
    return (
        <>
            <Head>
                <title>투두리스트</title>
            </Head>
            <TodoList />
        </>
    )
}

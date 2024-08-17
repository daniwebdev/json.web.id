import { TodoForm } from "@/modules/todo/form"
import { TodoList } from "@/modules/todo/list"
import { Metadata } from "next"

export const metadata: Metadata   = {
    title: "JSON.WEB.ID - DEMO TODO",
    description: "TODO",
}

export default function TodoPage() {


    return (
        <div className="container min-h-screen">
            <div className="grid grid-cols-5 py-20 gap-20">
                <div className="col-span-2">
                    <TodoForm key={"form"} />
                </div>

                <div className="col-span-3">
                    <TodoList key={"list"} />
                </div>
            </div>
        </div>
    )
}
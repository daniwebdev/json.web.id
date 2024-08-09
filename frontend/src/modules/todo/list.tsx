'use client'

import { ApiClient } from "@/lib/api";
import { useEffect, useState } from "react"
import { useTodoStore } from "./state";

export function TodoList() {
    const apiClient = new ApiClient({ resourceName: "todo" });

    const {todos, setTodos} = useTodoStore();

    useEffect(() => {
        apiClient.getRecords().then(res => {
            console.log(res.data.records);

            setTodos(res.data.records);
        })
    }, [])


    const deleteTodo = (id: string) => {
        apiClient.deleteRecord(id).then(res => {
            setTodos(todos.filter((item: any) => item?.id !== id))
        })
    }


    return <>
        <h1 className="mb-5">Todo List</h1>

        <div className="space-y-3" key={"list"}>
            {
                todos?.map((item: any) => {
                    return <>
                        <div key={item?.id} className="flex items-center justify-between border rounded-lg p-5 w-full">
                            <div>
                                <h2 className="text-lg font-semibol">{item?.data?.title}</h2>
                                <p className="text-sm">
                                    {item?.data?.description}
                                </p>
                            </div>

                            <div>
                                <button onClick={() => deleteTodo(item?.id)} className="text-red-500">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </>
                })
            }
        </div>
    </>
}
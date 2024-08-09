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


    return <>
        <h1 className="mb-5">Todo List</h1>

        <div className="space-y-3" key={"list"}>
            {
                todos?.map((item: any) => {
                    return <>
                        <div key={item?.id} className="fled justify-between border rounded-lg p-5 w-full">
                            <h2 className="text-lg font-semibol">{item?.data?.title}</h2>
                            <p className="text-sm">
                                {item?.data?.description}
                            </p>
                        </div>
                    </>
                })
            }
        </div>
    </>
}
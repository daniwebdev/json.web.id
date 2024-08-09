'use client'

import { ApiClient } from "@/lib/api";
import { useEffect, useState } from "react"

export function TodoList() {
    const apiClient = new ApiClient({ resourceName: "todo" });

    const [list, setList] = useState<any>([])

    useEffect(() => {
        apiClient.getRecords().then(res => {
            setList(res);
        })
    }, [])


    return <>
        <h1 className="mb-5">Todo List</h1>

        <div className="space-y-3">
            {
                list?.data?.records?.map((item: any) => {
                    return <>
                        <div className="fled justify-between border rounded-lg p-5 w-full">
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
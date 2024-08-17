'use client'

import { ApiClient } from "@/lib/api";
import { useEffect } from "react";
import { useContactFormStore } from "./state";

export function ContactFormList() {
    const apiClient = new ApiClient({ resourceName: "contact-form" });
    const store = useContactFormStore();

    useEffect(() => {
        apiClient.getRecords().then(res => {
            store.setItems(res.data.records.map(function(item: any) {
                return {
                    id: item.id,
                    name: item.data.name,
                    email: item.data.email,
                    message: item.data.message
                }
            }));
        })

        console.log(store.items);
    }, [])

    return (
        <>
        <div className="w-full max-w-lg py-5">
            {
                store.items?.map((val: any, index) => {
                    console.log('Val', val);
                    return <>
                    <div key={index} className="text-white font-mono border-b pb-5 mb-5 last:border-b-0 last:pb-0 last:mb-0">
                        <b>From:</b> { val.name }
                        <br />
                        <b>Email:</b> { val.email }
                        <br />
                        <b>Message:</b> { val.message }
                        <br />
                    </div>
                    </>
                })
            }
        </div>
        </>
    );
}

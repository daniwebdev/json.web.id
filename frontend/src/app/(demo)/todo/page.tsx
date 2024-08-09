import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Metadata } from "next"

const metadata: Metadata   = {
    title: "JSON.WEB.ID - DEMO TODO",
    description: "TODO",
}

export default function TodoPage() {

    return (
        <div className="container min-h-screen">
            <div className="grid grid-cols-5 py-20">
                <div className="col-span-2">
                    <form action="" className="space-y-10">
                        <div>
                            <label htmlFor="">Todo</label>
                            <Input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Description</label>
                            <Textarea rows={3} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
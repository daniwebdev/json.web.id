"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ApiClient } from "@/lib/api";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useTodoStore } from "./state";

export function TodoForm() {
  const apiClient = new ApiClient({ resourceName: "todo" });

  const { todos, setTodos } = useTodoStore();

  function submitTodo(formData: FormData) {
    var object: any = {};
    formData.forEach((value, key) => (object[key] = value));

    apiClient.createRecord(object).then((res) => {
      const all = todos;

      if (all != null) {
        all.push(res.data);

        setTodos(all);
        alert("success");
      }
    });
  }

  return (
    <>
      <form action={submitTodo} className="space-y-10">
        <div>
          <label htmlFor="">Title</label>
          <Input name="title" type="text" />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <Textarea name="description" rows={3} />
        </div>
        <div>
          <label htmlFor="">Status</label>
          <Select name="status" defaultValue="todo">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">Todo</SelectItem>
              <SelectItem value="doing">Doing</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}

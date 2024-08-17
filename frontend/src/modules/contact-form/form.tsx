'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ApiClient } from "@/lib/api";
import { useContactFormStore } from "./state";

export default function ContactForm() {
  const apiClient = new ApiClient({ resourceName: "contact-form" });
  const store = useContactFormStore();

  const actionSubmit = async function (formData: FormData) {

    var object: any = {};
    formData.forEach((value, key) => (object[key] = value));

    console.log(object);

    apiClient.createRecord(object).then((res) => {
      console.log(res);

      store.addItem({
        id: res.data.id,
        name: res.data.data.name,
        email: res.data.data.email,
        message: res.data.data.message
      });
    });
  };

  return (
    <>
      <form action={actionSubmit} className="max-w-lg w-full mt-10 space-y-5">
        <div>
          <label htmlFor="">Name</label>
          <Input name="name" type="text" placeholder="Please enter your name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="Please enter your email"
          />
        </div>
        <div>
          <label htmlFor="">Your Message</label>
          <Textarea
            name="message"
            placeholder="Please enter your message"
            rows={5}
            className="resize-none"
          />
        </div>
        <div>
          <Button className="w-full">Submit</Button>
        </div>
      </form>
    </>
  );
}

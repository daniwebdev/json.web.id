import ContactForm from "@/modules/contact-form/form";
import { ContactFormList } from "@/modules/contact-form/list";

export default function ContactFormPage() {


    return <>
        <section className="min-h-screen relative container flex justify-center items-center h-screen flex-col">

            <h2 className="text-2xl font-bold text-center">Demo - Contact Form</h2>

            <ContactForm />

            <h2 className="text-2xl font-bold text-center mt-16">Results:</h2>

            <ContactFormList />
        </section>
    </>
}
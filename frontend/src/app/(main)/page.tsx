import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Playground } from "@/components/Playground";

export default function Home() {
  return (
    <>
      <Header></Header>
      <section className="max-w-screen-xl  mx-auto py-10">
        <p>
        This is a straightforward RESTful API that supports CRUD operations with dynamic data. It allows users to select different databases using unique API keys, enabling flexible data management and interaction
        </p>


        <h3 className="text-2xl mt-5">❗❗❗ Attention ❗❗❗</h3>
        <p className="">
        Use this API only for prototyping or educational purposes in frontend development. It is not designed for production use or important data, and data resets can occur anytime
        </p>
      </section>
      <Playground></Playground>

      <section className="max-w-screen-xl  mx-auto mt-10">
        <div> 
        If you find this project helpful, please consider ⭐ it on <a href="https://github.com/daniwebdev/json.web.id">GitHub</a>. :D 
        </div>
      </section>
      
      <Footer/>
    </>
  );
}

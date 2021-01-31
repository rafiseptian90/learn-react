import { useState } from 'react';

const Create = () => {
    // set state
    const [form, setForm] = useState({
        author: '',
        title: '',
        content: ''
    })
    // styles
    const transform = {
        transform: 'translate(-50%, -50%)'
    }

    return(
        <div className="container px-7 py-5">
           <div className="content absolute left-1/2 top-1/2 w-1/3" style={transform}>
               <h1 className="text-3xl font-semibold text-gray-600 mb-3">
                   Adding new post
               </h1>
               <div className="bg-white shadow-xl rounded-2xl px-5 py-7">
                   <form>
                       <div className="container mb-3">
                           <label htmlFor="author" className="block mb-2">Author</label>
                           <input
                               type="text"
                               name="author"
                               id="author"
                               value={form.author}
                               className="w-full border-opacity-80 rounded border-gray-600 border focus:outline-none p-2"
                               onChange={(e) => setForm({ author: e.target.value })}
                           />
                       </div>
                       <div className="container mb-3">
                           <label htmlFor="title" className="block mb-2">Title</label>
                           <input
                               type="text"
                               name="title"
                               id="title"
                               value={ form.title }
                               className="w-full border-opacity-80 rounded border-gray-600 border focus:outline-none p-2"
                               onChange={(e) => setForm({ title: e.target.value })}
                           />
                       </div>
                       <div className="container">
                           <label htmlFor="content" className="block mb-2">Content</label>
                           <textarea
                               rows="5"
                               name="content"
                               id="content"
                               className="w-full border-opacity-80 rounded border-gray-600 border focus:outline-none p-2 resize-none"
                               onChange={(e) => setForm({ content: e.target.value })}
                           >
                               { form.content }
                           </textarea>
                       </div>

                       <div className="flex justify-end">
                           <div
                               className="bg-blue-500 px-5 py-2 rounded text-center text-white text-lg font-semibold w-1/4 cursor-pointer mt-5 hover:bg-blue-600 transition-all"
                           >
                               Add post
                           </div>
                       </div>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default Create;
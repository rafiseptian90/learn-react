import { useState } from 'react';
import { useForm } from "../hooks/useForm";

const Create = () => {
    // set state
    const { value:author, bind: bindAuthor, reset:resetAuthor } = useForm('');
    const { value:title, bind:bindTitle, reset:resetTitle } = useForm('');
    const { value:content, bind:bindContent, reset:resetContent } = useForm('');
    const [isSending, setIsSending] = useState(false)

    // styles
    const transform = {
        transform: 'translate(-50%, -50%)'
    }

    function storeData(e){
        e.preventDefault();

        setIsSending(true)

        const data = {
            author,
            title,
            content
        }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res)
                alert('New post added')
                setIsSending(false)
            })
    }

    return(
        <div className="container px-7 py-5">
           <div className="content absolute left-1/2 top-1/2 w-1/3" style={transform}>
               <h1 className="text-3xl font-semibold text-gray-600 mb-3">
                   Adding new post
               </h1>
               <div className="bg-white shadow-xl rounded-2xl px-5 py-7">
                   <form onSubmit={ storeData }>
                       <div className="container mb-3">
                           <label htmlFor="author" className="block mb-2">Author</label>
                           <input
                               type="text"
                               name="author"
                               id="author"
                               className="w-full border-opacity-80 rounded border-gray-600 border focus:outline-none p-2"
                               {...bindAuthor}
                               autoComplete="off"
                           />
                       </div>
                       <div className="container mb-3">
                           <label htmlFor="title" className="block mb-2">Title</label>
                           <input
                               type="text"
                               name="title"
                               id="title"
                               className="w-full border-opacity-80 rounded border-gray-600 border focus:outline-none p-2"
                               autoComplete="off"
                               {...bindTitle}
                           />
                       </div>
                       <div className="container">
                           <label htmlFor="content" className="block mb-2">Content</label>
                           <textarea
                               rows="5"
                               name="content"
                               id="content"
                               className="w-full border-opacity-80 rounded border-gray-600 border focus:outline-none p-2 resize-none"
                               autoComplete="off"
                               { ...bindContent }
                           >
                               { content }
                           </textarea>
                       </div>

                       <div className="flex justify-end">
                           {
                               isSending
                               &&
                               <button
                                   disabled
                                   type="submit"
                                   className="bg-blue-500 px-5 py-2 rounded text-center text-white text-lg font-semibold w-1/4 cursor-pointer mt-5 hover:bg-blue-600 transition-all"
                               >
                                   Sending...
                               </button>
                           }

                           {
                               !isSending
                               &&
                               <button
                                   type="submit"
                                   className="bg-blue-500 px-5 py-2 rounded text-center text-white text-lg font-semibold w-1/4 cursor-pointer mt-5 hover:bg-blue-600 transition-all"
                               >
                                   Add new post
                               </button>
                           }
                       </div>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default Create;
import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Rshme');

    function changeName(name){
        let prm = prompt('Your name ?')

        if(prm){
            setName(prm)
        }
    }

    return(
        <div className="container px-14 py-7">
            <h1 class="text-gray-800 text-3xl">
                Homepage
            </h1>

            <span className="block font-medium text-gray-700 my-5">
                { name }
            </span>

            <button
                className="bg-green-600 btn-rounded px-5 py-3 text-center font-semibold text-white outline-none border-none"
                onClick={changeName}
            >
                Click Me
            </button>
        </div>
    )
}

export default Home;
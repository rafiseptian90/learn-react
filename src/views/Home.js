import { Component } from 'react';
import axios from 'axios';


class Home extends Component{
    constructor() {
        super();

        this.state = {
            posts: []
        }

        this.getPosts();
    }

    getPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                this.setState({
                    posts: data.slice(0, 5)
                })
            })
    }

    render(){
        return(
            <div className="container px-14 py-7">
                <h1 className="text-gray-800 text-3xl mb-5">
                    Homepage
                </h1>

                <ul className="list-disc">
                    {
                        this.state.posts.length > 0
                        ? this.state.posts.map(post => {
                                return(
                                    <li>{ post.title }</li>
                                )
                            })
                        : ''
                    }
                </ul>
            </div>
        )
    }
}

export default Home;
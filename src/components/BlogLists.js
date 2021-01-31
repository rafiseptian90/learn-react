import { Component } from 'react';
import { Link } from 'react-router-dom';
// feather icon
import * as Icon from 'react-feather';

class BlogLists extends Component{
    render(){
        return(
            <div className="container">
                <h2 className="text-3xl font-medium mb-3">
                   All Blogs
                </h2>
                <ul className="list-none">
                    {
                        this.props.posts.length > 0
                            ? this.props.posts.map(post => {
                                return(
                                    <li
                                        className="mb-3 py-5 px-7 hover:shadow-xl cursor-pointer"
                                        key={post.id}
                                    >
                                        <h3 className="text-2xl font-base text-green-700">
                                            { post.title }
                                        </h3>
                                        <p>{ post.author } </p>

                                        <div className="grid w-16 justify-start items-center grid-cols-2 mt-5">
                                            <Link to={`/post/${post.id}`}>
                                                <Icon.Eye size="18" />
                                            </Link>
                                            <Icon.Trash size="18" onClick={() => {
                                                this.props.delete(post.id)
                                            }}/>
                                        </div>
                                    </li>
                                )
                            })
                            : ''
                    }
                </ul>
            </div>
        )
    }
}

export default BlogLists
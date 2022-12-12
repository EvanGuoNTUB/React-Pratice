import axios from 'axios';
import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export function Query() {
  
  const [posts, setPosts] = useState<any>([{}]);
    
  useEffect(() => {
      axios.get(baseURL).then((response) => {
          setPosts(response.data);
      })
  }, []);

    return (
          <div>
                {posts.map((post:any,id:any) => {
                    return(
                    <div key={id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    </div>
                    )
                })}
          </div>
    );
}
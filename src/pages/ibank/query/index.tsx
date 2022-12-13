import { Backdrop, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export function Query() {
  
  const [posts, setPosts] = useState<any>([{}]);
  const [loading, setLoading] = useState<boolean>(true);
    
  useEffect(() => {
      axios.get(baseURL).then((response) => {
        setLoading(false);
        setPosts(response.data);
      })
  }, []);

    return (
          <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}  open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
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
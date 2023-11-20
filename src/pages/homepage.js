import { useEffect, useState } from "react";
import ImageCard from "../components/imagecard";


function Homepage() {
    const [isLoading,setIsLoading]=useState(true);
    const [images,setImages] = useState([]);
    // const API_URL = 'https://jsonplaceholder.typicode.com';
    // useEffect(()=>{
    //     fetch(`${API_URL}/photos`).then(res=>{
    //         if(!res.ok) throw `Http error !status:${res.status}`
    //         return res.json();
    //     }).then(data=>{
    //         console.log('images data:',data[1000]);
    //         setImages(data);
    //         setIsLoading(false);
    //     }).catch(err=>{
    //         console.log('fetching images data error:',err.message);
    //     })
    // },[])
    const API_URL = 'https://api.unsplash.com/photos/?client_id=-J6Wg5N12JPXbucrz9M_Il4HwdKWHqT09zuI0MiYy1I'
    useEffect(()=>{
        fetch(`${API_URL}`).then(res=>{
            if(!res.ok) throw `Http error !status:${res.status}`
            return res.json();
        }).then(data=>{
            console.log('images data:',data[0].alt_description);
            setImages(data);
            setIsLoading(false);
        }).catch(err=>{
            console.log('fetching images data error:',err.message);
        })
    },[])
  return (
    <div className="home">
        {isLoading && <h4>Loading...</h4>}
        {images.map((image,index)=>(
            <ImageCard key={index} image={image}/>
        ))}
    </div>
  );
}

export default Homepage;
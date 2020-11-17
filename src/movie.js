import React from 'react';
const movies=({title,img})=>{
    if(img!=="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/film-3119741174._CB468665901_.png"){
        return(
            
                <div> 
                    <h1>{title}</h1>
                    <img src={img} alt="" className="i-image"/>
                </div>
        );
    }
    else{
        return(
            <div> 
                    <h1>{title}</h1>
                    <img src="https://media.istockphoto.com/vectors/error-page-illustration-man-sitting-with-sad-emotion-page-not-found-vector-id1220975271?b=1&k=6&m=1220975271&s=170667a&w=0&h=p2smpyKYQwXtVy86EFhmIOHnzlsx130WER2ZdkMwWoQ=" alt=""className="i2-image"/>
            </div>
        );
    }
}
export default movies;
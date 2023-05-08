import React,{useRef,useState} from "react";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';


export default function ImageInsert() {
  const inputRef = useRef(null);
  const[img,setImg] =  useState('')

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
   
    setImg(document.execCommand('insertimage',0,(URL.createObjectURL(file))));
   
  }

  return (
    <div>
      
      <InsertPhotoIcon   onClick={()=> inputRef.current.click() } sx={{color:'black'}}/>

      <input type="file" onChange={handleFileInputChange} ref={inputRef}  hidden
      />
  { img &&   <img src={img} alt='local img' style={{width:"50px",height:"30px"}} />}
    </div>
  );
}


import Link from 'next/link';
import React from 'react'
import { Card } from 'react-bootstrap';
import {IMAGE_BASE_PATH} from "@/lib";
import Button from "react-bootstrap/Button";
import {useRouter} from "next/router";


export default function CardComponent({ title,des,imagePath,id}) {
  const router=useRouter();
  const handleClick = () =>{
    router.push(`/movie/${id}`);
  }
  return (
    <>
       <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" 
    src={
      imagePath
    ? IMAGE_BASE_PATH + imagePath
    : "https://wiki.tripwireinteractive.com/images/4/47/Placeholder.png"
    } 
    />
    
    <Card.Body>
      <Card.Title>{title? title : "Unknown"}</Card.Title>
      {/* <Card.Text>
        {description? description :"Unknown"}
      </Card.Text> */}
      <Button onClick={handleClick} variant="primary">View detail</Button>
    </Card.Body>
  </Card>


    </>


  )
}

import {  Row } from 'react-bootstrap'
import { API_KEY } from "@/lib";
import { console } from "next/dist/compiled/@edge-runtime/primitives/console";
import CardComponent from "@/components/CardComponent";


export default function Movie({ movies }) {
  const data = movies?.results || [];
  console.log(movies)
  return (
    <>
      <div className='container'>
      <div className='mt-5'>
        <Row md={6}  className={"g-2"} >
          {/*<CardComponent/>*/}
          {data.length > 0 && data.map((movie) => <CardComponent
            key={movie.id}
            imagePath={movie.backdrop_path}
            title={movie.title}
            id={movie.id}
          />)}
        </Row>
      </div>

    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res = await fetch(url);

  if (!res) {
    console.log("Error Data");
  }

  const movies = await res.json();

  if (!movies) {
    console.log("Error");
    return {
      props: {
        movies: [],
      }
    }
  }

  return {
    props: {
      movies,
    }
  }
}






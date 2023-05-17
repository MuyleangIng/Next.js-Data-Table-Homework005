import CardComponent from '@/components/CardComponent'
import { API_KEY } from '@/lib'
import Link from "next/link";

export default function Home({ movies }) {
  const data = movies?.results || [];
  return (
    <>
    <div className="container">
    <h2>Home Page</h2>

      <div className="d-flex justify-content-evenly flex-wrap">
        {data.length > 0 && data.map((movie) => 
        <CardComponent key={movie.id} imagePath={movie.backdrop_path}
        title={movie.title} id={movie.id}
        />)}
      </div>
    </div>
    </>
  );
}
//getServerSideProps
export async function getServerSideProps(context) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res = await fetch(url).then()

if(!res) {
  console.log("Error fetching data");
}
const movies = await res.json();

if(!movies){
  console.log("Error");
  return{
    props:{
      movies:[],
    }
  }
}
  return{
    props: {
      movies,
    }
  }
}

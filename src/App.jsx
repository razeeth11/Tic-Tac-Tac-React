import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count , setCount] = useState(0)
  const [color , setColor] = useState("")
  const data = [
    {
      "model": "OnePlus 9 5G",
      "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
      "company": "Oneplus"
    },
    {
      "model": "Iphone 13 mini",
      "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
      "company": "Apple"
    },
    {
      "model": "Samsung s21 ultra",
      "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
      "company": "Samsung"
    },
    {
      "model": "Xiomi mi 11",
      "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
      "company": "Xiomi"
    }
  ]

  const style ={
    backgroundColor: color,
  }
  return (
    <div className="App">
      {/* <button onClick={()=>
         setCount(count-1)
      }>-</button>
      Count : {count}
      <button onClick={()=>
         setCount(count+1)
      }>+</button>

        <input type="text" style={style} 
        onChange={(event)=> 
        setColor(event.target.value) 
        } />
          <Form /> */}
          {data.map((product,index)=> <Cart items={product}   key={index}/>)}
    </div>
  )
}


// function Form(){
  
//  const [movies,setMovies] = [
//     {
//         "id": "1",
//         "name": "The Godfather",
//         "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/sY1S34973zA",
//         "summary": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//         "rating": 9.2
//     },
//     {
//         "id": "2",
//         "name": "The Shawshank Redemption",
//         "poster": "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
//         "trailer": "https://www.youtube.com/embed/6hB3S9bIaco",
//         "summary": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//         "rating": 9.3
//     },
//     {
//         "id": "3",
//         "name": "The Dark Knight",
//         "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY",
//         "summary": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "rating": 9.0
//     },
//     {
//         "id": "4",
//         "name": "Schindler's List",
//         "poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/gG22XNhtnoY",
//         "summary": "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
//         "rating": 8.9
//     },
//     {
//         "id": "5",
//         "name": "Pulp Fiction",
//         "poster": "https://m.media-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/s7EdQ4FqbhY",
//         "summary": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
//         "rating": 8.9
//     },
//     {
//         "id": "6",
//         "name": "The Lord of the Rings: The Return of the King",
//         "poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/r5X-hFf6Bwo",
//         "summary": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
//         "rating": 8.9
//     },
//     {
//         "id": "7",
//         "name": "Fight Club",
//         "poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/BdJKm16Co6M",
//         "summary": "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.",
//         "rating": 8.8
//     },
//     {
//         "id": "8",
//         "name": "Inception",
//         "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/8hP9D6kZseM",
//         "summary": "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
//         "rating": 8.8
//     },
//     {
//         "id": "9",
//         "name": "Forrest Gump",
//         "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/uPIEn0M8su0",
//         "summary": "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
//         "rating": 8.8
//     },
//     {
//         "id": "10",
//         "name": "The Matrix",
//         "poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/m8e-FF8MsqU",
//         "summary": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//         "rating": 8.7
//     },
//     {
//         "id": "11",
//         "name": "Goodfellas",
//         "poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/qo5jJpHtI1Y",
//         "summary": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
//         "rating": 8.7
//     },
//     {
//         "id": "12",
//         "name": "Star Wars: Episode V - The Empire Strikes Back",
//         "poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,679,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/96v4XraJEPI",
//         "summary": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
//         "rating": 8.8
//     },
//     {
//         "id": "13",
//         "name": "The Lord of the Rings: The Fellowship of the Ring",
//         "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/V75dMMIW2B4",
//         "summary": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
//         "rating": 8.8
//     },
//     {
//         "id": "14",
//         "name": "Interstellar",
//         "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E",
//         "summary": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "rating": 8.6
//     },
//     {
//         "id":" 15",
//         "name": "The Good, the Bad and the Ugly",
//         "poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,656,1000_AL_.jpg",
//         "trailer": "https://www.youtube.com/embed/WCN5JJY_wiA",
//         "summary": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
//         "rating": 8.9
//     }
// ]

//   const [Name,setName] = useState("")
//   const [Poster,setPoster] = useState("")
//   const [Rating,setRating] = useState("")
//   const [Summary,setSummary] = useState("")
//   const [Trailer,setTrailer] = useState("")
//   return(
//     <div>
//       <form className='movie-form' action="#">
//          <input type="text" placeholder='Name' 
//          onChange={(event)=> 
//         setName(event.target.value) 
//         } 
//          />
//          <input type="text" placeholder='Poster' 
//          onChange={(event)=> 
//         setPoster(event.target.value) 
//         } 
//          />
//          <input type="text" placeholder='Rating' 
//          onChange={(event)=> 
//         setRating(event.target.value) 
//         } 
//          />
//          <input type="text" placeholder='Summary' 
//          onChange={(event)=> 
//         setSummary(event.target.value) 
//         } 
//          />
//          <input type="text" placeholder='Trailer' 
//          onChange={(event)=> 
//         setTrailer(event.target.value) 
//         } 
//          />
//           <button onClick={()=>{
//             const movie = {
//               name : {Name},
//               Poster : {Poster},
//               Rating : {Rating},
//               Summary : {Summary},
//               Trailer : {Trailer},
//              }
//             //  setMovies([...movies,movie])
//             console.log(movie);
//           }}>Add Movie</button>
//       </form>
//     </div>
//   )
// }

export default App;


function Cart({items,index}){
  
  return(
    <div className='container'>
       <img src={items.img} alt={items.model} />
       <h1>{items.model}</h1>
       <p>{items.company}</p>
    </div>
  )
}
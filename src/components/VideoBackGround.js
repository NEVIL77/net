import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilit/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utilit/moviesSlice';

const VideoBackGround = ( { movieId } ) => {
  // hokks
  const trailerVideo = useSelector( store => store.movies?.trailerVideo )
  const dispatch = useDispatch() ;

  // functions
  const getMovieVideos = async () => {

    const data = await fetch('https://api.themoviedb.org/3/movie/572802/videos?language=en-US', API_OPTIONS)
    const json = await data.json()

    const filteredData = json.results.filter( video => video.type === "Trailer" )
    const trailer = filteredData.length ? filteredData[0] : json.results[0] ;
    console.log(trailer)
    if( !trailer ) return 

    dispatch( addTrailerVideo( trailer ) ) ;
  } 
  useEffect( () => {
    getMovieVideos();
  },[])

  return (
    <div>
      <iframe  
              src={"https://www.youtube.com/embed/UGc5Tzz19UY?si=" + trailerVideo?.key} 
              title="YouTube video player" 
                
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen >
      </iframe>
    </div>
  )
}

export default VideoBackGround ;

// {
//   "id": 572802,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Extended Preview",
//       "key": "1dc1UycqDVk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-01-23T15:00:01.000Z",
//       "id": "65b0abfbb76cbb01522b4eb5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Aquaman Recap in 60 Seconds",
//       "key": "Ix0gJwrpexI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-22T22:00:06.000Z",
//       "id": "658a9e155aba326759b9ee69"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Now Playing",
//       "key": "PoF4B_xPVlg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-12-22T17:25:13.000Z",
//       "id": "658734232dffd85c8f44ddf0"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Mouthful of Water Challenge",
//       "key": "_B25AduQRE4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-21T17:34:05.000Z",
//       "id": "6585ba5c28d7fe58b439ff40"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Aquaman ASMR",
//       "key": "zw5KVWAx_Ao",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-20T15:16:37.000Z",
//       "id": "6583adfe08354744c23ecf35"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Special Event Broadcast",
//       "key": "rgSZs3kVhKM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-19T22:40:31.000Z",
//       "id": "6583ae11880551409d27f538"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Behind-the-Scenes Featurette | Filmed For IMAX®",
//       "key": "gB--kMMcrUY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-12-19T19:51:13.000Z",
//       "id": "6586b8bfea7b0e5ede8f78e6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Aquaman's Last Stand",
//       "key": "Wk0cvHzpAIM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-12-15T23:41:33.000Z",
//       "id": "6583adf2083547446f3ee8e4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Black Manta Returns Featurette",
//       "key": "R6ZFWh6Utp0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-14T23:11:29.000Z",
//       "id": "657be2c3ea3949011b3cda21"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Tickets on Sale",
//       "key": "4cSkHPW-MPE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-11-20T17:38:18.000Z",
//       "id": "656383b9a6c104011bde45d7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "UGc5Tzz19UY",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-09-20T17:37:05.000Z",
//       "id": "651299c18e2ba600c7cceb61"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Teaser",
//       "key": "Fbb4e_Q6wR8",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-09-11T00:00:09.000Z",
//       "id": "64fe597a2dffd8013bcca93e"
//     }
//   ]
// } 
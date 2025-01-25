import { Error,Loader,SongCard } from "../components";
import {genres} from "../assets/constants"
import '../index.css';

const Discover = () => {
const genreTitle='Pop'

    return(
        <div className="disc" style={{display: "flex",flexDirection:"column"}}>
            <div className="main">
                <h2 style={{fontWeight:"bold", fontSize:"2rem",color:"white"}}>
                    Discover {genreTitle}
                </h2>
                <select
                onChange={()=>{}}
                value=""
                className="sel"
                >
                {genres.map((genre)=><option key={genre.value}
                value={genre.value}
                >{genre.title}</option>)}
                </select>
                </div>
                <div className="songcard">
                    {[1,2,3,4,5,6,7,8,9,10].map((song,i)=>(
                        <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                        />
                    ))}
                    
                
            </div>

        </div>
    )
}


export default Discover;

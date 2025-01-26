import { Error,Loader,SongCard } from "../components";
import {genres} from "../assets/constants"
import '../index.css';
import { useGetExploreQuery } from "../redux/services/ApiCore";


const Discover = () => {
    const {data,isFetching,error}=useGetExploreQuery();
const genreTitle='Pop'
if(isFetching) return <Loader title="Loading songs..."/>
if(error) return <Error/>
console.log(data);

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
                    {data.data.browseStart.sections.items[0].sectionItems.items?.map((song,i)=>(
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

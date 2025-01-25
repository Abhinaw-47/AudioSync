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
                <select/>
            </div>

        </div>
    )
}


export default Discover;

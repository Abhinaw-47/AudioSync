import {loader} from '../assets';

const Loader = ({title}) => (
  <div style={{width:"100%",display:"flex", justifyContent:"center"}}>
<img src={loader} style={{width:"3rem",height:"5rem"}}/>
<h1 style={{ fontWeight:"bold",fontSize:"2rem"}}>{title ||"Loading..."}</h1>
  </div>
);

export default Loader;

import { useParams } from 'react-router-dom'

function Mainfun(props) {
    
    const {id}= useParams()
    return (
      <>
         <h1>This is dynamic url example :{id}</h1>  
        
      </>
      
  )
  
}
export default Mainfun;

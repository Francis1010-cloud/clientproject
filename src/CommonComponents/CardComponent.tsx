
import './CardComponent.scss';



export default function CardComponent({Icon,Title,Content}:any) {



const CardDesign = () =>{
    try {
        return(<>
        <div className="card-container">
        <div className='card-header'>
            <div>
                <img src="./images/sample.svg"/>
            </div>
            <div>      
                <h3>{Title}</h3> 
            </div>

                   </div> 
                   <p>
                   {Content}
                   </p>
        </div>
        
        </>)
    } catch (error) {
        
    }
}


    return(<>
    
    {CardDesign()}
    </>)
}

import './CardComponent.scss';



export default function CardComponent({Icon,Title,Content,classname}:any) {



const CardDesign = () =>{
    try {
        return(<>
        <div className={classname}>
        <div className='card-header' aria-label="logo">
            {Icon && <div >
                <img src={Icon} alt="Icon"/>
            </div>}
            
            <div className='font' aria-label='title'>      
                <h2>{Title}</h2> 
            </div>

                   </div> 
                   <p>
                   {Content}
                   </p>
                   <p className="hover-text">Try Hexnode on your endpoints</p>
        </div>
        
        </>)
    } catch (error) {
        
    }
}


    return(<>
    
    {CardDesign()}
    </>)
}
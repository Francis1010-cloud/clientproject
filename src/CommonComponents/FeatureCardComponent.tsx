
import './FeatureCardComponent.scss';


export default function FeatureCardComponent({Icon,Title,Content}:any) {
return(<>
        <div className="feature-card-container">
                <div>
                        <img 
    alt="Zero touch enrolment with Hexnode UEM" 
    loading="lazy" 
    width="100%" 
    height="100%" 
    decoding="async"
    src={Icon}>
        </img>
</div>
                <div className='font-bold'>{Title}</div>
                <p>{Content}</p>
        </div>
</>)

}
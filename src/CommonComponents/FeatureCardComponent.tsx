
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
    srcSet="https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/zero-touch.jpg?w=384&q=100 1x, 
            https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/zero-touch.jpg?w=828&q=100 2x" 
    src="https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/zero-touch.jpg?w=828&q=100">
        </img>
</div>
                <div className='font-bold'>{Title}</div>
                <p>{Content}</p>
        </div>
</>)

}
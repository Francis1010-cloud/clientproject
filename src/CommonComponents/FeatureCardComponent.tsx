
// import './FeatureCardComponent.scss';
import '../Components/LandingPage.scss';


export default function FeatureCardComponent({Icon,Title,Content}:any) {
return(<>
<div className='feature-card-container'>
        <div>{Icon}</div>
        <div className='font-bold'>{Title}</div>
        <div>{Content}</div>
</div>
</>)

}
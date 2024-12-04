

import CardComponent from '../CommonComponents/CardComponent';
import './LandingPage.scss';

export default function LandingPage() {

    const navbarContent = [
                    "Why Hexnode",
                    "Features",
                    "Platforms",
                    "Customers"]

    const headerCompanyList = [
        {image:"Image",details:"Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024."},
        {image:"Image",details:"Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022."},
        {image:"Image",details:"Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023."}];
    
    const cardDetails = [
        {icon:"icon",title:"Adapt to the new normal",content:"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."},
        {icon:"icon",title:"Adapt to the new normal",content:"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."},
        {icon:"icon",title:"Adapt to the new normal",content:"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."},
        {icon:"icon",title:"Adapt to the new normal",content:"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."}]

const HeaderSection = () =>{

    try {
        return(
            <>
            <div className='header'>
                <div className="header-section">
                    <div className='nav-bar'>
                    <div style={{fontWeight:"bolder"}}>hexnode</div>
                        {navbarContent.map((item:any)=>(<>
                        <div>{item} </div>  
                        </>))}
                    </div>
                <div className='trail-button'>
                        14 DAY FREE TRAIL
                </div>
            </div>
            <div className='header-content'>
                <div className='header-details'>
                    <div className='opacity-low'>Unified Endpoint Management</div>
                    <div className='bold-text' style={{marginTop:"13px"}}> Gain control and visibility over your endpoints</div>
                    <p>Hexnode's UEM solution allows you to simplify endpoint management and free up IT. 
                        Focus on the big picture while Hexnode works on the details.</p>
                        <div className='email-field'>
                        <input/>
                        <div className='input-button trail-button'>
                            LET'S TRY IT OUT
                        </div>
                </div>
                </div>
                <div className='header-image'>
                    Image
                </div>
            </div>
            <div className='header-company-details'> 
                    {headerCompanyList.map((item:any)=>(<>
                    <div>
                        <div>{item.image}</div>
                        <div style={{width:'14.2rem',lineHeight:'1.5rem'}}>{item.details}</div> 
                    </div>
                    <div className='vertical-line'></div>
                    </>))}
            </div>

            </div>
            
            </>

        )
       
    } catch (error) {
        console.log("error in Header",error);
        
    }
}

const BodySection = () =>{
    try {
        return(<>
        <div className='body-section'>
            <div className='heading'>Why Hexnode?</div>
            <div>Center</div>
            <div className="card-group">
            {cardDetails.map((item:any)=>(<>
            {/* <div>Center Div</div> */}
            <CardComponent 
                   Icon = {item.icon}
                   Title = {item.title}
                   Content = {item.content}
                  />
                            
            </>))}            
            </div>
        </div>
        </>)
    } catch (error) {
        console.log("error in BodySection",error);
    }
}

return(<>
    {HeaderSection()}
    {BodySection()}
</>)
}
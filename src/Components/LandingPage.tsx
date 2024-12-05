

import CardComponent from '../CommonComponents/CardComponent';
import FeatureCardComponent from '../CommonComponents/FeatureCardComponent';
import UserCardCompnent from '../CommonComponents/UserCardComponent';
import './LandingPage.scss';

export default function LandingPage() {

    const navbarContent = [
                    "Why Hexnode",
                    "Features",
                    "Platforms",
                    "Customers"]

    const headerCompanyList = [
        {   src:"https://static.hexnode.com/v2/assets/img/accolades/idc.png",
            width:"83",
            height:"25",
            details:"Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024."},
        { src:"https://static.hexnode.com/v2/assets/img/accolades/gartner.png",   width:"110",
            height:"25",details:"Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022."},
        { src:"https://static.hexnode.com/v2/assets/img/accolades/forrester.png",   width:"150",
            height:"25",details:"Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023."}];
    
    const cardDetails = [
        {icon:"./images/sample.svg",title:"Adapt to the new normal",content:"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."},
        {icon:"./images/sample.svg",title:"Adapt to the new normal",content:"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."},
        {icon:"./images/sample.svg",title:"Adapt to the new normal",content:"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."},
        {icon:"./images/sample.svg",title:"Adapt to the new normal",content:"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."}]
    
        const platformDetails = [
            {icon:"",title:"Android",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}, 
            {icon:"",title:"iOS",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}, 
            {icon:"",title:"macOS",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."},
            {icon:"",title:"Android",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."},
            {icon:"",title:"Android",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}, 
            {icon:"",title:"Android",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}]


    const featureDetails = [{icon:"./images/zero-touch.svg",title:"Automation",content:"Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports."},
        {icon:"./images/zero-touch.svg",title:"Automation",content:"Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports."},
        {icon:"./images/zero-touch.svg",title:"Automation",content:"Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports."},{icon:" image ",title:"Automation",content:"Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports."},
        {icon:"./images/zero-touch.svg",title:"Automation",content:"Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports."},
        {icon:"./images/zero-touch.svg",title:"Automation",content:"Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports."}
    ]

const HeaderSection = () =>{

    try {
        return(
            <>
            <div className='header'>
                <div className="header-section">
                    <div className='nav-bar'>
                    <div style={{fontWeight:"bolder"}}>
                        <img src="./images/hexnode-logo.svg" alt="hexnode-logo"/>
                        </div>
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
                <img 
    alt="Hexnode UEM" 
    fetchPriority="high" 
    width="610" 
    height="465" 
    decoding="async" 
    style={{color:"transparent"}}
    srcSet="https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg?w=640&q=90 1x, https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg?w=1920&q=90 2x" 
    src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg?w=1920&q=90"
/>

                </div>
            </div>
            <div className='header-company-details'> 
                    {headerCompanyList.map((item:any)=>(<>
                    <div>
                    <img alt="IDC" src={item.src} width={item.width} height={item.height} loading="lazy" />

                        <p style={{width:'14.2rem'}}>{item.details}</p> 
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
        <div className="body-section">
            <div className="heading font-bold">Why Hexnode?</div>
            <div className="center-div"><img src="./images/hexnode-app-icon.svg" alt="hexnode-logo"/></div>
            <div className="card-group">
            {cardDetails.map((item:any)=>(<>
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

const FeatureSection = () =>{
    try {
        return(<>
        <div className="feature-section">
            <div className="heading font-bold">
                Powerful endpoint management, built for the devices you choose
            </div>
            <div className='feature-details-card'>
            {featureDetails.map((item:any)=>(<>
                <FeatureCardComponent
             Icon = {item.icon}
             Title = {item.title}
             Content = {item.content}/>
            </>))}
            </div>
          
    
            
        </div>
        </>)
    } catch (error) {
        
    }
}

const MultiPlatformSection = () =>{
    try {
        return(<>
        <div className="platform-section">
            <div className='header-content'> <div className="heading font-bold">
                Multi-platform Endpoint Management
            </div>
            <p>Devices of varying platforms? Hexnode thrives in a diverse environment.</p> </div>
            <div className="platform-content">
                <div className="platform-image">
                <img 
    alt="Android Management with Hexnode UEM" 
    fetchPriority="high" 
    width="100%" 
    height="auto" 
    decoding="async" 
    srcSet=" https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/android.jpg?w=640&q=90 1x,
  https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/android.jpg?w=1200&q=90 2x" 
    src="https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/android.jpg?w=1200&q=90" 
    ></img>
   


                </div>
                <div className='platform-card-container'>
                
                {platformDetails.map((item:any,index:number)=>(<>
                {index == 1 ?  <>
                    <CardComponent 
                   Icon = {item.icon}
                   Title = {item.title}
                   Content = {item.content}
                  />
                </>  : <>
                <div style={{marginInline:"1rem"}}>
                    <h3 style={{fontSize:"24px"}}>{item.title}</h3>
                    <div className="horizontal-line"></div>
                    </div>
                </>}

                            
            </>))} 
                </div>
            </div>
        </div>
        
        </>)
    } catch (error) {
        console.log("error in MultiPlatformSection",error);
        
    }
}


const CustomerSection = () =>{
    try {
        return(<>
        <div className='customer-section'>
                <div className="header-section">
                    <h2 className="heading font-bold">
                        What our customers say
                    </h2>
                </div>
                <div>
               <UserCardCompnent 
                Image="https://static.hexnode.com/v2/assets/img/customer-images/dalibor-kruljac.png?w=1200&q=80"
                Content = "Hexnode is of great value. Works great with Android and iOS!"
                Name = "Dalibor Kruljac"
                Description = "Executive Account Manager, NCS"
               />
                </div>
        </div>
        
        </>)
    } catch (error) {
        
    }
}
 
const ScrollingSection = () =>{
    try {
        return(<>
        ScrollingSection
        </>)
    } catch (error) {
        console.log("error in ScrollingSection",error);
        
    }
}

const FooterSection = () =>{
    try {
        return(<>
        <div className='footer-section'>
            <div>Get Hexnode UEM and start securing your endpoints</div>
            <div className='trail-button' style={{margin:"1.5rem auto"}}>
            TRY HEXNODE FOR FREE
                </div>
        </div>
        <div className='bottom-container'>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div>
                    Terms of use -
                </div>
                <div>
                &nbsp; Privacy -
                </div>
                <div>
                &nbsp; Cookies
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
            </div>
                
        </div>
        
        </>)
    } catch (error) {
        
    }
}

return(<>
    {HeaderSection()}
    {BodySection()}
    {FeatureSection()}
    {MultiPlatformSection()}
    {CustomerSection()}
    {/* {ScrollingSection()} */}
    {FooterSection()}
</>)
}
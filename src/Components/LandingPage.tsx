

import { useEffect, useState } from 'react';
import CardComponent from '../CommonComponents/CardComponent';
import FeatureCardComponent from '../CommonComponents/FeatureCardComponent';
import UserCardCompnent from '../CommonComponents/UserCardComponent';
import './LandingPage.scss';

export default function LandingPage() {

    const [selectedPlatformIndex,setSelectedPlatformIndex] = useState(0);
    const [selectedUserIndex,setSelectedUserIndex] = useState(0);
    


    const navbarContent = [{name:"Why Hexnode",id:"#feature"},
        {name:"Features",id:"#feature"},
        {name:"Platforms",id:"#feature"},{name:"Customers",id:"#feature"}]

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
            {src:"https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/android.jpg?w=1200&q=90", icon:"",title:"Android",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}, 
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

    const userDetails = [{  image:"https://static.hexnode.com/v2/assets/img/customer-images/dalibor-kruljac.png?w=1200&q=80",
        content : "Hexnode is of great value. Works great with Android and iOS!",
        userName : "Dalibor Kruljac",
        description : "Executive Account Manager, NCS"},
        {  image:"https://static.hexnode.com/v2/assets/img/customer-images/justin-modrak.png",
            content :"Most complete MDM solution I found, and I tested many of them, including major names",
            userName : "Chris Robinson",
            description : "Executive Account Manager, NCS"},
            {  image:"https://static.hexnode.com/v2/assets/img/customer-images/chris-robinson.png",
                content : "It seemed to be in-line with everything we were looking at.",
                userName : "Justin Modrak",
                description : "EEast Troy Community School District"}]


useEffect(()=>{
    scrollFunction();
},[]);


const handleScroll = () => {
    let element:any = document.getElementById("header");
    console.log(element);
    let navelement:any = element.getElementsByClassName("nav-bar");
  let atagElement = navelement[0].getElementsByTagName("a");
    console.log(navelement);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      element.style.background="white";
    //   element.style.color="black";
      for(let item of atagElement){
        item.style.color="black";
      }
      
    }else{
        element.style.background="rgb(2 10 25/1)";
      element.style.color="white";
      for(let item of atagElement){
        item.style.color="white";
      }
    }
  };


const scrollFunction = () =>{
    try {
        window.addEventListener('scroll', handleScroll);
    } catch (error) {
        
    }
}



const HeaderSection = () =>{

    try {
        return(
            <>
            <div className='header'>
                <div className="header-section" id="header">
                    <div className='nav-bar'>
                    <div style={{fontWeight:"bolder"}}>
                       hexnode
                        </div>
                        {navbarContent.map((item:any)=>(<>
                        <a href={item.id}>{item.name} </a>  
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
                        {/* <div className='email-field'>
                            <input placeholder='Email'/>
                            <div className='input-button trail-button' style={{width:"auto"}}>
                                LET'S TRY IT OUT
                            </div>
                </div> */}
                </div>
                <div className='header-image'>
                <img 
    alt="Hexnode UEM" 
    fetchPriority="high" 
    width="100%" 
    height="100%" 
    decoding="async" 
    style={{color:"transparent"}}
    srcSet="https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg?w=640&q=90 1x, https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg?w=1920&q=90 2x" 
    src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg?w=1920&q=90"
/>

                </div>
            </div>
            <div className='header-company-details'> 
                    {headerCompanyList.map((item:any,index)=>(<>
                    <div>
                    <img alt="IDC" src={item.src} width={item.width} height={item.height} loading="lazy" />

                        <p style={{width:'14.2rem'}}>{item.details}</p> 
                    </div>
                    {index != headerCompanyList?.length - 1 && <>
                    
                        <div className='vertical-line'></div>
                    </> }
                   
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
            <div className="center-div">
                <img src="./images/hexnode-app-icon.svg" alt="hexnode-logo"/>
            </div>
            <div className='card-group'>
            {/* {cardDetails.map((item:any,index)=>(<> */}
            <div style={{display:"flex",flexFlow:"column",rowGap:"5rem"}}>
            <CardComponent 
                   Icon = {"/images/sample.svg"}
                   Title = {"Adapt to the new normal"}
                   Content = {"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."}
                  /> 
                  <CardComponent 
                   Icon = {"/images/tick-icon.svg"}
                   Title = {"Zero compromise security"}
                   Content = {"Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises."}
                  /> 
            </div>
                
                  <div style={{display:"flex",flexFlow:"column",rowGap:"5rem"}}>
                  <CardComponent 
                   Icon = {"/images/play-setting-icon.svg"}
                   Title = {"Get more done with automation"}
                   Content = {"Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes."}
                  /> 
                  <CardComponent 
                   Icon = {"/images/file-correct-icon.svg"}
                   Title = {"Unified Policy Management"}
                   Content = {"Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achive single pane of glass management with Hexnode."}
                  />    
                  </div>
                                                  
            {/* </>))}             */}
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
        <div className="feature-section" id="feature">
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
    src="https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/android.jpg?w=1200&q=90" 
    ></img>
   


                </div>
                <div className='platform-card-container'>
                
                {platformDetails.map((item:any,index:number)=>(<>
                {index == selectedPlatformIndex ?  <>
                    <CardComponent 
                   Icon = {item.icon}
                   Title = {item.title}
                   Content = {item.content}
                  />
                </>  : <>
                <div style={{marginInline:"1rem",cursor:"pointer"}} onClick={()=>setSelectedPlatformIndex(index)}>
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
                <div className='user-card-carousal'>
                    <button disabled={selectedUserIndex == 0} className='user-button' onClick={()=>setSelectedUserIndex((prev:any)=>(prev-1))}>
                            <img style={{opacity :  selectedUserIndex == 0 ? "0.2" : "1"}} src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"/>
                    </button>
                <UserCardCompnent 
                    Image={userDetails[selectedUserIndex].image}
                    Content = {userDetails[selectedUserIndex].content}
                    Name = {userDetails[selectedUserIndex].userName}
                    Description = {userDetails[selectedUserIndex].description}
                />
                    <button disabled={selectedUserIndex == userDetails.length - 1} className='user-button' onClick={()=>setSelectedUserIndex((prev:any)=>(prev+1))}>
                        <img style={{opacity :  selectedUserIndex == userDetails.length - 1 ? "0.2" : "1"}} src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"/>
                    </button>
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
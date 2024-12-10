

import { useEffect, useState } from 'react';
import CardComponent from '../CommonComponents/CardComponent';
import FeatureCardComponent from '../CommonComponents/FeatureCardComponent';
import UserCardCompnent from '../CommonComponents/UserCardComponent';
import './LandingPage.scss';
import '../CommonComponents/Dashed-Keyframe.scss'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

export default function LandingPage() {

    const [selectedPlatformIndex,setSelectedPlatformIndex] = useState(0);
    const [selectedUserIndex,setSelectedUserIndex] = useState(0);
    const [headerLogoimg,setHeaderLogoimg] = useState("app-main-icon-white.svg");
    const [mediaSize,setMediaSize] = useState<any>();
    


    const navbarContent = [{name:"Why Hexnode",id:"#hexnode-body"},
        {name:"Features",id:"#feature"},
        {name:"Platforms",id:"#platform-section"},{name:"Customers",id:"#customer-section"}]

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
    
        const platformDetails:any = [
            {src:"https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/android.jpg?w=1200&q=90", icon:"",title:"Android",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}, 
            {src: "https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/iOS.jpg", icon:"",title:"iOS",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}, 
            {src:"https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/macOS.jpg",icon:"",title:"macOS",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."},
            {src:"https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/windows.jpg",icon:"",title:"Windows",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."},
            {src:"https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/tvOS.jpg",icon:"",title:"tvOS",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}, 
            {src:"https://static.hexnode.com/v2/assets/img/ads-pages/multi-platforms/fireOS.jpg",icon:"",title:"FireOS",content:"Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities."}]

    const featureDetails = [{icon:"https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/zero-touch.jpg",title:"Zero-touch Enrollment",content:"Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on."},
        {icon:"https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/automation.jpg",title:"Automation",content:"Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports."},
        {icon:"https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/remote-access.jpg",title:"Remote Access Management",content:"Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation."},
        {icon:"https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/endpoint-security.jpg",title:"Endpoint Security and Compliance",content:"Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes."},
        {icon:"https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/integrations.jpg",title:"Integrations",content:"Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations."},        
        {icon:"https://static.hexnode.com/v2/assets/img/ads-pages/device-blog/app-management.jpg",title:"App Management",content:"Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included."}
    ];

    const companyLogo = [{id:1,image:"costco.svg"},{id:2,image:"marriott-intl.svg"},
        {id:3,image:"hilton.svg"},{id:4,image:"lowes.svg"},{id:5,image:"saic.svg"},{id:6,image:"costco.svg"},{id:6,image:"costco.svg"},{id:7,image:"marriott-intl.svg"},
        {id:8,image:"hilton.svg"},{id:9,image:"lowes.svg"},{id:10,image:"saic.svg"},{id:11,image:"costco.svg"}];

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
    watchMediaSize();
    hoverMethod();
},[]);

function hoverMethod(){
    try {
        
        const hoverElement:any = document.getElementById("header");
        hoverElement.addEventListener("mouseenter", function() {
            if (document.body.scrollTop < 20 && document.documentElement.scrollTop <  20) {
                setHeaderLogoimg("app-main-icon.svg")
                changeNavBarColor("black");
            }
           
})
        hoverElement.addEventListener("mouseleave", function() {
            
            if (document.body.scrollTop < 20 && document.documentElement.scrollTop <  20) {
                setHeaderLogoimg("app-main-icon-white.svg");
                changeNavBarColor("white");
            }
           
        })
    } catch (error) {
        
    }
}

function watchMediaSize(){
    try {
        setMediaSize(window.matchMedia("(max-width: 700px)"));
    } catch (error) {
        
    }
}


const handleScroll = () => {
    let element:any = document.getElementById("header");
    let navelement:any = element.getElementsByClassName("nav-bar");
    let atagElement = navelement[0].getElementsByTagName("a");
    let menuIcon:any = document.getElementsByClassName("menu-icon");
    let scrollNav:any = document.getElementsByClassName("scroll-nav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setHeaderLogoimg("app-main-icon.svg")
      element.style.background="white";
      element.style.borderBottom = "1px solid lightgrey";
      menuIcon[0].style.color = "black";
      for(let item of atagElement){
        item.style.color="black";
      }
      
    }else{
        setHeaderLogoimg("app-main-icon-white.svg")
        element.style.borderBottom ="none";
        element.style.background="";
      element.style.color="white";
       menuIcon[0].style.color = "white"
      for(let item of atagElement){
        item.style.color="white";
      }
    }

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        if(window.matchMedia("(max-width: 740px)").matches){
            scrollNav[0].style.visibility = "visible";
            scrollNav[0].style.transitiov = "opacity 0.5s ease, transform 0.5s ease, visibility 0s 0.5s;";
           }
    }else{
        scrollNav[0].style.visibility = "hidden";
        scrollNav[0].style.transitiov = "opacity 0.5s ease, visibility 0s 0s";
    }
  };


  const changeNavBarColor = (color:string) =>{
    let element:any = document.getElementById("header");
    let navelement:any = element.getElementsByClassName("nav-bar");
    let atagElement = navelement[0].getElementsByTagName("a");
    for(let item of atagElement){
        item.style.color=color;
      }
  }


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
            <header className='header' id="top-section">
                <div className="header-section" id="header">
                    <div className='nav-bar'>
                    <div style={{width:"125px",height:"auto"}}>
                        <a href='#top-section'><img src={`./images/${headerLogoimg}`} alt="Header Logo" /></a>
                    
                </div>
                        {navbarContent.map((item:any)=>(<>
                        <a className='hide-nav' href={item.id} key={item.id}>{item.name} </a>  
                        </>))}
                    </div>
                <div className='trail-button'>
                        14 DAY FREE TRAIL
                </div>
                <div className="menu-icon"  onClick={()=>openNav()}>
                  <MenuOutlined />
                  {/* <div className='trail-button trail-button-alter'>
                        14 DAY FREE TRAIL
                </div> */}
                </div>
                </div>
                <div className='scroll-nav'>
                     <div className='trail-button'>
                        14 DAY FREE TRAIL
                </div>
                </div>
            <div className='header-content'>
                <div className='header-details'>
                    <div className='opacity-low'>Unified Endpoint Management</div>
                    <div className='bold-text' style={{marginTop:"13px"}}> Gain control and visibility over your endpoints</div>
                    <p style={{fontSize:"19px",lineHeight:"32px", opacity:"0.7"}}> UEM solution allows you to simplify endpoint management and free up IT. 
                        Focus on the big picture while Hexnode works on the details.</p>
                     <div className='email-field'>
                            <input placeholder='Email'/>
                            <div className='trail-button' style={{width:"auto"}}>
                                LET'S TRY IT OUT
                            </div>
                </div> 
                </div>
                <div className='header-image'>
                <img 
    alt="Hexnode UEM" 
    width="100%" 
    height="100%" 
    decoding="async" 
    style={{color:"transparent"}} 
    src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg?w=1920&q=90"
/>
                </div>
                
            </div>
            <div className='header-company'>
            <div className='header-company-details'> 
                    {headerCompanyList.map((item:any,index:number)=>(<>
                    <div key={index}>
                    <img alt="Company" src={item.src} width={item.width} height={item.height} loading="lazy" />
                        <div className={index != headerCompanyList?.length - 1 ? "header-company-content" : ""}>
                        <p>{item.details}</p> 
                                                   {index != headerCompanyList?.length - 1 && <>

                        <div className='horizontal-line'></div>
                    </> }
                        </div>
                        
                    </div>
                    {index != headerCompanyList?.length - 1 &&  <div>
                                            
                                            <div className='vertical-line'></div>
                                        </div>}
                   
                 
                   
                    </>))}  
            </div>
            </div>


            </header>
            
            </>

        )
       
    } catch (error) {
        console.log("error in Header",error);
        
    }
}

const BodySection = () =>{
    try {
        return(<>
        <body className="body-section" id='hexnode-body'>
            <div className="heading font-bold">Why Hexnode?</div>
            <div className="border-top-right"></div>
            <div className="border-bottom-left"></div>
            <div className='border-top-left'></div>
            <div className='border-bottom-right'></div>
        <div className="row">
            <div className="column">
                <div style={{marginBottom:"70px"}}>
                <CardComponent 
                  classname = "card-container"
                   Icon = {"/images/sample.svg"}
                   Title = {"Adapt to the new normal"}
                   Content = {"Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all."}
                  />
                </div>
                <CardComponent 
                  classname = "card-container"
                   Icon = {"/images/play-setting-icon.svg"}
                   Title = {"Get more done with automation"}
                   Content = {"Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes."}
                  />
                  
            </div>
            <div className="column center-icon">
                <img src="./images/hexnode-app-icon.svg" alt="hexnode-logo" style={{zIndex:1}}/>
            </div>
            <div 
            className="column">
                <div style={{marginBottom:"70px"}}>
                <CardComponent 
                  classname = "card-container"
                   Icon = {"/images/tick-icon.svg"}
                   Title = {"Zero compromise security"}
                   Content = {"Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises."}
                  />
               
                </div>
                
                   <CardComponent 
                  classname = "card-container"
                   Icon = {"/images/file-correct-icon.svg"}
                   Title = {"Unified Policy Management"}
                   Content = {"Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achive single pane of glass management with Hexnode."}
                  />
            </div>
            </div>
            {/* </div> */}
        </body>
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
                key={item.id}
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
        <div className="platform-section" id="platform-section">
            <div className='header-content'> <div className="heading font-bold">
                Multi-platform Endpoint Management
            </div>
            <p>Devices of varying platforms? Hexnode thrives in a diverse environment.</p> </div>
            <div className="platform-content">
                <div className="platform-image">
                <img 
                className='image'
                style={{borderRadius:"30px"}}
    alt="Android Management with Hexnode UEM" 
    decoding="async" 
    src={platformDetails[selectedPlatformIndex].src}
    />
   


                </div>
                <div className='platform-card-container'>
                
                {platformDetails.map((item:any,index:number)=>(<>
                {index == selectedPlatformIndex ?  <>
                    <CardComponent 
                    key={index}
                    classname="alternate-card-container"
                   Icon = {item.icon}
                   Title = {item.title}
                   Content = {item.content}
                  />
                </>  : <>
                <div   key={index} style={{marginInline:"32px",cursor:"pointer"}} onClick={()=>setSelectedPlatformIndex(index)}>
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
        <div className='customer-container' id="customer-section">
                <div className="header-section">
                    <h2 className="heading font-bold">
                        What our customers say
                    </h2>
                </div>
                <div className='user-card-carousal'>
                    <button disabled={selectedUserIndex == 0} className='user-button user-side-button' onClick={()=>setSelectedUserIndex((prev:any)=>(prev-1))}>
                            <img style={{opacity :  selectedUserIndex == 0 ? "0.2" : "1"}} 
                            alt='previous-arrow'
                            src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"/>
                    </button>
                <UserCardCompnent 
                    Image={userDetails[selectedUserIndex].image}
                    Content = {userDetails[selectedUserIndex].content}
                    Name = {userDetails[selectedUserIndex].userName}
                    Description = {userDetails[selectedUserIndex].description}
                />
                    <button disabled={selectedUserIndex == userDetails.length - 1} className='user-button user-side-button' onClick={()=>setSelectedUserIndex((prev:any)=>(prev+1))}>
                        <img alt='next-arrow' style={{opacity :  selectedUserIndex == userDetails.length - 1 ? "0.2" : "1"}} src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"/>
                    </button>
                </div>
                <div className='user-bottom-section'>
                    <div>
                        <button disabled={selectedUserIndex == 0} className='user-button' onClick={()=>setSelectedUserIndex((prev:any)=>(prev-1))}>
                                <img alt='previous-arrow' style={{opacity :  selectedUserIndex == 0 ? "0.2" : "1"}} src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"/>
                        </button>
                    </div>
                    <div>
                        <button disabled={selectedUserIndex == userDetails.length - 1} className='user-button' onClick={()=>setSelectedUserIndex((prev:any)=>(prev+1))}>
                                    <img  alt='next-arrow' style={{opacity :  selectedUserIndex == userDetails.length - 1 ? "0.2" : "1"}} src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"/>
                                </button>
                    </div>
                    
                </div>
        </div>
        
        </>)
    } catch (error) {
        
    }
}
 
const ScrollingSection = () =>{
    try {
        return(<>
        <div className="scroll-section">
 <div id='scroll-container'>
<div id="scroll-text">
    {companyLogo.map((item:any)=>(<>
        <img alt="scroll-image"  src={`https://static.hexnode.com/v2/assets/img/logos/dark-logo/${item.image}`} />
    </>))}
    
</div>
 </div>
        </div>
        </>)
    } catch (error) {
        console.log("error in ScrollingSection",error);
        
    }
}

const FooterSection = () =>{
    try {
        return(<>
        <footer>
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
                <div>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</div>
            </div>
                
        </div>
        </footer>
      
        
        </>)
    } catch (error) {
        
    }
}

function closeNav(){
    let elem:any = document.getElementById("mySidenav");
    elem.style.width = "0px";
}

function openNav() {
    let elem:any = document.getElementById("mySidenav");
    if (mediaSize.matches) { // If media query matches
        elem.style.width = "100%";
      } else {
        elem.style.width = "550px";
      }
   
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

const SideNavbar = () =>{
    try {
        return(<>
        <div id="mySidenav" className="sidenav">
            <div  className="closebtn" onClick={()=>closeNav()}>
            <CloseOutlined />
            </div>
<hr style={{color:"rgb(215, 215, 215)",opacity:0.4}}/>
        {navbarContent.map((item:any,index:number)=>(
            <>
              <a href={item.id} onClick={()=>closeNav()}  key={index}>{item.name}</a>
              <hr style={{color:"rgb(215, 215, 215)",opacity:0.2}}/>
            </>
        ))}

                <div className='trail-button' style={{width:"auto",margin:"20px",color:"white"}}>
                        14 DAY FREE TRAIL
                </div>

            <div style={{display:"flex",justifyContent:"center"}}>
                    Login
            </div>

</div>
        </>)
    } catch (error) {
        console.log("eror in SideNavbar",error);
        
    }
}

return(<>
    {HeaderSection()}
    {BodySection()}
    {FeatureSection()}
    {MultiPlatformSection()}
    {CustomerSection()}
    {ScrollingSection()}
    {FooterSection()}
    {SideNavbar()}
</>)
}
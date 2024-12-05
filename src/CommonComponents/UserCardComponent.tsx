
import './UserCardComponent.scss';


export default function UserCardCompnent({ Image, Content, Name, Description }: any) {



    const DesignView = () => {
        try {
            return (<>
                <div className="user-card-container">
                    <div>
                        <img
                            width={"100%"}
                            height={"100%"}
                            src={Image}
                            alt="Dalibor Kruljac"
                            decoding="async"
                            style={{borderRadius:"1rem 0rem 0rem 1rem"}}
                        >
                        </img>
                    </div>
                    <div className="user-content">
                        <div style={{padding:"3rem",fontSize:"25px",fontWeight:"600"}}>
                            {Content}   
                        </div>
                        <div className="footer-content"> 
                            <div style={{fontSize:"20px",fontWeight:"bold"}}>
                                {Name}
                            </div>
                            <div style={{opacity:"0.5"}}>
                                {Description}
                            </div>
                        </div>
                    
                    </div>
                </div>

            </>)
        } catch (error) {

        }
    }
    return (<>
        {DesignView()}

    </>)

}
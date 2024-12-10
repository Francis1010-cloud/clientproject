
import './UserCardComponent.scss';


export default function UserCardCompnent({ Image, Content, Name, Description }: any) {



    const DesignView = () => {
        try {
            return (<>
                <div className="user-card-container">
                    <div>
                        <img
                        aria-label='user-photo'
                            width={"100%"}
                            height={"100%"}
                            src={Image}
                            alt="Dalibor Kruljac"
                            decoding="async"
                            className="image-class"
                        >
                        </img>
                    </div>
                    <div className="user-content">
                        <div className='user-details'>
                            "{Content}"   
                        </div>
                        <div className="footer-content"> 
                            <div className='user-name'>
                                {Name}
                            </div>
                            <div className='user-description'>
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
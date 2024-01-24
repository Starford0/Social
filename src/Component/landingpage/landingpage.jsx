import "./landingPage.css"
import { useNavigate } from "react-router-dom"
const Landingpage = () => {

    const navigate = useNavigate()
    const go=()=>{
        navigate("/login")
    }
    const go2=()=>{
        navigate("/signup")
    }
    return (
        <>
            <div className="landBox">
                <div className="Container">
                     <div className="laMid">
               <h1>WELCOME TO <br /> THE CURVE SOCIAL</h1>
                </div>
                <div className="Logsign">
                    <button className="btn" onClick={go}>LOG IN</button>
                 
                    <span> Don't have an Account? </span>
                    <div className="Loginn">
                        <h1>SIGN UP</h1>
                    </div>
                     
                
                </div>
                </div>
               

            </div>
        </>
    )
}
export default Landingpage
import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import img from "./profile.jpg"
import img2 from "./fire.png"
import img3 from "./logo.png"
import img4 from './bell.png'

  // Close the dropdown menu if the user clicks outside of it
 
const Navbar = (props) => {
	// const { setSearch } = useState("");
	// const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
    
	return (
		<nav className="navbar navbar-expand-lg" style={{backgroundColor:"#FFFFFF"}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="#"><img className='logo' height="50px" width="50px" style={{borderRadius:"50%"}} src={img3}/></a>

    <a className="navbar-brand" href="/" style={{color:"black"}}>{props.lang==="eng"?"EduConnect":"എഡ്‌മൿട്"} </a>
    {/* <li className="nav-item dropdown" style={{backgroundColor:"#053B50"}}>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#053B50"}}>
		  <img src={img4} alt="" height="50px" width="70px" style={{borderRadius:"50%"}}/>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
		
		<div className="wrapper">
  <input id="toggler" type="checkbox" className="check"/>
  <label htmlFor="toggler">
  <div className="d-flex" style={{justifyContent:"flex-end",position:"absolute",right:"0"}}>
          <span className="badge rounded-pill text-bg-danger" >3+</span></div>
    <img src={img4} alt="" height="50px" width="70px"/>
  </label>
  <div className="dropdown">
    <p className="lines">Shame Awareness: A Guide to Individual and Societal Transformation</p> 
    <p className="lines">sih postponed to 23rd september</p> 
    <p className="lines">Shame Awareness: A Guide to Individual and Societal Transformation</p>
  </div>
</div>


		
   
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
      
	  <div className="collapse navbar-collapse justify-content-end" 
             id="navbarSupportedContent">
          <ul className="navbar-nav">
			<li className="nav-item mt-3">
			<div className={`form-check form-switch text-dark`} >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{opacity:"0"}} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:"black",cursor:"pointer"}} onClick={props.handleLang}><u>{props.lang==="eng"?"മലയാളം":"English"}</u></label>
</div>
			</li>
            <li className="nav-item">
			<button className="bg-light mx-4 mt-2 rounded-pill" style={{width: "85px", height: "35px",cursor:"default",padding:"5px"}}>
			<span>0 days <img src={img2} height="18px" width="15px"/></span>

			</button>
			</li>
			
            <div className="wrapper">
			<input id="toggler2" type="checkbox" className="check"/>
  <label htmlFor="toggler2">

					<img 
                    src={img}
                    alt="" width="50" 
                    height="50" style={{borderRadius:"50%"}}/>
                
  </label>
  <div className="dropdown" id="dropdown2">
    <span style={{whiteSpace:"nowrap",cursor:"pointer"}}>{props.lang==="eng"?"Profile":"പ്രൊഫൈൽ"}</span>
    <span style={{whiteSpace:"nowrap",cursor:"pointer"}}>{props.lang==="eng"?"All Courses":"എല്ലാ കോഴ്സുകളും"}</span> 
    <span style={{whiteSpace:"nowrap",cursor:"pointer"}}>{props.lang==="eng"?"Job Portal":"തൊഴിൽ പോർട്ടൽ"}</span> 
	<Link to="/scholarship" style={{textDecoration:"none",color:"black"}}>
    <span style={{whiteSpace:"nowrap",cursor:"pointer"}}>{props.lang==="eng"?"Scholarship":"സ്കോളർഷിപ്പ്"}</span> 
	</Link>
    <span style={{whiteSpace:"nowrap",cursor:"pointer"}}>{props.lang==="eng"?"Discussion Forum":"ചർച്ചാ ഫോറം"}</span> 
    <span style={{whiteSpace:"nowrap",cursor:"pointer"}}>{props.lang==="eng"?"Logout":"പുറത്തുകടക്കുക"}</span> 
  </div>
                </div>
          </ul>
        </div>
	  {/* <img className="justify-content-end" alt="" height="50px" width="50px"  src={img} style={{borderRadius:"50%"}} /> */}
      {/* </ul> */}

      
  </div>
</nav>

	// 	<div classNameName="navbar">
	// 		<div classNameName="left">
	// 			<Link to="/" style={{ textDecoration: "none" }}>
	// 				<span>Edu</span>
	// 			</Link>
	// 			{/* conditional search bar */}
	// 			{/* <div classNameName="search">
	// 				<input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
	// 				<SearchOutlinedIcon />
	// 			</div> */}
	// 		</div>
	// 		<div classNameName="right">
	// 			{true ? <WbSunnyOutlinedIcon classNameName="icons" /> : <DarkModeOutlinedIcon classNameName="icons" />}
	// 			<div classNameName="logout">
	// 				<div classNameName="dropdown">
	// 					<button classNameName="dropdown-toggle" onClick={toggleDropdown}>
	// 						<span classNameName="name">Name</span>
	// 						<span classNameName={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
	// 					</button>
	// 					{isOpen && (
	// 						<div classNameName="dropdown-menu">
	// 							{/* <div classNameName="menu-item">
	// 								<Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }} onClick={() => setIsOpen(false)}>
	// 									<span classNameName="name">{user.name}</span>
	// 								</Link>
	// 							</div> */}
	// 							<div classNameName="menu-item">Logout</div>
	// 						</div>
	// 					)}
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// 
	);
};

export default Navbar;

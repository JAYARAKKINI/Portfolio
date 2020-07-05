import React from 'react';

import Jayarakkini from './Jayarakkini.jpg';

function App() {
  return (
    <div>
		  <div style={{float:"left",width: "30%",position: "absolute",height: "107%",backgroundColor: "#541E80",color: "white"}}><center><h1>JAYARAKKINI L</h1></center>
		  <center><img src={Jayarakkini} style={{borderRadius: "50%",width: "150px",height: "150px",border: "5px solid black"}}></img></center>
		  <center style={{fontFamily: "Serif"}}><h4>Hi, my name is Jayarakkini and I'm a software engineer.</h4></center>
		  <center><h4>Welcome to my personal website!</h4></center>
		  <center><u><h2>Find out more about me</h2></u></center>
		  <p><center><a href="#" href="https://www.facebook.com/profile.php?id=100004986466908" style={{fontSize: "28px",width: "60px",color: "#19B1FE"}}><i>FACEBOOK</i></a></center></p>
		  <p><center><a href="#" href="https://github.com/JAYARAKKINI" style={{fontSize: "28px",color: "yellow"}}><i>GITHUB</i></a></center></p>
		  <p><center><a href="#" href="https://github.com/JAYARAKKINI/ReactJS/blob/master/Daily_Task/CV_2019-07-16-070805.pdf" style={{fontSize: "28px",color: "red"}}><i>RESUME</i></a></center></p>
		  <p><center style={{fontSize: "24px",color: "white"}}><u><b><i>CONTACT</i></b></u></center></p>
		  <p><center><i href="#" style={{fontSize: "28px",color: "#19FE78"}}><b> 8778-061-059</b></i></center></p>
		  </div>
		  
		  <div style={{float:"right",width: "70%",height: "102%",backgroundImage: "linear-gradient(to bottom left,#78FCFA,#8F5BDC)"}}>
		  <div style={{float:"right",width: "98%",height: "100%",backgroundImage: "linear-gradient(to bottom left,#78FCFA,#8F5BDC)"}}>
		  
		  <center><h2 style={{color: "#541E80"}}>JAYARAKKINI L</h2>
		  <h3>Software Engineer</h3></center>
		  <hr/>
		  <p><center><b><i style={{fontSize: "20px",color: "black"}}> 8778-061-059 |</i> <i href="#" style={{fontSize: "20px",color: "black"}}> jayarakkini212@gmail.com |</i> <i href="#" class="fa fa-map-marker" style={{fontSize: "20px",color: "black"}}>PUTHUCHERRY</i></b></center></p>
		  <hr/>
		  <h3>Profile</h3>
		  <p style={{fontSize: "16px"}}>Innovative optimized solution seeker.Excited to be at the deployment phase of my new career as a Software Trainee. I am ambitious,adventurous,assiduous,animated, and an a literation advocate.</p>
		  
		  <div><div style={{float:"right",width: "50%"}}>
		  <h3>Technical Skills</h3>
		  <p>HTML & CSS</p>
			<div class="container" style={{width: "90%",backgroundColor: "#ddd"}}>
			  <div class="skills" style={{color: "White",backgroundColor: "blue",width: "90%",height: "11px",fontSize: "10px"}}><b>90%</b></div>
			</div>

			<p>CSS</p>
			<div class="container" style={{width: "90%",backgroundColor: "#ddd"}}>
			  <div class="skills" style={{color: "White",backgroundColor: "blue",width: "80%",height: "11px",fontSize: "10px"}}><b>80%</b></div>
			</div>

			<p>JavaScript</p>
			<div class="container" style={{width: "90%",backgroundColor: "#ddd"}}>
			  <div class="skills" style={{color: "White",backgroundColor: "blue",width: "85%",height: "11px",fontSize: "10px"}}><b>85%</b></div>
			</div>

			<p>Python</p>
			<div class="container" style={{width: "90%",backgroundColor: "#ddd"}}>
			  <div class="skills" style={{color: "White",backgroundColor: "blue",width: "80%",height: "11px",fontSize: "10px"}}><b>80%</b></div>
			</div>
			
			<p>Reactjs</p>
			<div class="container" style={{width: "90%",backgroundColor: "#ddd"}}>
			  <div class="skills" style={{color: "White",backgroundColor: "blue",width: "60%",height: "11px",fontSize: "10px"}}><b>60%</b></div>
			</div>
			
			<p>Nodejs</p>
			<div class="container" style={{width: "90%",backgroundColor: "#ddd"}}>
			  <div class="skills" style={{color: "White",backgroundColor: "blue",width: "65%",height: "11px",fontSize: "10px"}}><b>65%</b></div>
			</div>
		  </div>
		  <div style={{float: "left",width: "48%"}}>
		  <h3>Education</h3>
		  <ul><li><b>B.Tech</b><br/>Rajiv Gandhi College of Engineering and Technolgy<br/>6.9 CGPA</li>
		  <li><b>HSC</b><br/>Blessed Mother Theresa Model Higher Secondary School<br/>70.1 %</li>
		  <li><b>SSLC</b><br/>Blessed Mother Theresa Model Higher Secondary School<br/>80.4 %</li>
		  </ul>
		  <h3>Certification</h3>
		  <ul>
		  <li>Honours Diploma in Computer Applictaion.</li>
		  <li>Completed Python certification course in Guvi.</li>
		  <li>Completed MySQL certification course in Guvi.</li>
		  </ul>
		  <h3>Languages</h3>
		  <ul>
		  <li><b>English - </b> Read , Write</li>
		  <li><b>Tamil - </b> Read , Write</li>
		  </ul>
		  </div>
		  </div>
		  </div>
		  </div>
		  </div>
  );
}

export default App;

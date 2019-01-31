import React from 'react';
import './css/index.css';
import Usersview from './../../components/Usersview';
import Appusageview from './../../components/Appusageview';
import Appinstalledview from './../../components/Appinstalledview';
import img2 from './../../assets/images/img2.png';
import img7 from './../../assets/images/img7.png';


function Sidebuttons(props){
    return <li onClick={props.onClick} className={props.className}><img src={require('./../../assets/images/'+props.image+'.png')} alt="img"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="dlsidebuttons">{props.name}</span></li>;
}
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:'a'};
       }
      componentDidMount(){
        let dashboard = document.getElementById("dashboardlanding");
        dashboard.style.height = window.innerHeight + "px";
        let sidebuttons = document.querySelectorAll('.dlroutes ul>li');
        sidebuttons[0].classList.add('dlsidebuttonactive');
        window.addEventListener('resize',()=>{
            dashboard.style.height = window.innerHeight + "px";
        })
      }
      componentWillUnmount(){
      

      }

     
      
      render() {
          let dbview;
          if(this.state.value==='a'){
              dbview = <Usersview onClick={()=>{this.setState({value:'d'})}}/>
          }
          else if(this.state.value==='b'){
              dbview = <Appusageview />
          }
          else if(this.state.value==='d'){
              dbview = <Appinstalledview/>
          }
         
        
            return (
               <div className="dashboardlanding"  id="dashboardlanding">
                    <div className="dlsidepanel">
                        <div>
                            <div className="dloverlay"></div>
                            <img src={img2} className="dlprimeosimg" alt="img"/>
                        </div>
                        <div className="dlroutes">
                            <div>
                                <ul>
                                    <Sidebuttons name="USERS" image="img3" className={(this.state.value==="a" || this.state.value==="d") && 'dlsidebuttonactive'} onClick={()=>{
                                        this.setState({value:'a'});
                                    }}/>
                                    <Sidebuttons name="APP USAGE" className={this.state.value==="b" && 'dlsidebuttonactive'} image="img4" onClick={()=>{
                                        this.setState({value:'b'});
                                    }}/>
                                    <Sidebuttons name="RETENTION" className={this.state.value==="c" && 'dlsidebuttonactive'} image="img5" onClick={()=>{
                                        this.setState({value:'c'});
                                    }}/>
                                </ul>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                        

                    </div>
                    <div className="dlmainpanel">
                        <div className="dlmainpaneltop">
                            <p>Dashboard</p>
                            <p><img src={img7} alt="img"/>&nbsp;&nbsp;&nbsp;Refresh data</p>
                        </div>
                        <div>
                           {dbview}
                        </div>
                    </div>
               </div>
                
           )
      }

  

}




export default Sidebar;
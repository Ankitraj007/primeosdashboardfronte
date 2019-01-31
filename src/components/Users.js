import React,{Fragment} from 'react';
import axios from 'axios';
import {API_ROOT} from './../config';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userz: '',
                      userz2:'',
                      userz3:'',
                      userz4:'',
                      userz5:'',  };
        this.cardView = this.cardView.bind(this);
      }
      componentDidMount(){
        let SUBDOMAIN = "/users/"
        axios
            .get(
                API_ROOT+SUBDOMAIN,
            )
            .then(res => {
                const userz = res.data.todayinstall;
                const userz2 = res.data.totalinstall;
                const userz3 = res.data.dailyactusers;
                const userz4 = res.data.weeklyactusers;
                const userz5 = res.data.monthlyactusers;
                this.setState({ userz });
                this.setState({ userz2 });
                this.setState({ userz3 });
                this.setState({ userz4 });
                this.setState({ userz5 });
            })
            .catch(
                error =>
                {
                    console.log(error)
                }
            );
      }
      componentWillUnmount(){
      
      }
      cardView=()=>{
        
          
          if(this.props.name==='first'){
            return <div className={this.props.className}><p className="textpara">Today’s Install</p><p className="valuepara">{this.state.userz}</p></div>;
          }
          else if(this.props.name==='second'){
            return <div className={this.props.className}><p className="textpara">Total Installs</p><p className="valuepara">{this.state.userz2}</p></div>;
          }
          else if(this.props.name==='third'){
            return <div className={this.props.className}><p className="textpara">Daily Active Users(DAU)</p><p className="valuepara">{this.state.userz3}</p></div>;
          }
          else if(this.props.name==='fourth'){
            return <div className={this.props.className}><p className="textpara">Weekly Active Users(WAU)</p><p className="valuepara">{this.state.userz4}</p></div>;
          }
          else if(this.props.name==='fifth'){
            return <div className={this.props.className}><p className="textpara">Monthly Active Users(MAU)</p><p className="valuepara">{this.state.userz5}</p></div>;
          }
          return <div></div>;
      }
      render() {
            return (
               <Fragment>
                    <this.cardView/>
               </Fragment>
                
           )
      }

}

export default Users;
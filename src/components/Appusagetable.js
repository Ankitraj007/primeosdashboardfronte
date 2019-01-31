import React,{Fragment} from 'react';
import axios from 'axios';
import {API_ROOT} from './../config';

class Appusagetable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apptable: []};
        this.tableview = this.tableview.bind(this);
      }
      componentDidMount(){
        let SUBDOMAIN = "/dwi/"; 
        axios
            .get(
                API_ROOT+SUBDOMAIN,
            )
            .then(res => {
                const apptable = res.data;
                this.setState({ apptable });
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
      tableview=()=>{
          if(this.props.name === 'time'){
           let content = this.state.apptable.map(apptbl => <tr><td>{apptbl.registration_date}</td><td>{apptbl.mac_address__count}</td><td>{apptbl.mac_address__count}</td></tr>);
           return [<thead><tr><th>App name</th><th>Total time</th><th>Average time<br/>(per User)</th></tr></thead>,<tbody>{content}</tbody>]
        }
          
          else if(this.props.name === 'count'){
            let content= this.state.apptable.map(apptbl => <tr><td>{apptbl.registration_date}</td><td>{apptbl.mac_address__count}</td></tr>);
            return [<thead><tr><th>App name</th><th>Count</th></tr></thead>,<tbody>{content}</tbody>,]
           
          }
          else if(this.props.name === 'install'){
            let date = this.state.apptable.map(apptbl => apptbl.registration_date);
            let install = this.state.apptable.map(apptbl => apptbl.mac_address__count);
            let content = [];
            for(let i = 0;i<date.length;i++){
               content.push(<tr><td>{date[i]}</td><td>{install[i]}</td></tr>);
            }
            
            return [<thead><tr><th>DATE</th><th>No. of Installs</th></tr></thead>,<tbody id={this.props.id}>{content}</tbody>,]
           
          }
          else if(this.props.name === 'installoverflow'){
            let content= this.state.apptable.map(apptbl => <tr><td>{apptbl.registration_date}</td><td>{apptbl.mac_address__count}</td></tr>);
            return [<thead><tr><th>DATE</th><th>No. of Installs</th></tr></thead>,<tbody id={this.props.id}>{content}</tbody>,]
           
          }
            
          
      }
      render() {
            return (
               <Fragment>
                    <table>
                        <this.tableview/>
                    </table>
               </Fragment>
                
           )
      }

}

export default Appusagetable;
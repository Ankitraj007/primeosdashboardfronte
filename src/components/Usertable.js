import React,{Fragment} from 'react';
import axios from 'axios';
import {API_ROOT} from './../config';

class Usertable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {usertable: []};
        this.userTable = this.userTable.bind(this);
      }
      componentDidMount(){
        let SUBDOMAIN = '/dwi/'
        axios
            .get(
                API_ROOT+SUBDOMAIN,
            )
            .then(res => {
                const usertable = res.data;
                this.setState({ usertable });
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
      userTable=()=>{
          let date = this.state.usertable.map(usertable => usertable.registration_date);
          let installs = this.state.usertable.map(usertable => usertable.mac_address__count);
          let template = [];
          for(let i = parseInt(this.props.start);i<parseInt(this.props.end);i++){
          template.push(<tr><td>{date[i]}</td><td>{installs[i]}</td></tr>);
          }
          return template;
      }
      
      render() {
            return (
               <Fragment>
                    <table>
                        <tr><th>DATE</th><th>No. of Installs</th></tr>
                        <this.userTable/>
                    </table>
               </Fragment>
                
           )
      }

}

export default Usertable;
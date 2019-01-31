import React,{Fragment} from 'react';
import './css/appinstalledview.css';
import axios from 'axios';
import {API_ROOT} from './../config';
import Appusagetable from './Appusagetable';

class Appinstalledview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {appinstall: ''};
        
      }
      componentDidMount(){
        let SUBDOMAIN = "/users/"; 
        axios
            .get(
                API_ROOT+SUBDOMAIN,
            )
            .then(res => {
                const appinstall = res.data.totalinstall;
                this.setState({ appinstall });
            })
            .catch(
                error =>
                {
                    console.log(error)
                }
            );
            console.log(this.state.appinstall)
        
      }
      componentWillUnmount(){
      
      }
     
      render() {
            return (
               <Fragment>
                    <div className="dbmaintotalappinstalledview">
                        <div>
                            <div>
                                <p className="dbmaintotalinstalltext">Total Installs</p>
                                <p className="dbmaintotalinstall">{this.state.appinstall}</p>
                                <p className="dbmaintotalinstallborder"></p>
                                <Appusagetable name="install" id="installtable"/>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
               </Fragment>
                
           )
      }

}

export default Appinstalledview;
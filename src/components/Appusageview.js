import React,{Fragment} from 'react';
import Appusagetable from './Appusagetable';
import './css/appusageview.css';
class Appusageview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apptable: []};
        
      }
      componentDidMount(){
        
      }
      componentWillUnmount(){
      
      }
      render() {
            return (
               <Fragment>
                   <div className="dashboardmainappusageview">
                        <div>
                            <Appusagetable name="time"/>
                        </div>
                        <div>
                            <Appusagetable name="count"/>
                        </div>
                        
                        
                   </div>
                    
               </Fragment>
                
           )
      }

}

export default Appusageview;
import React,{Fragment} from 'react';
import Users from './Users';
import Usertable from './Usertable';
import './css/usersview.css';

class Usersview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      componentDidMount(){
        
      }
      componentWillUnmount(){
      
      }
      
      render() {
            return (
               <Fragment>
                   <div className="dashboardlandingmain">
                                <div>
                                    <Users name="first"/>
                                    <Users name="second"/>
                                </div>
                                <div>
                                    <Users name="third"/>
                                    <Users name="fourth"/>
                                    <Users name="fourth"/>
                                </div>
                                <div>
                                    <div>
                                        <Usertable start="0" end="6"/>
                                    </div>
                                    <div>
                                        <Usertable start="6" end="12"/>
                                        <span className="dlmseeall" onClick={this.props.onClick}>See All&gt;&gt;</span>
                                    </div>
                                    
                                </div>
                                
                                
                    </div>
               </Fragment>
                
           )
      }

}

export default Usersview;
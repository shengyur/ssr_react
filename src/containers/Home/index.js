import React from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeList} from './store/actionCreaters';

class Home extends React.Component{
    componentDidMount(){
        this.props.getHomeList()
    }

    render(){
        return <div>
        <Header/>
        this is {this.props.name}
        <button onClick={()=>{alert('click')}}>
            click me!
        </button>
    </div>
    }
}

const mapStateToProps = state =>({
    name:state.home.name
})

const mapDispatchToProps = dispatch =>({
    getHomeList(){
        dispatch(getHomeList())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);

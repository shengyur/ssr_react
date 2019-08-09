import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actionCreaters';

class Home extends React.Component {
    componentDidMount() {
        this.props.getHomeList()
    }

    getList() {
        const { list } = this.props;
        return list && list.map((item) => {
            return <div key={item.id}>{item.vendorName}</div>
        })
    }

    render() {
        return <div>
            <Header />
            <button onClick={() => { alert('click') }}>
                click me!
            </button>
            <hr />
            getlist:
            {this.getList()}
        </div>
    }
}

Home.loadData = (store) => {
    //在服务端渲染之前，把路由需要的数据 提前加载好
    return store.dispatch(getHomeList())
}


const mapStateToProps = state => {
    return {
        list: state.home.newsList,
    }
}

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

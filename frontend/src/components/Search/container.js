import React, {Component} from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
    state = {
        loading:true
    };
    static propTypes = {
        searchByTerm: PropTypes.func.isRequired,
        userList: PropTypes.array
    };
    componentDidMount() {
        const { searchByTerm } = this.props;
        searchByTerm();
    }
    componentDidUpdate(prevProps, prevState) {
        const { searchByTerm } = this.props;
        if (prevProps.match.params !== this.props.match.params) {
          searchByTerm();
        }
      }
    componentWillReceiveProps = nextProps => {
        const { searchByTerm, pathname } = this.props;
        if(nextProps.userList) {
            this.setState({
                loading: false
            });
        }
        if (nextProps.pathname !== pathname) {
            searchByTerm();
        }
    };
    render() {
        const {userList} = this.props;
        return <Explore {...this.state} userList={userList} />;
    }
}

export default Container;
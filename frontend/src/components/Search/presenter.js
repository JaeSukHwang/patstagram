import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";

const Search = (props) => {
    return (
        <div className="search">
            <div className="section">
                <h4 className="title">Users</h4>
                {props.loading && <Loading/>}
                {!props.loading && props.userList.length < 1 && (<NotFound text={"데이터가 없습니다"} />
                )}
                {!props.loading && props.userList.length > 0 && (<RenderUserSearch userList={props.userList} />
                )}
            </div>
            {/* <div className="section">
                <h4 className="title">Photos</h4>
                {props.loading && <Loading/>}
                {!props.loading && props.imageList.length < 1 && (<NotFound text={"데이터가 없습니다"} />
                )}
            </div> */}
        </div>
    );
};

const RenderUserSearch = props => (
    <div className="search">
        {props.userList.map(user => (
            <UserRow big={true} user={user} key={user.id} />
        ))}
    </div>
);

const NotFound = props => <span className="notFound">{props.text}</span>

Search.propTypes = {
    loading: PropTypes.bool.isRequired,
    imageList: PropTypes.array,
    userList: PropTypes.array    
};

export default Search;
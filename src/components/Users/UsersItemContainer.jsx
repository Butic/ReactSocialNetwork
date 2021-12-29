import React from 'react';
import { connect } from 'react-redux';
import { addMyDataActionCreator, followActionCreator, goToPageActionCreator, toggleFetchingActionCreator, totalPagesCounterActionCreator, userListActionCreator } from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import PreLoader from '../UI/PreLoader';

class UsersItem extends React.Component {

    componentDidMount() {
        if (this.props.users.length == 0) {
            this.props.toggleFetching(true);
            setTimeout(() => {
                axios.get(`http://localhost:8000/users/${this.props.current_id}`).then(response1=>{
                    this.props.addMyData(response1.data)
                }).then(axios.get(`http://localhost:8000/users?_page=${this.props.currentPage}`)
                .then(responce2 => {
                    this.props.toggleFetching(false);
                    this.props.totalPages(Math.ceil(responce2.headers["x-total-count"] / 10));
                    this.props.usersList(responce2.data);
                })
                )
            }, 2500);
        }
    }

    goToPage = (pageNum) => {
        this.props.toggleFetching(true);
        this.props.goToPage(pageNum);
        setTimeout(() => {
            axios.get(`http://localhost:8000/users?_page=${pageNum}`).then(responce => {
                this.props.toggleFetching(false);
                this.props.usersList(responce.data);
            })
        }, 2000);
    }
    
    render() {
        return (
            <>
                {this.props.isFetching && <PreLoader />}
                <Users subscribesArray={this.subscribesArray} subscribes={this.props.subscribes} current_id={this.props.current_id} follow={this.props.follow} goToPage={this.goToPage} users={this.props.users} totalPagesNumber={this.props.totalPagesNumber} currentPage={this.props.currentPage} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        currentPage: state.usersData.currentPage,
        totalPagesNumber: state.usersData.totalPages,
        isFetching: state.usersData.isFetching,
        current_id: state.usersData.current_id,
        subscribes: state.usersData.subscribes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow(id) {
            dispatch(followActionCreator(id))
        },
        usersList(users) {
            dispatch(userListActionCreator(users))
        },
        goToPage(pageNum) {
            dispatch(goToPageActionCreator(pageNum))
        },
        totalPages(totalPages) {
            dispatch(totalPagesCounterActionCreator(totalPages))
        },
        toggleFetching(isFetching) {
            dispatch(toggleFetchingActionCreator(isFetching))
        },
        addMyData(data){
            dispatch(addMyDataActionCreator(data))
        }
    }
}

const UsersItemContainer = connect(mapStateToProps, mapDispatchToProps)(UsersItem);

export default UsersItemContainer;
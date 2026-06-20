function UserGreting(props){
    return(
        <div>
            {props.isLoggedin ? <h1>Welcome {props.username}</h1> : <h1>Welcome Guest</h1>}
        </div>
    )

}
export default UserGreting ; 
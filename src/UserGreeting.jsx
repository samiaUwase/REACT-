
import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcomemsg= <h2>WELCOME {props.name}</h2>

const loginPrompt=<h2>Please login to continue</h2>

return(props.isLoggedIn ? welcomemsg :loginPrompt);
}
UserGreeting.protoTypes={
    isLoggedIn:PropTypes.bool,
    name: PropTypes.string,
}
export default UserGreeting; 
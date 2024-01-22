
const Validation = (email,password) => {
    const emailMessage        = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email) ;
    const passwordMessage     = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ;
    // const usernameMessage     = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username) ;

    if( !emailMessage){
        return "email is invalid "
    }
    if( !passwordMessage  ){
        return "password is invalid "
    }
    
    return null ;
}

export default Validation
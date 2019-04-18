import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common["Authorization"] = token; //we place every time token = authorization with respect to user req

    }
    else{
        delete axios.defaults.headers.common["Authorization"]
    }
}

export default setAuthToken;
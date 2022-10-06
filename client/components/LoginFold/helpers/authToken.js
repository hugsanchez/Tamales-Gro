import axios from 'axios';

const authToken = async(creds) => {
  try{
    const { data: res } = await axios.post('/api/auth', creds);
    const { token } = res;

    window.localStorage.setItem('token', token);
  } catch(err){
    throw err;
  }
};

export default authToken;
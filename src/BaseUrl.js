import axios from 'axios';

const axiosInstance = axios.create({

  //server api


//local api


  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance
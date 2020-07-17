import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID t5sAyZ1dPSLEJC9X1nb0_JL46d2exQV8hTWB9P-86qI',
  }
});

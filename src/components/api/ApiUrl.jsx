import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/',
});

export default apiUrl;

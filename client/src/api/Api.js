import axios from 'axios';
let myUrl='http://localhost:8000/api/';
if(process.env.NODE_ENV === 'production'){
    myUrl = 'api';
}
console.log(myUrl);

export default axios.create({
    baseURL: myUrl,
})
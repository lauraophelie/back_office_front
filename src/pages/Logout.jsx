import Cookies from 'js-cookie';

function Logout(){
    user = Cookies.get("user");

    axios.post('https://voiturebackendrelationnel-production.up.railway.app/rest/auth/logout', {
        email: { email },
        token:  { token}
       })
       .then((response) => {
        console.log(response.data);
        Cookies.remove('userid');
        Cookies.remove('username');
        Cookies.remove('email');
        Cookies.remove('token');
        navigate('/Login');
       })
       .catch((error) => {
        console.error(error);
       });
}
export default Logout;
import Cookies from 'js-cookie';

function Logout(){
    token = Cookies.get("token");

    const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

    axios.post('https://voiturebackendrelationnel-production.up.railway.app/rest/auth/logout', config)
       .then((response) => {
        console.log(response.data);
        Cookies.remove('email');
        Cookies.remove('token');
        navigate('/Login');
       })
       .catch((error) => {
        console.error(error);
       });
}
export default Logout;
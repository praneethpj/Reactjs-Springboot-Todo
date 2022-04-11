import { useHistory, useLocation, useParams } from 'react-router';

const MainPage = () => {

    const history = useHistory();

    let user = localStorage.getItem('usernames');

    if (user===null ||user === 'undefined' || user === '' || user.trim() === "" ) {

        history.push("/😃");

    } else {
        console.log(user);
        history.push("/💡");


    }


};

export default MainPage
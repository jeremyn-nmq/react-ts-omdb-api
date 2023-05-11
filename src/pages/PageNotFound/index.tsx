import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import Loading from '../../components/Loading';

function PageNotFound() {
  const navigate = useNavigate()
  // Auto redirects the user back to the homepage after 3 seconds
  useEffect(() => {
    const nav = setTimeout(() => {
      navigate('/')
    },3000)
    return () => {
      clearTimeout(nav)
    };
  });

  return (
    <>
      <div className="board">
        <p className="error"> Error </p>
        <p> 404 </p>
        <p className="error message"> Don't worry, we'll take you back home now! </p>
        <Loading/>
      </div>
    </>
  );
}

export default PageNotFound;

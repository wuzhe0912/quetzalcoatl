import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCheck,
  faLock,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div className='login-wrap'>
      <div className='box login-box'>
        <div className='field login-title'>
          <div className='title-icon'>
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          <h2>Store App</h2>
        </div>
        <div className='field'>
          <div className='control has-icons-left has-icons-right'>
            <input className='input' type='text' placeholder='Username' />
            <span className='icon is-small is-left'>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className='icon is-small is-right'>
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </div>
          {/* <p className='help is-success'>This username is available</p> */}
        </div>
        <div className='field'>
          <p className='control has-icons-left'>
            <input className='input' type='password' placeholder='Password' />
            <span className='icon is-small is-left'>
              <FontAwesomeIcon icon={faLock} />
            </span>
          </p>
        </div>
        <div className='field'>
          <p className='control'>
            <button className='button is-success'>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

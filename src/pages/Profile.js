import React, { useEffect } from 'react';
import {
  useHistory,
  Link,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

const Profile = ({ login }) => {
  const history = useHistory();
  useEffect(() => {
    if (!login) {
      history.push('/');
    }
  }, [login, history]);

  const { path, url } = useRouteMatch();
  return (
    <>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
};

export default Profile;

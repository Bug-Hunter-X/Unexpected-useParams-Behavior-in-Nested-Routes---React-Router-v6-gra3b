The solution involves restructuring the component tree to ensure `useParams` is used within a component directly under the route defining the relevant parameters. Alternatively, you can pass the parameters down through props from a parent component that does have access to the correct parameters.

```javascript
// NestedRoutesSolution.jsx

import { useParams, useLocation } from 'react-router-dom';

function UserDetail() {
  const params = useParams();
  return (
    <div>User ID: {params.userId}</div>
  );
}

function UserProfile(){
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('userId');
  return (
    <div>User ID from URLSearchParams : {userId}</div>
  );
}

function Users() {
  return (
    <div>
       <UserDetail/>
    </div>
  );
}
export default Users;
```
import { withAuthenticationRequired } from "@auth0/auth0-react";

function Dashboard() {
  return <div className="container-fluid">
    <h1>Dashboard</h1>
  </div>;
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting : () => <h1>Redirecting you to login</h1>
})
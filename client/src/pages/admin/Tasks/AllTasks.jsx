import { withAuthenticationRequired } from "@auth0/auth0-react";

function AllTasks() {
  return (
    <>
      <div className="container-fluid">
        <div className="h1">Manage All Tasks</div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(AllTasks, {
  onRedirecting: () => <h1>Redirecting for login</h1>,
});

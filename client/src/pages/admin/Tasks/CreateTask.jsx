import { withAuthenticationRequired } from "@auth0/auth0-react"

function CreateTask() {
    return <div className="container-fluid">
        <h1>Create Task</h1>
    </div>
}

export default withAuthenticationRequired(CreateTask, {
    onRedirecting : () => <h1>Redirecting to Login</h1>
})
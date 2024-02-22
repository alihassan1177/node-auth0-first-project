import { withAuthenticationRequired } from "@auth0/auth0-react"

function EditTask() {
    return <div className="container">
        <h1>Edit Task</h1>
    </div>
}


export default withAuthenticationRequired(EditTask, {
    onRedirecting : ()=> <h1>Redirecting to login</h1>
})
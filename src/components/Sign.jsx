import './SignStyle.css'

function Sign() {
    return (
        <div className="form-container">
            <h1>Sing Up Here </h1>
            <form>
                <input placeholder='Name' type='text' />
                <input placeholder='Email' type='email' />
                <input placeholder='Phone No.' />
                <input placeholder='Password' type='password' />
                <input placeholder='Confirm Password' />
                <div className="sb"><
                    button>Sign Up</button>
                    <button>Sign In</button>
                </div>

            </form>
        </div>
    )
}
export default Sign;
const Navbar = () => {
    return (
        <div className="mx-7 my-3">
            <div className="flex justify-between items-center">
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <ul className="flex justify-between items-center gap-5">
                        <li>Login</li>
                        <li>
                            <button className="signupbutton">Sign up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

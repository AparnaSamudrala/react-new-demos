

function FormLayout2() {
    return (
        <div className="container">

            <h2 className="text-center">Registration</h2>

            <form className="w-100">

                <hr className="w-100 border-width-2" />

                <div className="form-check-inline">
                    <label className="form-check-label" htmlFor="radio1">
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="personal" defaultChecked />Personal
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label" htmlFor="radio2">
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Company" />Company
                    </label>
                </div>
                <hr className="w-100 border-width-2" />

                <div className="input-group  form-group">
                    <div className="input-group-addon input-group-prepend"><i className="fa fa-envelope input-group-text"></i></div>
                    <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                </div>

                <div className="input-group  form-group">
                    <div className="input-group-addon input-group-prepend"><i className="fa fa-user input-group-text"></i></div>
                    <input id="firstName" type="text" className="form-control" name="firstname" placeholder="Name" />
                </div>
                <div className="input-group  form-group">
                    <div className="input-group-addon input-group-prepend">
                        <i className="fa fa-lock input-group-text"></i></div>
                    <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <hr className="w-100 border-width-2" />

                <div className="form-check-inline">
                    <label className="form-check-label" htmlFor="radiog1">
                        <input type="radio" className="form-check-input" id="radiog1" name="optradiogender" value="Male" defaultChecked />Male
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label" htmlFor="radiog2">
                        <input type="radio" className="form-check-input" id="radiog2" name="optradiogender" value="Female" />Female
                    </label>
                </div>
                <hr className="w-100 border-width-2" />

                <div className="center">
                    <input type="submit" value="Submit" />
                </div>

            </form>
            <br />


        </div>
    )
}

export default FormLayout2;



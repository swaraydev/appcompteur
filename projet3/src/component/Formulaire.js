import React from "react";
import Textarea from "./Textarea";
import Select from "./Select";
export default function Formulaire() {
    return (

        <div className="row">
            <div className="col-3"></div>
            <form className="col-6">

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Enter your first name:</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="first name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Enter your second name:</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="second name" />
                </div>
              
                <Textarea />
                <Select />

                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </div>


    )
}
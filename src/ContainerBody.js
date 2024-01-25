
function ContainerBody(props) {

    const { handleCheckboxChange, selectBoxJsonResponse, handleInputChange, handleSubmitButton, formData, checkBoxJsonResponse } = props;

    return (
        <div className="container-md">
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">

                    <form onSubmit={handleSubmitButton}>
                        <div className="row align-items-start mt-4">
                            <div className="col-4">
                                Full Name
                            </div>
                            <div className="col-8">
                                <input type="text" className="form-control" placeholder="First and Last Name" value={formData.fullname} id="fullname" name="fullname" onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="row align-items-start mt-4">
                            <div className="col-4">
                                Date of Birth
                            </div>
                            <div className="col-8">
                                <input type="date" className="form-control" placeholder="Date of birth" value={formData.dob} id="dateofbirth" name="dob" onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="row align-items-start mt-4">
                            <div className="col-4">
                                Preferred Location
                            </div>
                            <div className="col-8">
                                <select className="form-select" name="preferredlocation" defaultValue={formData.preferredlocation} onChange={handleInputChange}>
                                    <option disabled value="">select an option</option>
                                    {selectBoxJsonResponse.map((selectval) => (
                                            <option key={selectval.id} value={selectval.label}>{selectval.label}</option>
                                        )
                                    )}
                                    
                                </select>
                            </div>
                        </div>

                        <div className="row align-items-start mt-4">
                            <div className="col-4">
                                Programming Skills
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    { checkBoxJsonResponse.map((checkbox) => (
                                            <div key={checkbox.id} className="col-6 mb-3">
                                                <div className="form-check">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox"
                                                        checked={checkbox.isChecked?true:false} 
                                                        name="flexCheckDefault"
                                                        onChange={() => handleCheckboxChange(checkbox.id)}
                                                    />
                                                    <label className="form-check-label">
                                                        {checkbox.label}
                                                    </label>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>                            
                            </div>
                        </div>

                        <div className="row align-items-start mt-4">
                            <div className="col-4">
                                Resume Summary
                            </div>
                            <div className="col-8">
                                <textarea className="form-control" rows="3" id="resumesummary" name="resumesummary" value={formData.resumesummary} onChange={handleInputChange}></textarea>
                            </div>
                        </div>

                        <div className="row align-items-start mt-4">
                            <div className="col-4"></div>
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default ContainerBody;
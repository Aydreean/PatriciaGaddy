import React from 'react'

const ConsultationForm = () => {
    return (
        <div className="container-fluid consultationform" id="form">
            <div className="row">
                <div className="col-lg-12">
                    <div className="formdiv">
                        <h4>Request Consultation</h4>
                        <form name="consultForm" method="POST" action="https://getform.io/f/98c981f6-d013-4d95-942b-09cee44addc7">
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="text" className="form-control" placeholder="Name" name="Name"></input>
                            <input type="text" className="form-control" placeholder="Phone" name="Phone"></input>
                            <input type="text" className="form-control" placeholder="Email" name="Email"></input>
                            <textarea rows="10" className="form-control" placeholder="How Can We Help?" name="Message"></textarea>
                           <button type="submit" className="btn">Email Our Office</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultationForm

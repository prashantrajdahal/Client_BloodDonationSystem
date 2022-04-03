import React from 'react';

const Donatefund =() =>{
    return(
        <div className='donatefund-container'>
        
        <div className='leftside'>
            <h1 style={{marginLeft:"20rem",marginTop:"2rem"}}>We appreciate your support !!!</h1>
            
                <div className="row wrapper">
                            <div className="col-10 col0lg-5">
                                <form className="shadow-lg p-3 mb-5 bg-white rounded"  encType='multipart/form-data'>
                                    <h1 className="mb-3">Donate FUNDS HERE!!</h1>
                                
                                    <div className="form-group">
                                    <label htmlFor="email_field">Name</label>
                                    <input
                                        type="name"
                                        id="name_field"
                                        className="form-control"
                                        name='name'
                                        
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        name='email'
                                        
                                    />
                                    </div>
                                    
                                    <div className="form-group">
                                    <label htmlFor="amount_field">you can send here through ESEWA</label>
                                    <input
                                        type="text"
                                        id="amount_field"
                                        className="form-control"
                                        name='amount'
                                        placeholder='9800000000'
                                    />
                                    
                                    </div>
                                    
                                    <div className="form-group">
                                    <label htmlFor="bloodType_field">Address</label>
                                    <input
                                        type="text"
                                        id="address_field"
                                        className="form-control"
                                        name='bloodType'
                                        
                                    />
                                    
                                    </div>
                                    <button
                                        id="submit-button"
                                        type="submit"
                                        className="btn btn-block py-3"
                                    
                                        
                                    >
                                        Submit
                                    </button>
                              </form>  
                        </div>
                        </div>
            </div>
                
  </div>
    );
}

export default Donatefund;
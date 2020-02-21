import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            //  <!-- Vertically centered modal start -->
             <div className="col-lg-6 mt-5">
             <div className="card">
                 <div className="card-body">
                     <div className="" id="exampleModalCenter">
                         <div className="modal-dialog modal-dialog-centered" role="document">
                             <div className="modal-content">
                                 <div className="modal-header">
                                     <h5 className="modal-title">Item Detaila</h5>
                                     <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                                 </div>
                                 <div className="modal-body">
                                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates explicabo natus nobis, aperiam placeat aliquid nisi ut exercitationem dolor quisquam nam tempora voluptatem. Unde dignissimos est aliquid quidem porro dolorum ipsam suscipit animi quas, debitis ea, sunt quo distinctio doloribus eveniet dolores tempore delectus voluptatum! Possimus earum asperiores animi.</p>
                                 </div>
                                 <div className="modal-footer">
                                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                     <button type="button" className="btn btn-primary">Save changes</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>   
         </div>
         
        //  <!-- Vertically centered modal end -->
        );
    }
}

export default Modal;
import React from 'react';
import Header from './Header'

function HomePage(props) {
    return (
        // <div>
        //     <div id="preloader">
        //         <div class="loader"></div>
        //     </div>
  
  <div className="page-container">
      {/* <!-- sidebar menu area start --> */}
      <div className="sidebar-menu">
          <div className="sidebar-header">
              <div className="logo">
                  <a href="index.html"><img src="assets/images/icon/logo.png" alt="logo" /></a>
              </div>
          </div> 
          <div className="main-menu">
              <div className="menu-inner">
                  <nav>
                      <ul className="metismenu" id="menu">
                          <li className="active">
                              <a href="javascript:void(0)" aria-expanded="true"><i className="ti-dashboard"></i><span>dashboard</span></a>
                              <ul className="collapse">
                                  <li className="active"><a href="index.html">My Coin Dashboard</a></li>
                                  <li><a href="index2.html">Ecommerce dashboard</a></li>
                                  <li><a href="index3.html">SEO dashboard</a></li> 
                              </ul>
                          </li>
                          
                      </ul>
                  </nav>
              </div>
          </div>
      </div>
      {/* <!-- sidebar menu area end -->
      <!-- main content area start --> */}
      <div className="main-content">
          {/* <!-- header area start --> */}
          <div className="header-area">
              <div className="row align-items-center">
                  {/* <!-- nav and search button --> */}
                  <div className="col-md-6 col-sm-8 clearfix">
                      <div className="nav-btn pull-left">
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      
                  </div>

                  <div className="col-md-6 col-sm-4 clearfix">
                    <ul className="notification-area pull-right">
                        <li id="full-view"><i className="ti-fullscreen"></i></li>
                        <li id="full-view-exit"><i className="ti-zoom-out"></i></li>
                        <li className="dropdown">
                            <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
                                <span>2</span>
                            </i>
                            <div className="dropdown-menu bell-notify-box notify-box">
                                <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                                <div className="nofity-list">
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                        <div className="notify-text">
                                            <p>You have Changed Your Password</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-comments-smiley btn-info"></i></div>
                                        <div className="notify-text">
                                            <p>New Commetns On Post</p>
                                            <span>30 Seconds ago</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-primary"></i></div>
                                        <div className="notify-text">
                                            <p>Some special like you</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-comments-smiley btn-info"></i></div>
                                        <div className="notify-text">
                                            <p>New Commetns On Post</p>
                                            <span>30 Seconds ago</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-primary"></i></div>
                                        <div className="notify-text">
                                            <p>Some special like you</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                        <div className="notify-text">
                                            <p>You have Changed Your Password</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                        <div className="notify-text">
                                            <p>You have Changed Your Password</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown">
                            <i className="fa-envelope dropdown-toggle" data-toggle="dropdown"><span>3</span></i>
                            <div className="dropdown-menu notify-box nt-enveloper-box">
                                <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                                <div className="nofity-list">
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb">
                                            <img src="assets/images/author/author-img1.jpg" alt="image" />
                                        </div>
                                        <div className="notify-text">
                                            <p>Aglae Mayer</p>
                                            <span className="msg">Hey I am waiting for you...</span>
                                            <span>3:15 PM</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb">
                                            <img src="assets/images/author/author-img2.jpg" alt="image" />
                                        </div>
                                        <div className="notify-text">
                                            <p>Aglae Mayer</p>
                                            <span className="msg">When you can connect with me...</span>
                                            <span>3:15 PM</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb">
                                            <img src="assets/images/author/author-img3.jpg" alt="image" />
                                        </div>
                                        <div className="notify-text">
                                            <p>Aglae Mayer</p>
                                            <span className="msg">I missed you so much...</span>
                                            <span>3:15 PM</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb">
                                            <img src="assets/images/author/author-img4.jpg" alt="image"/>
                                        </div>
                                        <div className="notify-text">
                                            <p>Aglae Mayer</p>
                                            <span className="msg">Your product is completely Ready...</span>
                                            <span>3:15 PM</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb">
                                            <img src="assets/images/author/author-img2.jpg" alt="image"/>
                                        </div>
                                        <div className="notify-text">
                                            <p>Aglae Mayer</p>
                                            <span className="msg">Hey I am waiting for you...</span>
                                            <span>3:15 PM</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb">
                                            <img src="assets/images/author/author-img1.jpg" alt="image"/>
                                        </div>
                                        <div className="notify-text">
                                            <p>Aglae Mayer</p>
                                            <span className="msg">Hey I am waiting for you...</span>
                                            <span>3:15 PM</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb">
                                            <img src="assets/images/author/author-img3.jpg" alt="image"/>
                                        </div>
                                        <div className="notify-text">
                                            <p>Aglae Mayer</p>
                                            <span className="msg">Hey I am waiting for you...</span>
                                            <span>3:15 PM</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li> 
                        <li className="settings-btn">
                            <i className="ti-settings"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

         {/* <!-- page title area start --> */}
         <div className="page-title-area">
          <div className="row align-items-center">
              <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                      <h4 className="page-title pull-left">Dashboard</h4>
                      <ul className="breadcrumbs pull-left">
                          <li><a href="index.html">Home</a></li>
                          <li><span>Dashboard</span></li>
                      </ul>
                  </div>
              </div>
              <div className="col-sm-6 clearfix">
                  <div className="user-profile pull-right">
                      <img className="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar"/>
                      <h4 className="user-name dropdown-toggle" data-toggle="dropdown">Michael Cooper <i className="fa fa-angle-down"></i></h4>
                      <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Message</a>
                          <a className="dropdown-item" href="#">Settings</a>
                          <a className="dropdown-item" href="#">Log Out</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        </div>
        </div>
    );
}

export default HomePage;
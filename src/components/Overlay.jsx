import React from 'react';
// import example from './metisMenu.min';
// import "./metisMenu.min";

const overlay =  (props) => {
        return (
                

  
  
  <div className="page-container">
      
      <div className="sidebar-menu">
          
          <div className="main-menu">
              <div className="menu-inner">
                  <nav>
                      <ul className="metismenu" id="menu">
                          <li className="active">
                              <a href="/" aria-expanded="true"><i className="ti-dashboard"></i><span>dashboard</span></a>
                              <ul className="collapse">
                                  <li className="active"><a href="/">My Coin Dashboard</a></li>
                                  
                              </ul>
                          </li>
                          
                      </ul>
                  </nav>
              </div>
          </div>
      </div>
      
      
      <div className="main-content">
          
          <div className="header-area">
              <div className="row align-items-center">
                  
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
                                <span className="notify-title">You have 3 new notifications <a href="/view-all">view all</a></span>
                                <div className="nofity-list">
                                    <a href="/notify" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                        <div className="notify-text">
                                            <p>You have Changed Your Password</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="/notify" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-comments-smiley btn-info"></i></div>
                                        <div className="notify-text">
                                            <p>New Commetns On Post</p>
                                            <span>30 Seconds ago</span>
                                        </div>
                                    </a>
                                    <a href="/notify" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-primary"></i></div>
                                        <div className="notify-text">
                                            <p>Some special like you</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="/notify" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-comments-smiley btn-info"></i></div>
                                        <div className="notify-text">
                                            <p>New Commetns On Post</p>
                                            <span>30 Seconds ago</span>
                                        </div>
                                    </a>
                                    <a href="/notify" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-primary"></i></div>
                                        <div className="notify-text">
                                            <p>Some special like you</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="/notify" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                        <div className="notify-text">
                                            <p>You have Changed Your Password</p>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="/notify" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                        <div className="notify-text">
                                            <p>You have Changed Your Password</p>
                                            <span>Just Now</span>
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

         
         <div className="page-title-area">
          <div className="row align-items-center">
              <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                      <h4 className="page-title pull-left">Dashboard</h4>
                      <ul className="breadcrumbs pull-left">
                          <li><a href="/">Home</a></li>
                          <li><span>Dashboard</span></li>
                      </ul>
                  </div>
              </div>
              <div className="col-sm-6 clearfix">
                  <div className="user-profile pull-right">
                      <img className="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar" />
                      <h4 className="user-name dropdown-toggle" data-toggle="dropdown">Michael Cooper <i className="fa fa-angle-down"></i></h4>
                      <div className="dropdown-menu">
                          <a className="dropdown-item" href="/message">Message</a>
                          <a className="dropdown-item" href="/settings">Settings</a>
                          <a className="dropdown-item" href="logout">Log Out</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
            </div>
            </div>
        
        );
}

export default overlay;
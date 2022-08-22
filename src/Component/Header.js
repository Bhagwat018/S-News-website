import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className='contaner'>
        <div className="contaner2">
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                          
                            <h1 className='same'>Top News </h1>
                            <p id='Gopal'>Created by: Gopal Bhagwat V8</p>
                        </div>
                     
                        <div className="row">
                        <div className="col-lg-12 ">
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 justify-content-evenly">
                            <div className="box">
                                {/* <img src="https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3NwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
                                <img src="https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3NwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="rounded float-start" alt="..."/>


                            </div>
                        </div>
                        <div className="col-lg-4">
                             <div className="box">
                                {/* <img src="" alt="" /> */}
                                <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG5ld3NwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="rounded float-center" alt="..."/>
                            </div>
                        </div>
                       
                    </div>

              
                 </div>
                </div>
            </div>
        </div>


        <div className="row">
                    <div className="col-lg-12">
                        <h1 className='same'> The  Most Popular News Blogs on the Internet</h1>
                    </div>

      </div>
    </div>
    </div>
  )
}

export default Header

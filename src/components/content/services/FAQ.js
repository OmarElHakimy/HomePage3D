import React from 'react';
import Title from "../title";
import "./FAQ.css"
import menu1 from "../../../assets/menu1.png";
import menu2 from "../../../assets/menu2.png";
const FAQ = () => {

    return (
        <div className='mt-5' style={{marginLeft: "250px", marginRight: "250px"}}>
            <Title title="FAQ">FREQUENTLY ASKED QUESTION</Title>
            <div style={{marginBottom: "100px"}}>
                <ul className="nav my-4">
                    <li className="nav-item">
                        <a className="nav-link active text-center text-white fw-bold" style={{width: "165px", padding: "20px 10px", margin: "6px", borderRadius: "30px 30px 30px 0px"}} data-bs-toggle="tab" href="#menu1">
                            <p className='bi bi-virus fs-1'></p>
                            <p>Menu 1</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-center text-white fw-bold" style={{width: "165px", padding: "20px 10px", margin: "6px", borderRadius: "30px 30px 30px 0px"}} data-bs-toggle="tab" href="#menu2">
                            <p className='bi bi-virus2 fs-1'></p>
                            <p>Menu 2</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-center text-white fw-bold" style={{width: "165px", padding: "20px 10px", margin: "6px", borderRadius: "30px 30px 30px 0px"}} data-bs-toggle="tab" href="#menu3">
                            <p className='bi bi-virus fs-1'></p>
                            <p>Menu 3</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-center text-white fw-bold" style={{width: "165px", padding: "20px 10px", margin: "6px", borderRadius: "30px 30px 30px 0px"}} data-bs-toggle="tab" href="#menu4">
                            <p className='bi bi-virus2 fs-1'></p>
                            <p>Menu 4</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-center text-white fw-bold" style={{width: "165px", padding: "20px 10px", margin: "6px", borderRadius: "30px 30px 30px 0px"}} data-bs-toggle="tab" href="#menu5">
                            <p className='bi bi-virus fs-1'></p>
                            <p>Menu 5</p>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane container active" id="menu1">
                        <div className='row'>
                            <div className='col-6'>
                                <img src={menu1} style={{width: "100%", height: "300px"}}/>
                            </div>
                            <div className='col-6'>
                                <h3 className='bold'>What can I do to prevent myself?</h3>
                                <p>Quisque egestas felis sed lacus tincidunt tristique. Vestibulum pat sit amet augue sed volutpat. Phasellus ultrices auctor posuere. Ali uam dap hendrerit justo id est. Nunc elementum purus at libero ultrices, sit amet ornare purus lobortis. Proin justo massa, mollis a urna sit amet.</p>
                                <ol>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Aenean in ex vitae tellus lobortis venenatis.</li>
                                    <li>Nunc egestas ipsum ac erat lacinia, sed posuere est viverra.</li>
                                    <li>Quisque maximus nibh a ex accumsan, a vulputate turpis suscipit.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="menu2">
                        <div className='row'>
                            <div className='col-6'>
                                <img src={menu2} style={{width: "100%", height: "300px"}}/>
                            </div>
                            <div className='col-6'>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="menu3">
                        <div className='row'>
                            <div className='col-6'>
                                <img src={menu1} style={{width: "100%", height: "300px"}}/>
                            </div>
                            <div className='col-6'>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="menu4">
                        <div className='row'>
                            <div className='col-6'>
                                <img src={menu2} style={{width: "100%", height: "300px"}}/>
                            </div>
                            <div className='col-6'>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="menu5">
                        <div className='row'>
                            <div className='col-6'>
                                <img src={menu1} style={{width: "100%", height: "300px"}}/>
                            </div>
                            <div className='col-6'>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ ;
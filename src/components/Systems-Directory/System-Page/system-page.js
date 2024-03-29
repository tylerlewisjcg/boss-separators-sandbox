import React, { Component } from 'react';
import '../../../styles/system-page.css';
class SystemPage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>
                    
                        System Title
                </h1>
                </div>
                <div className="container">
                    <div>
                        System Image
                </div>
                </div>
                <div className="container">
                    <div>
                        Get A Quote
                </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="w-75">
                            <div className="container border system-info">
                                <div className="row tabs">
                                    <div className="col btn-success py-3">
                                        Description
                        </div>
                                    <div className="col btn-success py-3">
                                        Spec Sheet
                        </div>
                                    <div className="col btn-success py-3">
                                        Photos/Videos
                        </div>
                                    <div className="col btn-success py-3">
                                        Documentation
                        </div>
                                    <div className="col btn-success py-3">
                                        Spare Parts
                        </div>
                                </div>
                                <div className="row tab-content">
                                    <div className="p-5">
                                        Information Display Box. This Data will be toggled with the tabs above.
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default SystemPage;
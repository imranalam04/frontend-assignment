import React from 'react';

const GoogleMap = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="600"
          height="200"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=kolkata&t=&z=10&ie=UTF8&iwloc=&output=embed"
          
          title="Google Map"
        ></iframe>
        <br />
        <style>
          {`.mapouter{position:relative;text-align:right;height:510px;width:770px;}`}
        </style>
        <style>
          {`.gmap_canvas{overflow:hidden;background:none!important;height:510px;width:770px;}`}
        </style>
      </div>
    </div>
  );
};

export default GoogleMap;

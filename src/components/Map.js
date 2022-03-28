import React, { useRef, useEffect, useState } from 'react';


import { FaAngleLeft, FaAngleRight, FaGitter, FaAngleDown, FaAngleUp, FaArrowUp, FaRulerHorizontal,FaRulerCombined, FaWindowClose, FaCalendarTimes, FaCrosshairs } from "react-icons/fa";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import kamran from './../assets/images/kamran.jpg';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
var mapObj, selectedFilter;

// https://react-icons.github.io/react-icons/
const Map = () => {
  const mapContainerRef = useRef();
  const [navOpen, setNavOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);
  
  var origin = [-102.97668252493536, 40.97527517054988];

  useEffect(() => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic3VubnlzYW53YXIiLCJhIjoiY2wwNjV5N3kzMDQwbTNib2NhMnd6NGg2dCJ9.501q9aEzAkIe4RzQm-IzQg';//'pk.eyJ1IjoiaGFtemFoYWQiLCJhIjoiY2trY2YybmozMGo3bzJ1b2FpcTh4ZmdpeiJ9.urpUJIK3zKrxCaEKXNe9Rw';
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
			zoom: 4,
      center: origin,
    });
    mapObj = map;

    // map.on('load', () => {

    //   map.addSource('counties-source', {
    //     "type": "vector",
    //      "url": "mapbox://sunnysanwar.1c7ydok0"
    //   });

    //   map.addLayer({
    //   'id': 'counties-layer',
    //   'type': 'fill',
    //   'source': 'counties-source',
    //   'source-layer': 'us_zipcode',
    //   'paint': {
    //     'fill-color': 'rgba(200, 100, 240, 0.5)',
    //     'fill-outline-color': 'rgba(200, 100, 240, 0.5)'
    //     }
    //   });

    //   map.on('click', 'counties-layer', (e) => {
    //     var props = e.features[0].properties;
    //     console.log(props);
    //   });

    // });

  }, []);
  function navToggle(val) {
    if(val){
      document.getElementById("mySidenavLeft").style.left = "-270px";
    }else{
      document.getElementById("mySidenavLeft").style.left = "0px";
    }
    setNavOpen(!navOpen);
  }

  function navToggleRight(val) {
    if(val){
      document.getElementById("mySidenavRight").style.right = "-270px";
    }else{
      document.getElementById("mySidenavRight").style.right = "0px";
    }
    setRightNavOpen(!rightNavOpen);
  }
  return (
    // edited by Dildar Khan
    <div style={{position: 'relative', overflow: 'hidden'}}>     
<div id="mySidenavLeft" className="sidenav">
  <span className="open-nav-button" onClick={()=>navToggle(navOpen)}>{navOpen ? <FaAngleLeft /> : <FaAngleRight /> }</span>
  <div className="nav-wrapper">
    <div className="nav-header">
        <span className="header-left" >
          <FaGitter />
          <h6 className="header-heading">PEREGERINE LAND</h6>
        </span>
        <span>
          <img src={kamran} className="header-img" />
          <FaAngleDown />
        </span>
    </div>
    <div className="nav-body">
      <div className="nav-section">
        <p className="nav-section-heading">VISUALIZATIONS</p>

        <div className="custom-card-open">
          <span className="cch">
            <span>Projects</span>
            <span><span className="card-badge">5</span><FaAngleUp /></span>
          </span>
          <div className="tags-list">
            <ul>
              <li>
                All Projects
              </li>
              <li className="active">
                Performing
              </li>
            </ul>
          </div>
        </div>
        <div className="custom-card">
          <div>Ownership</div>
          <div><span className="card-badge">0</span><FaAngleDown /></div>
        </div>

        <div className="custom-card">
          <div>Market Data</div>
          <div><span className="card-badge">0</span><FaAngleDown /></div>
        </div>

        <div className="custom-card">
          <div>Parcels</div>
          <div><span className="card-badge">0</span><FaAngleDown /></div>
        </div>

        <div className="custom-card">
          <div>Regional Development</div>
          <div><span className="card-badge">0</span><FaAngleDown /></div>
        </div>

        <div className="custom-card">
          <div>Government</div>
          <div><input type="checkbox" name="check" /></div>
        </div>

        <div className="custom-card">
          <div>Land Features</div>
          <div><span className="card-badge">0</span><FaAngleDown /></div>
        </div>

        <div className="custom-card">
          <div>Hex Layers</div>
          <div><span className="card-badge">0</span><FaAngleDown /></div>
        </div>

        <div className="custom-card">
          <div>Change Basemap</div>
          <div><span className="card-badge">0</span><FaAngleDown /></div>
        </div>

      </div>
      <hr />

    <div className="nav-section">
      <p className="nav-section-heading">TOOLS</p>
      <div className="tools-wrapper">

        <div>
        <span className="tool-icon"><FaRulerHorizontal /></span>
        <p>Measure</p>
        </div>

        <div>
        <span className="tool-icon"><FaRulerCombined /></span>
        <p>Area</p>
        </div>

        <div>
        <span className="tool-icon"><FaWindowClose /></span>
        <p>Erase</p>
        </div>

        <div>
        <span className="tool-icon"><FaCalendarTimes /></span>
        <p>Clear</p>
        </div>

        <div>
        <span className="tool-icon"><FaAngleDown /></span>
        <p>some</p>
        </div>

        <div>
        <span className="tool-icon"><FaAngleDown /></span>
        <p>some</p>
        </div>

      </div>
    </div>
    </div>
  </div>
  <hr />
    <div className="nav-footer">
      <p className="search-section-heading">SEARCH LOCATION</p>
      <div className="search-wrapper">
        <span><FaCrosshairs /></span>
        <input type="text" placeholder="search..."/>
      </div>
    </div>
</div>
<div id="mySidenavRight" className="sidenav-right">
  <span className="open-nav-button-right" onClick={()=>navToggleRight(rightNavOpen)}>{rightNavOpen ? <FaAngleRight /> : <FaAngleLeft /> }</span>
</div>
<div className="right-top-panel">
  <div className="panel-wrapper">
    <div className="ppw-header">
      Performing Projects
    </div>
    <div className="ppw-body"><span className="ppw-item yellow-l">72-99<span className="ppw-item-d yellow-d"></span></span><span className="ppw-item orange-l">100-249<span className="ppw-item-d orange-d"></span></span><span className="ppw-item red-l">250+<span className="ppw-item-d red-d"></span></span></div>
  </div>

  <div className="panel-wrapper mt-10">
    <div className="ppw-header">
      Projects
    </div>
    <div className="ppw-body"><span className="ppw-item grey-l">Active<span className="ppw-item-d black-d"></span></span><span className="ppw-item grey-l">Future<span className="ppw-item-d black-l"></span></span></div>
  </div>


  <div className="panel-wrapper mt-10">
    <div className="ppw-header">
      Home Sales
    </div>
    <div className="ppw-body">
      <span className="ppw-item blue-l">$100k - $200k<span className="ppw-item-d blue-d"></span></span>
      <span className="ppw-item green-l">$200k - $300k<span className="ppw-item-d green-d"></span></span>
      <span className="ppw-item yellow-l">$300k - $400k<span className="ppw-item-d yellow-d"></span></span>
      <span className="ppw-item orange-l">$400k - $500k<span className="ppw-item-d orange-d"></span></span>
      <span className="ppw-item red-l">$500k<span className="ppw-item-d red-d"></span></span>
    </div>
  </div>
</div>
<div className="infoBox">Selected Area : 307531.40 acres</div>
<div className="map-container" ref={mapContainerRef} id="map-container"></div> 
    </div>
  );
};

export default Map;

import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from "react-redux"

import Header from "../../shared/Header/Header"
import Footer from "../../../../shared/Footer/Footer"
import ThemeSetting from "../../shared/ThemeSetting/themeSetting"
import AppMenu from "../../shared/AppMenu/AppMenu"
import RemoveNotification from "../../shared/RemoveNotification/RemoveNotification"

import { allUser, totalUser,getAdmin } from '../../../../services/AdminService/AdminService'
import {getAdmins} from "../../../../Redux/AdminReducer"
import { getUser } from '../../../../Redux/UserReducer'
const Dashboard = () => {
    let dispatch = useDispatch();
    let state = useSelector(state=>state.UserReducer)
    let state2 = useSelector(state=>state.AdminReducer)
    let [userCount, setuserCount] = useState([]);
    useEffect(()=> {
        totalUser().then(result=> {
            setuserCount(result.data.total);
        })
    })
    let getUsersFun = async() => {
      let result = await allUser();
      dispatch(getUser(result.data))
    }
    let getAdminFun = async() => {
      let result = await getAdmin();
      dispatch(getAdmins(result.data))
    }
    useEffect(()=> {
        if (state.length == 0) {
            getUsersFun();
        }
        if (state2.length == 0) {
            getAdminFun();
        }
    }, [])
  return (
    <>
    {/* <!-- Begin page --> */}
    <div id="layout-wrapper">

 <Header/>

<RemoveNotification/>

<AppMenu/>
        {/* <!-- Vertical Overlay--> */}
        <div className="vertical-overlay"></div>

        {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Projects</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                                        <li className="breadcrumb-item active">Projects</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="row project-wrapper">
                        <div className="col-xxl-8">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="card card-animate">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="avatar-title bg-soft-primary text-primary rounded-2 fs-2">
                                                        <i data-feather="briefcase" className="text-primary">
                                                        <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-users text-info"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path>
    </svg>
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden ms-3">
                                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-3">User Count</p>
                                                    <div className="d-flex align-items-center mb-3">
                                                    
                                                        <h4 className="fs-4 flex-grow-1 mb-0"><span className="counter-value" data-target="825">{userCount}</span></h4>
                                                        <span className="badge badge-soft-danger fs-12"><i className="ri-arrow-down-s-line fs-13 align-middle me-1"></i>5.02 %</span>
                                                    </div>
                                                    <p className="text-muted text-truncate mb-0">Projects this month</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card body --> */}
                                    </div>
                                </div>
                                {/* <!-- end col --> */}

                                <div className="col-xl-4">
                                    <div className="card card-animate">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="avatar-title bg-soft-warning text-warning rounded-2 fs-2">
                                                        <i data-feather="award" className="text-warning"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <p className="text-uppercase fw-medium text-muted mb-3">New Leads</p>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h4 className="fs-4 flex-grow-1 mb-0"><span className="counter-value" data-target="7522">0</span></h4>
                                                        <span className="badge badge-soft-success fs-12"><i className="ri-arrow-up-s-line fs-13 align-middle me-1"></i>3.58 %</span>
                                                    </div>
                                                    <p className="text-muted mb-0">Leads this month</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card body --> */}
                                    </div>
                                </div>
                                {/* <!-- end col --> */}

                                <div className="col-xl-4">
                                    <div className="card card-animate">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="avatar-title bg-soft-info text-info rounded-2 fs-2">
                                                        <i data-feather="clock" className="text-info"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden ms-3">
                                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-3">Total Hours</p>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h4 className="fs-4 flex-grow-1 mb-0"><span className="counter-value" data-target="168">0</span>h <span className="counter-value" data-target="40">0</span>m</h4>
                                                        <span className="badge badge-soft-danger fs-12"><i className="ri-arrow-down-s-line fs-13 align-middle me-1"></i>10.35 %</span>
                                                    </div>
                                                    <p className="text-muted text-truncate mb-0">Work this month</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card body --> */}
                                    </div>
                                </div>
                                {/* <!-- end col --> */}
                            </div>
                            {/* <!-- end row --> */}

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header border-0 align-items-center d-flex">
                                            <h4 className="card-title mb-0 flex-grow-1">Projects Overview</h4>
                                            <div>
                                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                                    ALL
                                                </button>
                                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                                    1M
                                                </button>
                                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                                    6M
                                                </button>
                                                <button type="button" className="btn btn-soft-primary btn-sm">
                                                    1Y
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- end card header --> */}

                                        <div className="card-header p-0 border-0 bg-soft-light">
                                            <div className="row g-0 text-center">
                                                <div className="col-6 col-sm-3">
                                                    <div className="p-3 border border-dashed border-start-0">
                                                        <h5 className="mb-1"><span className="counter-value" data-target="9851">0</span></h5>
                                                        <p className="text-muted mb-0">Number of Projects</p>
                                                    </div>
                                                </div>
                                                {/* <!--end col--> */}
                                                <div className="col-6 col-sm-3">
                                                    <div className="p-3 border border-dashed border-start-0">
                                                        <h5 className="mb-1"><span className="counter-value" data-target="1026">0</span></h5>
                                                        <p className="text-muted mb-0">Active Projects</p>
                                                    </div>
                                                </div>
                                                {/* <!--end col--> */}
                                                <div className="col-6 col-sm-3">
                                                    <div className="p-3 border border-dashed border-start-0">
                                                        <h5 className="mb-1">$<span className="counter-value" data-target="228.89">0</span>k</h5>
                                                        <p className="text-muted mb-0">Revenue</p>
                                                    </div>
                                                </div>
                                                {/* <!--end col--> */}
                                                <div className="col-6 col-sm-3">
                                                    <div className="p-3 border border-dashed border-start-0 border-end-0">
                                                        <h5 className="mb-1 text-success"><span className="counter-value" data-target="10589">0</span>h</h5>
                                                        <p className="text-muted mb-0">Working Hours</p>
                                                    </div>
                                                </div>
                                                {/* <!--end col--> */}
                                            </div>
                                        </div>
                                        {/* <!-- end card header --> */}
                                        <div className="card-body p-0 pb-2">
                                           <div id="apexcharts4whkxxwr" className="apexcharts-canvas apexcharts4whkxxwr apexcharts-theme-light" style={{width: '933px', height: '350px'}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="933"
      height="350"
      className="apexcharts-svg"
      version="1.1"
      style={{ background: "transparent" }}
    >
      <g
        className="apexcharts-inner apexcharts-graphical"
        transform="translate(46.853 52.778)"
      >
        <defs>
          <clipPath id="gridRectMask4whkxxwr">
            <rect
              width="873.484"
              height="262.053"
              x="-4.5"
              y="-2.5"
              fill="#fff"
              stroke="none"
              strokeDasharray="0"
              strokeWidth="0"
              opacity="1"
              rx="0"
              ry="0"
            ></rect>
          </clipPath>
          <clipPath></clipPath>
          <clipPath></clipPath>
          <clipPath id="gridRectMarkerMask4whkxxwr">
            <rect
              width="912.484"
              height="305.053"
              x="-24"
              y="-24"
              fill="#fff"
              stroke="none"
              strokeDasharray="0"
              strokeWidth="0"
              opacity="1"
              rx="0"
              ry="0"
            ></rect>
          </clipPath>
        </defs>
        <path
          fill="#b1b9c4"
          fillOpacity="0.9"
          stroke="#b6b6b6"
          strokeDasharray="3"
          strokeLinecap="butt"
          strokeWidth="1"
          d="M107.561 0L107.561 257.053"
          className="apexcharts-xcrosshairs apexcharts-active"
          filter="none"
        ></path>
        <g className="apexcharts-xaxis">
          <g className="apexcharts-xaxis-texts-g" transform="translate(0 -4)">
            <text
              x="0"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>Jan</tspan>
            </text>
            <text
              x="108.061"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>Feb</tspan>
            </text>
            <text
              x="216.121"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>Mar</tspan>
            </text>
            <text
              x="324.182"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>Apr</tspan>
            </text>
            <text
              x="432.242"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>May</tspan>
            </text>
            <text
              x="540.303"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>Jun</tspan>
            </text>
            <text
              x="648.363"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>Jul</tspan>
            </text>
            <text
              x="756.424"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>Aug</tspan>
            </text>
            <text
              x="864.484"
              y="286.053"
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              dominantBaseline="auto"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="12"
              fontWeight="400"
              textAnchor="middle"
            >
              <tspan>Sep</tspan>
            </text>
          </g>
        </g>
        <g className="apexcharts-grid">
          <g className="apexcharts-gridlines-horizontal">
            <path
              stroke="#e0e0e0"
              strokeDasharray="0"
              strokeLinecap="butt"
              d="M0 51.411L864.484 51.411"
              className="apexcharts-gridline"
            ></path>
            <path
              stroke="#e0e0e0"
              strokeDasharray="0"
              strokeLinecap="butt"
              d="M0 102.821L864.484 102.821"
              className="apexcharts-gridline"
            ></path>
            <path
              stroke="#e0e0e0"
              strokeDasharray="0"
              strokeLinecap="butt"
              d="M0 154.232L864.484 154.232"
              className="apexcharts-gridline"
            ></path>
            <path
              stroke="#e0e0e0"
              strokeDasharray="0"
              strokeLinecap="butt"
              d="M0 205.643L864.484 205.643"
              className="apexcharts-gridline"
            ></path>
          </g>
          <path
            stroke="transparent"
            strokeDasharray="0"
            strokeLinecap="butt"
            d="M0 257.053L864.484 257.053"
          ></path>
          <path
            stroke="transparent"
            strokeDasharray="0"
            strokeLinecap="butt"
            d="M0 1L0 257.053"
          ></path>
        </g>
        <g className="apexcharts-line-series apexcharts-plot-series">
          <g
            className="apexcharts-series"
            datalongestseries="true"
            datarealindex="0"
          >
            <path
              fill="none"
              fillOpacity="1"
              fillRule="evenodd"
              stroke="rgba(94,163,203,0.85)"
              strokeDasharray="0"
              strokeLinecap="butt"
              strokeOpacity="1"
              strokeWidth="5"
              d="M0 239.916l108.06-53.124 108.061 10.282 108.06-27.419 108.061 3.428 108.06-22.278 108.061-11.996 108.06-37.701 108.061-97.68s0 0 0 0"
              className="apexcharts-line"
              clipPath="url(#gridRectMask4whkxxwr)"
            ></path>
            <g className="apexcharts-series-markers-wrap" datarealindex="0">
              <g
                className="apexcharts-series-markers"
                clipPath="url(#gridRectMarkerMask4whkxxwr)"
              >
                <circle
                  cx="0"
                  cy="239.916"
                  r="4"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events wfu7zicqg"
                ></circle>
                <circle
                  cx="108.061"
                  cy="186.792"
                  r="10"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events werhezu3s"
                ></circle>
              </g>
              <g
                className="apexcharts-series-markers"
                clipPath="url(#gridRectMarkerMask4whkxxwr)"
              >
                <circle
                  cx="216.121"
                  cy="197.074"
                  r="4"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events w9854ivh5"
                ></circle>
              </g>
              <g
                className="apexcharts-series-markers"
                clipPath="url(#gridRectMarkerMask4whkxxwr)"
              >
                <circle
                  cx="324.182"
                  cy="169.655"
                  r="4"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events wfr7e5zq3"
                ></circle>
              </g>
              <g
                className="apexcharts-series-markers"
                clipPath="url(#gridRectMarkerMask4whkxxwr)"
              >
                <circle
                  cx="432.242"
                  cy="173.083"
                  r="4"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events wv3izy8j1k"
                ></circle>
              </g>
              <g
                className="apexcharts-series-markers"
                clipPath="url(#gridRectMarkerMask4whkxxwr)"
              >
                <circle
                  cx="540.303"
                  cy="150.805"
                  r="4"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events wasr8sc2w"
                ></circle>
              </g>
              <g
                className="apexcharts-series-markers"
                clipPath="url(#gridRectMarkerMask4whkxxwr)"
              >
                <circle
                  cx="648.363"
                  cy="138.809"
                  r="4"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events wcwqq80u5"
                ></circle>
              </g>
              <g
                className="apexcharts-series-markers"
                clipPath="url(#gridRectMarkerMask4whkxxwr)"
              >
                <circle
                  cx="756.424"
                  cy="101.108"
                  r="4"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events w4jkaba81g"
                ></circle>
              </g>
              <g
                className="apexcharts-series-markers"
                clipPath="url(#gridRectMarkerMask4whkxxwr)"
              >
                <circle
                  cx="864.484"
                  cy="3.427"
                  r="4"
                  fill="#5ea3cb"
                  fillOpacity="1"
                  stroke="#fff"
                  strokeOpacity="0.9"
                  strokeWidth="2"
                  className="apexcharts-marker no-pointer-events wih30to9k"
                ></circle>
              </g>
            </g>
          </g>
        </g>
        <g className="apexcharts-grid-borders">
          <path
            stroke="#e0e0e0"
            strokeDasharray="0"
            strokeLinecap="butt"
            d="M0 0L864.484 0"
            className="apexcharts-gridline"
          ></path>
          <path
            stroke="#e0e0e0"
            strokeDasharray="0"
            strokeLinecap="butt"
            d="M0 257.053L864.484 257.053"
            className="apexcharts-gridline"
          ></path>
          <path
            stroke="#e0e0e0"
            strokeDasharray="0"
            strokeLinecap="butt"
            strokeWidth="1"
            d="M0 258.053L864.484 258.053"
          ></path>
        </g>
        {/* <path
          stroke="#b6b6b6"
          strokeDasharray="0"
          strokeLinecap="butt"
          strokeWidth="1"
          d="M0 0L864.484 0"
          className="apexcharts-ycrosshairs"
        ></path> */}
        <path
          strokeDasharray="0"
          strokeLinecap="butt"
          strokeWidth="0"
          d="M0 0L864.484 0"
          className="apexcharts-ycrosshairs-hidden"
        ></path>
      </g>
      <text
        x="10"
        y="16.5"
        fill="#373d3f"
        className="apexcharts-title-text"
        dominantBaseline="auto"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="14"
        fontWeight="500"
        opacity="1"
        textAnchor="start"
      >
        Product Trends by Month
      </text>
      <g className="apexcharts-yaxis" transform="translate(16.853)">
        <g className="apexcharts-yaxis-texts-g">
          <text
            x="20"
            y="54.278"
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            dominantBaseline="auto"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="400"
            textAnchor="end"
          >
            <tspan>150</tspan>
          </text>
          <text
            x="20"
            y="105.688"
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            dominantBaseline="auto"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="400"
            textAnchor="end"
          >
            <tspan>120</tspan>
          </text>
          <text
            x="20"
            y="157.099"
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            dominantBaseline="auto"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="400"
            textAnchor="end"
          >
            <tspan>90</tspan>
          </text>
          <text
            x="20"
            y="208.51"
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            dominantBaseline="auto"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="400"
            textAnchor="end"
          >
            <tspan>60</tspan>
          </text>
          <text
            x="20"
            y="259.92"
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            dominantBaseline="auto"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="400"
            textAnchor="end"
          >
            <tspan>30</tspan>
          </text>
          <text
            x="20"
            y="311.331"
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            dominantBaseline="auto"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="400"
            textAnchor="end"
          >
            <tspan>0</tspan>
          </text>
        </g>
      </g>
    </svg>
    </div>
                                            </div>

                                        {/* <!-- end card body --> */}
                                    </div>
                                    {/* <!-- end card --> */}
                                </div>
                                {/* <!-- end col --> */}
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        {/* <!-- end col --> */}

                        <div className="col-xxl-4">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title mb-0">Upcoming Schedules</h4>
                                </div>
                                {/* <!-- end cardheader --> */}
                                <div className="card-body pt-0">
                                <div className="upcoming-scheduled">
                                        <input type="text" className="form-control flatpickr-input" data-provider="flatpickr" data-date-format="d M, Y" data-deafult-date="today" data-inline-date="true" readonly="readonly" /><div className="flatpickr-calendar animate inline" tabIndex="-1"><div className="flatpickr-months"><span className="flatpickr-prev-month">
                                        <svg version="1.1" viewBox="0 0 17 17"><g></g><path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path></svg></span><div className="flatpickr-month"><div className="flatpickr-current-month"><select className="flatpickr-monthDropdown-months" aria-label="Month" tabIndex="-1"><option className="flatpickr-monthDropdown-month" defualtvalue="0" tabIndex="-1">January</option><option className="flatpickr-monthDropdown-month" defualtvalue="1" tabIndex="-1">February</option><option className="flatpickr-monthDropdown-month" defualtvalue="2" tabIndex="-1">March</option><option className="flatpickr-monthDropdown-month" defualtvalue="3" tabIndex="-1">April</option><option className="flatpickr-monthDropdown-month" defualtvalue="4" tabIndex="-1">May</option><option className="flatpickr-monthDropdown-month" defualtvalue="5" tabIndex="-1">June</option><option className="flatpickr-monthDropdown-month" defualtvalue="6" tabIndex="-1">July</option><option className="flatpickr-monthDropdown-month" defualtvalue="7" tabIndex="-1">August</option><option className="flatpickr-monthDropdown-month" defualtvalue="8" tabIndex="-1">September</option><option className="flatpickr-monthDropdown-month" defualtvalue="9" tabIndex="-1">October</option><option className="flatpickr-monthDropdown-month" defualtvalue="10" tabIndex="-1">November</option><option className="flatpickr-monthDropdown-month" defualtvalue="11" tabIndex="-1">December</option></select><div className="numInputWrapper"><input className="numInput cur-year" type="number" tabIndex="-1" aria-label="Year" /><span className="arrowUp"></span><span className="arrowDown"></span></div></div></div><span className="flatpickr-next-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 17 17"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg>
                                        </span></div><div className="flatpickr-innerContainer"><div className="flatpickr-rContainer"><div className="flatpickr-weekdays"><div className="flatpickr-weekdaycontainer">
      <span className="flatpickr-weekday">
        Sun</span><span className="flatpickr-weekday">Mon</span><span className="flatpickr-weekday">Tue</span><span className="flatpickr-weekday">Wed</span><span className="flatpickr-weekday">Thu</span><span className="flatpickr-weekday">Fri</span><span className="flatpickr-weekday">Sat
      </span>
      </div></div><div className="flatpickr-days" tabIndex="-1"><div className="dayContainer"><span className="flatpickr-day prevMonthDay" aria-label="February 26, 2023" tabIndex="-1">26</span><span className="flatpickr-day prevMonthDay" aria-label="February 27, 2023" tabIndex="-1">27</span><span className="flatpickr-day prevMonthDay" aria-label="February 28, 2023" tabIndex="-1">28</span><span className="flatpickr-day" aria-label="March 1, 2023" tabIndex="-1">1</span><span className="flatpickr-day" aria-label="March 2, 2023" tabIndex="-1">2</span><span className="flatpickr-day" aria-label="March 3, 2023" tabIndex="-1">3</span><span className="flatpickr-day" aria-label="March 4, 2023" tabIndex="-1">4</span><span className="flatpickr-day" aria-label="March 5, 2023" tabIndex="-1">5</span><span className="flatpickr-day" aria-label="March 6, 2023" tabIndex="-1">6</span><span className="flatpickr-day" aria-label="March 7, 2023" tabIndex="-1">7</span><span className="flatpickr-day today selected" aria-label="March 8, 2023" aria-current="date" tabIndex="-1">8</span><span className="flatpickr-day" aria-label="March 9, 2023" tabIndex="-1">9</span><span className="flatpickr-day" aria-label="March 10, 2023" tabIndex="-1">10</span><span className="flatpickr-day" aria-label="March 11, 2023" tabIndex="-1">11</span><span className="flatpickr-day" aria-label="March 12, 2023" tabIndex="-1">12</span><span className="flatpickr-day" aria-label="March 13, 2023" tabIndex="-1">13</span><span className="flatpickr-day" aria-label="March 14, 2023" tabIndex="-1">14</span><span className="flatpickr-day" aria-label="March 15, 2023" tabIndex="-1">15</span><span className="flatpickr-day" aria-label="March 16, 2023" tabIndex="-1">16</span><span className="flatpickr-day" aria-label="March 17, 2023" tabIndex="-1">17</span><span className="flatpickr-day" aria-label="March 18, 2023" tabIndex="-1">18</span><span className="flatpickr-day" aria-label="March 19, 2023" tabIndex="-1">19</span><span className="flatpickr-day" aria-label="March 20, 2023" tabIndex="-1">20</span><span className="flatpickr-day" aria-label="March 21, 2023" tabIndex="-1">21</span><span className="flatpickr-day" aria-label="March 22, 2023" tabIndex="-1">22</span><span className="flatpickr-day" aria-label="March 23, 2023" tabIndex="-1">23</span><span className="flatpickr-day" aria-label="March 24, 2023" tabIndex="-1">24</span><span className="flatpickr-day" aria-label="March 25, 2023" tabIndex="-1">25</span><span className="flatpickr-day" aria-label="March 26, 2023" tabIndex="-1">26</span><span className="flatpickr-day" aria-label="March 27, 2023" tabIndex="-1">27</span><span className="flatpickr-day" aria-label="March 28, 2023" tabIndex="-1">28</span><span className="flatpickr-day" aria-label="March 29, 2023" tabIndex="-1">29</span><span className="flatpickr-day" aria-label="March 30, 2023" tabIndex="-1">30</span><span className="flatpickr-day" aria-label="March 31, 2023" tabIndex="-1">31</span><span className="flatpickr-day nextMonthDay" aria-label="April 1, 2023" tabIndex="-1">1</span><span className="flatpickr-day nextMonthDay" aria-label="April 2, 2023" tabIndex="-1">2</span><span className="flatpickr-day nextMonthDay" aria-label="April 3, 2023" tabIndex="-1">3</span><span className="flatpickr-day nextMonthDay" aria-label="April 4, 2023" tabIndex="-1">4</span><span className="flatpickr-day nextMonthDay" aria-label="April 5, 2023" tabIndex="-1">5</span><span className="flatpickr-day nextMonthDay" aria-label="April 6, 2023" tabIndex="-1">6</span><span className="flatpickr-day nextMonthDay" aria-label="April 7, 2023" tabIndex="-1">7</span><span className="flatpickr-day nextMonthDay" aria-label="April 8, 2023" tabIndex="-1">8</span></div></div></div></div></div>
                                    </div>

                                    <h6 className="text-uppercase fw-semibold mt-4 mb-3 text-muted">Events:</h6>
                                    <div className="mini-stats-wid d-flex align-items-center mt-3">
                                        <div className="flex-shrink-0 avatar-sm">
                                            <span className="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
                                                09
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1">Development planning</h6>
                                            <p className="text-muted mb-0">iTest Factory </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">9:20 <span className="text-uppercase">am</span></p>
                                        </div>
                                    </div>
                                    {/* <!-- end --> */}
                                    <div className="mini-stats-wid d-flex align-items-center mt-3">
                                        <div className="flex-shrink-0 avatar-sm">
                                            <span className="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
                                                12
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1">Design new UI and check sales</h6>
                                            <p className="text-muted mb-0">Meta4Systems</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">11:30 <span className="text-uppercase">am</span></p>
                                        </div>
                                    </div>
                                    {/* <!-- end --> */}
                                    <div className="mini-stats-wid d-flex align-items-center mt-3">
                                        <div className="flex-shrink-0 avatar-sm">
                                            <span className="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
                                                25
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1">Weekly catch-up </h6>
                                            <p className="text-muted mb-0">Nesta Technologies</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">02:00 <span className="text-uppercase">pm</span></p>
                                        </div>
                                    </div>
                                    {/* <!-- end --> */}
                                    <div className="mini-stats-wid d-flex align-items-center mt-3">
                                        <div className="flex-shrink-0 avatar-sm">
                                            <span className="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
                                                27
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1">James Bangs (Client) Meeting</h6>
                                            <p className="text-muted mb-0">Nesta Technologies</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">03:45 <span className="text-uppercase">pm</span></p>
                                        </div>
                                    </div>
                                    {/* <!-- end --> */}

                                    <div className="mt-3 text-center">
                                        <a href="#" className="text-muted text-decoration-underline">View all Events</a>
                                    </div>

                                </div>
                                {/* <!-- end cardbody --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}

                    <div className="row">
                        <div className="col-xl-7">
                            <div className="card card-height-100">
                                <div className="card-header d-flex align-items-center">
                                    <h4 className="card-title flex-grow-1 mb-0">Active Projects</h4>
                                    <div className="flex-shrink-0">
                                        <a href="#" className="btn btn-soft-info btn-sm">Export Report</a>
                                    </div>
                                </div>
                                {/* <!-- end cardheader --> */}
                                <div className="card-body">
                                    <div className="table-responsive table-card">
                                        <table className="table table-nowrap table-centered align-middle">
                                            <thead className="bg-light text-muted">
                                                <tr>
                                                    <th scope="col">Project Name</th>
                                                    <th scope="col">Project Lead</th>
                                                    <th scope="col">Progress</th>
                                                    <th scope="col">Assignee</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col" style={{width: '10%'}}>Due Date</th>
                                                </tr>
                                                {/* <!-- end tr --> */}
                                            </thead>
                                            {/* <!-- thead --> */}

                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">Brand Logo Design</td>
                                                    <td>
                                                        <img src="/assets/images/users/avatar-1.jpg" className="avatar-xxs rounded-circle me-1" alt="" />
                                                        <a href="#" className="text-reset">Donald Risher</a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-1 text-muted fs-13">53%</div>
                                                            <div className="progress progress-sm  flex-grow-1" style={{width: '68%'}}>
                                                                <div className="progress-bar bg-primary rounded" role="progressbar" style={{width: '53%'}} aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group flex-nowrap">
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span className="badge badge-soft-warning">Inprogress</span></td>
                                                    <td className="text-muted">06 Sep 2021</td>
                                                </tr>
                                                {/* <!-- end tr --> */}
                                                <tr>
                                                    <td className="fw-medium">Redesign - Landing Page</td>
                                                    <td>
                                                        <img src="/assets/images/users/avatar-2.jpg" className="avatar-xxs rounded-circle me-1" alt="" />
                                                        <a href="#" className="text-reset">Prezy William</a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 text-muted me-1">0%</div>
                                                            <div className="progress progress-sm flex-grow-1" style={{width: '68%'}}>
                                                                <div className="progress-bar bg-primary rounded" role="progressbar" style={{width: '0%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group">
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span className="badge badge-soft-danger">Pending</span></td>
                                                    <td className="text-muted">13 Nov 2021</td>
                                                </tr>
                                                {/* <!-- end tr --> */}
                                                <tr>
                                                    <td className="fw-medium">Multipurpose Landing Template</td>
                                                    <td>
                                                        <img src="/assets/images/users/avatar-3.jpg" className="avatar-xxs rounded-circle me-1" alt="" />
                                                        <a href="#" className="text-reset">Boonie Hoynas</a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 text-muted me-1">100%</div>
                                                            <div className="progress progress-sm flex-grow-1" style={{width: '68%'}}>
                                                                <div className="progress-bar bg-primary rounded" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group">
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span className="badge badge-soft-success">Completed</span></td>
                                                    <td className="text-muted">26 Nov 2021</td>
                                                </tr>
                                                {/* <!-- end tr --> */}
                                                <tr>
                                                    <td className="fw-medium">Chat Application</td>
                                                    <td>
                                                        <img src="/assets/images/users/avatar-5.jpg" className="avatar-xxs rounded-circle me-1" alt="" />
                                                        <a href="#" className="text-reset">Pauline Moll</a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 text-muted me-1">64%</div>
                                                            <div className="progress flex-grow-1 progress-sm" style={{width: '68%'}}>
                                                                <div className="progress-bar bg-primary rounded" role="progressbar" style={{width: '64%'}} aria-valuenow="64" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group">
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span className="badge badge-soft-warning">Progress</span></td>
                                                    <td className="text-muted">15 Dec 2021</td>
                                                </tr>
                                                {/* <!-- end tr --> */}
                                                <tr>
                                                    <td className="fw-medium">Create Wireframe</td>
                                                    <td>
                                                        <img src="/assets/images/users/avatar-6.jpg" className="avatar-xxs rounded-circle me-1" alt="" />
                                                        <a href="#" className="text-reset">James Bangs</a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 text-muted me-1">77%</div>
                                                            <div className="progress flex-grow-1 progress-sm" style={{width: '68%'}}>
                                                                <div className="progress-bar bg-primary rounded" role="progressbar" style={{width: '77%'}} aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-group">
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                            <div className="avatar-group-item">
                                                                <a href="#" className="d-inline-block">
                                                                    <img src="/assets/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span className="badge badge-soft-warning">Progress</span></td>
                                                    <td className="text-muted">21 Dec 2021</td>
                                                </tr>
                                                {/* <!-- end tr --> */}
                                            </tbody>
                                            {/* <!-- end tbody --> */}
                                        </table>
                                        {/* <!-- end table --> */}
                                    </div>

                                    <div className="align-items-center mt-xl-3 mt-4 justify-content-between d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="text-muted">Showing <span className="fw-semibold">5</span> of <span className="fw-semibold">25</span> Results
                                            </div>
                                        </div>
                                        <ul className="pagination pagination-separated pagination-sm mb-0">
                                            <li className="page-item disabled">
                                                <a href="#" className="page-link">←</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="#" className="page-link">1</a>
                                            </li>
                                            <li className="page-item active">
                                                <a href="#" className="page-link">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="#" className="page-link">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a href="#" className="page-link">→</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                {/* <!-- end card body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col --> */}

                        <div className="col-xl-5">
                            <div className="card card-height-100">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1 py-1">ScreenShot List</h4>
                                    <div className="flex-shrink-0">
                                        <div className="dropdown card-header-dropdown">
                                            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted">All Tasks <i className="mdi mdi-chevron-down ms-1"></i></span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">All Tasks</a>
                                                <a className="dropdown-item" href="#">Completed </a>
                                                <a className="dropdown-item" href="#">Inprogress</a>
                                                <a className="dropdown-item" href="#">Pending</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card header --> */}
                                <div className="card-body">
                                    <div className="table-responsive table-card">
                                        <table className="table table-borderless table-nowrap table-centered align-middle mb-0">
                                            <thead className="table-light text-muted">
                                                <tr>
                                                    <th scope="col">action</th>
                                                    <th scope="col">upload Date</th>
                                                    <th scope="col">category</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                </tr>
                                            </thead>
                                            {/* <!-- end thead --> */}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input fs-15" type="checkbox" value="" id="checkTask1" />
                                                            <label className="form-check-label ms-1" htmlFor="checkTask1">
                                                                Create new Admin Template
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-muted">03 Nov 2021</td>
                                                    <td><span className="badge badge-soft-success">Completed</span></td>
                                                    <td>
                                                        <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Mary Stoner">
                                                            <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input fs-15" type="checkbox" value="" id="checkTask2" />
                                                            <label className="form-check-label ms-1" htmlFor="checkTask2">
                                                                Marketing Coordinator
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-muted">17 Nov 2021</td>
                                                    <td><span className="badge badge-soft-warning">Progress</span></td>
                                                    <td>
                                                        <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Den Davis">
                                                            <img src="/assets/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input fs-15" type="checkbox" value="" id="checkTask3" />
                                                            <label className="form-check-label ms-1" htmlFor="checkTask3">
                                                                Administrative Analyst
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-muted">26 Nov 2021</td>
                                                    <td><span className="badge badge-soft-success">Completed</span></td>
                                                    <td>
                                                        <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Alex Brown">
                                                            <img src="/assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input fs-15" type="checkbox" value="" id="checkTask4" />
                                                            <label className="form-check-label ms-1" htmlFor="checkTask4">
                                                                E-commerce Landing Page
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-muted">10 Dec 2021</td>
                                                    <td><span className="badge badge-soft-danger">Pending</span></td>
                                                    <td>
                                                        <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Prezy Morin">
                                                            <img src="/assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input fs-15" type="checkbox" value="" id="checkTask5" />
                                                            <label className="form-check-label ms-1" htmlFor="checkTask5">
                                                                UI/UX Design
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-muted">22 Dec 2021</td>
                                                    <td><span className="badge badge-soft-warning">Progress</span></td>
                                                    <td>
                                                        <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Stine Nielsen">
                                                            <img src="/assets/images/users/avatar-1.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input fs-15" type="checkbox" value="" id="checkTask6" />
                                                            <label className="form-check-label ms-1" htmlFor="checkTask6">
                                                                Projects Design
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="text-muted">31 Dec 2021</td>
                                                    <td><span className="badge badge-soft-danger">Pending</span></td>
                                                    <td>
                                                        <a href="#" className="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Jansh William">
                                                            <img src="/assets/images/users/avatar-4.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                {/* <!-- end --> */}
                                            </tbody>
                                            {/* <!-- end tbody --> */}
                                        </table>
                                        {/* <!-- end table --> */}
                                    </div>
                                    <div className="mt-3 text-center">
                                        <a href="#" className="text-muted text-decoration-underline">Load More</a>
                                    </div>
                                </div>
                                {/* <!-- end cardbody --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}

                    <div className="row">
                        <div className="col-xxl-4">
                            <div className="card card-height-100">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">User List</h4>
                                    <div className="flex-shrink-0">
                                        <div className="dropdown card-header-dropdown">
                                            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="fw-semibold text-uppercase fs-12">Sort by: </span><span className="text-muted">Last 30 Days<i className="mdi mdi-chevron-down ms-1"></i></span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">Today</a>
                                                <a className="dropdown-item" href="#">Yesterday</a>
                                                <a className="dropdown-item" href="#">Last 7 Days</a>
                                                <a className="dropdown-item" href="#">Last 30 Days</a>
                                                <a className="dropdown-item" href="#">This Month</a>
                                                <a className="dropdown-item" href="#">Last Month</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card header --> */}

                                <div className="card-body">

                                    <div className="table-responsive table-card">
                                        <table className="table table-borderless table-nowrap align-middle mb-0">
                                            <thead className="table-light text-muted">
                                                <tr>
                                                    <th scope="col">User</th>
                                                    <th scope="col">join Date</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                state.map((x)=> {
                                                    const date = new Date(x.join_date);
  const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

                                                    return (
                                                        <tr key={x.username}>
                                                    <td className="d-flex">
                                                        <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-3 me-2" />
                                                        <div>
                                                            <h6 className="mb-0">{x.username}</h6>
                                                            <p className="fs-13 mb-0 text-muted">basic</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">{formattedDate}</h6>
                                                    </td>
                                                    <td>
                                                        {x.type}
                                                    </td>
                                                    <td style={{width: '5%'}}>
                                                    {x.email}
                                                    </td>
                                                </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                            {/* <!-- end tbody --> */}
                                        </table>
                                        {/* <!-- end table --> */}
                                    </div>
                                </div>
                                {/* <!-- end cardbody --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col --> */}

                        <div className="col-xxl-4 col-lg-6">
                            <div className="card card-height-100">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Chat</h4>
                                    <div className="flex-shrink-0">
                                        <div className="dropdown card-header-dropdown">
                                            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted"><i className="ri-settings-4-line align-middle me-1"></i>Setting <i className="mdi mdi-chevron-down ms-1"></i></span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#"><i className="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</a>
                                                <a className="dropdown-item" href="#"><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive</a>
                                                <a className="dropdown-item" href="#"><i className="ri-mic-off-line align-bottom text-muted me-2"></i> Muted</a>
                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card header --> */}

                                <div className="card-body p-0">
                                    <div id="users-chat">
                                        <div className="chat-conversation p-3" id="chat-conversation" data-simplebar style={{height: '400px'}}>
                                            <ul className="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                                <li className="chat-list left">
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="/assets/images/users/avatar-2.jpg" alt="" />
                                                        </div>
                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0 ctext-content">Good morning 😊</p>
                                                                </div>
                                                                <div className="dropdown align-self-start message-box-drop">
                                                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</a>
                                                                        <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="conversation-name"><small className="text-muted time">09:07 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- chat-list --> */}

                                                <li className="chat-list right">
                                                    <div className="conversation-list">
                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0 ctext-content">Good morning, How are you? What about our next meeting?</p>
                                                                </div>
                                                                <div className="dropdown align-self-start message-box-drop">
                                                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</a>
                                                                        <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="conversation-name"><small className="text-muted time">09:08 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- chat-list --> */}

                                                <li className="chat-list left">
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="/assets/images/users/avatar-2.jpg" alt="" />
                                                        </div>
                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0 ctext-content">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                                                                </div>
                                                                <div className="dropdown align-self-start message-box-drop">
                                                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</a>
                                                                        <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0 ctext-content">Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.</p>
                                                                </div>
                                                                <div className="dropdown align-self-start message-box-drop">
                                                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</a>
                                                                        <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="conversation-name"><small className="text-muted time">09:10 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- chat-list --> */}

                                                <li className="chat-list right">
                                                    <div className="conversation-list">
                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <p className="mb-0 ctext-content">Wow that's great</p>
                                                                </div>
                                                                <div className="dropdown align-self-start message-box-drop">
                                                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                        <a className="dropdown-item" href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</a>
                                                                        <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="conversation-name"><small className="text-muted time">09:12 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- chat-list --> */}

                                                <li className="chat-list left">
                                                    <div className="conversation-list">
                                                        <div className="chat-avatar">
                                                            <img src="/assets/images/users/avatar-2.jpg" alt="" />
                                                        </div>
                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="message-img mb-0">
                                                                    <div className="message-img-list">
                                                                        <div>
                                                                            <a className="popup-img d-inline-block" href="/assets/images/small/img-1.jpg">
                                                                                <img src="/assets/images/small/img-1.jpg" alt="" className="rounded border" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="message-img-link">
                                                                            <ul className="list-inline mb-0">
                                                                                <li className="list-inline-item dropdown">
                                                                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="ri-more-fill"></i>
                                                                                    </a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="/assets/images/small/img-1.jpg" download=""><i className="ri-download-2-line me-2 text-muted align-bottom"></i>Download</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</a>
                                                                                        <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div className="message-img-list">
                                                                        <div>
                                                                            <a className="popup-img d-inline-block" href="/assets/images/small/img-2.jpg">
                                                                                <img src="/assets/images/small/img-2.jpg" alt="" className="rounded border" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="message-img-link">
                                                                            <ul className="list-inline mb-0">
                                                                                <li className="list-inline-item dropdown">
                                                                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="ri-more-fill"></i>
                                                                                    </a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="/assets/images/small/img-2.jpg" download=""><i className="ri-download-2-line me-2 text-muted align-bottom"></i>Download</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</a>
                                                                                        <a className="dropdown-item" href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</a>
                                                                                        <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="conversation-name"><small className="text-muted time">09:30 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!-- chat-list --> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border-top border-top-dashed">
                                        <div className="row g-2 mx-3 mt-2 mb-3">
                                            <div className="col">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control border-light bg-light" placeholder="Enter Message..." />
                                                </div>
                                            </div>
                                            {/* <!-- end col --> */}
                                            <div className="col-auto">
                                                <button type="submit" className="btn btn-info"><span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send float-end"></i></button>
                                            </div>
                                            {/* <!-- end col --> */}
                                        </div>
                                        {/* <!-- end row --> */}
                                    </div>
                                </div>
                                {/* <!-- end cardbody --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col --> */}

                        <div className="col-xxl-4 col-lg-6">
                            <div className="card card-height-100">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Projects Status</h4>
                                    <div className="flex-shrink-0">
                                        <div className="dropdown card-header-dropdown">
                                            <a className="dropdown-btn text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                All Time <i className="mdi mdi-chevron-down ms-1"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">All Time</a>
                                                <a className="dropdown-item" href="#">Last 7 Days</a>
                                                <a className="dropdown-item" href="#">Last 30 Days</a>
                                                <a className="dropdown-item" href="#">Last 90 Days</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card header --> */}

                                <div className="card-body">
                               <div id="prjects-status" data-colors="[&quot;--vz-success&quot;, &quot;--vz-primary&quot;, &quot;--vz-warning&quot;, &quot;--vz-danger&quot;]" className="apex-charts" dir="ltr" style={{minHeight: '212.8px'}}><div id="apexcharts32hk45la" className="apexcharts-canvas apexcharts32hk45la apexcharts-theme-light" style={{width: '603px', height: '212.8px'}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="603"
      height="212.8"
      className="apexcharts-svg"
      version="1.1"
      style={{ background: "transparent" }}
    >
      <g
        className="apexcharts-inner apexcharts-graphical"
        transform="translate(199.5)"
      >
        <defs>
          <clipPath>
            <rect
              width="210"
              height="228"
              x="-2"
              y="0"
              fill="#fff"
              stroke="none"
              strokeDasharray="0"
              strokeWidth="0"
              opacity="1"
              rx="0"
              ry="0"
            ></rect>
          </clipPath>
          <clipPath></clipPath>
          <clipPath></clipPath>
          <clipPath>
            <rect
              width="210"
              height="232"
              x="-2"
              y="-2"
              fill="#fff"
              stroke="none"
              strokeDasharray="0"
              strokeWidth="0"
              opacity="1"
              rx="0"
              ry="0"
            ></rect>
          </clipPath>
        </defs>
        <g className="apexcharts-pie">
          <g>
            <circle cx="103" cy="103" r="86.839" fill="transparent"></circle>
            <g className="apexcharts-slices">
              <g
                className="apexcharts-series apexcharts-pie-series"
                datarealindex="0"
              >
                <path
                  fill="rgba(106,218,125,1)"
                  fillOpacity="1"
                  strokeDasharray="0"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  strokeWidth="0"
                  d="M103 6.512a96.488 96.488 0 0157.647 173.862l-5.765-7.738A86.839 86.839 0 00103 16.161V6.512z"
                  className="apexcharts-pie-area apexcharts-donut-slice-0"
                  dataangle="143.312"
                  datapathorig="M 103 6.512195121951208 A 96.48780487804879 96.48780487804879 0 0 1 160.64719711426022 180.37374978023257 L 154.8824774028342 172.63637480220933 A 86.8390243902439 86.8390243902439 0 0 0 103 16.160975609756093 L 103 6.512195121951208 z"
                  datastartangle="0"
                  datastrokewidth="0"
                  datavalue="125"
                ></path>
              </g>
              <g
                className="apexcharts-series apexcharts-pie-series"
                datarealindex="1"
              >
                <path
                  fill="rgba(94,163,203,1)"
                  fillOpacity="1"
                  strokeDasharray="0"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  strokeWidth="0"
                  d="M160.647 180.374a96.488 96.488 0 01-76.826 17.189l1.918-9.457a86.839 86.839 0 0069.143-15.47l5.765 7.738z"
                  className="apexcharts-pie-area apexcharts-donut-slice-1"
                  dataangle="48.153"
                  datapathorig="M 160.64719711426022 180.37374978023257 A 96.48780487804879 96.48780487804879 0 0 1 83.82123957893091 197.56252766765306 L 85.73911562103783 188.10627490088774 A 86.8390243902439 86.8390243902439 0 0 0 154.8824774028342 172.63637480220933 L 160.64719711426022 180.37374978023257 z"
                  datastartangle="143.312"
                  datastrokewidth="0"
                  datavalue="42"
                ></path>
              </g>
              <g
                className="apexcharts-series apexcharts-pie-series"
                datarealindex="2"
              >
                <path
                  fill="rgba(247,184,75,1)"
                  fillOpacity="1"
                  strokeDasharray="0"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  strokeWidth="0"
                  d="M83.821 197.563a96.488 96.488 0 01-75.187-74.44l9.437-2.011a86.839 86.839 0 0067.668 66.994l-1.918 9.457z"
                  className="apexcharts-pie-area apexcharts-donut-slice-2"
                  dataangle="66.497"
                  datapathorig="M 83.82123957893091 197.56252766765306 A 96.48780487804879 96.48780487804879 0 0 1 8.634086897172239 123.12388964524445 L 18.070678207455032 121.11150068072 A 86.8390243902439 86.8390243902439 0 0 0 85.73911562103783 188.10627490088774 L 83.82123957893091 197.56252766765306 z"
                  datastartangle="191.465"
                  datastrokewidth="0"
                  datavalue="58"
                ></path>
              </g>
              <g
                className="apexcharts-series apexcharts-pie-series"
                datarealindex="3"
              >
                <path
                  fill="rgba(250,137,107,1)"
                  fillOpacity="1"
                  strokeDasharray="0"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  strokeWidth="0"
                  d="M8.634 123.124a96.488 96.488 0 0194.35-116.612v9.649a86.839 86.839 0 00-84.913 104.95l-9.437 2.013z"
                  className="apexcharts-pie-area apexcharts-donut-slice-3"
                  dataangle="102.038"
                  datapathorig="M 8.634086897172239 123.12388964524445 A 96.48780487804879 96.48780487804879 0 0 1 102.98315970125404 6.512196591544509 L 102.98484373112863 16.160976932390057 A 86.8390243902439 86.8390243902439 0 0 0 18.070678207455032 121.11150068072 L 8.634086897172239 123.12388964524445 z"
                  datastartangle="257.962"
                  datastrokewidth="0"
                  datavalue="89"
                ></path>
              </g>
            </g>
          </g>
        </g>
        <path
          strokeDasharray="0"
          strokeLinecap="butt"
          strokeWidth="0"
          d="M0 0L206 0"
          className="apexcharts-ycrosshairs-hidden"
        ></path>
      </g>
    </svg>
                               <div className="apexcharts-legend"></div>
                                </div>
                                <div className="mt-3">
                                        <div className="d-flex justify-content-center align-items-center mb-4">
                                            <h2 className="me-3 ff-secondary mb-0">258</h2>
                                            <div>
                                                <p className="text-muted mb-0">Total Projects</p>
                                                <p className="text-success fw-medium mb-0">
                                                    <span className="badge badge-soft-success p-1 rounded-circle"><i className="ri-arrow-right-up-line"></i></span> +3 New
                                                </p>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                            <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-success align-middle me-2"></i> Completed</p>
                                            <div>
                                                <span className="text-muted pe-5">125 Projects</span>
                                                <span className="text-success fw-medium fs-13">15870hrs</span>
                                            </div>
                                        </div>
                                        {/* <!-- end --> */}
                                        <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                            <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-primary align-middle me-2"></i> In Progress</p>
                                            <div>
                                                <span className="text-muted pe-5">42 Projects</span>
                                                <span className="text-success fw-medium fs-13">243hrs</span>
                                            </div>
                                        </div>
                                        {/* <!-- end --> */}
                                        <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                            <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-warning align-middle me-2"></i> Yet to Start</p>
                                            <div>
                                                <span className="text-muted pe-5">58 Projects</span>
                                                <span className="text-success fw-medium fs-13">~2050hrs</span>
                                            </div>
                                        </div>
                                        {/* <!-- end --> */}
                                        <div className="d-flex justify-content-between py-2">
                                            <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-danger align-middle me-2"></i> Cancelled</p>
                                            <div>
                                                <span className="text-muted pe-5">89 Projects</span>
                                                <span className="text-success fw-medium fs-13">~900hrs</span>
                                            </div>
                                        </div>
                                        {/* <!-- end --> */}
                                    </div>
                               </div>
                                </div>
                                {/* <!-- end cardbody --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}

                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

            <Footer/>
        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper --> */}



    {/* <!--start back-to-top--> */}
    <button className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/* <!--end back-to-top--> */}

    {/* <!--preloader--> */}
    {/* <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

    <div className="customizer-setting d-none d-md-block">
        <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
            <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
        </div>
    </div>

    {/* <!-- Theme Settings --> */}
    <ThemeSetting/>
    </>
  )
}

export default Dashboard
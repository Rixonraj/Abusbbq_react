import React, { useState } from 'react'
import './Admindashboard.css'
import './AdminSidebar.css'
import AdminSidebar from './AdminSidebar'
import { Link, Route, Router, Routes, useParams } from 'react-router-dom'
import AdminOrders from './AdminOrders'
import AdminMenu from './AdminMenu'
import AdminReport from './AdminReport'

function Admindashboard() {
  const params = useParams();
  const [selectMenu, setselectMenu] = useState(params.adminOrders)
  return (
    <div>
      <div class="sidebar">
        <Link className='unsetStyles' to="/admindashboard/adminOrders"><span className={selectMenu === 'adminOrders' ? "active" : ""} onClick={() => setselectMenu('adminOrders')}>Orders</span></Link>
        <Link className='unsetStyles' to="/admindashboard/adminMenu"><span className={selectMenu === 'adminMenu' ? "active" : ""} onClick={() => setselectMenu('adminMenu')}>Menu</span></Link>
        <Link className='unsetStyles' to="/admindashboard/adminReport"><span className={selectMenu === 'adminReport' ? "active" : ""} onClick={() => setselectMenu('adminReport')}>Report</span></Link>
      </div>
      <div className='dashcontent'>
        {selectMenu === "adminOrders" ? <AdminOrders></AdminOrders> : (
          selectMenu === "adminMenu" ? <AdminMenu></AdminMenu> : (
            selectMenu === "adminReport" ? <AdminReport></AdminReport> : <h1>
              Select Tab</h1>))}
      </div>


    </div>


  )
}

export default Admindashboard
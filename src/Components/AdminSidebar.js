import React from 'react'
import './AdminSidebar.css'
import { Link } from 'react-router-dom'
function AdminSidebar() {
  return (
      <div class="sidebar">
         
         
         
        <span class="active"><Link to="/adminOrders">Orders</Link></span>
        <span><Link to="/adminMenu">Menu</Link></span>
        <span><Link to="/adminReport">Report</Link></span>
      </div>

  )
}

export default AdminSidebar
import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillDashboard, AiFillCreditCard} from 'react-icons/ai'
import { BiCategoryAlt, BiUserCircle} from 'react-icons/bi'
import {FaShuttleVan} from 'react-icons/fa'
import { RiAdminFill} from 'react-icons/ri'
import { CgProfile} from 'react-icons/cg'
import { MdOutlineProductionQuantityLimits} from 'react-icons/md'

export const Sidebar = () => {
  return (
    <div className="side-bar bg-dark text-light p-3 sid-nav">
        <p className='mt-3 text-center'>Admin Panel</p>
        <hr/>
        <nav>
            <ul className='list-unstyled'>
                <li><Link className='nav-link' to="/dashboard"><AiFillDashboard className='fs-4'/> Dashboard</Link></li>
                <li><Link className='nav-link' to="/catageory"><BiCategoryAlt className='fs-4'/> Category</Link></li>
                <li><Link className='nav-link' to="/product"><MdOutlineProductionQuantityLimits className='fs-4'/> Product</Link></li>
                <li><Link className='nav-link' to="/payment-option"><AiFillCreditCard className='fs-4'/> Payment Options</Link></li>
                <li><Link className='nav-link' to="/order"><FaShuttleVan className='fs-4'/> Order</Link></li>
                <li><Link className='nav-link' to="/customer"><BiUserCircle className='fs-4'/> Customer</Link></li>
                <li><Link className='nav-link' to="/admin-user"><RiAdminFill className='fs-4'/> AdminUser</Link></li>
                <hr/>
                <li><Link className='nav-link' to="/profile"><CgProfile className='fs-4'/> Profile</Link></li>

            </ul>
        </nav>
    </div>
  )
}

/* eslint-disable no-restricted-globals */
import React,{FC,useState} from 'react';
import '../css/Layout.css'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

interface LayoutProps {
    children: React.ReactNode;
  }

  interface MenuItem {
    name: string;
    path: string;
    icon: string;
  }

const Layout:FC <LayoutProps>= (props) => {

  const {user} = useAppSelector((state)=>state.User)

 const navigate = useNavigate()
  
  
  // console.log(user,'layout')
   
    const [collapsed,setCollapsed]=useState(true)

    const location = useLocation()

    const userMenu: MenuItem[] = [
        {
          name: "Home",
          path: '/',
          icon: 'ri-home-line'
        },
        {
            name: "Appointments",
            path: '/appointments',
            icon: "ri-file-list-line"
          },
          {
            name: "Apply Doctor",
            path: '/apply-doctor',
            icon: "ri-hospital-line"
          },
          {
            name: "Profile",
            path: '/profile',
            icon: "ri-user-line"
          }
      ];

    const admin: MenuItem[] = [
        {
          name: "Home",
          path: '/',
          icon: 'ri-home-line'
        },
        {
          name: "Users",
          path: '/users',
          icon: "ri-user-line"
        },
        {
          name: "Doctors",
          path: '/doctor',
          icon: "ri-user-star-line"
        },
        // {
        //   name: "Profile",
        //   path: '/profile',
        //   icon: "ri-user-line"
        // }
      ];

      const menuToBeRendered = user?.isAdmin ?admin : userMenu 

      

  return (
    <div className="main">
        <div className="d-flex layout">
            {/* <div className={`${collapsed ? 'mobilesliderbar': 'slidebar'}`}> */}
            <div className='slidebar'>
                <div className="sliderbar-header">
                        <h1 className='logo'>SH</h1>
                </div>
                <div className="menu ">
                    {
                        menuToBeRendered.map((menu,i)=>{
                            const isActive = location.pathname === menu.path
                          return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`} key={i}>
                                   <Link to={menu.path}> <i className={menu.icon}></i></Link>
                                    {
                                        !collapsed  && <Link to={menu.path}>{menu.name}</Link>
                                    }
                                    
                                </div>
                        })
                    }
                    <div className={`d-flex menu-item `} 
                                  onClick={()=>{localStorage.clear()
                                                  navigate('/login')}}>

                                <i className="ri-logout-box-line"></i>
                                {
                                        !collapsed  && <Link to='/login'>Logout</Link>
                                    }
                                    
                      </div>
                </div>
            </div>
            <div className="content">
                <div className="header">
                    {
                        !collapsed ? <i className="ri-close-line header-action-icon" onClick={()=>setCollapsed(true)}></i> 
                        : <i className="ri-menu-2-fill header-action-icon" onClick={()=>setCollapsed(false)}></i>
                    }
                    <div className='d-flex align-item-center justify-content-center px-3'>
                        <i className="ri-notification-line header-action-icon px-1"></i>
                        <Link to='' className='anchor mt-2' style={{fontWeight:"bold",textDecoration:"none"}}>{user?.name}</Link>
                    </div>
                    
                </div>
                <div className="body">
                        {props.children}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Layout
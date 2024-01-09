import React,{FC} from 'react';
import { Navigate } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
  }
  

const PubliceRoute:FC<LayoutProps> = (props) => {
    if(localStorage.getItem('token')){
        return <Navigate to='/' />;
      }else{
        return <div>{props.children}</div> ;
      }
}

export default PubliceRoute
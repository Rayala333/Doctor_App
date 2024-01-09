import React, { FC, useEffect, useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/userSlice';

import {hideLoading,showLoading} from '../redux/alertsSlice'

interface LayoutProps {
  children: React.ReactNode;
}

const ProtectedRoute: FC<LayoutProps> = (props) => {
  const { user } = useAppSelector((state) => state.User);

  // console.log(user, 'userdata');

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const getUser = useCallback(async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get('http://localhost:8000/api/users/userdata', {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      });
      dispatch(hideLoading())
      if (response.data.success) {
        dispatch(setUser(response.data.data));
      } else {
        localStorage.clear()
        navigate('/login');
      }
      // console.log(response.data);
    } catch (err) {
      localStorage.clear()
      navigate('/login');
      // console.log(err);
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  if (localStorage.getItem('token')) {
    return <div>{props.children}</div>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
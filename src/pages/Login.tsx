import React from 'react'
import {Button, Form,Input} from 'antd'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useAppDispatch } from '../redux/hooks';
import { hideLoading, showLoading } from '../redux/alertsSlice';


interface counterState {
  email:string,
  password:string
}

const Login = () => {

  // const{loading} = useAppSelector((state)=>state.alert)

  const dispatch = useAppDispatch()


  // console.log(loading)

  const navgate = useNavigate()

  const onsubmit = async(values:counterState)=>{
    try{
      dispatch(showLoading())
      const responce =  await axios.post('http://localhost:8000/api/users/login',values)
      dispatch(hideLoading())
      if(responce.data.success){
            toast.success(responce.data.msg)

            localStorage.setItem("token",responce.data.token)
          
            navgate('/')
            
      }else{
        toast.error(responce.data.msg)
      }
      
    }catch(error){
      dispatch(hideLoading())
      toast.error("smothing want woring")
    }
  }
  return (
    <div className="authentation">
      <div className="authenatation-fom card p-3">
        <h1 className='card-title'>Welcome Back</h1>
        <Form layout='vertical' onFinish={onsubmit} >
          <Form.Item label='Email' name='email'>
            <Input  placeholder='Email' type='email'/>
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input  placeholder='password' type='password'/>
          </Form.Item>
          <div className='d-flex justify-content-between align-items-center'>
            <Button className='primary-button my-2' htmlType='submit'>LOGIN</Button>
            <Link to='/register' className='ancher'>CLICK HEAR TO Register</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
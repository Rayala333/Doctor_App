import React from 'react';
import {Button, Form,Input} from 'antd'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useAppDispatch } from '../redux/hooks';
import { hideLoading, showLoading } from '../redux/alertsSlice';


interface counterState {
  name:string,
  email:string,
  password:string
}

const Register = () => {
  const navgate = useNavigate()
  // const{loading} = useAppSelector((state)=>state.alert)

  // console.log(loading)

  const dispatch = useAppDispatch()

  const onsubmit = async(values:counterState)=>{
      try{
        dispatch(showLoading())
        const responce =  await axios.post('http://localhost:8000/api/users/register',values)
        dispatch(hideLoading())
        if(responce.data.success){
              toast.success(responce.data.msg)
              navgate('/login')
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
        <h1 className='card-title'>Nice To Meet U</h1>
        <Form layout='vertical' onFinish={onsubmit} >
          <Form.Item label='Name' name='name'>
            <Input  placeholder='Name' type='text'/>
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input  placeholder='Email' type='email'/>
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input  placeholder='password' type='password'/>
          </Form.Item>
          <div className='d-flex justify-content-between align-items-center'>
            <Button className='primary-button my-2' htmlType='submit'>REGISTER</Button>
            <Link to='/login' className='ancher'>CLICK HEAR TO LOGIN</Link>
          </div>
          
        </Form>
      </div>
    </div>
  )
}

export default Register
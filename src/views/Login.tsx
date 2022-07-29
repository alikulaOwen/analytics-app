import { Form, Input, notification } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';
import { FC, 
  useEffect 
} from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useInput from "../app/hooks/input/use_input";
import { validateEmail } from "../app/shared/utils/validation/email";
import { validatePasswordLength } from "../app/shared/utils/validation/length";
import { reset, login } from "../features/auth/authSlice";
import { LoginUser } from "../features/auth/Models/loginUser";
import { useNavigate} from 'react-router-dom'




export const Login: FC = ()=>{
   const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  
  const dispatch = useAppDispatch();

  const { isSuccess, isAuthenticated, isError, isLoading, message,} = useAppSelector(
    (state) => state.auth
  );

  const navigate =useNavigate();
  useEffect(() => {
    const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };
    // if (isError) {
    //   openNotification(message, "Login Error", <SmileOutlined style={{ color: '#ee0202 !important' }} />)

    // }
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch, emailClearHandler, passwordClearHandler,]);
  
  useEffect(() => {
    if (!isAuthenticated) return;

    
    navigate('/app')
    
  }, [isAuthenticated, isError, message, navigate]);
   

  const openNotification = (msg: string, title: string, icon: any) => {
    notification.open({
      message: title,
      description:
        msg,
      icon: icon,
    });
  };


  const onSubmitHandler = () => {

    if (emailHasError || passwordHasError) return;

    if (email.length === 0 || password.length === 0) return;
    
    

    const loginUser: LoginUser = {
      email, password,
      persistent: true
    };

    dispatch(login(loginUser));

    if (isError) {
      openNotification(message, "Login Error", <SmileOutlined style={{ color: '#ee0202' }} />)

    }
  };

    
    return (
        <div className="h-screen w-full bg-backgroundGray flex justify-center  items-center">
      <div className="w-[300px]  ">
        <img className="bwala-logo w-full" src='https://admin-prod.duhqa.com/static/media/bwala_logo.030aa2d1.svg' alt="bwala logo" />
        <Form 
        onFinish={onSubmitHandler}
         className="flex flex-col justify-center">
          <Form.Item className="">
            <Input
              value ={email}
              onChange={emailChangeHandler}
              placeholder={'user name'}
              className="login-input w-full min-h-[32px] bg-white mt-5
               text-[14px] py-1 px-[11px]"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              value={password}
              onChange={passwordChangeHandler}
              placeholder={'password'}
              className="login-input w-full min-h-[32px] 
             py-1 px-[11px] bg-white mt-5 text-[14px]"
            />
          </Form.Item>
          <button
          disabled={
                !validatePasswordLength(password)
              }
            className={`btn-dark bg-bwalaPrimary mt-5
             h-[32px] w-[75px] mx-[112.5px] rounded text-white`}
            type={'submit'}>SUBMIT
          </button>
        </Form>
      </div>
    </div>
    )
}


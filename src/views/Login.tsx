import { Form, Input } from "antd";
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

  const { isSuccess, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const navigate =useNavigate();
  useEffect(() => {
    const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch, emailClearHandler, passwordClearHandler]);
  
  useEffect(() => {
    if (!isAuthenticated) return;
    navigate('/')
    
  }, [isAuthenticated, navigate]);

  const onSubmitHandler = () => {

    if (emailHasError || passwordHasError) return;

    if (email.length === 0 || password.length === 0) return;

    const loginUser: LoginUser = {
      email, password,
      persistent: true
    };
    console.log(loginUser)

    dispatch(login(loginUser));
  };

    
    return (
        <div className="h-screen bg-backgroundGray flex justify-center  items-center">
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
            <Input
              value={password}
              onChange={passwordChangeHandler}
              placeholder={'password'}
              type={'password'}
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


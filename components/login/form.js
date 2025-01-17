import Input from "../ui/inputfeild";
import React from "react";
import Button from "../ui/button";
import Image from 'next/image'
import { useRef } from "react";

function LoginForm(props) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    props.onSubmit({
      email: email,
      password: password,
    });
  };

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center">
        <div className="h-[450px] w-[350px] text-white my-[120px]">
          <h1 className="text-white font-bold text-[30px] flex justify-center mt-3">
            Login Form
          </h1>
          <form onSubmit={handleSubmit} action="login" className="text-white flex">
            <div>
              <Input type="email" name="email" placeholder="Enter your Email" ref={emailRef}/>
              <Input type="password" name="password" placeholder="Enter your Password"  ref={passwordRef}/>
              <div className="flex justify-center">
              <Button>Login</Button>
              </div>
              <p className="text-white text-sm ml-2 mt-3 text-center">
                Don't have an account?
                <a href="/signup" className="text-white underline">
                  Signup
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

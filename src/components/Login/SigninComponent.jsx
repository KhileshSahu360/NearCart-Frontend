import * as React from "react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import axios from "axios"


export function SigninComponent() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    const handleGoogleLogin = () => {
      window.open('http://localhost:3000/auth/google', '_self');
    };
    const handleLogin = async(event) => {
      event.preventDefault();

        const data = {
          email: email,
          password: password
        }
        const response = axios.post(`${backendURL}/api/v1/users/login`, data,  { withCredentials: true });
        console.log(response);
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In To NearCart</CardTitle>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email id" />
            </div>
            <div className="flex flex-col space-y-1.5 relative">
              <Label htmlFor="password">Password</Label>
              <Input type={showPassword?'text':'password'} id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
              <label htmlFor="" className="cursor-pointer absolute top-[45%] right-3" onClick={togglePassword}>{showPassword?<IoIosEye/>:<IoIosEyeOff/>}</label>
            </div>
            <div className="flex justify-center items-center flex-col space-y-1.5 relative">
              <Label htmlFor="password" className="my-4">OR</Label>
              <a href="#" onClick={handleGoogleLogin} className="flex gap-2 items-center w-full justify-center border rounded-md py-2 font-normal"><img src="./googleIcon.svg" className="size-5" alt="" /> Login with Google</a>
                  
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full bg-mainColor hover:bg-slate-300 hover:text-mainColor">Login</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

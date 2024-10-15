import * as React from "react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";


export function SignupComponent() {
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In To NearCart</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="name" />
            </div>
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
              <a href="#" className="flex gap-2 items-center w-full justify-center border rounded-md py-2 font-normal"><img src="./googleIcon.svg" className="size-5" alt="" /> Login with Google</a>
                  
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full bg-mainColor hover:bg-slate-300 hover:text-mainColor">Register</Button>
      </CardFooter>
    </Card>
  )
}
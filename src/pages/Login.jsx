import Header from "@/components/Header";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { SignupComponent } from "@/components/Login/SignupComponent";
import { SigninComponent } from "@/components/Login/SigninComponent";


const Login = () => {
  return (
    <>
      <Header />
      <div className="lg:absolute lg:top-[13%] md:top-[18%] md:absolute flex justify-center items-center w-full">
        <Tabs defaultValue="signup" className="w-[400px]">
          <TabsList className="h-11">
            <TabsTrigger className="px-24 py-2" value="signup">SignUp</TabsTrigger>
            <TabsTrigger className="px-24 py-2" value="signin">SignIn</TabsTrigger>
          </TabsList>
          <TabsContent value="signup" className="w-[480px]">
            <SignupComponent/>  
          </TabsContent>
          <TabsContent value="signin" className="w-[480px]">
            <SigninComponent/>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Login;

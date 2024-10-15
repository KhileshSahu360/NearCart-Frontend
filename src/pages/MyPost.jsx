import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"

import AllPost from "@/components/My Post/AllPost";
import Accepted from "@/components/My Post/Accepted";
import Pending from "@/components/My Post/Pending";

const MyPost = () => {
  return (
    <div>
      <label htmlFor="" className="font-semibold text-[1.5rem]">
        My Post
      </label>
      <Tabs defaultValue="post" className="w-full mt-5 ">
        <TabsList className="h-11  bg-transparent flex items-center justify-center">
          <TabsTrigger className="lg:px-24 md:px-14 px-7 lg:py-2" value="post">
            All Post
          </TabsTrigger>
          <TabsTrigger className="lg:px-24 md:px-14 px-7 lg:py-2" value="accepted">
            Accepted
          </TabsTrigger>
          <TabsTrigger className="lg:px-24 md:px-14 px-7 lg:py-2" value="pending">
            Pending
          </TabsTrigger>
        </TabsList>
        <TabsContent value="post" className="w-[100%]">
          <AllPost/>
        </TabsContent>
        <TabsContent value="accepted" className="w-[100%]">
          <Accepted/>
        </TabsContent>
        <TabsContent value="pending" className="w-[100%]">
          <Pending/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyPost;

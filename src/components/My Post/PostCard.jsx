import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

const PostCard = () => (
  <Card
    className='lg:w-[80%] w-[90%] md-w-[80%]'
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <label htmlFor="">Qt-10</label>,
      <label htmlFor="" className='px-2 py-1 bg-green-200 rounded-md font-semibold'>success</label>,
    //   <label htmlFor="" className='px-2 py-1 bg-[#FFF8DC] rounded-md font-semibold'>pending</label>,
      <label htmlFor="" className='flex justify-center cursor-pointer items-center gap-1'>Track <FaArrowUpRightFromSquare/></label>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);
export default PostCard;
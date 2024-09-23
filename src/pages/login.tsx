import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { Input, Space, Button, Toast } from '@douyinfe/semi-ui';
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import md5 from 'md5';
import {LocalForageService as storage} from "../utils/storage";

interface LoginProps {
  changeLoginMode: (arg0: boolean) => void;
}

const expiredRuration = 7 * 24 * 3600;

const Login: React.FC<LoginProps> = React.memo((
  {
    changeLoginMode
  }
) => {
  const [passwd, setPasswd] = useState<string>("");

  const changePasswd = (value: string) => {
    setPasswd(value);
  }

  const navigate = useNavigate();

  const clickBtn = () => {
    // curidemo123
    // 2acd40c45611ae5fb00ca0c25c66068c
    const hash = md5(passwd);
    if (hash === "2acd40c45611ae5fb00ca0c25c66068c") {
      storage.setItem("login_mode", true);
      storage.setItem("expired_time", Date.now() + expiredRuration * 1000);
      changeLoginMode(true);
      navigate("/comment");
    } else {
      Toast.error({
        content: "密码错误！请重试！",
        duration: 2,
      });
    }
  }

  return (
    <div className='login-div-block'>
      <Space vertical spacing='loose' align='start'>
        <Text className="t1">输入密码开启BZ-Chat</Text>
        <Space>
          <Input 
          prefix="PIN" 
          size='large' 
          showClear
          mode="password"
          onChange={changePasswd} />
          <Button size='large' onClick={clickBtn}>确认</Button>
        </Space>
      </Space>
    </div>
  );
});


export default Login;
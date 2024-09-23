import { Layout } from "@douyinfe/semi-ui";
import {Navigate, Route, Routes} from "react-router-dom";
import CommentIndex from "./pages/comment/Index";
import SettingIndex from "./pages/setting/Index";
import RoleIndex from "./pages/setting/RoleIndex";
import ModelIndex from "./pages/setting/ModelIndex";
import PluginIndex from "./pages/setting/PluginIndex";
import NormalIndex from "./pages/setting/NormalIndex";
import NotFound from "./pages/404";
import Login from "./pages/login";
import {invoke} from "@tauri-apps/api/tauri";
import {useEffect, useState} from "react";
import {LocalForageService as storage} from "./utils/storage";

function Index() {
  const [runEnvType, setRunEnvType] = useState<string>("web");
  const [loginMode, setLoginMode] = useState<boolean>(false);
  const { Content } = Layout;

  const changeLoginMode = (value: boolean) => {
    setLoginMode(value);
  }

  useEffect(() => {
    // console.log("loginmode", loginMode);
    storage.getItem<number>("expired_time").then(expiredTime => {
      const curr_timestamp = Date.now();
      if (expiredTime && curr_timestamp < expiredTime) {
        storage.getItem<boolean>("login_mode").then(mode => {
          if (mode) {
            setLoginMode(true);
          }
        });
      }
    });


    invoke("get_os_name").then((osName) => {
      setRunEnvType(osName as string);
    }).catch(() => console.log("Web浏览器"));

    storage.getItem<'light' | 'dark'>("theme_mode").then(mode => {
      if (mode) {
        document.body.setAttribute('theme-mode', mode);
      } else {
        document.body.setAttribute('theme-mode', 'dark');
      }
    });
  }, []);

  return (
    <Content className={`env-${runEnvType} main-box full-height semi-light-scrollbar`}>
      {loginMode ? <Routes>
        <Route path="/" element={<Navigate to="/comment" />} />
        <Route path="/setting" element={<SettingIndex />} children={[
          <Route key="setting-role" path="role" element={<RoleIndex />} />,
          <Route key="setting-model" path="model" element={<ModelIndex />} />,
          <Route key="setting-plugin" path="plugin" element={<PluginIndex />} />,
          <Route key="setting-normal" path="normal" element={<NormalIndex />} />,
        ]} />
        <Route path="/comment" element={<CommentIndex />} />
        <Route path="/login" element={<Login changeLoginMode={changeLoginMode} />} />
        <Route path="*" element={<NotFound />} />
      </Routes> :
      <Login changeLoginMode={changeLoginMode} />}
    </Content>
  );
}

export default Index;
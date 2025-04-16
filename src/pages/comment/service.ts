import { initialOpenaiAttribute } from "../../utils/initial-state";
const { baseURL } = initialOpenaiAttribute;
export async function uploadFile(file: any) {
    const formData = new window.FormData();
    formData.append('file', file);
    const file_url = await fetch(baseURL + "/upload",
        {
            method: "POST",
            body: formData,
        }
    ).then(res => res.json())
        .then(data => {
            if (data['data']['file_url']) {
                return data['data']['file_url'];
            }
            else {
                console.log('文件上传失败');
                return '';
            }
        }).catch(err => {
            console.log('网络错误', err);
            return '';
        });
    return file_url
}
import axios from "axios";

const service = axios.create({
    headers: {"Content-Type": "application/json;charset=utf-8"},
    baseURL: import.meta.env.VITE_BASE_URL
})
service.defaults.transformResponse = [
    function (data) {
        return data
    }
]
service.interceptors.response.use(response => {
    if ((response.data as string).startsWith("{")) {
        return JSON.parse(response.data)
    } else {
        return response.data;
    }
}, error => {
    console.log("响应失败：", error.message)
})

export function get(url: string): Promise<any> {
    return service.get(url);
}

export function remove(url: string): Promise<any> {
    return service.delete(url);
}

export function post(url: string, data: any): Promise<any> {
    return service.post(url, data);
}

export function put(url: string, data: any): Promise<any> {
    return service.put(url, data);
}

export function patch(url: string, data: any): Promise<any> {
    return service.patch(url, data);
}



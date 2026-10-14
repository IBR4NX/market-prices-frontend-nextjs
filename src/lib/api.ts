// const deviceInfo = {
//   userAgent: navigator.userAgent,
//   language: navigator.language,
//   platform: navigator.platform,
//   online: navigator.onLine,
// };
import axios from "axios";
import { API_URL } from "./constants";
//<##☆##> api <##☆##>

const api = axios.create({
  baseURL: API_URL,
  //  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
  }
  console.log("api-25: ", config.url);
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    console.log("API Request Error:", {
      message: error.message,
      status: error.response?.status,
      url: originalRequest?.url,
    });

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // اترك منطق تجديد التوكن الموجود لديك كما هو.
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
// Error Handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);
interface apiData {
  err: String;
  success: boolean;
  data: any;
}
function response(
  err: String = "",
  data: any,
  success: boolean = true,
): apiData {
  // console.log(req);
  // const res = await api.post(url, req);
  return { err: err, success: success, data: data };
}
export async function apiPost(url: string, req: any) {
  api
    .post(url, req)
    .then((res) => {
      // localStorage.setItem("token", res.data.token);
      // console.log(res);
      // setMessange(res.data.error)
      return response("", res.data);
    })
    .catch((err) => {
      return response(
        err.response?.data?.error || "حدث خطأ غير متوقع",
        "",
        false,
      );
    });
}
export const post = (url: string, req: any) => api.post(url, req);
export const setToken = (token: string, refreshtoken: string) => {
  if (token) localStorage.setItem("token", token);
  if (refreshtoken) localStorage.setItem("refreshtoken", refreshtoken);
};
export default apiPost;

export { API_URL, api };

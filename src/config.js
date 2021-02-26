/* eslint-disable new-cap */
import axios from "axios";
import "dotenv-defaults/config";
import jsSHA from "jssha";

const getSignature = (xDate, key) => {
  const shaObj = new jsSHA("SHA-1", "TEXT", {
    hmacKey: { value: key, format: "TEXT" },
  });
  shaObj.update(`x-date: ${xDate}`);
  return shaObj.getHMAC("B64");
};

const CITIES = {
  Taipei: "臺北市",
  NewTaipei: "新北市",
  Taoyuan: "桃園市",
  Taichung: "臺中市",
  Tainan: "臺南市",
  Kaohsiung: "高雄市",
  Keelung: "基隆市",
  Hsinchu: "新竹市",
  HsinchuCounty: "新竹縣",
  MiaoliCounty: "苗栗縣",
  ChanghuaCounty: "彰化縣",
  NantouCounty: "南投縣",
  YunlinCounty: "雲林縣",
  ChiayiCounty: "嘉義縣",
  Chiayi: "嘉義市",
  PingtungCounty: "屏東縣",
  YilanCounty: "宜蘭縣",
  HualienCounty: "花蓮縣",
  TaitungCounty: "臺東縣",
  KinmenCounty: "金門縣",
  PenghuCounty: "澎湖縣",
  LienchiangCounty: "連江縣",
};

const {
  REACT_APP_APP_ID: APP_ID,
  REACT_APP_APP_KEY: APP_KEY,
  REACT_APP_SERVER_URL: SERVER_URL,
} = process.env;
const SERVER = axios.create({ baseURL: `${SERVER_URL}/v2/Tourism` });
SERVER.interceptors.request.use((config) => {
  const xDate = new Date().toUTCString();
  config.headers.Authorization = `hmac username="${APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${getSignature(
    xDate,
    APP_KEY
  )}"`;
  config.headers["x-date"] = xDate;
  console.log(config.headers.Authorization, config.headers["x-date"]);
  return config;
});

export { CITIES, APP_ID, APP_KEY, SERVER };

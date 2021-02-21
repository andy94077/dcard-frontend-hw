import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SceneCard from "./SceneCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: 320 * 3 + 5 * 6,
    [theme.breakpoints.down("sm")]: { width: 320 * 2 + 5 * 4 },
    [theme.breakpoints.down(660)]: { maxWidth: 400, width: "100%" },
  },
  card: {
    margin: 3,
    width: "100%",
    [theme.breakpoints.up(660)]: { width: 320, margin: 5 },
  },
}));

const scenes = [
  {
    ID: "C1_A25000000E_000004",
    Name: "國立歷史博物館",
    DescriptionDetail:
      "國立歷史博物館創建於1955年，是國民政府來臺設立的第一座公共博物館，館藏約計六萬件，典藏文物品類從史前彩陶、商周甲骨銅器、唐三彩、明清刺繡、玉器、漆器、民初家具與戲偶、近代書畫至歷代錢幣與銀元寶等，古今兼備，樣貌多元，具民間性與生活性特色。館內一到四樓為展示空間，長期以來是國內文化藝術活動的重要場域。一樓為特展區，經常規劃各類國際性特展與國際文化交流，二樓國家畫廊以展出近代書畫作品為主，三樓館藏華夏文物常設展，展出館藏精品四百餘件，能一覽本館典藏文物的特色與價值，四樓主題展覽區展示內容豐富且多元。國立歷史博物館鄰近植物園，附近有藝術教育館、二二八紀念館、郵政博物館、布政使司文物館等文教機構場所，在煩囂的臺北都會區內，是一理想的休憩場所。",
    Description:
      "國立歷史博物館創建於1955年，是國民政府來臺設立的第一座公共博物館，館藏約計六萬件，典藏文物品類從史前彩陶、商周甲骨銅器、唐三彩、明清刺繡、玉器、漆器、民初家具與戲偶、近代書畫至歷代錢幣與銀元寶等，古今兼備，樣貌多元，具民間性與生活性特色。館內一到四樓為展示空間，長期以來是國內文化藝術活動的重要場域。一樓為特展區，經常規劃各類國際性特展與國際文化交流，二樓國家畫廊以展出近代書畫作品為主，三樓館藏華夏文物常設展，展出館藏精品四百餘件，能一覽本館典藏文物的特色與價值，四樓主題展覽區展示內容豐富且多元。國立歷史博物館鄰近植物園，附近有藝術教育館、二二八紀念館、郵政博物館、布政使司文物館等文教機構場所，在煩囂的臺北都會區內，是一理想的休憩場所。",
    Phone: "886-2-23610270",
    Address: "臺北市中正區南海路49號",
    ZipCode: "100",
    TravelInfo: "",
    OpenTime: "週二至週日每日十時至下午六時(逢國定假日照常開館)",
    Picture: {
      PictureUrl1:
        "http://cloud.culture.tw/h_upload_ccacloud/sightseeing/4/1國立歷史博物館.jpg",
      PictureDescription1: "國立歷史博物館",
      PictureUrl2:
        "http://cloud.culture.tw/h_upload_ccacloud/sightseeing/4/2國立歷史博物館.jpg",
      PictureDescription2: "國立歷史博物館2",
      PictureUrl3:
        "http://cloud.culture.tw/h_upload_ccacloud/sightseeing/4/3國立歷史博物館.jpg",
      PictureDescription3: "國立歷史博物館3",
    },
    MapUrl: "",
    Position: {
      PositionLat: 25.03145,
      PositionLon: 121.51123,
      GeoHash: "wsqqmhcfb",
    },
    WebsiteUrl: "",
    ParkingInfo: "",
    ParkingPosition: {},
    TicketInfo: "",
    Remarks: "",
    Keyword: "",
    City: "臺北市",
    SrcUpdateTime: "2021-02-01T01:12:09+08:00",
    UpdateTime: "2021-02-01T01:16:51+08:00",
  },
  {
    ID: "C1_A25000000E_100004",
    Name: "下北沢世代",
    DescriptionDetail:
      "除了是專營古本、二手雜誌、絕版逸品、文房雜貨等各類商品的書店外，更是結合企画、選書、編集、設計的出版工作室。透過流通販售日本、歐美、香港的美術攝影、獨立刊物等主題商品，並策劃多檔以雜誌與zine為主題的平面活動。目前台中也有分店。",
    Description: "",
    Phone: "886-2-23145650",
    Address: "臺北市  中正區和平西路二段141號2樓之1",
    ZipCode: "104",
    TravelInfo:
      "捷運「龍山寺」站3號出口直行約10分鐘，或可搭北市公車1、007、和平幹線及藍28至「和平中華路口」站下車；或12、202、205、212、223、246、250、253、260、307、604、670、671及673至「大埔街」站下車。",
    OpenTime: "周六～日：13:00~19:00，週一～五公休",
    Picture: {
      PictureUrl1:
        "http://cloud.culture.tw/e_upload_ccacloud/festival/image/A0/B0/C0/D0/E0/F27/ffd53fcd-b4eb-4d60-afae-da040f4b0185.jpg",
      PictureDescription1: "",
      PictureUrl2: "",
      PictureDescription2: "",
      PictureUrl3: "",
      PictureDescription3: "",
    },
    MapUrl: "",
    Position: {
      PositionLat: 25.047978,
      PositionLon: 121.522418,
      GeoHash: "wsqqmrcgj",
    },
    Class1: "藝術類",
    WebsiteUrl: "",
    ParkingInfo: "",
    ParkingPosition: {},
    TicketInfo: "",
    Remarks: "",
    Keyword: "",
    City: "臺北市",
    SrcUpdateTime: "2021-02-01T01:12:09+08:00",
    UpdateTime: "2021-02-01T01:16:51+08:00",
  },
  {
    ID: "C1_A25000000E_100044",
    Name: "艾比露比外文書店",
    DescriptionDetail:
      "艾比露比外文書店是一間社區型書店。書店內書籍以英文兒童與成人繪本為大宗，並且不定期於店內舉辦女性成長、親職教養與英文師訓講座。感恩節至農曆新年這幾個月，也會固定舉辦義賣、物資捐贈與不定期至偏鄉或弱勢機構免費講故事活動。",
    Description: "",
    Phone: "02-2747-7808",
    Address: "臺北市  松山區饒河街175號2樓",
    ZipCode: "",
    TravelInfo: "捷運松山站2號出口，饒河夜市內",
    OpenTime:
      "本書店已於2018年完成網路系統化訂購，辦公室與倉庫不開放選書、付費及取書。",
    Picture: {
      PictureUrl1:
        "http://cloud.culture.tw/h_upload_ccacloud/festival/image/A0/B0/C0/D0/E0/F124/ca36ee4c-19d4-4703-ade8-8c98dbc7de25.jpg",
      PictureDescription1: "",
      PictureUrl2: "",
      PictureDescription2: "",
      PictureUrl3: "",
      PictureDescription3: "",
    },
    MapUrl: "",
    Position: {
      PositionLat: 25.050641,
      PositionLon: 121.575924,
      GeoHash: "wsqqw82fs",
    },
    Class1: "藝術類",
    WebsiteUrl: "http://www.abbyrubybooks.com",
    ParkingInfo: "",
    ParkingPosition: {},
    TicketInfo: "",
    Remarks: "",
    Keyword: "",
    City: "臺北市",
    SrcUpdateTime: "2021-02-01T01:12:09+08:00",
    UpdateTime: "2021-02-01T01:16:51+08:00",
  },
  {
    ID: "C1_A25000000E_100043",
    Name: "鴻儒堂書局",
    DescriptionDetail:
      "創立於1936年，專門經營日文書籍及日文雜誌，及各種日語學習教材、台日關係研究書籍等。同時有日本最新的出版資料供讀者查詢，並可代理訂購。",
    Description: "",
    Phone: "02-2311-3810；02-2311-3823",
    Address: "臺北市  中正區台北市博愛路九號五樓502室",
    ZipCode: "",
    TravelInfo: "捷運台北車站懷寧街（Z8）出口，星巴克旁溫州大餛飩巷內",
    OpenTime:
      "週一～週六：上午 10 : 00 - 下午 18 : 00 止 / 國定假日：上午 11 : 00 - 下午 18 : 00 止 (中午 12 : 00 - 下午 13 : 00 午休 / 星期日公休)",
    Picture: {
      PictureUrl1:
        "http://cloud.culture.tw/h_upload_ccacloud/festival/image/A0/B0/C0/D0/E0/F123/a9cd880d-4875-40a0-99da-2a58bf3a41f9.JPG",
      PictureDescription1: "",
      PictureUrl2: "",
      PictureDescription2: "",
      PictureUrl3: "",
      PictureDescription3: "",
    },
    MapUrl: "",
    Position: {
      PositionLat: 25.046237,
      PositionLon: 121.513756,
      GeoHash: "wsqqmpe8g",
    },
    Class1: "藝術類",
    WebsiteUrl: "http://www.hjtbook.com.tw",
    ParkingInfo: "",
    ParkingPosition: {},
    TicketInfo: "",
    Remarks: "",
    Keyword: "",
    City: "臺北市",
    SrcUpdateTime: "2021-02-01T01:12:09+08:00",
    UpdateTime: "2021-02-01T01:16:51+08:00",
  },
  {
    ID: "C1_A25000000E_100017",
    Name: "雅痞書店",
    DescriptionDetail:
      "雅痞書店是一個複合著電影、音樂、餐飲、藝術展覽等功能的書店空間。店裡不時會更動擺設，讓空間因著藝術化、生活化的衝突而擁有更多的可能性與包容性。",
    Description: "",
    Phone: "02-27317477",
    Address: "臺北市  大安區復興南路一段126巷1號3樓之一(丰居旅店旁)",
    ZipCode: "106",
    TravelInfo:
      "可搭北市公車278、285、294、52、556、902、905或敦化幹線至「成功國宅」站下車。",
    OpenTime: "11:30 ~ 22:00，周一店休",
    Picture: {
      PictureUrl1: "",
      PictureDescription1: "",
      PictureUrl2: "",
      PictureDescription2: "",
      PictureUrl3: "",
      PictureDescription3: "",
    },
    MapUrl: "",
    Position: {
      PositionLat: 25.043179,
      PositionLon: 121.54311,
      GeoHash: "wsqqmybzp",
    },
    Class1: "藝術類",
    WebsiteUrl: "http://www.yup.com.tw/",
    ParkingInfo: "",
    ParkingPosition: {},
    TicketInfo: "",
    Remarks: "",
    Keyword: "",
    City: "臺北市",
    SrcUpdateTime: "2021-02-01T01:12:09+08:00",
    UpdateTime: "2021-02-01T01:16:51+08:00",
  },
  {
    ID: "C1_A25000000E_100042",
    Name: "大陸書店",
    DescriptionDetail:
      "大陸書店展售中外音樂書籍、鋼琴、小提琴、吉他…等各種樂器的學程教材及樂譜；手作藝術類書籍、期刊－－裁縫、毛線編織、壓花、十字繡、不織布、黏土、刺繡、拼布、串珠…等，更收藏了逸品級的『書道全集』等書法字帖、繪本，每每讓人有『挖寶般』流連忘返的新鮮感。",
    Description: "",
    Phone: "886-2-23113914",
    Address: "臺北市  中正區衡陽路79號3F",
    ZipCode: "",
    TravelInfo: "捷運西門站4號出口",
    OpenTime: "週一～週日 09:00 ～ 21:00  (除夕至初五休)",
    Picture: {
      PictureUrl1:
        "http://cloud.culture.tw/h_upload_ccacloud/festival/image/A0/B0/C0/D0/E0/F121/56bb41c3-e7e3-4d27-8aff-7a87ddd0e1b7.jpg",
      PictureDescription1: "",
      PictureUrl2: "",
      PictureDescription2: "",
      PictureUrl3: "",
      PictureDescription3: "",
    },
    MapUrl: "",
    Position: {
      PositionLat: 25.042337,
      PositionLon: 121.510993,
      GeoHash: "wsqqmncd5",
    },
    Class1: "藝術類",
    WebsiteUrl: "https://www.talubook.com/",
    ParkingInfo: "",
    ParkingPosition: {},
    TicketInfo: "",
    Remarks: "",
    Keyword: "",
    City: "臺北市",
    SrcUpdateTime: "2021-02-01T01:12:09+08:00",
    UpdateTime: "2021-02-01T01:16:51+08:00",
  },
  {
    ID: "C1_A25000000E_100002",
    Name: "亞典藝術書店",
    DescriptionDetail:
      "是一家專售藝術、設計類等外文書的書店。2000年遷移到仁愛路現址，書籍種類也拓展到建築、空間、數位藝術、攝影、應用美術、流行文化等。雖然95年於重慶南路開設的分店已結束，但亞典依然是尋找、發現上述各類外文書籍的重要寶庫。",
    Description: "",
    Phone: "886-2-27845166#21, #22",
    Address: "臺北市  大安區仁愛路3段122號B1",
    ZipCode: "106",
    TravelInfo:
      "捷運忠孝復興站2號出口右轉見江太太包子店後,繼續直走到福華飯店後右轉至仁愛路,繼續直走過彰化銀行後可見書店招牌(總計步行約15分)， 捷運大安站1號出口右邊巷子(信義路三段147巷)直走至仁愛路三段後左轉,過彰化銀行後可見招牌 (總計約10分鐘)",
    OpenTime: "週一至週日 : 10:00~21:00",
    Picture: {
      PictureUrl1:
        "http://cloud.culture.tw/e_upload_ccacloud/festival/image/A0/B0/C0/D0/E0/F21/101307b0-ca39-4d70-b34d-836b1f9597d7.JPG",
      PictureDescription1: "",
      PictureUrl2: "",
      PictureDescription2: "",
      PictureUrl3: "",
      PictureDescription3: "",
    },
    MapUrl: "",
    Position: {
      PositionLat: 25.037412,
      PositionLon: 121.540381,
      GeoHash: "wsqqmtzj2",
    },
    Class1: "藝術類",
    WebsiteUrl: "http://www.artland.com.tw",
    ParkingInfo: "",
    ParkingPosition: {},
    TicketInfo: "",
    Remarks: "",
    Keyword: "",
    City: "臺北市",
    SrcUpdateTime: "2021-02-01T01:12:09+08:00",
    UpdateTime: "2021-02-01T01:16:51+08:00",
  },
];

export default function SceneList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {scenes.map((scene) => (
        <SceneCard
          className={classes.card}
          name={scene.Name}
          image={scene.Picture.PictureUrl1}
          text={scene.Description}
        />
      ))}
    </div>
  );
}

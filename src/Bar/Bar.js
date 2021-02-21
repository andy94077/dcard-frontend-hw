import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: { marginRight: theme.spacing(2) },
  select: {
    backgroundColor: "#eee",
    paddingLeft: theme.spacing(1),
    "&:focus": { backgroundColor: "#eee", borderRadius: 4 },
  },
  offset: theme.mixins.toolbar,
}));

const cities = [
  { name: "臺北市", value: "Taipei" },
  { name: "新北市", value: "NewTaipei" },
  { name: "桃園市", value: "Taoyuan" },
  { name: "臺中市", value: "Taichung" },
  { name: "臺南市", value: "Tainan" },
  { name: "高雄市", value: "Kaohsiung" },
  { name: "基隆市", value: "Keelung" },
  { name: "新竹市", value: "Hsinchu" },
  { name: "新竹縣", value: "HsinchuCounty" },
  { name: "苗栗縣", value: "MiaoliCounty" },
  { name: "彰化縣", value: "ChanghuaCounty" },
  { name: "南投縣", value: "NantouCounty" },
  { name: "雲林縣", value: "YunlinCounty" },
  { name: "嘉義縣", value: "ChiayiCounty" },
  { name: "嘉義市", value: "Chiayi" },
  { name: "屏東縣", value: "PingtungCounty" },
  { name: "宜蘭縣", value: "YilanCounty" },
  { name: "花蓮縣", value: "HualienCounty" },
  { name: "臺東縣", value: "TaitungCounty" },
  { name: "金門縣", value: "KinmenCounty" },
  { name: "澎湖縣", value: "PenghuCounty" },
  { name: "連江縣", value: "LienchiangCounty" },
];

export default function Bar() {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState("all");

  const handleSelectChange = (e) => setSelectedOption(e.target.value);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Choose the city:
          </Typography>
          <NativeSelect
            classes={{ select: classes.select }}
            value={selectedOption}
            variant="outlined"
            onChange={handleSelectChange}
          >
            <option value="all">全部</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.name}
              </option>
            ))}
          </NativeSelect>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}

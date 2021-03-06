# Dcard Web Frontend Intern Homework

## How to launch
```bash
yarn
yarn start
```
The server will be started at http://localhost:3000.

## Architecture
* 上方的 Navbar 可以選擇要篩選哪個城市的景點，或是查看全部的景點。
* 選擇城市後，網頁會詢問後端，得到符合的景點，若該景點有圖片也會顯示出來。每個景點用一個 card 顯示，頁面會因為網頁寬度而改變一行顯示的數量。
* 滑動到頁面底部的時候會自動載入更多景點。
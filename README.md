# Dilemma

Dilemma 是針對近年在 twitch 很熱門的「二選一競賽」而設計的網站。<br>使用者可以在自己或是他人建立的競賽中，針對特定主題，從系統隨機挑選的兩名參賽者中，選擇晉級與淘汰的一方，直到決定最後的贏家。<br>是一個非常適合作為實況題材，與觀眾或朋友一起討論、同樂的遊戲。

## 🚀 Demo

- **[https://dilemma-rjzk.onrender.com](https://dilemma-rjzk.onrender.com/)**

![專案操作動畫](frontend\src\assets\DilemmaDemoGIF.gif)

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Redux, Context API, Tailwind, Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport

## ✨ Features

- 🔐 **使用者註冊與登入：** 整合 Google 登入。
- ✍️ **建立競賽：** 支援 Youtube 影片、Short，系統會透過 Youtube Data API 檢查連結是否有效。
- 🔄 **進度保存：** 競賽建立和遊玩的途中，資料會自動儲存於 Local Storage，使用者不需擔心進度因頁面關閉而遺失。
- 📱 **RWD：** 在桌面和行動裝置上都有良好的瀏覽體驗。

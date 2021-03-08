## React_board Read Me😁
---

### 제작 의도
Only JavaScripts 만으로 프로젝트를 한번 작업해보고 싶었기에,
React.js, Express.js, MongoDB를 사용해 간단한 게시판 프로젝트를 만들어 봤습니다.
https://brown2243.github.io/introduce/ 링크에 사진 및 설명이 첨부 되어 있습니다.

### Packages
React.js : React_router_dom, React_Hooks(useEffect, useState, useRef), Axios
Node.js : express.js, mongoose, cors, JWT, bcrypt, nodemon, morgan

### Front_End
디자인 초안은 https://www.youtube.com/watch?v=O7WbVj5apxU 영상을 보고 가져왔습니다. 작업을 하면서 Material-UI나 Bootstrap같은 라이브러리는 전혀 사용하지 않고 순수한 CSS,JS로 작업했습니다.

### Back_End
Back의 역활은 REST API 서버의 역활이 다 입니다.
Front에서 REST API 형식으로 Request를 보내면 Model(MongoDB)에서 데이터 가져오기, 저장, 수정, 삭제등을 할 수 있게 Middle Ware로 Controll 해주는 역활 입니다.

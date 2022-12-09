import axios from 'axios';
import react from 'react';

export const getList = () => {
    axios
      .get("http://localhost:3001/customers/api/list", {}) // {} 빈 객체 전달
      // index.js에 있는 result를 res가 전달 받음
      .then((res) => {
        // res에 뭐가 들어있는지 확인하고 싶으면 콘솔로그 찍기
        console.log(`res=> ${res}`);
        const { data } = res;
        console.log("data ==>", data);
        // setBoardlist({
        //   // data를 boardList에 저장
        //   // 상태값이 바뀌면 리렌더링이 되면서 목록이 나타남
        //   boardList: data,
        // });
        // setActionMode({
        //   // ...actionMode,
        //   mode: 0, // 글쓰기
        // });
      })
      .catch((e) => {
        console.error(e);
      });
  };
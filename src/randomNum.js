const generateRandomNum = (max, min) => {
    const num = Math.floor((Math.random() * max) + min);
    return num;
  };
  
  export default generateRandomNum;
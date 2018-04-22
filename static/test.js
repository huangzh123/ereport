let isJSON = (str) =>{
  if (typeof str == 'string') {
      try {
          var obj=JSON.parse(str);
          if(typeof obj == 'object' && obj ){
              return true;
          }else{
              return false;
          }

      } catch(e) {
          return false;
      }
  }else if(typeof str == 'object'){
    return true;
  }else{
    return false;
  }
};


let s = '2';



console.log(isJSON(s))
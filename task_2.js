const countProps = function(obj) {
   let props = Object.values(obj)
   props = props.length;
   return  props;
  };

  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

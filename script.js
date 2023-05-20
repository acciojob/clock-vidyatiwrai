function counttime(){
    let result = setInterval(()=>{
        let data = new Date();
        let store = data.toLocaleString();
      document.getElementById("timer").innerHTML = store;
    
    },1000)

}

counttime();
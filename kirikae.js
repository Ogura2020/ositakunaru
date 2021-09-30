   var syasinn_src=new Array("syasinn/suitti_on.png","syasinn/suitti_off.png");
   var i = 0;
   function henkou(){
     if(i == 1){
       i = 0;
      }
      else {
	i ++;
      }
	document.getElementById("click").src = syasinn_src[i];
      }
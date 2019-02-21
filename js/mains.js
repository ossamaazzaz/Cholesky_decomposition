//A function to toggle between divs
function showStep(num) {
	$(".step").hide();
	$("#step"+num).fadeIn(1500);
}
//Enable/Disable the next button
$("#matrix-size").keyup(function(){
	if (this.value > 1) {
		$("#nextBtn").removeAttr("disabled");
	}else{
		$("#nextBtn").attr("disabled","disabled");
	}
});
//create the HTML of matrixA
function createMatrixA(size){
	//create first line
	var matrixA = "<table>";
	matrixA += "<tr><td class='edge-left edge-top'></td>"
	for(let i = 0; i < size; i++){
		matrixA += "<td><input type='text' class='matrix-case form-control' value='0'></td>";
	}
	matrixA += "<td class='edge-top edge-right'></td></tr>"
	//middle lines
	for(let i=0;i<size-2;i++){
		matrixA += "<tr><td class='edge-left'></td>"
		for(let j=0;j<size;j++){
			matrixA += "<td><input type='text' class='matrix-case form-control' value='0'></td>"; 
		}
		matrixA += "<td class='edge-right'></td></tr>";
	}
	//last line
	matrixA += "<tr><td class='edge-left edge-bottom'></td>"
	for(let i = 0; i < size; i++){
		matrixA += "<td><input type='text' class='matrix-case form-control' value='0'></td>";
	}
	matrixA += "<td class='edge-right edge-bottom'></td>";
	matrixA += "</tr><table>"
	return matrixA;
}
//create the HTML of matrixB
function createMatrixB(size){
	//create the first line
	var matrixB = "<table>";
	matrixB += "<tr><td class='edge-left edge-top'></td>";
	matrixB += "<td><input type='text' class='matrix-case form-control' value='0'></td>";
	matrixB += "<td class='edge-right edge-top'></td></tr>";
	//middle lines
	for (let i = 0; i < size-2; i++) {
		matrixB += "<tr><td class='edge-left'></td>";
		matrixB += "<td><input type='text' class='matrix-case form-control' value='0'></td>";
		matrixB += "<td class='edge-right'></td></tr>";
	}
	//last line
	matrixB += "<tr><td class='edge-left edge-bottom'></td>";
	matrixB += "<td><input type='text' class='matrix-case form-control' value='0'></td>";
	matrixB += "<td class='edge-right edge-bottom'></td></tr></table>";
	return matrixB;
}
//create the HTML of martix R
function createMatrixR(size){
	//create first line
	var matrixR = "<table>";
	matrixR += "<tr><td class='edge-left edge-top'></td>"
	for(let i = 0; i < size; i++){
		matrixR += "<td>0</td>";
	}
	matrixR += "<td class='edge-top edge-right'></td></tr>"
	//middle lines
	for(let i=0;i<size-2;i++){
		matrixR += "<tr><td class='edge-left'></td>"
		for(let j=0;j<size;j++){
			matrixR += "<td>0</td>"; 
		}
		matrixR += "<td class='edge-right'></td></tr>";
	}
	//last line
	matrixR += "<tr><td class='edge-left edge-bottom'></td>"
	for(let i = 0; i < size; i++){
		matrixR += "<td>0</td>";
	}
	matrixR += "<td class='edge-right edge-bottom'></td>";
	matrixR += "</tr><table>"
	return matrixR;
}
//create the HTML of martix R
function createMatrixRt(size){
	//create first line
	var matrixRt = "<table>";
	matrixRt += "<tr><td class='edge-left edge-top'></td>"
	for(let i = 0; i < size; i++){
		matrixRt += "<td>0</td>";
	}
	matrixRt += "<td class='edge-top edge-right'></td></tr>"
	//middle lines
	for(let i=0;i<size-2;i++){
		matrixRt += "<tr><td class='edge-left'></td>"
		for(let j=0;j<size;j++){
			matrixRt += "<td>0</td>"; 
		}
		matrixRt += "<td class='edge-right'></td></tr>";
	}
	//last line
	matrixRt += "<tr><td class='edge-left edge-bottom'></td>"
	for(let i = 0; i < size; i++){
		matrixRt += "<td>0</td>";
	}
	matrixRt += "<td class='edge-right edge-bottom'></td>";
	matrixRt += "</tr><table>"
	return matrixRt;
}
// create the HTML of the solutions
function equaSols(size){
	var list = "<ul>";
	for(let i=1;i<=size;i++){
		list += "<li> X"+i+" = 0 </li>";
	}
	list += "</ul>";
	return list;
}

//step 1 to 2
function toStep2(){
	var matrixSize = $("#matrix-size").val();
	$('#matrixA').html(createMatrixA(matrixSize));
	$('#matrixB').html(createMatrixB(matrixSize));
	showStep(2);
}
//step 2 to 3
function toStep3(){
	$(".step").hide();
	$("#step3").show();
	$("#one").fadeIn(1200,function(){
		$("#two").fadeIn(1200,function(){
			$("#three").fadeIn(1200,function(){
				$(".btns").show();
			});
		});
	});
}
//step 3 to 4
function toStep4(){
	var matrixSize = $("#matrix-size").val();
	$(".step").hide();
	$('#matrixR').html(createMatrixR(matrixSize));
	$('#matrixRt').html(createMatrixRt(matrixSize));
	$('#sols').html(equaSols(matrixSize));
	$("#step4").show();
	$("#sol1").fadeIn(1200,function(){
		$("#sol2").fadeIn(1200,function(){
			$("#sol3").fadeIn(1200,function(){
				$(".btns").show();
			});
		});
	});
}
function remplirmatrice(){
	var pere = document.getElementById('matrixA').children[0].children[0];
	var matrix = [];
	for(i=0;i<pere.childElementCount;i++){
		matrix[i]=[];
		var child = pere.children[i];
		for(j=1;j<child.childElementCount-1;j++){
			matrix[i][j-1]=child.children[j].children[0].value;
		}
	}
	return matrix;
}
function remplirsolution(){
	var pere = document.getElementById('matrixB').children[0].children[0];
	var solution= [];
	for(i=0;i<pere.childElementCount;i++){
		solution[i]=pere.children[i].children[1].children[0].value;
	}
	return solution;
}
function symtrique(matrice,count){
    var linge=1,colune=0,sym=true;
    while(linge<count && sym){
        while(colune<linge && sym){
        if(matrice[linge][colune]!=matrice[colune][linge])
                sym=false;
                colune++;
        }
        linge++;
        colune=0;
    }
    return sym;
}
/** hna rani khadam les fonction math **/

var matrix,matrixsym,solutionfinal;
function remplirmatrixcholsky(matrice,count,id){
    var pere = document.getElementById(id).children[0].children[0];
    for(i=0;i<count;i++){
        var child = pere.children[i];
        for(j=0;j<count;j++){
          let x = matrice[i][j];
          if (matrice[i][j] % 1 !== 0) {
            x = matrice[i][j].toFixed(2);
          }
           child.children[j+1].innerHTML=x;
        }
    }
}
function remplirsolutioncholsky(solution,count){
    var pere = document.getElementById("sols").children[0];
    for(i=0;i<count;i++){
      let x = solution[i];
      if (solution[i] % 1 !== 0) {
            x = solution[i].toFixed(2);
      }
        pere.children[i].innerHTML=x;
    }
}
function setvalues(){
    remplirmatrixcholsky(matrix,matrix[0].length,"matrixR");
    remplirmatrixcholsky(matrixsym,matrixsym[0].length,"matrixRt");
    remplirsolutioncholsky(solutionfinal,solutionfinal.length);
}
function gausse(matrice){
    if(symtrique(matrice,matrice[0].length)){
    if(definiepositive(matrice,matrice[0].length)){
        return true;
    }
    else {
		document.getElementById('modifier').children[0].innerHTML=
		"La matrice n'est pas definie positive";
		 document.getElementsByClassName('btn btn-success')[2].hidden=true;
		 document.getElementsByClassName('alert alert-success')[0].setAttribute(
             "class","alert alert-danger");
             document.getElementsByClassName('alert alert-danger')[0].innerHTML=
             "on ne peut pas resoudre le system";
		 return false;
	}
}
	else if(definiepositive(matrice,matrice[0].length)){
		document.getElementById('modifier').children[1].innerHTML=
		"La matrice n'est pas symetrique";
		document.getElementsByClassName('btn btn-success')[2].hidden=true;
		document.getElementsByClassName('alert alert-success')[0].setAttribute(
            "class","alert alert-danger");
            document.getElementsByClassName('alert alert-danger')[0].innerHTML=
            "on ne peut pas resoudre le system";
		return false;
	}
	else {
		document.getElementsByClassName('btn btn-success')[2].hidden=true;
		document.getElementById('modifier').children[1].innerHTML=
		"La matrice n'est pas symetrique";
		document.getElementById('modifier').children[0].innerHTML=
		"La matrice n'est pas definie positive";
		document.getElementsByClassName('alert alert-success')[0].setAttribute(
            "class","alert alert-danger");
            document.getElementsByClassName('alert alert-danger')[0].innerHTML=
            "on ne peut pas resoudre le system";
		return false;
	} 
    }
    
function symetriquecholsky(matrice,count){
     var matricesym=[];
     for(i=0;i<count;i++){
         matricesym[i]=[];
         for(j=0;j<count;j++){
             matricesym[i][j]=matrice[j][i];
         }
     }
     return matricesym;
}
function transfercholsky(matrice,count){
      for(i=0;i<count;i++){
          for(j=0;j<count;j++){
              if(i==j){
                matrice[i][j]=Math.sqrt(matrice[i][j]-sommediagonalcholsky(matrice[i],j));
              }
           else if(j>i){
               matrice[i][j]=0;
           }
           else {
            var diagonal = 1/matrice[j][j];
             matrice[i][j]=diagonal*(matrice[i][j]-sommeelementcholsky(matrice,i,j));
             
             
           }
          }
      }
}
function cholsky(){
      var matrice = remplirmatrice();
      var matriceautre=remplirmatrice();
      var matrice1=remplirmatrice();	
      if(gausse(matriceautre)){
           transfercholsky(matrice,matrice[0].length); 
           matrix=matrice;
           matrixsym=symetriquecholsky(matrice,matrice[0].length);
           var solution = remplirsolution();
           for(i=0;i<matrice[0].length;i++){
               console.log(solution[i]);
           }
           var solution1=solutioncholeskypremier(matrice,matrice[0].length,solution);
           solutionfinal=solutioncholeskyfinal(matrixsym,matrice[0].length,solution1);
           
      }
}
function sommediagonalcholsky(linge,indice){
    var somme=0;
     for(i=0;i<indice;i++){
           somme+=linge[i]*linge[i];
     }
     return somme;
}
function sommeelementcholsky(matricecholsky,linge,colune){
            
         var lingecholsky=linge-1,colunecholsky=0,somme=0;
         while(colunecholsky<colune){
               somme+=matricecholsky[lingecholsky][colunecholsky]*
               matricecholsky[linge][colunecholsky];
               colunecholsky++;
         }  
         return somme;

}
function max(matrice,count,indice){
       var max=matrice[indice][indice];
       var positionmax = [];
        positionmax[0]=indice;
        positionmax[1]=indice;
       for(i=indice;i<count;i++){
           for(j=indice;j<count;j++){
                if(Math.abs(matrice[i][j])>max){
                max=matrice[i][j];
                positionmax[0]=i;
                positionmax[1]=j;
           }
       }
}
return positionmax;
}

function permuter(matrice,count,lingemax,colunemax,indice){
    var intermediat=0,permuataion=0;
    if(indice!=lingemax){
    for(i=indice;i<count;i++){
        intermediat = matrice[indice][i];
        matrice[indice][i]=matrice[lingemax][i];
        matrice[lingemax][i]=intermediat;
    }
    permuataion++;
}
    if(indice!=colunemax){
    for(i=indice;i<count;i++){
        intermediat = matrice[i][indice];
        matrice[i][indice]=matrice[i][colunemax];
        matrice[i][colunemax]=intermediat;
    }
    permuataion++;
}
   return permuataion;
}
function solutioncholeskypremier(matrice,count,lessolution){
    var solution=[];
    for(i=0;i<count;i++){
        var somme=0;
        for(j=0;j<i;j++){
                somme+=matrice[i][j]*solution[j];
        }
        solution[i]=1/matrice[i][i]*(lessolution[i]-somme);
    }
    return solution;
}
function solutioncholeskyfinal(matrice,count,solution,matrice1){
  var linge=count-1;
  while(linge>=0){
      var colune=count-1,somme=0;
      while(colune>linge){
          somme+=matrice[linge][colune]*solution[colune];
          colune--;
      }
      solution[linge]=1/matrice[linge][linge]*(solution[linge]-somme);
      linge--;
  }
  return solution;

}
       
function symetriquecholsky(matrice,count){
    var matricesym=[];
    for(i=0;i<count;i++){
        matricesym[i]=[];
        for(j=0;j<count;j++){
            matricesym[i][j]=matrice[j][i];
        }
    }
    return matricesym;
}
function transfercholsky(matrice,count){
     for(i=0;i<count;i++){
         for(j=0;j<count;j++){
             if(i==j){
               matrice[i][j]=Math.sqrt(matrice[i][j]-sommediagonalcholsky(matrice[i],j));
             }
          else if(j>i){
              matrice[i][j]=0;
          }
          else {
           var diagonal = 1/matrice[j][j];
            matrice[i][j]=diagonal*(matrice[i][j]-sommeelementcholsky(matrice,i,j));
            
            
          }
         }
     }
}
function moins(par1,count){
    var permutaion=0;
    for(par2=0;par2<count;par2++){
     var pivou = par1[par2][par2];
     if(pivou==0 && count!=1){
         var position = max(par1,count,par2);
         if(par2<count-1){
         permutaion+=permuter(par1,count,position[0],position[1],par2);
         pivou=par1[par2][par2];
         }
     }
   
     for(i=par2+1;i<count;i++){
         var newpivou = par1[i][par2]/pivou;
         for(j=par2;j<count;j++){
             par1[i][j]=par1[i][j]-newpivou*par1[par2][j];
         }
     }
}
return permutaion;
} 
function definiepositive(matrice,count){
    var positive = true;
    var determinant=1,det=1;
    while(det<=count && positive){
          var matriceautre = remplirmatrice();
          var permutaion=moins(matriceautre,det);
          
         for(i=0;i<det;i++){
             determinant*=matriceautre[i][i];
            
         }
         if(permutaion%2!=0)
           determinant=(-1)*(determinant);
           if (determinant<=0) 
        positive=false;
        console.log(determinant);
           det++;
           determinant=1;
    }
return positive;
}

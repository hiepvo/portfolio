/**
 * Created by hiepvo on 10/9/16.
 */
(function(){
  var tempVal    = []; //use to show on calc screen
  var result     = []; // use to actual calculate
  var lastResult = ""; // keep the last result on screen

  var ul        = document.getElementById("keys");
  var resultObj = document.getElementsByClassName("result")[0];

  ul.addEventListener("click", function(e){
    var buttonId  = "";
    var buttonVal = "";
    if(e.target.tagName = "li"){
      buttonId  = e.target.id;
      buttonVal = e.target.innerText;
      switch(buttonId){
        case "clear":
          tempVal    = [];
          lastResult = "";
          result     = [];
          showData(tempVal.join(''));
          break;
        case "del":
          if(tempVal.length > 1){
            //check if there is minus sign before number then set it to 0
            if(tempVal.length === 2 && tempVal[0] === "&minus;"){
              tempVal = [];
              result  = [];
            }
            else{
              tempVal.splice(-1, 1); //remove last item from an array
              result.splice(-1, 1);
            }
          }
          else{
            tempVal = [];
            result  = [];
          }
          showData(tempVal.join(''));
          break;
        case "equal":
          lastResult = eval(result.join(''));
          result     = [];
          tempVal    = [];
          result.push(lastResult);
          tempVal.push(lastResult);

          if(result.toString().length > 16){
            showData(lastResult.toExponential(3));
          }
          else
            showData(lastResult);
          break;
        default:

          if (lastResult !== "" && (buttonId !== 'divide' && buttonId !== 'times' && buttonId !== 'minus' && buttonId !== 'plus')){
            tempVal = [];
          }
          insertOperatorsToArray(buttonId, buttonVal);
          //check if string start with one of these operators (+, - , * , /, =)
          if(tempVal.length === 0 && (buttonId === 'divide' || buttonId === 'times' || buttonId === 'minus' || buttonId === 'plus' || buttonId === 'equal')){
            tempVal.push("0");
            result = [];
          }
          if(validator.isNumber(buttonId)){
            tempVal.push(buttonVal);
          }
          if(buttonId === "."){
            tempVal.push(".")
          }
          showData(tempVal.join(''));
          break;
      }
    }
  });

  function insertOperatorsToArray(buttonId, buttonVal){
    switch(buttonId){
      case "divide":
        if(isConsecutiveOperator(result, "/") === false){
          result.push("/");
          tempVal.push(buttonVal);
        }
        break;
      case "times":
        if(isConsecutiveOperator(result, "*") === false){
          result.push("*");
          tempVal.push(buttonVal);
        }
        break;
      case "minus":
        if(isConsecutiveOperator(result, "-") === false){
          result.push("-");
          tempVal.push(buttonVal);
        }
        break;
      case "plus":
        if(isConsecutiveOperator(result, "+") === false){
          result.push("+");
          tempVal.push(buttonVal);
        }
        break;
      case "mod":
        if(isConsecutiveOperator(result, "%") === false){
          result.push("%");
          tempVal.push(buttonVal);
        }
        break;
      default:
        result.push(buttonId);
        break;
    }
  }

// Displays symbols on the screen
  function showData(data){
    if(data.length === 0){
      resultObj.innerHTML = "0";
    } else{
      resultObj.innerHTML = data;
    }
  }

  //check if the operator is consecutive
  function isConsecutiveOperator(list, item){
    var operators = "+-*/%";
    if(operators.indexOf(item) && operators.indexOf(list[list.length - 1]) > -1){
      return true;
    }
    return false;
  }
})
();



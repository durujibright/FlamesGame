    // valid code

// flames with arr
var flames = [
    {"key" : "Friends"},
  {"key" : "Lovers"},
  {"key" : "Admires"},
  {"key" : "Marriage"},
  {"key" : "Enemies"},
  {"key" : "Secret Lovers"},
    {"key" : "Friends"},
  {"key" : "Lovers"},
  {"key" : "Admires"},
  {"key" : "Marriage"},
  {"key" : "Enemies"},
  {"key" : "Secret Lovers"},
    {"key" : "Friends"},
  {"key" : "Lovers"},
  {"key" : "Admires"},
  {"key" : "Marriage"},
  {"key" : "Enemies"},
  {"key" : "Secret Lovers"},
    {"key" : "Friends"},
  {"key" : "Lovers"},
  {"key" : "Admires"},
  {"key" : "Marriage"},
  {"key" : "Enemies"},
  {"key" : "Secret Lovers"},
    {"key" : "Friends"},
  {"key" : "Lovers"},
  {"key" : "Admires"},
  {"key" : "Marriage"},
  {"key" : "Enemies"},
  {"key" : "Secret Lovers"},
];

    
    // got they input and button tag
let user = document.querySelector('#fname');
let crush = document.querySelector('#cname');
let button = document.querySelector('#submit');
let answer = document.querySelector('.ans')
let displayMsg = document.querySelector('.msg')
let closeBtn = document.querySelector('.close')

    
function validEntry() {
  // checking if they user and crush entered thier name;   
    // if ( Event.which === 13){        
     if (user.value.length > 0 && crush.value.length > 0) {
      // got they input details
      var userValue = user.value;
      var crushValue = crush.value;
      //  converted their detail from str to arr
      var userArray = userValue.split('');
      var crushArray = crushValue.split('');
      // filtering they array to get unmatched values 
      var userFilter = userArray.filter( unmatch => {
        return !crushArray.includes(unmatch);
      });
       var crushFilter = crushArray.filter( unmatch => {
        return !userArray.includes(unmatch);
      })

      var result = [...crushFilter,...userFilter];

      flames.forEach( (index,items) => {
          if (result.length == items) {
            answer.innerHTML = index.key;
            user.value = "";
            crush.value = "";
            displayMsg.style.display = "block";
            closeBtn.addEventListener('click', function close(){
              // if (Event.keycode === 13){
                 displayMsg.style.display = "none";
              // }
            })

          }
      });
       
          // console.log(userFilter);
          // console.log(crushFilter);
          // console.log(result);
     } else {
    alert ('BOTH USER AND CRUSH DETAILS MUST BE FILLED !!!');
  }
}
// }

button.addEventListener('click', validEntry);
// button.addEventListener('keypress', validEntry)






//  {  for (var i = 0; i < flames.length; i++) {
//   console.log(flames[i].key);
// }
// flames.forEach( (index,items, array) => {
//             console.log(  index.key,)
//       });


// function inputDetails () {
//     var userValue = user.value;
//     var crushValue = crush.value;
//     return userValue, crushValue;
// }


// function strToArr () {
//   // invoked they details
//     inputDetails();
//     var userArray = inputDetails().split("");
//     var crushArray = inputDetails().split("");
//    return userArray, crushArray;

// }


// function filter( king, queen) {
//   var filter = king.filter( check => {
//     return !queen.includes(check);
//   });
//   return filter;
// }


// working on this
  // // invoked they details
  //         inputDetails();
  //   // invoked they covertion of string to array
  //         strToArr();
  //   // 
  //      var userFilter = filter(strToArr(),strToArr());
  //      var crushFilter = filter(strToArr(),strToArr());
  //           // console.log(userArray);
  //           // console.log(crushArray);
        
          

  //       // var userFiltered = userArray.filter( get => {
  //       //   !userArray.includes(crushArray);
  //       // })



// function validEntry() {
//   // console.log(crush.value)
//   if (user.length !== '' && crush.value !== '') {
//var userValue = user.value;
//  var crushValue = crush.value;
//  var userArray = userValue.split("");
//  var crushArray = crushValue.split("");
//  userArray.forEach( check => {
//       for (let i = 0; i < crushArray.length; i++) {
//           if (check == crushArray[i]) {
//             console.log(check == crushArray[i])
//           }
//       }
//  });
//     console.log(user.value, crush.value)
//   }
// }


// console.log(user)
// console.log(crush)
// console.log(button)}
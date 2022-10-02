// Ex01: Next Day, Next Month, Next Year
// input: Day, Month, Year.

//process: use switch case and scan each element of Day Mon Yea

//output: NexDay, NexMon, NexYea, daysInMon;

function NextDayMonthYear() {
  var myDay = 31;
  var myMon = 8;
  var myYea = 2022;
  var neDay = 0;
  var neMon = 0;
  var neYea = 0;
  daysInMon = 0;
  switch (myMon) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (myDay < 31) {
        neDay = myDay + 1;
        neMon = myMon;
        neYea = myYea;
        daysInMon = 31;
      } else {
        neDay = 1;
        neMon = myMon + 1;
        neYea = myYea;
        daysInMon = 31;
      }
      break;
    case 12:
      if (myDay < 31) {
        neDay = myDay + 1;
        neMon = myMon;
        neYea = myYea;
        daysInMon = 31;
      } else {
        neDay = 1;
        neMon = 1;
        neYea = myYea + 1;
        daysInMon = 31;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (myDay < 30) {
        neDay = myDay + 1;
        neMon = myMon;
        neYea = myYea;
        daysInMon = 30;
      } else {
        neDay = 1;
        neMon = myMon + 1;
        neYea = myYea;
        daysInMon = 30;
      }
      break;
    case 2:
      if (myYea % 400 === 0 || (nam % 4 === 0 && myYea % 100 !== 0)) {
        if (myDay < 29) {
          neDay = myDay + 1;
          neMon = myMon;
          neYea = myYea;
          daysInMon = 29;
        } else {
          neDay = 1;
          neMon = myMon + 1;
          neYea = myYea;
          daysInMon = 29;
        }
      } else {
        if (myDay < 28) {
          neDay = myDay + 1;
          neMon = myMon;
          neYea = myYea;
          daysInMon = 28;
        } else {
          neDay = 1;
          neMon = myMon + 1;
          neYea = myYea;
          daysInMon = 28;
        }
      }
      break;
  }
  console.log(
    "Next Day Mon Yea of: ",
    myDay,
    "/",
    myMon,
    "/",
    myYea,
    " is ",
    neDay,
    "/",
    neMon,
    "/",
    neYea
  );
  console.log("Days in month: ", daysInMon);
}
//Ex02: Days in Month
//Ex02 is in Ex01

//Ex03: Read Num
//Input: Num
//Process:
//OutPut: Read Num
function ReadNumChar(Num) {
  switch (Num) {
    case 1:
      return "một";
    case 2:
      return "hai";
    case 3:
      return "ba";
    case 4:
      return "bốn";
    case 5:
      return "lăm";
    case 6:
      return "sáu";
    case 7:
      return "bảy";
    case 8:
      return "tám";
    case 9:
      return "chín";
    case 0:
      return "không";
  }
}
function ReadNum() {
  var Num = 345;
  var unit = 345 % 10;
  var dozen = 345 % 100;
  dozen = Math.floor(dozen / 10);
  var hundred = Math.floor(345 / 100);
  var charUnit = ReadNumChar(unit);
  var chardozen = ReadNumChar(dozen);
  var charHundred = ReadNumChar(hundred);
  console.log(
    "Read ",
    Num,
    " in Vietnamese is ",
    charHundred,
    " trăm ",
    chardozen,
    " mươi ",
    charUnit
  );
}
//Ex04: FindStudent
// input: A(ax, ay), B(bx, by), C(cx, cy)
// process:
// output:
function FindMax(a, b, c) {
  var num = [a, b, c];
  var Max = 0;
  var pos = 0;
  Max = num[0];
  for (var i = 0; i < 3; i++) {
    if (Max < num[i]) {
      Max = num[i];
      pos = i;
    }
  }
  console.log(pos);
  return pos;
}
function FindStudent() {
  var ax = 1;
  var ay = 3;
  var bx = 0;
  var by = 9;
  var cx = 2;
  var cy = 2;
  var stuA = ax * ax + ay * ay;
  var stuB = bx * bx + by * by;
  var stuC = cx * cx + cy * cy;
  var pos = FindMax(stuA, stuB, stuC);
  if (pos === 0) {
    console.log("Result is A");
  }
  if (pos === 1) {
    console.log("Result is B");
  }
  if (pos === 2) {
    console.log("Result is C");
  }
}

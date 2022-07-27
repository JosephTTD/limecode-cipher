exports.handler = async (event) => {
  // TODO implement
  const queryParam = event.queryStringParameters?.message
  
  // splitting alphabet into an array
  const alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');

  // 0-26 in an array
  var numbers = Array.apply(null, { length: 27 }).map(function(_, i) {
    return i;
  });

  /* Cipher logic starts here*/
  
  // randomised function to multiply numbers by 27 so the encoded message isn't always the same
  function multiplyBy27(num) {
    while (Math.random() * 0.5 < 0.25) {
      num = num * 27;
      
      if (num === 0) {
        num = Math.floor(Math.random() * 100 + 28);
      }
    }
    return num;
  }

  function encode(str) {
    const resultStr = [];
    var matches = str?.match(/\d+/g);
    for (let i = 0; i < str?.length; i++) {
      for (let j = 0; j < alphabet?.length; j++) {
        if (str[i].toLowerCase() === alphabet[j]) {
          resultStr.push(multiplyBy27(numbers[j]));
        }
      }
    }

    if (matches != null) {
      let error = { statusCode: 400, message: "String must not include numbers" }
      throw error
    } 
    
    if(!str?.trim() || str?.length === 0) {
      let error = { statusCode: 400, message: "Please input at least one value not including numbers or symbols" }
      throw error
    }
    return resultStr.join(" ");
  }
  /* Cipher logic ends here */

  
  // exception handling
  try {
    // using the null coalescing operator just for testing 
    let success = encode(queryParam ?? event['message'])
    console.log(formatResponse(success))
    return formatResponse(success)
  }
  catch (error) {
    return formatError(error)
  }

};


// response formating
var formatResponse = function(body) {
  var response = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "isBase64Encoded": false,
    "body": body
  }
  return response
}

var formatError = function(error) {
  var response = {
    "statusCode": error.statusCode,
    "headers": {
      "Content-Type": "text/plain",
      "x-amzn-ErrorType": error.code
    },
    "isBase64Encoded": false,
    "body": error.statusCode + ": " + error.message
  }
  return response
}

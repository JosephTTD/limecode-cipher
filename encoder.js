// aws lambda code used to encode 

exports.handler = async (event) => {
  // TODO implement
  const alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');

  var numbers = Array.apply(null, { length: 27 }).map(function(_, i) {
    return i;
  });

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
    var matches = str.match(/\d+/g);
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (str[i].toLowerCase() === alphabet[j]) {
          resultStr.push(multiplyBy27(numbers[j]));
        }
      }
    }

    if (matches != null) {
      let error = { statusCode: 400, message: "String must not include numbers" }
      throw error
    }
    return resultStr.join(" ");
  }


  try {
    let success = await encode(event['message'])
    return formatResponse(success)
  }
  catch (error) {
    return formatError(error)
  }

};

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

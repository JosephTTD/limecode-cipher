exports.handler = async (event) => {
    // TODO implement
    const queryParam = event.queryStringParameters?.code

    const alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');

    var numbers = Array.apply(null, { length: 27 }).map(function(_, i) {
        return i;
    });

    function divideBy27(num) {
        while (num > 26) {
            num = num / 27;
        }
        if (num % 1 != 0) {
            num = 0;
        }
        return num;
    }

    function decode(num) {
        const resultStr = [];
        let temp;
        const resultNum = [];
        for (let i = 0; i < num?.length; i++) {
            for (let j = 0; j < numbers?.length; j++) {
                resultNum.push(Array.from(num));
                temp = resultNum[0];
                if (divideBy27(temp[i]) === divideBy27(numbers[j])) {
                    resultStr.push(alphabet[j]);
                }
            }
        }

        if (resultStr?.length === 0) {
            let error = { message: 'You require at least one number to decode' }
            throw error
        }
        if (num.includes(null)) {
            let error = {
                message: 'Please input numbers alone'
            }
            throw error
        }
        
        if(num.every(item => item === 0)) {
            let error = {
                message: 'Invalid message, please input a correct encoded message'
            }
            throw error 
        }

        return resultStr.join("");
    }

    try {
        let success = queryParam !== undefined ? decode(JSON.parse(queryParam)) : decode([1594323, 15, 10935, 12])
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
        "statusCode": 400,
        "headers": {
            "Content-Type": "text/plain",
            "x-amzn-ErrorType": error.code
        },
        "isBase64Encoded": false,
        "body": 400 + ": " + error.message
    }
    return response
}

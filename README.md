# limecode-cipher

## Build Setup
## Note this app won't work on your local if you don't have the environment variables

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Testing the endpoints

I've used aws' new lambda functions urls for the endpoints, cors is set to all, there are no roles and no use of API gateway

## Decode

```bash
# testing the decode endpoint in the browser using this url, you can find the decodeKey in the 
# .env file, add the code using the **code** parameter '?code=[]' with values seperated by commas
# in square brackets like the example below

https://[decodeKey].lambda-url.eu-west-2.on.aws/?code=[1, 2, 3]
```

## Encode

```bash
# testing the encode endpoint in the browser using this url, you can find the encodeKey in the 
# .env file, add the message to encode by using the **message** parameter '?message=MESSAGE GOES HERE'
# like the example below

https://[encodeKey].lambda-url.eu-west-2.on.aws/?message=example
```

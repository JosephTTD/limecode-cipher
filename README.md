# limecode-cipher

## Build Setup

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

I've used aws' new lambda functions urls for the endpoints, cors is set to all, there are no roles and no use of IAM

```bash
# testing the decode endpoint in the browser using this url, you can find the decodeKey in the 
# .env file, add the code using the **code** parameter '?code=[]' seperated by commas in square 
# brackets like the example below

$ https://[decodeKey].lambda-url.eu-west-2.on.aws/?code=[1, 2, 3]

# testing the encode endpoint in the browser using this url, you can find the encodeKey in the 
# .env file, add the message to encode by using the **message** parameter '?message=MESSAGE GOES HERE'

$ https://[encodeKey].lambda-url.eu-west-2.on.aws/?message=example
```

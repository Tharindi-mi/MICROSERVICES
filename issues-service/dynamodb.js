const AWS = require('aws-sdk')
require('dotenv').config()

// please use your own IAM access credentials you would have created.
// remember to store the actual values in a .env file
AWS.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient()

const TABLE_NAME = "issues_store" 

// this function is for adding/updating an entry/member in the table
// make sure you add the item being added and the table name in the params const
const addissue = async (issue) => {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            id: new Date().toString(),
            issue: issue
        }
    }

    return await dynamoClient.put(params).promise()
}

// this function is retrieving a table entry by its id.
// make sure you include the id key in the params const
const getissueById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.get(params).promise()
}

// this function is retrieving all entries in the table
const getissues = async () => {
    const params = {
        TableName: TABLE_NAME
    }

    const issues= await dynamoClient.scan(params).promise()
    console.log(issues)
    return issues
}

//export our functions to be used for our api
module.exports = {
    dynamoClient,
    getissues,
    addissue,
    getissueById,
}
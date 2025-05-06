import { ApolloServer } from "@apollo/server";
import {startStandaloneSever} from '@apollo/server/standalone'

const typeDefs = `#graphql
type Query{
    gretting: String
}
`


const resolvers = {
    Query:{
        gretting :  ()=> 'Hello ji'
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneSever(server,{listen:{port:6000}})
console.log(`server is runnong on ${url}`);

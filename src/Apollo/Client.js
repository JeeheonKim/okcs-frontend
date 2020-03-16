import ApolloClient from "apollo-boost";
import {defaults, resolvers} from "./LocalState";

export default new ApolloClient({
    uri: "http://localhost:4100/",
    clientState: {
        defaults,
        resolvers
    }
});
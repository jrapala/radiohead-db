const { ApolloServer, gql } = require('apollo-server')

const albums = require('../data/albums.json')
const songs = require('../data/songs.json')

const typeDefs = gql`
	type Query {
		allAlbums: [Album!]!
		allSongs: [Song!]!
	}

	type Album {
		id: ID!
		title: String!
		releaseYear: Int!
		songs: [ID!]!
	}

	type Song {
		id: ID!
		songTitle: String!
		recordings: [Recording!]!
	}

	type Recording {
		id: ID!
		trackTitle: String!
		length: String!
	}
`

const resolvers = {
	Query: {
		allAlbums: () => albums,
		allSongs: () => songs,
	},
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

server.listen().then(({ url }) => console.log(`Server running at ${url}`))

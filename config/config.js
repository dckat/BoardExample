module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/local',

	db_schemas: [
		{file: './user_schema', collection: 'users6', schemaName: 'UserSchema', modelName: 'UserModel'},
		{file: './post_schema', collection: 'post', schemaName: 'PostSchema', modelName: 'PostModel'}
	],
	route_info: [
		{file: './post', path: '/process/addpost', method: 'addpost', type: 'post'},
		{file: './post', path: '/process/showpost/:id', method: 'showpost', type: 'get'},
		{file: './post', path: '/process/listpost', method: 'listpost', type: 'post'},
		{file: './post', path: '/process/listpost', method: 'listpost', type: 'get'}
	],
};
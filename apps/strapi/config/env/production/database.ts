export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'xg4w8cowocswooc0wg4044ks'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'postgres'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', '50IBlWzIDVfAY5z1Il1fJl26WKQx44rflDziV5I4l3RCZH0CRCuOOrTOnqvTYlYh'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});

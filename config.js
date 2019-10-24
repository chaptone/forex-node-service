const config = {}

config.flask_url = process.env.FLASK_URL || 'localhost'
config.flask_port = process.env.FLASK_PORT || '5000'

module.exports = config
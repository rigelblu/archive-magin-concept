# INFO: set file to use tab when editing

# Create .env .env.development .env.production files from .env.example
setup-dotenv:
	cp .env.example .env
	cp .env.example .env.development
	cp .env.example .env.production

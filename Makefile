# INFO: set file to use tab when editing

# Create .env .env.development .env.production files from .env.example
setup-dotenv:
	cp .env.example .env
	cp .env.example .env.development
	cp .env.example .env.production


# Common commands
## Docker
docker-prune:
	docker system prune --all

## GCP
gcp-beta-clean:
	gcloud beta code clean-up

gcp-beta-docker:
	gcloud beta code dev

gcp-list-files:
	gcloud meta list-files-for-upload | grep -wv -e src -e public

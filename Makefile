# INFO: set file to use tab when editing

# Create .env .env.development .env.production files from .env.example
setup-dotenv:
	cp .env.example .env
	cp .env.example .env.development
	cp .env.example .env.production

# -------------------------------
# Common commands
# -------------------------------
## Docker
docker-prune:
	docker system prune --all

## GCP - Beta
gcp-beta-clean:
	gcloud beta code clean-up

gcp-beta-docker:
	gcloud beta code dev

## GCP - Build
gcp-build-list-ongoing: # usage: make <command> REGION=value
  gcloud beta builds list --ongoing --region=$(REGION)

gcb-trigger-export: # usage: make <command> TRIGGER-NAME=value EXPORT_PATH=value
	gcloud beta builds triggers export $(TRIGGER_NAME) --region=$(REGION) --destination=${EXPORT_PATH)

gcb-trigger-import: # usage: make <command> IMPORT_PATH=value
	gcloud beta builds triggers import --region=$(REGION) --source=$(IMPORT_PATH)

## GCP - Projects
gcp-projects-list:
	gcloud beta projects list

gcp-project-get:
	gcloud beta config get project

gcp-project-set: # usage: make <command> PROJECT_ID=value
	gcloud beta config set project $(PROJECT_ID)

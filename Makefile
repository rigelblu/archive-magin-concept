# INFO: set file to use tab when editing

# Create .env .env.development .env.production files from .env.example
setup-dotenv:
	cp .env.example .env
	cp .env.example .env.development
	cp .env.example .env.production

# -------------------------------
# Common commands
# -------------------------------
# TODO: read SERVICE< REGION from .env
# TODO: convert some commands to bash or python
## Docker
docker-prune:
	docker system prune --all

## GCP - Beta
gcp-beta-clean:
	gcloud beta code clean-up

gcp-beta-docker:
	gcloud beta code dev

# -------------------------------
## GCP - Projects
gcp-projects-list:
	gcloud beta projects list

gcp-project-get:
	gcloud beta config get project

gcp-project-set: # usage: make <command> PROJECT_ID=value
	gcloud beta config set project $(PROJECT_ID)

# -------------------------------
## GCP - Build
gcb-list-ongoing: # usage: make <command> REGION=value
	gcloud beta builds list --ongoing --region=$(REGION)

gcb-cancel: # usage: make <command> ID=ID REGION=value
	gcloud beta builds cancel ${ID} --region=$(REGION)

gcb-trigger-export: # usage: make <command> TRIGGER-NAME=value REGION=value EXPORT_PATH=value
	gcloud beta builds triggers export $(TRIGGER_NAME) --region=$(REGION) --destination=${EXPORT_PATH)

gcb-trigger-import: # usage: make <command> REGION=value IMPORT_PATH=value
	gcloud beta builds triggers import --region=$(REGION) --source=$(IMPORT_PATH)

# -------------------------------
## GCP - Run
##
## Models this CI/CD Pipeline
##
## Build  ->  Staging / Preview
##            |        ->  Migrate to Blue / Live
##            -------- or
##                     ->  Migrate to Green / Live

gcr-list: # usage: make <command> REGION=value
	gcloud beta run revisions list --region=$(REGION)

gcr-traffic-to-latest: # usage: make <command> SERVICE=value REGION=value REVISION_LIVE=value
	gcloud beta run services update-traffic $(SERVICE) --region=$(REGION) \
		--update_tags=live=$(REVISION_LIVE) \
		--to-latest

gcr-traffic-to-blue: # usage: make <command> SERVICE=value REGION=value REVISION_LIVE=value
	gcloud beta run services update-traffic $(SERVICE) --region=$(REGION) \
		--update-tags=live=$(REVISION_LIVE) \
		--to-tags=blue=100

gcr-traffic-to-green: # usage: make <command> SERVICE=value REGION=value REVISION_LIVE=value
	gcloud beta run services update-traffic $(SERVICE) --region=$(REGION) \
		--update-tags=live=$(REVISION_LIVE) \
		--to-tags=green=100

gcr-migrate-staging-to-blue:# usage: make <command> SERVICE=value REGION=value REVISION_STAGING=value
	gcloud run services update-traffic $(SERVICE) --region=$(REGION) \
	--update-tags=blue=$(REVISION_STAGING),live=$(REVISION_STAGING) \
		--remove-tags=staging \
		--to-tags=blue=100

gcr-migrate-staging-to-green: # usage: make <command> SERVICE=value REGION=value REVISION_STAGING=value
	gcloud run services update-traffic $(SERVICE) --region=$(REGION) \
		--update-tags=green=$(REVISION_STAGING),live=$(REVISION_STAGING) \
		--remove-tags=staging \
		--to-tags=green=100

# magin site

magin, bringing stories to life

---

## Getting Started

## Adjust feature flags and settings

- [Feature Flags](src/config/featureFlags.ts)
- [Settings](src/config/settings.ts)

#### Run dev server

```sh
pnpm dev
```

#### Run static site

```sh
pnpm build:ssg
pnpm start
```

### Run in docker

```sh
docker-compose up --build
```

### Run on google cloud run

```sh
# edit .env.development with your values for
GCP_PROJECT_ID='abc-123'
GCP_REGION='region-name'
GCP_SERVICE_NAME='service-name'
```

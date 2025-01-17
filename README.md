# magin - product concept

Learn to watch a novel like a Pixar&#8482; director.

---

## Docs

- [Idea Opportunity](https://docs.google.com/document/d/1ppn-vLyPSDQXrWgCbuoEVHbVGEQTxRgzid5IiBzR294)
- [Product Copy](https://docs.google.com/document/d/15uO8FzrYri7Nr4X7SAb69MY-yOF4ocju47ChT8uKwBs)
- [Design Concepts](https://app.excalidraw.com/l/9bwooeBjJui/9Vk7yBl4R1a)

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

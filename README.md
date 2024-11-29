## Pre-requisites

- AWS CLI: [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- AWS SAM CLI: [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
- Node.js: [Install Node.js 22](https://nodejs.org/en/), including the npm package management tool.
- Docker: [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community).

## Build and Deploy Lambda Functions

Below will deploy Lambda functions for Stealth Store configured in [template.yaml](./template.yaml).

```bash
sam build
sam deploy
```

## Run Lambda Functions Locally

Run once with a specific event payload.

```bash
sam build
sam local invoke <function name> --event <event JSON file>
```

Example:

```bash
sam build
sam local invoke services --event ./events/get-all-services.json
```

Alternatively, run the function in API emulation mode.

```bash
sam build
sam local start-api
```

Emulating API requires [template.yaml](./template.yaml) to define the API's routes.

## Run Tests

Install all dependencies

```bash
npm install
```

Run all tests

```bash
npm run test
```

Run a specific test

```bash
npm run test -- services.test
```

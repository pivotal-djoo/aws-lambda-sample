# AWS Lambda Sample

[![Last Lambda Deploy](https://github.com/pivotal-djoo/aws-lambda-sample/actions/workflows/ci-cd.yaml/badge.svg)](https://github.com/pivotal-djoo/aws-lambda-sample/actions/workflows/ci-cd.yaml)

## Pre-requisites

- AWS Cognito User Pool: [Getting started with user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-user-pools.html)
- An App Client within your Cognito user pool: [Create a new application in the Amazon Cognito console
](https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-user-pools-application.html)
- AWS CLI: [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- AWS SAM CLI: [Install the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
- Node.js: [Install Node.js 22](https://nodejs.org/en/), including the npm package management tool.
- Docker: [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community).

## Build and Deploy Lambda Functions

Below will deploy Lambda functions for Stealth Store configured in [template.yaml](./template.yaml). Ensure environment variables `USER_POOL_ID` and `CLIENT_ID` are configured correctly.

```bash
sam build
sam deploy
```

## Run Lambda Functions Locally

Ensure `env.json` file is present in root folder with the following format.

```json
{
  "Parameters": {
    "RESERVATIONS_TABLE": {{ DYNAMO DB TABLE NAME }},
    "USER_POOL_ID": {{ AWS COGNITO USERPOOL ID }},
    "CLIENT_ID": {{ APP CLIENT ID }}
  }
}
```

Run once with a specific event payload.

```bash
sam build
sam local invoke <function name> --event <event JSON file>
```

Example:

```bash
sam build
sam local invoke reservations --event ./events/get-all-reservations.json
```

Alternatively, run the function in API emulation mode.

```bash
sam build
sam local start-api
```

Emulating API requires [template.yaml](./template.yaml) to define the API's routes.

## Run Tests

Install dependencies

```bash
npm install
```

Run all tests

```bash
npm run test
```

Run a specific test

```bash
npm run test -- reservations
```

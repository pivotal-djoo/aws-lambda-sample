import { LambdaFunctionURLEvent } from 'aws-lambda';
import getAllServicesEvent from '../../../events/get-all-services.json';
import { servicesHandler } from '../../../handlers/services';

describe('Test services handler', () => {
  it('should get all services', async () => {
    const result = await servicesHandler(
      getAllServicesEvent as LambdaFunctionURLEvent
    );

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body!)).toHaveLength(6);
  });
});

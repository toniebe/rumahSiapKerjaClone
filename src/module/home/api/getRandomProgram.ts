import {callApi} from '@Shared/helper/callApi';
import {payloadRandomProgramType} from '../types/randomProgram';

export async function getRandomProgram({category = 'CAT-407'}) {
  return await callApi<payloadRandomProgramType>(
    'v2',
    `website/core-programs/randomized?size=4&status=PUBLISHED,APPROVED&categoryCodes=${category}`,
    'GET',
  );
}

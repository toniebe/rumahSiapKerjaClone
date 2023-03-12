import {callApi} from '@Shared/helper/callApi';
import {payloadSectionHeader} from '../types/programStructure';

export async function getHeaderProgram() {
  return await callApi<payloadSectionHeader>(
    'v3',
    'website/headers?numberOfCorePrograms=5&location=welcome',
    'GET',
  );
}

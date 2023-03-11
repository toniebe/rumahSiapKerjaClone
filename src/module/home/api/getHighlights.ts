import {callApi} from '@Shared/helper/callApi';
import {payloadHiglight} from '../types/highlights';

export async function getHighlight() {
  return await callApi<payloadHiglight>(
    'v3',
    'highlights?isActive=true',
    'GET',
  );
}

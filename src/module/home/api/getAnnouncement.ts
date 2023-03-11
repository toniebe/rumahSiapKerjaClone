import {callApi} from '@Shared/helper/callApi';
import {payloadAnnouncement} from '../types/announcement';

export async function getAnnouncement() {
  return await callApi<payloadAnnouncement>(
    'v3',
    'website/announcements/active',
    'GET',
  );
}

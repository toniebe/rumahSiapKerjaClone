import {callApi} from '@Shared/helper/callApi';
import {payloadDetailTraining} from '../types/detailTrainingTypes';

export async function getDetailTrainingById(id: string) {
  return await callApi<payloadDetailTraining>('v2', `training/${id}`, 'GET');
}

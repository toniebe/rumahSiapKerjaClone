import { callApi } from "@Shared/helper/callApi";
import { payloadBanner } from "../types/bannerTypes";

export async function getBanner() {
    return await callApi<payloadBanner>('v3/website/banners?page=0&size=100&isActive=true&location=welcome', 'GET')
}
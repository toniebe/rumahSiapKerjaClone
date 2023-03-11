export interface announcementProps {
  id: string;
  name: string;
  type: string;
  description: string;
  isActive: boolean;
  startTime: string;
  endTime: string;
  callToAction: string;
  url: string;
}

export const announcementDefault = {
  id: '',
  name: '',
  type: '',
  description: '',
  isActive: false,
  startTime: '',
  endTime: '',
  callToAction: '',
  url: '',
};

export interface payloadAnnouncement {
  success: boolean;
  message?: string;
  data: announcementProps;
}

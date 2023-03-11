import {paginationTypes} from './bannerTypes';

export interface payloadHiglight {
  success: boolean;
  message: string;
  data: {
    content: highlightProps[];
    pagination: paginationTypes;
  };
}

export interface highlightProps {
  id: string;
  name: string;
  seq: number;
  description: string;
  callToAction: string;
  host?: any;
  coreProgram: coreProgramTypes;
  isActive: boolean;
}

export type coreProgramTypes = {
  id: string;
  itemId: string;
  name: string;
  type: string;
  productType: string;
  thumbnailUrl?: string;
  alternateThumbnailUrl: string;
  tags: tagsTypes[];
  code: string;
};

export type tagsTypes = {
  id: string;
  name: string;
};

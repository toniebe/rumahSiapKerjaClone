import {paginationTypes} from './bannerTypes';

export type CategoryType = {
  id: string;
  name: string;
  code: string;
};

export type dataCategoryProps = {
  categoryCode: string;
  label: string;
  isActive: boolean;
};

export type coachesType = {
  id?: any;
  name: string;
  title: string;
  profileImage: string;
  experienceInYears?: any;
};

export type plansType = {
  id?: any;
  price: number;
  originalPrice: number;
  gotFreemium?: any;
  value?: any;
  type?: any;
  maxValue?: any;
};

export type hostType = {
  id: string;
  fullName: string;
  profileImage: string;
  description: string;
  employerTraining?: any;
};

export interface programProps {
  id: string;
  itemId: string;
  title: string;
  thumbnailUrl: string;
  alternateThumbnailUrl?: string;
  createdAt: string;
  code: string;
  status: string;
  type: string;
  tags?: string[];
  category: CategoryType;
  categories?: any;
  businessFields?: any;
  productType?: string;
  participants?: number;
  numberOfReviewer?: any;
  currentRating?: any;
  programType?: any;
  programFormat?: any;
  host: hostType;
  coaches: coachesType[];
  plans: plansType[];
  deliveryType: string;
  expiredAt?: any;
}

export interface payloadRandomProgramType {
  success: boolean;
  error?: boolean;
  data: {
    content: programProps[];
    pagination: paginationTypes;
  };
}

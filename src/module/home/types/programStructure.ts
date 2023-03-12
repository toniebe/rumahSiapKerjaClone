export interface payloadSectionHeader {
  success: true;
  data: sectionHeader[];
  message?: string;
}

export interface sectionHeader {
  id: string;
  name: string;
  description?: string;
  isTrainingSorted: boolean;
  location: string[];
  coreProgramType: string[];
  showSequence: number;
  active: boolean;
  headerDetails: headerDetailsProps[];
}

export type headerDetailsProps = {
  id: string;
  itemId: string;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  code: string;
  status: string;
  type: string;
  tags: string[];
  categories: categoriesHeaderTypes[];
  productType?: string;
  deliveryType: string;
  isLms: boolean;
  participants?: number;
  numberOfReviewer?: number;
  currentRating?: number;
  coaches: coachesHeaderTypes[];
  plans: plansHeaderTypes[];
  host?: hostHeaderTypes;
  expiredAt: string;
};

export type categoriesHeaderTypes = {
  name: string;
  code: string;
};

export type coachesHeaderTypes = {
  name: string;
  profileImage: string;
};

export type plansHeaderTypes = {
  price: number;
  originalPrice?: number;
};

export type hostHeaderTypes = {
  id: string;
  fullName: string;
  profileImage: string;
};

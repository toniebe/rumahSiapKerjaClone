export interface payloadDetailTraining {
  success: boolean;
  data: dataDetailTrainingProps;
  error?: any;
}

export interface dataDetailTrainingProps {
  id: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  markForDelete: boolean;
  bookingId?: any;
  title: string;
  eventDatetime?: any;
  eventDateTimes: eventDateTimesTypes[];
  coverImage: string;
  alternateThumbnailUrl?: any;
  trainer: detailTrainerTypes;
  host?: hostDetailTypes;
  trainerExternalName?: any;
  trainerExternalJobTitle?: any;
  trainerExternalDescription?: any;
  trainerExternalProfileImage: string;
  category: categoryDetailTypes;
  provider: providerDetailTypes;
  maxCapacity: number;
  participants: number;
  status: string;
  description: string;
  finishedAt?: any;
  alreadyJoined: boolean;
  trainingPrice: number;
  location: locationDetailTypes;
  blk: boolean;
  level: string;
  knowledgeGained: string;
  termAndCondition?: any;
  trainingFAQs: any[];
  minimumEducation?: any;
  gender?: any;
  age?: any;
  bank?: any;
  bankAccountNumber?: any;
  bankAccountName?: any;
  price?: number;
  language?: any;
  trainingObjective: string;
  whatYouGetInfo: string[];
  toolsUsed: string;
  multipleSession: boolean;
  employerTraining: boolean;
  online: boolean;
  onlineClassLink?: any;
  onlineClassPassword?: any;
  tags: string[];
  courseCode: string;
  maximumAccessTimes: number;
  storeLinks: storeLinkTypes[];
  merchandise?: any;
  lmsCourseId?: any;
  jobCompetencyTargets: string;
  targetGroupOfParticipants: string;
  summary: string;
  youtubeLink?: any;
  shortUrl?: any;
  currentRating?: number;
  numberOfReviewer?: any;
  reward?: any;
  manualCertificate: boolean;
  certificateTemplate?: any;
  manualSignature: boolean;
  signerName?: any;
  signerTitle?: any;
  signatureImage?: any;
  trainingCode: string;
  productType: string;
  deliveryType: string;
  isLms: boolean;
  showMerchandise: boolean;
  showSyllabus: boolean;
  trainingDetail: any[];
  trainingMerchandise?: any;
  notes?: any;
  testimonialImageUrls?: any;
  trainingBenefits: trainingBenefitsTypes[];
  metaThumbnailTag?: string;
  metaDescription?: string;
  metaKeyword?: string[];
  metaTitle?: string;
  pmoCourseCode?: any;
  eventDateTime?: any;
}

export type eventDateTimesTypes = {
  id?: any;
  start?: any;
  end?: any;
  active: boolean;
};

export type detailTrainerTypes = {
  id?: any;
  version?: any;
  createdAt?: any;
  updatedAt?: any;
  createdBy?: any;
  updatedBy?: any;
  markForDelete: boolean;
  identityNumber?: any;
  profileImage: string;
  fullName: string;
  email?: any;
  mobilePhone?: any;
  address?: any;
  provinceCode?: any;
  provinceName?: any;
  regencyCode?: any;
  postCode?: any;
  regencyName?: any;
  educationalAttainment?: any;
  degree?: any;
  interest?: any;
  expertise?: any;
  notes: string;
  dob?: any;
  active: boolean;
  roles?: any;
  providerId?: any;
  employerId?: any;
  gender?: any;
  firstTimeLogin: boolean;
  verifiedTrainer: boolean;
  needChangeEmail: boolean;
  trainerApproval: any;
  kkNumber: any;
  clothesSize: any;
  quote: any;
  district: any;
  districtName: any;
  subDistrict: any;
  subDistrictName: any;
  professionalTitle: any;
  houseNumber: any;
  rtNumber: any;
  rwNumber: any;
  redemptionType: any;
  currentReward: any;
  loginCount: any;
  addressInfo: any;
  isJabodetabekAddress: any;
  freePlanUsageCount: any;
  changePassword: any;
  registrationMethod: any;
  userFlags: any;
  referralCode: any;
};

export type hostDetailTypes = {
  id: string;
  fullName: string;
  profileImage: string;
  description: string;
  employerTraining?: null;
};

export type categoryDetailTypes = {
  id: string;
  version: number;
  createdAt?: any;
  updatedAt?: any;
  createdBy: string;
  updatedBy: string;
  markForDelete: boolean;
  code: string;
  name: string;
  type: string;
  parent?: any;
};

export type locationDetailTypes = {
  provinceCode: string;
  provinceName: string;
  regencyCode: string;
  regencyName: string;
  address: string;
  lng: number;
  lat: number;
};

export type providerDetailTypes = {
  id?: any;
  version?: any;
  createdAt?: any;
  updatedAt?: any;
  createdBy?: any;
  updatedBy?: any;
  markForDelete: boolean;
  ownerName?: any;
  buildingAddress: string;
  buildingStatus?: any;
  buildingImage?: any;
  buildingFacility?: any;
  buildingDescription?: any;
  buildingPhonenumber?: any;
  provinceCode: string;
  provinceName: string;
  regencyCode: string;
  regencyName: string;
  buildingSize: number;
  landSize: number;
  capacity: number;
  lng: number;
  lat: number;
};

export type storeLinkTypes = {
  link?: string;
  channel: string;
};

export type trainingBenefitsTypes = {
  id: string;
  imageUrl: string;
  description: string;
  seq: number;
};

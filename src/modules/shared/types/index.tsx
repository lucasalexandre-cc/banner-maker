type ProviderPropsData = {
  children: React.ReactNode;
};

type UniversitiesData = {
  type: string;
  ids?: Array<number>;
};

type UserAccessData = {
  type: string;
  trialReason?: string;
};

type BannerPublicData = {
  universities: UniversitiesData;
  userAccess: UserAccessData;
};

type EditRouteParam = {
  bannerId?: string;
};

type BannerQueryType = {
  id: number;
  name: string;
};

type GraphqlMutationResponseData = {
  success: boolean;
  errorMessage?: string;
  successMessage?: string;
};

export type {
  ProviderPropsData,
  BannerPublicData,
  EditRouteParam,
  BannerQueryType,
  GraphqlMutationResponseData
};

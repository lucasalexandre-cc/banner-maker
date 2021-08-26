type BannerQueryType = {
  id: number;
  name: string;
};

type GraphqlMutationResponseData = {
  success: boolean;
  errorMessage?: string;
  successMessage?: string;
};

export type { BannerQueryType, GraphqlMutationResponseData };

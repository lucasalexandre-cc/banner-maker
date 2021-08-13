type ProviderPropsData = {
  children: React.ReactNode
}

type UniversitiesData = {
  type: string,
  ids?: Array<number>
}

type UserAccessData = {
  type: string,
  trialReason?: string,
}

type BannerPublicData = {
  universities: UniversitiesData,
  userAccess: UserAccessData
}

export type { ProviderPropsData, BannerPublicData, };
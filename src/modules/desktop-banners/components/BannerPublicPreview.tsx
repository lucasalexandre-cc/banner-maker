import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { useDesktopBannerContext } from 'modules/desktop-banners/providers/DesktopBannerProvider';
import { GET_UNIVERSITIES } from 'modules/shared/queries/universities-queries';
import { UniversitiesQueryData } from 'modules/shared/types/university-queries-type';
import { userAccessTypes, universitiesTypes } from '../data';

const BannerPublicPreview: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const { data: universitiesResponse } =
    useQuery<UniversitiesQueryData>(GET_UNIVERSITIES);

  const userAccessTypeName = useMemo(() => {
    const userAccess = desktopBannerContext?.bannerData.public.userAccess;
    if (!userAccess?.type) return '';

    return userAccessTypes.find((t) => t.value === userAccess.type)?.name;
  }, [desktopBannerContext]);

  const universitiesTypeName = useMemo(() => {
    const universities = desktopBannerContext?.bannerData.public.universities;
    if (!universities?.type) return '';

    return universitiesTypes.find((t) => t.value === universities.type)?.name;
  }, [desktopBannerContext]);

  const showTrialReason = useCallback(() => {
    const userAccess = desktopBannerContext?.bannerData.public.userAccess;

    return userAccess?.type === 'with_trial' && userAccess?.trialReason;
  }, [desktopBannerContext]);

  const showSpecificUniversities = useCallback(() => {
    return (
      desktopBannerContext?.bannerData.public.universities?.type === 'specifics'
    );
  }, [desktopBannerContext]);

  const getUniversityName = useCallback(
    (universityId) => {
      const universities = universitiesResponse?.universities;
      if (!universities) return '';

      const university = universities.find(
        (university) => university.id === universityId
      );
      if (!university) return '';

      return `${university.state} - ${university.name}`;
    },
    [universitiesResponse]
  );

  const bannerPublic = desktopBannerContext?.bannerData.public;
  if (!bannerPublic) return null;

  return (
    <Container>
      <Info>Tipo de acesso do usuário: {userAccessTypeName}</Info>
      {showTrialReason() && (
        <Info>
          Razão do trial:{' '}
          {desktopBannerContext?.bannerData.public.userAccess.trialReason}
        </Info>
      )}
      <Info>Tipo de universidade: {universitiesTypeName}</Info>
      {showSpecificUniversities() && (
        <>
          {desktopBannerContext?.bannerData.public.universities.ids?.map(
            (universityId) => (
              <UniversityName key={universityId}>
                {getUniversityName(universityId)}
              </UniversityName>
            )
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  margin: 5px 0;
`;

const UniversityName = styled.div``;

export default BannerPublicPreview;

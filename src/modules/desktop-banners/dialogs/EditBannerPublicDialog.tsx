import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { Select, MenuItem, TextField } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import MultiSelect from 'react-multi-select-component';
import { Option } from 'react-multi-select-component/dist/lib/interfaces';

import { useDesktopBannerContext } from 'modules/desktop-banners/providers/DesktopBannerProvider';
import { useDialogContext } from 'modules/shared/providers/DialogProvider';
import { DefaultDialogContainer } from 'modules/shared/components';
import { BannerPublicData } from 'modules/shared/types';
import {
  userAccessTypes,
  universitiesTypes
} from 'modules/desktop-banners/data';
import { GET_UNIVERSITIES } from 'modules/shared/queries/universities-queries';
import { UniversitiesQueryData } from 'modules/shared/types/university-queries-type';

const EditBannerPublicDialog: React.FC = () => {
  const desktopBannerContext = useDesktopBannerContext();
  const dialogContext = useDialogContext();
  const [publicBanner, setPublicBanner] = useState(
    desktopBannerContext?.bannerData?.public
  );
  const [selectedUniversities, setSelectedUniversities] = useState<
    Array<Option>
  >([]);
  const { data: universitiesResponse } =
    useQuery<UniversitiesQueryData>(GET_UNIVERSITIES);

  useEffect(() => {
    const initialUniversityIds =
      desktopBannerContext?.bannerData.public.universities.ids;
    if (!initialUniversityIds) return;

    const universities = universitiesResponse?.universities;
    if (!universities) return;

    const selected = universities
      .filter((university) => initialUniversityIds.includes(university.id))
      .map((university) => {
        return {
          label: `${university.state} - ${university.name}`,
          value: university.id
        };
      });
    setSelectedUniversities(selected);
  }, [desktopBannerContext, universitiesResponse]);

  const onUpdateUserAccess = useCallback(
    (key, value) => {
      const newUserAccess = { ...publicBanner?.userAccess, [key]: value };
      const newPublicBanner = {
        ...publicBanner,
        userAccess: newUserAccess
      } as BannerPublicData;
      setPublicBanner(newPublicBanner);
    },
    [publicBanner, setPublicBanner]
  );

  const onUpdateUniversities = useCallback(
    (key, value) => {
      const newUniversities = { ...publicBanner?.universities, [key]: value };
      const newPublicBanner = {
        ...publicBanner,
        universities: newUniversities
      } as BannerPublicData;
      setPublicBanner(newPublicBanner);
    },
    [publicBanner, setPublicBanner]
  );

  const showTrialReasonInput = useCallback(() => {
    return publicBanner?.userAccess.type === 'with_trial';
  }, [publicBanner]);

  const showUniversityMultipleInput = useCallback(() => {
    return (
      publicBanner?.universities.type === 'specifics' && universitiesResponse
    );
  }, [publicBanner, universitiesResponse]);

  const universitiesOptions = useMemo(() => {
    if (!universitiesResponse) return [];

    const { universities } = universitiesResponse;
    return universities.map((university) => {
      return {
        label: `${university.state} - ${university.name}`,
        value: university.id
      };
    });
  }, [universitiesResponse]);

  const onSaveBannerPublic = useCallback(() => {
    if (publicBanner?.universities.type === 'specifics') {
      publicBanner.universities.ids = selectedUniversities.map(
        (option: any) => option.value
      );
    }

    desktopBannerContext?.updateBannerData('public', publicBanner);
    dialogContext?.unsetDialog();
  }, [publicBanner, selectedUniversities, desktopBannerContext, dialogContext]);

  return (
    <DefaultDialogContainer>
      <Title>Edite o publico do banner</Title>
      <Form>
        <SelectTitle>Tipo de acesso do usuário:</SelectTitle>
        <CustomSelect
          value={publicBanner?.userAccess?.type}
          onChange={(event) => onUpdateUserAccess('type', event.target.value)}
        >
          {userAccessTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.name}
            </MenuItem>
          ))}
        </CustomSelect>

        {showTrialReasonInput() && (
          <>
            <CustomInput
              label="Razão do trial"
              value={publicBanner?.userAccess?.trialReason}
              onChange={(event) =>
                onUpdateUserAccess('trialReason', event.target.value)
              }
              variant="outlined"
            />
          </>
        )}

        <SelectTitle>Universidade do usuário:</SelectTitle>
        <CustomSelect
          value={publicBanner?.universities?.type}
          onChange={(event) => onUpdateUniversities('type', event.target.value)}
        >
          {universitiesTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.name}
            </MenuItem>
          ))}
        </CustomSelect>

        {showUniversityMultipleInput() && (
          <CustomMultiSelect
            options={universitiesOptions}
            value={selectedUniversities}
            onChange={(newSelectedUniversity: Array<Option>) =>
              setSelectedUniversities(newSelectedUniversity)
            }
            hasSelectAll={false}
            labelledBy="Selecionar universidades"
            overrideStrings={{
              selectSomeItems: 'Selecione as faculdades'
            }}
          />
        )}
        <CustomButton onClick={onSaveBannerPublic}>Salvar</CustomButton>
      </Form>
    </DefaultDialogContainer>
  );
};

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`;

const Form = styled.div`
  width: 600px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CustomButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
`;

const SelectTitle = styled.div`
  margin-top: 15px;
  font-size: 1.1em;
  font-weight: bold;
`;

const CustomSelect = styled(Select)`
  width: 100%;

  .MuiInput-input {
    text-align: left;
  }
`;

const CustomInput = styled(TextField)`
  width: 100%;

  &.MuiTextField-root {
    margin-top: 15px;
  }
`;

const CustomMultiSelect = styled(MultiSelect)`
  width: 100%;
  margin-top: 15px;
`;

export default EditBannerPublicDialog;

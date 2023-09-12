import React from 'react';
import { useGetPitchByIdQuery, useUpdatePitchMutation } from '../Pitch/api/pitch.api';
import { useParams } from 'react-router-dom';

const PitchUpdate = () => {
    const { id } = useParams();
    const { data: pitch } = useGetPitchByIdQuery(id as string);

    console.log(pitch);

    const [updatePitch] = useUpdatePitchMutation();

    const handleUpdatePitch = () => {
        updatePitch({ _id: 'batws buoc', name: 'test', avatar: 'test' }).unwrap().then().catch();
    };
    return <div>PitchUpdate</div>;
};

export default PitchUpdate;

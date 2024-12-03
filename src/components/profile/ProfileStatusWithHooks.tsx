import React, {useEffect, useState} from 'react';

type ProfileStatusProps = {
    status: string;
    updateStatus: (status: string) => void;
};

export const ProfileStatusWithHooks: React.FC<ProfileStatusProps> = ({ status, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(status);


    useEffect(() => {

    }, []);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(currentStatus);
    };

    const onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentStatus(event.currentTarget.value);
    };

    return (
        <>
            {!editMode && (
                <span onDoubleClick={activateEditMode}>
                    {currentStatus || 'No status'}
                </span>
            )}

            {editMode && (
                <input
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    value={currentStatus}
                    placeholder={'Hello my friends'}
                    autoFocus
                />
            )}
        </>
    );
};
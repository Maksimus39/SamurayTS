import React, {useState, useEffect} from 'react';


type ProfileStatusProps = {
    status: string;
    updateStatus: (status: string) => void; // Исправлена типизация
};

const ProfileStatusWithHooks: React.FC<ProfileStatusProps> = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(status);

    useEffect(() => {
        setCurrentStatus(status);
    }, [status]);

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
            {!editMode &&
                <span onDoubleClick={activateEditMode}>
                    {status || 'No status'}
                </span>
            }

            {editMode &&
                <input
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    value={currentStatus}
                    placeholder={'Hello my friends'}
                    autoFocus
                />
            }
        </>
    );
};

export default ProfileStatusWithHooks;
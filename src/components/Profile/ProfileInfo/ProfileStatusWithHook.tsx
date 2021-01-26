import React, { ChangeEvent, useEffect, useState } from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHook: React.FC<PropsType> = (props) => {

    let [editMode, setEditMore] = useState(false);
    let [statuss, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])
    const activatedEditMode = () => {
        setEditMore(true);
    };

    const deactivatedEditMode = () => {
        setEditMore(false);
        props.updateStatus(statuss);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };


    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activatedEditMode}><b>Status:</b> {props.status || 'j-----'}</span>
                </div>
            }
            {editMode &&
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode}
                    value={statuss}>
                </input>
            }
        </div>
    )


};

export default ProfileStatusWithHook;
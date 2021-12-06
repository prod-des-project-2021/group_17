import Types from "../types";

// Sign In
export const signInRequested = () => ({
    type: Types.SIGN_IN_REQUESTED,
});

export const signInSucceeded = (authUser) => {
    return {
        type: Types.SIGN_IN_SUCCEEDED,
        payload: authUser
    }
};

export const signInFailed = (error) => {
    return {
        type: Types.SIGN_IN_FAILED,
        payload: error
    }
};

// Sign Out
export const signOutRequested = () => {
    return {
        type: Types.SIGN_OUT_REQUESTED
    }
};

export const signOutSucceeded = () => {
    return {
        type: Types.SIGN_OUT_SUCCEEDED
    }

};

export const signOutFailed = (error) => {
    return {
        type: Types.SIGN_OUT_FAILED,
        payload: error
    }
};

//Sign UP
export const signUpRequested = () => ({
    type: Types.SIGN_UP_REQUESTED,
});

export const signUpSucceeded = (authUser) => ({
    type: Types.SIGN_UP_SUCCEEDED,
    payload: authUser,
});

export const signUpFailed = (error) => ({
    type: Types.SIGN_UP_FAILED,
    payload: error,
});

export const getCurrent = () => {
    return {
        type: Types.GET_CURRENT_REQUESTED
    }
};

export const getCurrentSucceeded = (user) => {
    return {
        type: Types.GET_CURRENT_SUCCEEDED,
        payload: user
    }
};

export const getCurrentFailed = (error) => {
    return {
        type: Types.GET_CURRENT_SUCCEEDED,
        payload: error
    }
};
//User State
export const setToken = (token) => ({
    type: Types.SET_USER_TOKEN,
    payload: token,
});

export const clearToken = () => ({
    type: Types.CLEAR_USER_TOKEN,
});

export const setUser = (user) => ({
    type: Types.SET_USER,
    payload: user,
});

export const clearUser = () => ({
    type: Types.CLEAR_USER,
});

export const updateUserRequested = () => {
    return {
        type: Types.UPDATE_USER_REQUESTED,
        loading: true
    }
};

export const updateUserSucceeded = (user) => {
    return {
        type: Types.UPDATE_USER_SUCCEEDED,
        loading: false,
        payload: user
    }
};

export const updateUserFailed = (error) => {
    return {
        type: Types.UPDATE_USER_FAILED,
        loading: false,
        payload: error
    }
};

export const changePasswordRequested = () => {
    return {
        type: Types.CHANGE_USER_PASSWORD_REQUESTED,
        loading: true,
    }
};

export const changePasswordSucceeded = (user) => {
    return {
        type: Types.CHANGE_USER_PASSWORD_SUCCEEDED,
        loading: false,
        payload: user
    }
};

export const changePasswordFailed = (error) => {
    return {
        type: Types.CHANGE_USER_PASSWORD_FAILED,
        loading: false,
        payload: error
    }
};

export const uploadUserImageRequested = () => {
    return {
        type: Types.UPLOAD_USER_PHOTO_REQUESTED,
        loading: true,
    }
};

export const uploadUserImageSucceeded = (user) => {
    return {
        type: Types.UPLOAD_USER_PHOTO_SUCCEEDED,
        loading: false,
        payload: user
    }
};

export const uploadUserImageFailed = (error) => {
    return {
        type: Types.UPLOAD_USER_PHOTO_FAILED,
        loading: false,
        payload: error
    }
};

export const uploadProofRequested = () => {
    return {
        type: Types.POE_REQUESTED,
        loading: true,
    }
};

export const uploadProofSucceeded = (proof) => {
    return {
        type: Types.POE_SUCCEEDED,
        loading: false,
        payload: proof
    }
};

export const uploadProofFailed = (error) => {
    return {
        type: Types.POE_FAILED,
        loading: false,
        payload: error
    }
};

export const getVotesOfCurrentUserRequested = () => {
    return {
        type: Types.GET_VOTES_OF_CURRENT_REQUESTED,
    }
}

export const getVotesOfCurrentUserSucceeded = (votes) => {
    return {
        type: Types.GET_VOTES_OF_CURRENT_SUCCEEDED,
        payload: votes
    }
}

export const getVotesOfCurrentUserFailed = (error) => {
    return {
        type: Types.GET_VOTES_OF_CURRENT_FAILED,
        payload: error
    }
}
import * as types from "./UserDataActionType.js";

export const loginUserEmail = (payload) => {
  localStorage.setItem("loginUserEmail", JSON.stringify(payload));
  return {
    type: types.GETUSEREMAIL,
    payload: payload
  };
};

export const loginUserName = (payload) => {
  localStorage.setItem("loginUserName", JSON.stringify(payload));
  return {
    type: types.GetUserName,
    payload: payload
  };
};

export const loginUserImage = (payload) => {
  localStorage.setItem("loginUserImage", JSON.stringify(payload));
  return {
    type: types.GETUSERIMAGE,
    payload: payload
  };
};

export const LogoutHandle = (payload) => {
  localStorage.removeItem("loginUserEmail");
  localStorage.removeItem("loginUserName");
  localStorage.removeItem("loginUserImage");
  // console.log("Local Clear");
  return {
    type: types.LOGOUTUSER,
    payload
  };
};

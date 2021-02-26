import React from "react";

function SettingUser(props) {
  return (
    <>
      <div className="box">
        <p>{props.name} :</p>
        <input
          className="setting"
          type="text"
          name="name"
          autoComplete="off"
          value={props.value}
          // onChange={handleChange}
          required
        />

        <button className="setting_btn">수정</button>
        <button className="setting_btn">전송</button>
      </div>
    </>
  );
}

export default SettingUser;

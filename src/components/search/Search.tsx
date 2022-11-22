import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Search = () => {
  return (
    <Container>
      <div className="menuBox">
        <div className="menuButton">
          <FontAwesomeIcon icon={faAlignJustify} size="2x" />
        </div>

        <img
          src="data:image/png;base64,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"
          className="youtubeImg"
          alt="유튭사진"
        />
      </div>
      <div className="inputBox">
        <input type="text" />
        <button className="inputButton">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
      </div>
      <div className="loginBox">
        <FontAwesomeIcon icon={faUser} size="lg" />
        로그인
      </div>
    </Container>
  );
};

export default Search;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .menuBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menuButton {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
  }
  .youtubeImg {
    width: 120px;
  }

  .inputBox {
    display: flex;
    align-items: center;

    width: 50%;
    position: relative;
  }
  input {
    width: 100%;
    height: 50%;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 35px;
  }
  .inputButton {
    position: absolute;
    border: none;
    right: 5px;
  }

  .loginBox {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
`;

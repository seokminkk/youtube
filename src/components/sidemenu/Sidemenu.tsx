import React from "react";
import styled from "styled-components";

const Sidemenu = () => {
  return (
    <Container>
      <div className="mainMenuBox">
        <img
          className="home"
          src="https://cdn-icons-png.flaticon.com/512/63/63988.png"
        />
        <span className="mainMenuTitle">홈</span>
      </div>

      <div className="mainMenuBox">
        <img
          className="shorts"
          src="data:image/png;base64,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"
        />
        <span className="mainMenuTitle">쇼츠</span>
      </div>

      <div className="mainMenuBox">
        <img
          className="home"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADPz89hYWHMzMz09PSWlpZTU1P6+vr8/Pzv7+9aWlrc3Nxqamrr6+s8PDwdHR00NDRJSUmKioq/v7+mpqYlJSW1tbXl5eWvr68qKiqfn5+FhYV3d3ctLS3f3983NzcSEhIYGBiamppGRkb9MlNRAAADc0lEQVR4nO2di5LaMAxF1fAKITxDoEBblrb//41Nh+0MnS7UD1mSk3s+wNaZJMJRbEEEAAAAAAAAAACAQVMXstTihrNPsszEDUfChiMYwhCGMIQhDGEIQxjCEIYwhKFJw4Ww4ULc8DSV5SRuCAAAAAAAAAAAgAw5LUb2WHAWNqbCZSc3pjCEIQzVgSEMYagPDGEIQ31gCEMY6gNDH8qJRUpGQwAAAAAAAAAAYAhci7FNiiuDXdGctcsxLzk3RYxe2R60DRw4XIILNvsc/H5zOIYJLrUD92AZ4FflcgHvHCpfwZXtBPMv55WfYLnWjtibtV++yekZ/IPXs7jXjjaIvcc9utEONoiN+33aascaSOsqON9qhxrIdu5oWGhHGozrGrXRDjSYxtFwpx1oMDs3wVI7zgjcsmmlHWYEbqvTWjvMCNz6R+abSl2TKQwtA0MY2geG7IZr6W7D4oYzGv/kG80BBUOio2TVTsWQygvfgP9Dx7Bz/MI35Gu0DIlWX/kGfYWeYffGItLCTtOQaPyNb+Bn6BoS7ZPXYbUNaX658Q3+EeqGRJO0hTwDhl1aTfnVx4Qh0TVdWjViSOlWq2YMu9XqjW+WBwwZEiVZrZoyTJJWbRkSfWZfrVoz7NIqcxHAnmGXVll3fVg07NIq44rcpiGVfPsGjBp2jlxp1awhWxHAsCFTEcC0YZdW36InNG7IUAQwb0jUfo+aMAPDyNVqDoZxaTUPw25FHvwHKLkYXoNLOXkY9v0ujVvA2TeM/RJn3jD6Rcq4IcPLsGnDmmNbq2FDpqKUWcMJ12dwq4Y/2Ca0aXjkm8+k4b7n1USWBPqANcPwd4hn2DKsEuwjsmRYJulUaMjwdOOb5QEzhsnOwRsxLNIdrDJheE35L7QGDKu0mxTVDSepW70qG87bG9/QH6NryPmt9xmahoWAn6ahzA5hPUOpXd5qpxHEdurrGDJutHBA3HBBR9lGPuKGb7KnnnA6D4Y5AEMY2geGd/rf+aP/3Vv634GHpJdafDh2URpAJ6x8k6lrN7P+d6Trf1dBmmfaGdL5Eg6gu+cAOrRSGX8wQBr3NHOnEilRM3L2bgZd5fWTsfUW7BJqTs/i0vMWfSd9GwsmNl5Z9K/L2OaQcLaXsAv47lg0tvu17poixu9OWdWFTeoKf9QJAAAAAAAAAAAMhl+j43xZiEaB7gAAAABJRU5ErkJggg=="
        />
        <span className="mainMenuTitle">구독</span>
      </div>

      <div className="mainMenuBox">
        <img className="home" src="/images/youtube-store.png" />
        <span className="mainMenuTitle">보관함</span>
      </div>

      <div className="mainMenuBox">
        <img className="history" src="/images/youtube-history.png" />
        <span className="mainMenuTitle">시청기록</span>
      </div>
    </Container>
  );
};

export default Sidemenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  width: 50px;
  position: fixed;
  margin-top: 70px;
  .mainMenuBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  .mainMenuTitle {
    font-size: 10px;
  }

  .home {
    width: 28px;
    height: 28px;
  }

  .shorts {
    width: 40px;
    height: 35px;
  }
  .history {
    width: 30px;
    height: 28px;
  }
`;

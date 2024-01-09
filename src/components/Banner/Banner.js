import styled from "styled-components";
import BannerImg from "../../assets/img/nnn.png";

const TiApp = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 721px;
`;
const TiApp1 = styled.div`
  position: relative;
  font-weight: 500;
`;
const Btn = styled.div`
  border-radius: 40px;
  background-color: var(--main);
  width: 235px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  font-size: var(--page-label1-size);
  color: #fff;
`;
const BannerRoot = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 123px 353px;
  box-sizing: border-box;
  gap: 32px;
  background-image: url(${BannerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  font-size: var(--page-header2-size);
  color: var(--main);
  font-family: var(--page-label1);
`;

const Banner = () => {
  return (
    <BannerRoot>
      <TiApp>Tải app để nhận ngay ưu đãi dành riêng cho bạn</TiApp>
      <Btn className="btn__hover">
        <TiApp1>Tải app</TiApp1>
      </Btn>
    </BannerRoot>
  );
};

export default Banner;

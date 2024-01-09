import styled from "styled-components";

const AllRightsReserved = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 133px);
`;
const AllRightsReservedForPigmenWrapper = styled.div`
  align-self: stretch;
  position: relative;
  background-color: #292d32;
  color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
`;
const LinH = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  height: 38px;
  flex-shrink: 0;
`;
const AChH = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--page-label1-size);
  font-weight: 500;
`;
const TheoDiChng = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const BookSquareIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const Holder1 = styled.div`
  width: 211px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FollowUs = styled.div`
  align-self: stretch;
  height: 82px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-base) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
`;
const Column = styled.div`
  align-self: stretch;
  width: 270px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-base) 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
`;
const CangoTravel = styled.div`
  position: relative;
  font-size: var(--page-body1-size);
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 171px;
  height: 38px;
  flex-shrink: 0;
`;
const VChngTi = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;
const Column1 = styled.div`
  align-self: stretch;
  width: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  font-size: var(--page-label1-size);
`;
const Instagram = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 254px;
  height: 38px;
  flex-shrink: 0;
`;
const ImgIcon = styled.img`
  position: relative;
  border-radius: var(--br-31xl);
  width: 64px;
  height: 64px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Column2 = styled.div`
  align-self: stretch;
  width: 270px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
`;
const TinTcMi = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--page-body1-size);
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  height: 38px;
  flex-shrink: 0;
`;
const NhnTinTc = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 270px;
`;
const NhpACh = styled.div`
  position: relative;
  font-weight: 500;
`;
const Input = styled.div`
  align-self: stretch;
  border-radius: var(--br-21xl);
  background-color: var(--color-white);
  border: 1px solid rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
  text-align: center;
  color: rgba(41, 45, 50, 0.5);
`;
const Btn = styled.div`
  align-self: stretch;
  border-radius: var(--br-21xl);
  background-color: var(--main);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
  text-align: center;
  color: var(--color-white);
  margin-top: 16px;
`;
const Column3 = styled.div`
  align-self: stretch;
  width: 270px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  font-size: var(--page-label1-size);
`;
const Holder = styled.div`
  width: 1121px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--page-body1-size);
  color: var(--siah);
  font-family: var(--page-label1);
`;
const Footer = styled.div`
  // width: 1440px;
  // height: 337px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // padding: 32px 0px 0px;
  box-sizing: border-box;
  gap: 32px;
`;
const FooterParentRoot = styled.div`
  position: relative;
`;

export default function FooterI() {
  return (
    <FooterParentRoot>
      <Footer>
        <AllRightsReservedForPigmenWrapper>
          <AllRightsReserved>
            All Rights Reserved for Pigment Store
          </AllRightsReserved>
        </AllRightsReservedForPigmenWrapper>
        <Holder>
          <Column>
            <LinH>Liên hệ</LinH>
            <AChH>Địa chỉ: Hà Nội, Việt Nam</AChH>
            <AChH>Điện thoại: 099999999</AChH>
            <FollowUs>
              <TheoDiChng>Theo dõi chúng tôi</TheoDiChng>
              <Holder1>
                <BookSquareIcon
                  alt=""
                  src={require("../../../../assets/img/book-square.png")}
                />
                <BookSquareIcon
                  alt=""
                  src={require("../../../../assets/img/book-square.png")}
                />
                <BookSquareIcon
                  alt=""
                  src={require("../../../../assets/img/book-square.png")}
                />
                <BookSquareIcon
                  alt=""
                  src={require("../../../../assets/img/book-square.png")}
                />
                <BookSquareIcon
                  alt=""
                  src={require("../../../../assets/img/book-square.png")}
                />
                <BookSquareIcon
                  alt=""
                  src={require("../../../../assets/img/book-square.png")}
                />
              </Holder1>
            </FollowUs>
          </Column>
          <Column1>
            <CangoTravel>Cango travel</CangoTravel>
            <VChngTi>Về chúng tôi</VChngTi>
            <VChngTi>Chăm sóc</VChngTi>
            <VChngTi>Sự hợp tác</VChngTi>
            <VChngTi>Liên hệ</VChngTi>
            <VChngTi>Chính sách</VChngTi>
          </Column1>
          <Column2>
            <Instagram>Instagram</Instagram>
            <ImgIcon alt="" src={require("../../../../assets/img/ft1.png")} />
            <ImgIcon alt="" src={require("../../../../assets/img/ft2.png")} />
            <ImgIcon alt="" src={require("../../../../assets/img/ft3.png")} />
            <br />
            <ImgIcon alt="" src={require("../../../../assets/img/ft4.png")} />
            <ImgIcon alt="" src={require("../../../../assets/img/ft5.png")} />
            <ImgIcon alt="" src={require("../../../../assets/img/ft6.png")} />
          </Column2>
          <Column3>
            <TinTcMi>Tin tức mới</TinTcMi>
            <NhnTinTc>Nhận tin tức cập nhật và cung cấp!</NhnTinTc>
            <Input>
              <NhpACh>Nhập địa chỉ Email của bạn</NhpACh>
            </Input>
            <Btn className="btn__hover">
              <NhpACh>Nhận ngay ưu đãi</NhpACh>
            </Btn>
          </Column3>
        </Holder>
      </Footer>
    </FooterParentRoot>
  );
}

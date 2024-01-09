import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Card06Child = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 264.26px;
  height: 263px;
  object-fit: cover;
`;
const Card06 = styled.div`
  position: absolute;
  top: 511px;
  left: 1037.24px;
  width: 264.26px;
  height: 263px;
`;
const Card05Child = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 166.38px;
  height: 263px;
  object-fit: cover;
`;
const Card05 = styled.div`
  position: absolute;
  top: 511px;
  left: 841.5px;
  width: 166.38px;
  height: 263px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 274.85px;
  height: 250px;
  object-fit: cover;
`;
const Card04 = styled.div`
  position: absolute;
  top: 524px;
  left: 125px;
  width: 274.85px;
  height: 250px;
`;
const Card03Child = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 460px;
  height: 250px;
  object-fit: cover;
`;
const Card03 = styled.div`
  position: absolute;
  top: 248px;
  left: 841.5px;
  width: 460px;
  height: 250px;
`;
const Card02Child = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 376.64px;
  height: 526px;
  object-fit: cover;
`;
const London = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const UnitedKingdom = styled.div`
  position: relative;
  font-size: var(--page-label1-size);
  font-weight: 500;
`;
const LondonParent = styled.div`
  position: absolute;
  top: 458px;
  left: 33.59px;
  width: 112.99px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Card02 = styled.div`
  position: absolute;
  top: 248px;
  left: 430.38px;
  width: 376.64px;
  height: 526px;
`;
const LondonGroup = styled.div`
  position: absolute;
  top: 182px;
  left: 24.43px;
  width: 112.99px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LondonContainer = styled.div`
  position: absolute;
  top: 182px;
  left: 736.99px;
  width: 112.99px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Card01 = styled.div`
  position: absolute;
  top: 248px;
  left: 125px;
  width: 849.99px;
  height: 250px;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 706px;
  left: 159px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NhngAIm = styled.div`
  position: relative;
  font-size: var(--page-body1-size);
  text-transform: capitalize;
  color: #5b5f62;
`;
const Bangkok = styled.div`
  position: relative;
  font-weight: 500;
`;
const Button = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-base);
  background: linear-gradient(#177ba5, #177ba5), #2d3134;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  color: var(--color-white);
`;
const Button1 = styled.div`
  position: absolute;
  top: 0px;
  left: 108px;
  border-radius: var(--br-base);
  border: 1px solid var(--xanh);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
`;
const Button2 = styled.div`
  position: absolute;
  top: 0px;
  left: 224px;
  border-radius: var(--br-base);
  border: 1px solid var(--xanh);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
`;
const Button3 = styled.div`
  position: absolute;
  top: 0px;
  left: 337px;
  border-radius: var(--br-base);
  border: 1px solid var(--xanh);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
`;
const Button4 = styled.div`
  position: absolute;
  top: 0px;
  left: 465px;
  border-radius: var(--br-base);
  background-color: #8f9194;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  color: var(--color-white);
`;
const ButtonParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 540px;
  height: 38px;
`;
const Group = styled.div`
  position: relative;
  width: 540px;
  height: 38px;
  text-align: center;
  font-size: var(--page-label1-size);
  color: var(--color-darkslategray-100);
`;
const TopCcAImTrnThGiiParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const Text1 = styled.div`
  position: absolute;
  top: 20px;
  left: 279px;
  width: 883px;
  height: 164px;
  font-size: var(--page-header1-size);
  color: var(--xanh);
`;
const LondonParent1 = styled.div`
  position: absolute;
  top: 706px;
  left: 859px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LondonParent2 = styled.div`
  position: absolute;
  top: 706px;
  left: 1059px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Features04 = styled.div`
  position: relative;
  width: 1428px;
  height: 811px;
  overflow: hidden;
  flex-shrink: 0;
  color: var(--color-white);
`;
const ImgIcon = styled.img`
  position: relative;
  width: 575px;
  height: 615px;
  object-fit: cover;
`;
const CTipV = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 577px;
  height: 127px;
  flex-shrink: 0;
`;
const BnCMun = styled.div`
  position: relative;
  font-size: var(--page-body-size);
  text-transform: capitalize;
  color: var(--color-darkslategray-200);
  text-align: justify;
  display: inline-block;
  width: 577px;
`;
const Btn = styled.div`
  border-radius: 40px;
  background-color: var(--xanh);
  width: 249px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
  font-size: var(--page-label1-size);
  color: var(--color-white);
`;
const Texts = styled.div`
  width: 555px;
  height: 449px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 27px;
`;
const Book = styled.div`
  // border-radius: var(--br-31xl);
  background-color: #f4f2ee;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0px 80px 0px 0px;
  box-sizing: border-box;
  gap: 80px;
  font-size: var(--page-header2-size);
`;
const LnKHoch1 = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 1140px;
`;
const LnKHoch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--page-header2-size);
`;
const ImgIcon1 = styled.img`
  position: relative;
  border-radius: var(--br-31xl);
  width: 511px;
  height: 357px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const PNgMi = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const TChuynBay = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  color: var(--color-darkslategray-200);
`;
const Texts1 = styled.div`
  width: 533px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Blog = styled.div`
  width: 1427px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 135px;
`;
const TyChnT = styled.div`
  align-self: stretch;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  height: 11px;
  flex-shrink: 0;
`;
const Texts2 = styled.div`
  width: 543px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Blog1 = styled.div`
  width: 1443px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 123px;
`;
const Holder = styled.div`
  align-self: stretch;
  height: 744px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  color: var(--color-black);
`;
const TopRoot = styled.div`
  position: relative;
  width: 100%;
  height: 2489px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  text-align: left;
  font-size: var(--page-body-size);
  color: var(--xanh);
  font-family: var(--page-body);
`;

export default function TopPlaces() {
  return (
    <TopRoot>
      <Features04>
        <Card06
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        >
          <Card06Child
            alt=""
            src={require("../../assets/img/rectangle-4395@2x.png")}
          />
        </Card06>
        <Card05
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
        >
          <Card05Child
            alt=""
            src={require("../../assets/img/rectangle-4394@2x.png")}
          />
        </Card05>
        <Card04 data-aos="fade-right" data-aos-duration="2000">
          <GroupIcon alt="" src={require("../../assets/img/group@2x.png")} />
        </Card04>
        <Card03
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <Card03Child
            alt=""
            src={require("../../assets/img/rectangle-4392@2x.png")}
          />
        </Card03>
        <Card02 data-aos="zoom-in" data-aos-duration="2000">
          <Card02Child
            alt=""
            src={require("../../assets/img/rectangle-4391@2x.png")}
          />
          <LondonParent>
            <London>London</London>
            <UnitedKingdom>United Kingdom</UnitedKingdom>
          </LondonParent>
        </Card02>
        <Card01
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="300"
        >
          <GroupIcon
            alt=""
            src={require("../../assets/img/rectangle-4389@2x.png")}
          />
          <LondonGroup>
            <London>London</London>
            <UnitedKingdom>United Kingdom</UnitedKingdom>
          </LondonGroup>
          <LondonContainer>
            <London>London</London>
            <UnitedKingdom>United Kingdom</UnitedKingdom>
          </LondonContainer>
        </Card01>
        <FrameDiv>
          <London>London</London>
          <UnitedKingdom>United Kingdom</UnitedKingdom>
        </FrameDiv>
        <Text1>
          <TopCcAImTrnThGiiParent>
            <London>Top các địa điểm trên thế giới</London>
            <NhngAIm>
              Những địa điểm dừng chân tuyệt vời trên thế giới bạn nên thử!
            </NhngAIm>
            <Group>
              <ButtonParent>
                <Button>
                  <Bangkok>London</Bangkok>
                </Button>
                <Button1 className="btn__hover">
                  <Bangkok>Bangkok</Bangkok>
                </Button1>
                <Button2 className="btn__hover">
                  <Bangkok>England</Bangkok>
                </Button2>
                <Button3 className="btn__hover">
                  <Bangkok>Singapore</Bangkok>
                </Button3>
                <Button4 className="btn__hover">
                  <Bangkok>More</Bangkok>
                </Button4>
              </ButtonParent>
            </Group>
          </TopCcAImTrnThGiiParent>
        </Text1>
        <LondonParent1>
          <London>London</London>
          <UnitedKingdom>United Kingdom</UnitedKingdom>
        </LondonParent1>
        <LondonParent2>
          <London>London</London>
          <UnitedKingdom>United Kingdom</UnitedKingdom>
        </LondonParent2>
      </Features04>
      <Book
        style={{
          // display: "flex",
          // flexDirection: "row",
          // alignItems: "center",
          position: "relative",
        }}
      >
        {/* <div> */}
        <ImgIcon
          data-aos="flip-left"
          data-aos-duration="3000"
          alt=""
          src={require("../../assets/img/img@2x.png")}
        />
        <Texts data-aos="fade-down-left" data-aos-duration="2000">
          <CTipV>Đọc tiếp và bắt đầu hành trình phiêu lưu</CTipV>
          <BnCMun>
            Bạn có muốn khám phá thiên đường thiên nhiên trên thế giới, hãy cùng
            chúng tôi tìm ra điểm đến tuyệt vời nhất trên thế giới.
          </BnCMun>
          <Btn className="btn__hover">
            <Bangkok>Đọc các bài báo đầy cảm hứng</Bangkok>
          </Btn>
        </Texts>
        {/* </div> */}
        <img
          src={require("../../assets/img/left_bird.png")}
          style={{
            position: "absolute",
            maxWidth: "50%",
            left: "0",
            bottom: "-40%",
          }}
        />
        <img
          src={require("../../assets/img/bird_right.png")}
          style={{
            position: "absolute",
            maxHeight: "30%",
            right: "0",
            top: "0",
          }}
        />
        <img
          src={require("../../assets/img/bird_right1.png")}
          style={{
            position: "absolute",
            maxHeight: "30%",
            right: "0",
            top: "50%",
          }}
        />
      </Book>
      <LnKHoch>
        <LnKHoch1>Lên kế hoạch dễ dàng và nhanh chóng</LnKHoch1>
      </LnKHoch>
      <Holder style={{ position: "relative" }}>
        <Blog data-aos="fade-right" data-aos-duration="1000">
          <ImgIcon1 alt="" src={require("../../assets/img/img1@2x.png")} />
          <Texts1>
            <PNgMi>Đáp ứng mọi nhu cầu của bạn</PNgMi>
            <TChuynBay>
              Từ chuyến bay, lưu trú, đến điểm tham quan, bạn có thể tin chọn
              sản phẩm hoàn chỉnh và Hướng Dẫn Du Lịch của chúng tôi.
            </TChuynBay>
          </Texts1>
        </Blog>
        <Blog1 data-aos="fade-left" data-aos-duration="1000">
          <Texts2>
            <TyChnT>Tùy chọn đặt chỗ linh hoạt</TyChnT>
            <TChuynBay>
              Kế hoạch thay đổi bất ngờ? Đừng lo!Đổi lịch hoặc Hoàn tiền dễ
              dàng.
            </TChuynBay>
          </Texts2>
          <ImgIcon1 alt="" src={require("../../assets/img/img2@2x.png")} />
        </Blog1>
        <img
          src={require("../../assets/img/center__flowe.png")}
          style={{
            position: "absolute",
            maxHeight: "50%",
            left: "44%",
            top: "10%",
          }}
        />
      </Holder>
    </TopRoot>
  );
}

AOS.init();

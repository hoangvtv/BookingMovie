import styled from "styled-components";
import React from "react";
import { LeftSquareFilled, RightSquareFilled } from "@ant-design/icons";

const UIC = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 486px;
`;
const ArrowsIcon = styled.img`
  position: relative;
  width: 100px;
  height: 50px;
`;
const Title = styled.div`
  height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
`;
const XemThm = styled.div`
  position: relative;
  font-weight: 500;
`;
const SignUp = styled.div`
  border-radius: 16px;
  border: 1px solid var(--main);
  box-sizing: border-box;
  width: 104px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: var(--page-label1-size);
`;
const Nng = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const Unsplash7uxn7nudorcIcon = styled.img`
  position: relative;
  border-radius: var(--br-21xl);
  width: 293px;
  height: 239px;
  object-fit: cover;
`;
const Label = styled.div`
  border-radius: var(--br-21xl);
  background-color: var(--green);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-mini);
  color: var(--color-darkcyan);
`;
const Ngy1M = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 115px;
  flex-shrink: 0;
`;
const Div = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 75px;
  flex-shrink: 0;
`;
const Info = styled.div`
  width: 287px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 4px;
  font-size: var(--page-label1-size);
  color: var(--color-gray);
`;
const Span = styled.span``;
const Ngi1 = styled.span`
  color: var(--color-gray);
`;
const Ngi = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 139px;
  flex-shrink: 0;
`;
const TNgay = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 72.45px;
  height: 21px;
  flex-shrink: 0;
`;
const Btn = styled.div`
  border-radius: var(--br-21xl);
  background-color: var(--main);
  width: 104.45px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
  box-sizing: border-box;
  font-size: var(--page-label1-size);
  color: var(--color-white);
`;
const Price = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const Card = styled.div`
  border-radius: var(--br-101xl) 0px var(--br-61xl) 0px;
  background-color: var(--color-white);
  box-shadow: var(--drop-shadow);
  width: 375px;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
`;
const NinhBnh = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
`;
const Label1 = styled.div`
  border-radius: var(--br-21xl);
  background-color: var(--pink);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-mini);
  color: var(--color-hotpink);
`;
const Ngy1M1 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 99px;
  flex-shrink: 0;
`;
const Div1 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 77px;
  flex-shrink: 0;
`;
const Price2 = styled.div`
  align-self: stretch;
  width: 293px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const Price1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
const Card1 = styled.div`
  border-radius: var(--br-101xl) 0px var(--br-61xl) 0px;
  background-color: var(--color-white);
  box-shadow: var(--drop-shadow);
  width: 355px;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
`;
const Ngy1M2 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 98px;
  flex-shrink: 0;
`;
const Div2 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 78px;
  flex-shrink: 0;
`;
const Info2 = styled.div`
  width: 286px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 4px;
  font-size: var(--page-label1-size);
  color: var(--color-gray);
`;
const Card2 = styled.div`
  border-radius: var(--br-101xl) 0px var(--br-61xl) 0px;
  background-color: var(--color-white);
  box-shadow: var(--drop-shadow);
  width: 356px;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
`;
const Card3 = styled.div`
  border-radius: var(--br-101xl) 0px var(--br-61xl) 0px;
  background-color: var(--color-white);
  box-shadow: var(--drop-shadow);
  width: 374px;
  height: 483px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
`;
const Info4 = styled.div`
  width: 287px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 4px;
  font-size: var(--page-label1-size);
  color: var(--color-gray);
`;
const Card4 = styled.div`
  border-radius: var(--br-101xl) 0px var(--br-61xl) 0px;
  background-color: var(--color-white);
  box-shadow: var(--drop-shadow);
  width: 352px;
  height: 483px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
`;
const Ngy1M5 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 101px;
  flex-shrink: 0;
`;
const Info5 = styled.div`
  width: 286px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 4px;
  font-size: var(--page-label1-size);
  color: var(--color-gray);
`;
const Card5 = styled.div`
  border-radius: var(--br-101xl) 0px var(--br-61xl) 0px;
  background-color: var(--color-white);
  box-shadow: var(--drop-shadow);
  width: 353px;
  height: 483px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
`;
const Cards = styled.div`
  width: 1435px;
  height: 1087px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 57px;
  font-size: var(--page-body1-size);
  color: var(--siah);
`;
const UIRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 52px 0px 0px;
  box-sizing: border-box;
  gap: 38px;
  text-align: left;
  font-size: 56px;
  color: var(--main);
  font-family: var(--page-label1);
`;

export default function Offers() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <UIRoot>
      <Title>
        <UIC>{`Ưu đãi Đặc biệt `}</UIC>
        <div style={{ display: "flex" }}>
          {" "}
          <LeftSquareFilled />
          <RightSquareFilled />
          {/* <ArrowsIcon src={require("../../assets/img/arrow-left.png")} />
          <ArrowsIcon src={require("../../assets/img/arrow-right.png")} /> */}
        </div>
        <div style={{ display: "flex" }}></div>
      </Title>
      <SignUp className="btn__hover">
        <XemThm>Xem thêm</XemThm>
      </SignUp>
      <Cards>
        <Card>
          <Nng>Đà Nẵng</Nng>
          <Unsplash7uxn7nudorcIcon
            className="img__hover"
            alt=""
            src={require("../../assets/img/DNang.png")}
          />
          <Info>
            <Label>
              <XemThm>Nên thử</XemThm>
            </Label>
            <Ngy1M>2 Ngày, 1 Đêm</Ngy1M>
            <Div>20.5.2023</Div>
          </Info>
          <Price>
            <Ngi>
              <Span>850.000đ</Span>
              <Ngi1>/người</Ngi1>
            </Ngi>
            <Btn className="btn__hover">
              <TNgay>Đặt ngay</TNgay>
            </Btn>
          </Price>
        </Card>
        <Card1>
          <NinhBnh>Ninh Bình</NinhBnh>
          <Unsplash7uxn7nudorcIcon
            className="img__hover"
            alt=""
            src={require("../../assets/img/NBinh.png")}
          />
          <Info>
            <Label1>
              <XemThm>Bán chạy</XemThm>
            </Label1>
            <Ngy1M1>2 Ngày, 1 Đêm</Ngy1M1>
            <Div1>20.5.2023</Div1>
          </Info>
          <Price1>
            <Price2>
              <Ngi>
                <Span>850.000đ</Span>
                <Ngi1>/người</Ngi1>
              </Ngi>
              <Btn className="btn__hover">
                <TNgay>Đặt ngay</TNgay>
              </Btn>
            </Price2>
          </Price1>
        </Card1>
        <Card2>
          <NinhBnh>Phú Quốc</NinhBnh>
          <Unsplash7uxn7nudorcIcon
            className="img__hover"
            alt=""
            src={require("../../assets/img/PQuoc.png")}
          />
          <Info2>
            <Label>
              <XemThm>Nên thử</XemThm>
            </Label>
            <Ngy1M2>2 Ngày, 1 Đêm</Ngy1M2>
            <Div2>20.5.2023</Div2>
          </Info2>
          <Price1>
            <Price2>
              <Ngi>
                <Span>850.000đ</Span>
                <Ngi1>/người</Ngi1>
              </Ngi>
              <Btn className="btn__hover">
                <TNgay>Đặt ngay</TNgay>
              </Btn>
            </Price2>
          </Price1>
        </Card2>
        <Card3>
          <NinhBnh>Hà Giang</NinhBnh>
          <Unsplash7uxn7nudorcIcon
            className="img__hover"
            alt=""
            src={require("../../assets/img/HGiang.png")}
          />
          <Info>
            <Label1>
              <XemThm>Bán chạy</XemThm>
            </Label1>
            <Ngy1M1>2 Ngày, 1 Đêm</Ngy1M1>
            <Div1>20.5.2023</Div1>
          </Info>
          <Price1>
            <Price2>
              <Ngi>
                <Span>850.000đ</Span>
                <Ngi1>/người</Ngi1>
              </Ngi>
              <Btn className="btn__hover">
                <TNgay>Đặt ngay</TNgay>
              </Btn>
            </Price2>
          </Price1>
        </Card3>
        <Card4>
          <NinhBnh>Hội An</NinhBnh>
          <Unsplash7uxn7nudorcIcon
            className="img__hover"
            alt=""
            src={require("../../assets/img/HAn.png")}
          />
          <Info4>
            <Label>
              <XemThm>Nên thử</XemThm>
            </Label>
            <Ngy1M2>2 Ngày, 1 Đêm</Ngy1M2>
            <Div2>20.5.2023</Div2>
          </Info4>
          <Price1>
            <Price2>
              <Ngi>
                <Span>850.000đ</Span>
                <Ngi1>/người</Ngi1>
              </Ngi>
              <Btn className="btn__hover">
                <TNgay>Đặt ngay</TNgay>
              </Btn>
            </Price2>
          </Price1>
        </Card4>
        <Card5>
          <NinhBnh>Lý Sơn</NinhBnh>
          <Unsplash7uxn7nudorcIcon
            className="img__hover"
            alt=""
            src={require("../../assets/img/LSon.png")}
          />
          <Info5>
            <Label1>
              <XemThm>Bán chạy</XemThm>
            </Label1>
            <Ngy1M5>2 Ngày, 1 Đêm</Ngy1M5>
            <Div>20.5.2023</Div>
          </Info5>
          <Price1>
            <Price2>
              <Ngi>
                <Span>850.000đ</Span>
                <Ngi1>/người</Ngi1>
              </Ngi>
              <Btn className="btn__hover">
                <TNgay>Đặt ngay</TNgay>
              </Btn>
            </Price2>
          </Price1>
        </Card5>
      </Cards>
    </UIRoot>
  );
}

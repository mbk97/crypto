import { GetStartedBtn } from "Components/Global/Button";
import {
  SmallHeader,
  SmallText,
  SubHeader,
  Subtitle,
} from "Components/Global/Title";
import {
  FlexOne,
  FlexTwo,
  GeStartedContentOne,
  GeStartedContentTwo,
  GetStartedItem,
  GetStartedWrapper,
} from "./style";
import { data } from "./getStartedData";
import { CardImg } from "Components/Global/Card";
import { Link } from "react-scroll";

const GetStarted = () => {
  return (
    <GetStartedWrapper id="get_started">
      <GeStartedContentOne>
        <SubHeader>How To Get Started</SubHeader>
        <Subtitle>
          Simple and easy way to start your investment <br /> in cryptocurrency
        </Subtitle>
        <GetStartedBtn>Get Started</GetStartedBtn>
      </GeStartedContentOne>
      <GeStartedContentTwo>
        {data.map((item) => {
          const { id, name, text, img } = item;
          return (
            <GetStartedItem key={id}>
              <FlexOne>
                <CardImg src={img} />
              </FlexOne>
              <FlexTwo>
                <SmallHeader>{name}</SmallHeader>
                <SmallText>{text}</SmallText>
              </FlexTwo>
            </GetStartedItem>
          );
        })}
      </GeStartedContentTwo>
    </GetStartedWrapper>
  );
};

export default GetStarted;

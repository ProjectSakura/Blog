import { lazy, Suspense, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { DiscussionEmbed } from "disqus-react";
import {
  AuthorHead,
  AuthorSec,
  AuthorSubHead,
  Body,
  BodyInner,
  Description,
  Heading,
  ListItem,
  UnorderedList,
  Anchor,
  Date,
  LoaderDiv,
} from "./styles";

// import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function AugustUpdate2020() {
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/august-2020-update";
  const identifier = "August Update 2020";
  const title = "Project Sakura | August Update 2020";
  useEffect(() => {
    document.title = "Project Sakura | August Update 2020";
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            07 AUGUST 2020
          </Date>
          <Heading>
            NOW IS THE TIME TO UPDATE! We have updated to the August Security Patch.
          </Heading>

          <Description>
            Its monsoon here in India.., I love to sleep and laze around but for this I am
            full of energy. So welcome to the dark mode supported blog site of Project
            Sakura :3
            <br />
            <br />
            As you would have already guessed from the title what this post is all about.
            So, I won't take any longer and tell you about whats's new in this release and
            what new devices have joined us.
            <br />
            <br />
            So first up whats new!
          </Description>
          <Suspense fallback={renderLoader()}>
            <AdComponent />
          </Suspense>
          <UnorderedList>
            <ListItem>Probably the biggest change you will see is the addition of Oneplus Launcher.</ListItem>
            <br />
            <ListItem>Second, will be for FOD supported devices you will see FOD animations
              and custom icons. The update for this is already rolled out to the devices we
              support.
            </ListItem>
            <br />
            <ListItem>Third, We have the support for smart pixels and devices with OLED and
              AMOLED panels can save battery by using it. Also, don't get your hopes up for
              LCDs it's just a shiny gimmick for them.
            </ListItem>
            <br />
            <ListItem>Fourth, Well we added OnePlus launcher so we thought why not add OP
              switch styles too and we did it.
            </ListItem>
            <br />
            <ListItem>Moar font styles and a new volte icon</ListItem>
            <br />
            <ListItem>Lastly is secure lockscreen and capabilities to hide power menu and
              statusbar on lockscreen.
            </ListItem>
          </UnorderedList>
          <Description>
            What's more?
            <br />
            <br />
            Well, we just moved to twitter last week and you can follow us at
            <Anchor href="https://twitter.com/ProjectSakura_">
              @ProjectSakura_
            </Anchor>Make sure you do coz its fun asking ETAs on Twitter.
            <br />
            <br />
            In the end, I would just tell you which new devices are now powered by Sakura,
          </Description>
          <UnorderedList>
            <ListItem>Merlin, Maintained by Charlie</ListItem>
            <br />
            <ListItem>Meizu 16X, Maintained by Alex</ListItem>
            <br />
            <ListItem>And Motorola G7 (River), Maintained by Vitor.</ListItem>
          </UnorderedList>
          <Suspense fallback={renderLoader()}>
            <AdComponent />
          </Suspense>
          <DiscussionEmbed
            shortname="direwolf-tech"
            config={{ url, identifier, title }}
          />
        </BodyInner>
        <AuthorSec>
          <AuthorHead>About Author</AuthorHead>
          <AuthorSubHead>LordShenron</AuthorSubHead>
          <Description>
            LordShenron is the lead developer of the project. He is also an IT Engg Student
            and he loves anime and Japanese pop music. When he is not online he is mostly
            sleeping or busy with some college work.
          </Description>
        </AuthorSec>
      </Container>
      <Footer />
    </Body>
  );
}
export default AugustUpdate2020;

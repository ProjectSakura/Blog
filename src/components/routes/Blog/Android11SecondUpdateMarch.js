import { Container } from "semantic-ui-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, ListItem, UnorderedList, Anchor, Date, Code,
} from "./styles";
import googleAd from "../../AdComponent/AdComponent";
import DisqusComment from "../../DisqusComment/DisqusComments";

function Android11SecondUpdateMarch() {
  return (
    <Body>
      <Container>
        <BodyInner>
          <Date>19 March 2021</Date>
          <Heading>Newer Faceunlock, FOD icons, animations and effects.</Heading>
          <Description>
            We are back with another update and moar bugs and that will cause moar wailings from you poor users. Well, just like always started with a really poor joke. This update is a
            very small follow up with few important features. I will not be wasting much time and get straight to the major changes that were made for this release.
          </Description>
          <Description>See an ad first :P</Description>
          <googleAd />
          <Description>Okay good, so what we have new in this release..</Description>
          <UnorderedList>
            <ListItem>Bubbles are fixed, we were constantly spammed for this one. </ListItem>
            <ListItem>AOKP system animations are no more available in ROM. </ListItem>
            <ListItem>For your ugly face that even satan can't recognize, Newer Faceunlock. </ListItem>
            <ListItem>FOD icon picker and animations. </ListItem>
            <ListItem>FOD animation effects. </ListItem>
          </UnorderedList>
          <Description>
            Now getting to the main thing, If you are a developer with an FOD supported device and want to add support for FOD icon picker and animations you will need to do the
            following:-
          </Description>
          <Code><code>export EXTRA_FOD_ANIMATIONS=true</code></Code>
          <Description>
            The above flag will build the standalone FOD animations resources needed for showing effects. In addition to that flag you will also need to have this config in your device
            tree,
            <Anchor href="https://github.com/Laker87/device_xiaomi_davinci/blob/0c93d9dd1f51e3cd2c12725217b15175499fc0f5/overlay-lineage/frameworks/base/core/res/res/values/config.xml#L24">
              Link to commit
            </Anchor>
            . If you don't add it then FOD icon picker will be missing from Sakura Settings.
          </Description>
          <Description>
            So, That was everything for this small release and see ya all in April. Also, If you like how hard I work to bring you awesome and absolutely free software, you can go ahead
            and gift me some coffee,<Anchor href="https://ko-fi.com/lordshen"> Buy me a coffee</Anchor>.
          </Description>
          <Description>
            Well, this was it for this update and if you find any bugs do report it to us with logcat coz Logcat or gtfo. As always do follow us on twitter{" "}
            <Anchor href="https://twitter.com/ProjectSakura_">@ProjectSakura_</Anchor> coz we keep posting fun stuff on it ;)
          </Description>
          <DisqusComment />
        </BodyInner>

        <AuthorSec>
          <AuthorHead>About Author</AuthorHead>
          <AuthorSubHead>LordShenron</AuthorSubHead>
          <Description>
            LordShenron is the lead developer of the project. He is also an IT Engg Student and he loves anime and Japanese pop music. When he is not online he is mostly sleeping or busy
            with some college work.
          </Description>
        </AuthorSec>
      </Container>
    </Body>
  );
}
export default Android11SecondUpdateMarch;

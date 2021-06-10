import React from "react";
import FaqsContainer from "../containers/faqs";
import { FoooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import HeaderContainer from "../containers/header";
import { OptForm, Feature } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere, Cancel any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FoooterContainer />
    </>
  );
};

export default Home;

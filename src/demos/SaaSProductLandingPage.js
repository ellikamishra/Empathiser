import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Transparency",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Ease of Use",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
     
      
      {/* <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Hear from donors, <HighlightedText>they love us!</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Rohit Sharma",
            customerTitle: "IT Professional, Bangalore"
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "We love the idea! Happy to provide you break-up of every penny you donate, it helps us in the cause that we are working for",
            customerName: "Anonymous",
            customerTitle: "NGO, Pune"
          }
        ]}
      /> */}
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "How does Empathiser ensure transparency for donations?",
            answer:
              "Empathiser uses blockchains to achieve complete transparency in donations and give realtime updates to users of theri funds. They can also track donations."
          },
          {
            question: "What all can I donate? Is it restricted to just monetary donations?",
            answer:
              "A donation made can be of any kind- in the form of goods like clothes, books, food supplies or direct fund donations."
          },
          {
            question: "What type of causes can I contibute to ?",
            answer:
              "The listed causes at the moment are- Girl child education and Food distribution/ Hunger struck areas."
          },
          {
            question: "How do geospeicific donations work",
            answer:
              "Team Empathiser find you needy/causes around you and gives you latest updates on the progress made if you wish to be part by donating/volunteering."
          },
          {
            question: "Are there any operational charges?",
            answer:
              "Yes a minimal 5 percent of the donations go in maintaining the platform"
          },
          
          
        ]}
      />
      
      <Footer />
    </AnimationRevealPage>
  );
}

import Image from "next/image";
import React from "react";
import storyStyles from "../../styles/aboutStyles/story.module.css";
import { Spacer } from "@nextui-org/react";
import man1 from "../../public/images/man1.png";
const Story = () => {
  return (
    <div className={`container mx-auto px-5 px-sm-0 ${storyStyles.parent}`}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 ">
          <Image
            src={"/images/bird1.png"}
            layout="responsive"
            width={562}
            height={502}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="lg:ml-8 lg:mt-8">
            <p className={` ${storyStyles.title}`}>The Hubara Story</p>
            <Spacer y={3} />
            <p className={storyStyles.paragraphText}>
              The Hubara brand story is deeply rooted in the inspiring and
              caring gesture of His Highness Sheikh Mohammed bin Rashid Al
              Maktoum towards the cultural heritage of the United Arab Emirates.
              Creating the Hubara brand is a heartfelt tribute to this gesture
              and a reflection of the enduring vision of the UAE leaders, who
              have always respected and followed the path laid by our ancestors.
            </p>
            <Spacer y={4} />
            <p className={storyStyles.paragraphText}>
              The brand's mission is to raise awareness about the rare and
              distinctive Hubara bird, its remarkable characteristics, its
              habitat, and the importance of honoring our heritage, culture, and
              natural environment for future generations. The hubara bird is an
              emblem of our heritage, and we endeavor to honor our culture and
              safeguard its wonders for future generations. Dubai’s breathtaking
              transformation shows how modernity can be embraced while upholding
              cultural authenticitya notion at the heart of our brand identity
            </p>
          </div>
        </div>
      </div>
      <Spacer y={3} />
      <p className={storyStyles.paragraphText}>
        The brand is about stepping back, slowing down, and appreciating the
        natural landscape around us through an inward, quiet expression and
        appreciation for what matters.
      </p>
      <Spacer y={3} />
      <p className={storyStyles.paragraphText}>
        Versatility and adaptation - as evident in the hubara bird as in the
        stillness of the desert landscape - are woven through our collections.
        We provide warmth and comfort through the winter and remain breathable
        and versatile through the heat of summer. With a dedicated commitment to
        quality and craftsmanship, each garment encapsulates the values that
        drive our ambition.
      </p>
      <Spacer y={3} />
      <div className="col-span-12">
        <Image
          src={"/images/about-bg2.png"}
          layout="responsive"
          height={144}
          width={100}
        />
      </div>

      <Spacer y={10} />
      <p className={storyStyles.values}>The Hubara Values</p>
      <Spacer y={10} />
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div
              className={`col-span-12 md:col-span-6 flex justify-center items-center ${storyStyles.valuesContentParent} `}
            >
              Effortless <br />
              Style
            </div>
          </div>
          <div
            className={`col-span-12 md:col-span-6 flex justify-center items-center ${storyStyles.valuesContentParentFeatherImage} `}
          >
            Mindful <br />
            Design
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div
              className={`col-span-12 md:col-span-6 flex justify-center items-center ${storyStyles.valuesContentParentDunsImage} `}
            >
              Cultuarlly <br />
              Authentic
            </div>
          </div>
          <div
            className={`col-span-12 md:col-span-6 flex justify-center items-center ${storyStyles.valuesContentParentMan2Image} `}
          >
            Quiet <br />
            Expression
          </div>
        </div>
        <Spacer y={20} />
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div
              className={`col-span-12 md:col-span-6 flex justify-center items-center ${storyStyles.storyBgDiv} `}
            ></div>
          </div>
          <div
            className={`col-span-12 md:col-span-6 flex justify-center items-center`}
          >
            <div className="md:p-10 lg:p-10 xl:p-10 2xl:pt-20 2xl:px-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-20">
              <p className={` ${storyStyles.sectionTitles}`}>The Brand</p>
              <Spacer y={3} />
              <p className={storyStyles.paragraphText}>
                Understated casual style for those who appreciate quality,
                comfort, and discretion. Hubara Design reflects a relaxed,
                casual aesthetic that flies under the radar, with the finest
                natural materials and subtle wearable designs, combining clean,
                minimalist lines with futureproof fabric innovation. The Hubara’
                believes in the power of quiet expression an effortless and
                understated style where quality, craftsmanship, the provenance
                of fabrics, and sheer comfort are at its heart.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div
            className={`col-span-12 md:col-span-6 flex justify-center items-center`}
          >
            <div className="md:p-10 lg:p-10 xl:p-10 2xl:pt-20 2xl:px-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-20">
              <p className={` ${storyStyles.sectionTitles}`}>
                The Hubara's Vision
              </p>
              <Spacer y={3} />
              <p className={storyStyles.paragraphText }>
                Imbued with the majesty of the Hubara bird and its awe-inspiring
                desert home, Hubara Design presents a casual collection
                embodying timeless style, comfort, and our commitment to mindful
                conservation. Effortless style and wearability. Confidence and
                distinction via quiet expression. Mindful design and innovation.
                The Signature collection by Hubara Design features meticulously
                curated essentials made in Dubai, envisioned for contemporary
                lifestyles that value craftsmanship and the essence of freedom.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div
              className={`col-span-12 md:col-span-6 flex justify-center items-center ${storyStyles.storyBgMan4Div} `}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div
              className={`col-span-12 md:col-span-6 flex justify-center items-center ${storyStyles.storyBgMen4Div} `}
            ></div>
          </div>
          <div
            className={`col-span-12 md:col-span-6 flex justify-center items-center`}
          >
            <div className="md:p-10 lg:p-10 xl:p-10 2xl:pt-20 2xl:px-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-20">
              <p className={` ${storyStyles.sectionTitles}`}>The Collection</p>
              <Spacer y={3} />
              <p className={storyStyles.paragraphText}>
                A casual aesthetic combining clean, minimalist lines with
                innovative use of fabrics for confidence and timeless style,
                Hubara Design celebrates the quintessence of quiet luxury. It’s
                as much an attitude as a concept, resulting in quality clothing
                matching discretion with artisanship, comfort, and an
                uncompromising approach to quality. Reveling in saturated earthy
                hues and tonesa love letter to the ever-inspiring desert
                landscapeour subtle color palette reflects our respect for
                nature and the freedom found beneath endless skies
              </p>
            </div>
          </div>
        </div>
        <Spacer y={10} />
      </div>
    </div>
  );
};

export default Story;

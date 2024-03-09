import React from "react";
import indexStyles from "../../styles/whatsnew/index.module.css";
import { Spacer } from "@nextui-org/react";
import storyStyles from "../../styles/aboutStyles/story.module.css";
import Image from "next/image";
import man1 from "../../public/images/whatsNewImages/whatsnew-man1.png";
import man2 from "../../public/images/whatsNewImages/whatsnew-man2.png";
import man3 from "../../public/images/whatsNewImages/whatsnew-man3.png";
import man4 from "../../public/images/whatsNewImages/whatsnew-man4.png";
import man5 from "../../public/images/whatsNewImages/whatsnew-man5.png";
import man6 from "../../public/images/whatsNewImages/whatsnew-man6.png";
import man7 from "../../public/images/whatsNewImages/man7.png";
import man8 from "../../public/images/whatsNewImages/whatsnew-man8.png";
import man9 from "../../public/images/whatsNewImages/whatsnew-man9.png";

const Index = () => {
  return (
    <>
      <Spacer y={3} />
      <div
        className={`flex justify-center items-center h-screen ${indexStyles.bannerBg}`}
      >
        Our new Arrivals
      </div>
      <Spacer y={20} />
      <div class={`container mx-auto px-4 ${storyStyles.parent}`}>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white">
            <div className={storyStyles.title}>EFFORTLESS STYLE</div>
            <Spacer y={5} />
            <div className={storyStyles.paragraphText}>
              Step into a world of understated casual luxury that flies under
              the radar and pays homage to the rich landscape of the Arabian
              desert.
            </div>
          </div>
          <div class="bg-white"></div>
          <div class="bg-white">
            <div className={storyStyles.title}>MINDFUL DESIGN</div>
            <Spacer y={5} />
            <div className={storyStyles.paragraphText}>
              Our classic French Terry collection is a symphony of comfort and
              quality, where each thread weaves a tale of relaxed quiet
              expression.
            </div>
          </div>
        </div>
        <Spacer y={20} />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white">
            <Image
              src={man1.src}
              height={700}
              width={700}
              layout="responsive"
            />
          </div>
          <div class="bg-white">
            <Image
              src={man2.src}
              height={700}
              width={700}
              layout="responsive"
            />
          </div>
        </div>
        <Spacer y={20} />
        <div class="flex justify-center items-center text-center">
          <div className={indexStyles.collection}>
            OUR NEW COLLECTION
            <br />
            HAS SPREADS ITS WINGS{" "}
          </div>
        </div>
        <Spacer y={20} />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div class="bg-white">
            <Image
              src={man3.src}
              height={700}
              width={700}
              layout="responsive"
            />
          </div>
          <div class="bg-white">
            <Image
              src={man4.src}
              height={700}
              width={700}
              layout="responsive"
            />
          </div>
        </div>

        <div
          class={`flex justify-center items-center text-center ${indexStyles.paragraph}`}
        >
          Our Hubara Essential Sweat Collection has been made in Dubai from
          French Terry
          <br />
          cotton and has been garment-dyed for a soft handle.
          <br />
          Our French Terry material is 100% cotton, and has a smooth exterior,
          and a soft loop interior. The collection is designed for a relaxed
          casual look for lounging at home, or out in the desert during the
          cooler months.
        </div>
        <Spacer y={3} />
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="bg-white">
            <Image
              src={man5.src}
              height={700}
              width={700}
              layout="responsive"
            />
          </div>
          <div class="bg-white">
            <Image
              src={man6.src}
              height={700}
              width={700}
              layout="responsive"
            />
          </div>
        </div>
        <div
          class={`flex justify-center items-center text-center ${indexStyles.paragraph}`}
        >
          The Essential French Terry Collection comes in hoodies, cargopants and
          shorts,
          <br />
          in four colouways; Buttermilk, Camel, Thawn and Slate Grey. The
          material is
          <br />
          midweight making it perfect for layering when the temperatures drop in
          <br />
          the evening, and comfortable to wear even in the summer.
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="bg-red">
            <Image
              src={man7.src}
              height={340}
              width={700}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="bg-white">
              <Image
                src={man8.src}
                height={320}
                width={700}
                style={{ objectFit: "cover" }}
                layout="responsive"
              />
              <Spacer y={3} />
            </div>
            <div class="bg-white">
              <Image
                src={man9.src}
                height={340}
                width={700}
                style={{ objectFit: "cover" }}
                layout="responsive"
              />
              <Spacer y={3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

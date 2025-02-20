import React from "react";
import { TypeAnimation } from "react-type-animation";
import Facebook from "../../img/facebook.svg";
import Gmail from "../../img/gmail.svg";
import Tiktok from "../../img/tiktok.svg";
import Viboon from "../../img/hero-image.png";

const About = () => {
  return (
    <section className="font-Itim">
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-24 bg-gray-300 p-24 rounded-lg">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-10 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              {/* Hello, I&apos;m{" "} */}สวัสดีครับ
            </span>
            <br />

            <div className="mt-5">
              <TypeAnimation
                sequence={[
                  " วิบูลย์ ปานแก้ว",
                  1000,
                  "ช่างเทคนิค IT",
                  1000,
                  "นักดนตรีกลางคืน",
                  1000,
                  "โปรแกรมเมอร์",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-xl sm:text-sm md:text-xl lg:text-5xl" // ใช้คลาส Tailwind CSS ที่ปรับขนาดตัวอักษรตามขนาดหน้าจอ
                repeat={Infinity}
                style={{
                  color: "#666665",
                }}
              />
            </div>
          </h1>
          <p className="text-[#88949c] text-sm sm:text-base md:text-lg lg:text-xl mb-5">
            รหัสนิสิต 6502040074 <br />
            คณะ บริหารธุระกิจและรัฐประสานศาสตร์ สาขา คอมพิวเตอร์ธุระกิจ <br />
            มหาวิทยาลัยเวสเทิร์น
          </p>

          <div className="socials flex flex-col lg:flex-row gap-4 text-center ">
            <p className="text-[#88949c] text-sm lg:text-lg mt-3">
              ช่องทางติดต่อ 📞​095-165-8365
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://www.facebook.com/li.dxngpu/about">
                <img
                  src={Facebook}
                  alt="facebook Icon"
                  className="w-8 lg:w-11"
                />
              </a>
              <a href="github.com">
                <img src={Tiktok} alt="tiktok Icon" className="w-8 lg:w-11" />
              </a>
              <a href="bakpu132@gmail.com">
                <img src={Gmail} alt="gmail Icon" className="w-8  lg:w-11" />
              </a>
            </div>
          </div>
          <p className="text-red-600 text-xs lg:text-sm mt-6">
            ⚠️​เว็ปไซด์นี้ เป็นเว็ปไซด์ที่ใช้ในการเรียนการสอนเท่านั้น 🚫​
            ห้ามนำไปใช้เชิงพาณิชย์
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-12 lg:mt-2">
          <div className="rounded-full bg-gray-500 w-[270px] h-[270px] lg:w-[380px] lg:h-[380px] relative">
            <img
              style={{ maxWidth: "200px" }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={Viboon}
              alt="Hero Image"
              width={600} // กำหนดความกว้าง
              height={400} // กำหนดความสูงให้ตรงกับอัตราส่วนเดิม
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";
import style from "@/app/css/components/Services&Terms/Terms.module.scss";

import { useEffect, useRef, useContext } from "react";
import { ElementContext } from "@/app/store/getTermsYPosition-context";

const Terms: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { getElement } = useContext(ElementContext);
  useEffect(() => {
    if (componentRef.current) {
      getElement(componentRef.current);
    }
  }, []);

  return (
    <div className={style.container} ref={componentRef}>
      <div>
        * New subscribers only. HK$63/month after trial. Offer available for a
        limited time to new subscribers who connect an eligible device to an
        Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3
        months after eligible device pairing. No audio product purchase
        necessary for current owners of eligible devices. Plan automatically
        renews until cancelled. Restrictions and other terms apply.
      </div>
      <ol>
        <li>
          Requires an iCloud account and a compatible Apple device running the
          latest operating system software.
        </li>
        <li>
          Compatible hardware and software required. Works with compatible
          content in supported apps. Not all content available in Dolby Atmos.
          iPhone with TrueDepth camera required to create a personal profile for
          Spatial Audio, which will sync across Apple devices running the latest
          operating system software, including iOS, iPadOS, macOS, and tvOS.
        </li>
        <li>
          Requires a compatible Apple device running the latest operating system
          software.
        </li>
      </ol>
      <div>
        ◊ Works with AirPods Pro (2nd generation) with the latest firmware when
        paired with a compatible Apple device running the latest operating
        system software.
      </div>
      <div>
        ◊◊ Compatible hardware and software required. Works with compatible
        content in supported apps. Not all content available in Dolby Atmos.
        iPhone with TrueDepth camera required to create a personal profile for
        Spatial Audio, which will sync across Apple devices running the latest
        operating system software, including iOS, iPadOS, macOS, and tvOS.
      </div>
      <div>
        ◊◊◊ AirPods (3rd generation) are sweat and water resistant for non-water
        sports and exercise, and they are IPX4 rated. Sweat and water resistance
        are not permanent conditions.
      </div>
      <div>
        Δ AirPods Pro (2nd generation) are dust resistant and sweat and water
        resistant for non-water sports and exercise, and they are IP54 rated.
        Dust, sweat, and water resistance are not permanent conditions.
      </div>
      <div>
        ΔΔ MagSafe charging requires a compatible MagSafe charger. Wireless
        charging requires a Qi‑certified wireless charger. AirPods (3rd
        generation) charging case also works with the Apple Watch charger or
        Lightning connector. AirPods Pro (2nd generation) charging case also
        works with the Apple Watch charger or USB‑C connector.
      </div>
      <div>
        ΔΔΔ Battery life depends on device settings, environment, usage, and
        many other factors.
      </div>
    </div>
  );
};

export default Terms;

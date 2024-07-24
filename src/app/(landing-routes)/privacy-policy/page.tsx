"use client";

import { useEffect } from "react";
import { Breadcrumb } from "~/components/common/breadcrumb";

import privacyPolicyData, {
  getTableOfContents,
} from "~/components/layouts/Legal/PrivacyPolicy/constants/privacyPolicyData";
import PrivacyPolicyContent from "~/components/layouts/Legal/PrivacyPolicy/PrivacyPolicyContent";
import TableOfContent from "~/components/layouts/Legal/TableOfContent";
import SubPageHero from "~/components/layouts/Legal/Terms&Conditions/SubPageHero";

export default function PrivacyPolicy() {
  const tableOfContents = getTableOfContents(privacyPolicyData);

  useEffect(() => {
    const scrollClasses = [
      "scroll-smooth",
      "scroll-pt-24",
      "md:scroll-pt-[108px]",
    ];

    const htmlElement = document.documentElement;
    htmlElement.classList.add(...scrollClasses);

    return () => {
      htmlElement.classList.remove(...scrollClasses);
    };
  }, []);

  return (
    <main className="">
      <div data-testid="subpage-hero">
      <SubPageHero
        heading="Privacy Policy"
        description="Achieve your dreams with us today"
      />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
        <div data-testid="breadcrumb">
        <Breadcrumb variant="primary" />
        </div>

        <section className="my-[70px] flex max-w-full flex-col-reverse items-start justify-between pb-10 lg:flex-row">
          <div data-testid="privacy-policy-content">
          <PrivacyPolicyContent
            content={privacyPolicyData}
            className="text-neutral-dark-1 lg:w-[750px]"
           
          />
          </div>

          <div data-testid="table-of-content">
          <TableOfContent
            listOfContent={tableOfContents}
            className="p-[10px] text-neutral-dark-1 max-lg:mb-14 lg:sticky lg:top-20 lg:w-[350px]"
           
          />
</div>
        </section>
      </div>
    </main>
  );
}
